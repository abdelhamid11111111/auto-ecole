"use client";

import { useId, useState, type SyntheticEvent } from "react";
import {
  CheckCircleIcon,
  CircleNotchIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/Button";
import { formations } from "@/data/formations";
import { site } from "@/data/site";

type Field = "nom" | "email" | "telephone" | "formation";
type Status = "idle" | "sending" | "sent" | "error";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Accepts 0X XX XX XX XX and +33 X XX XX XX XX, with or without separators.
const PHONE = /^(?:\+33\s?|0)[1-9](?:[\s.-]?\d{2}){4}$/;

const fieldClass =
  "w-full rounded-field border bg-surface px-3.5 py-2.5 text-[0.9375rem] " +
  "text-ink placeholder:text-subtle transition-colors " +
  "focus:border-accent-strong focus:outline-none";

/**
 * Contact form with the full state cycle: inline validation, a sending state,
 * a success panel and a recoverable failure message.
 *
 * TODO: `submit` currently resolves locally. Point it at the agency's real
 * endpoint (or a Server Action) before launch; the error branch below is what
 * a rejected request will render.
 */
export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  function validate(data: FormData) {
    const next: Partial<Record<Field, string>> = {};
    const nom = String(data.get("nom") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telephone = String(data.get("telephone") ?? "").trim();
    const formation = String(data.get("formation") ?? "");

    if (nom.length < 2) next.nom = "Indiquez votre nom et votre prénom.";
    if (!EMAIL.test(email)) next.email = "Cette adresse e-mail semble incomplète.";
    if (telephone && !PHONE.test(telephone))
      next.telephone = "Format attendu : 06 12 34 56 78.";
    if (!formation) next.formation = "Choisissez la formation qui vous intéresse.";

    return next;
  }

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const found = validate(new FormData(form));
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-card border border-line bg-surface p-6 sm:p-8 shadow-card">
        <CheckCircleIcon
          aria-hidden
          size={40}
          weight="fill"
          className="text-accent-strong"
        />
        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          Demande envoyée
        </h3>
        <p className="mt-2 max-w-[46ch] text-[0.9375rem] leading-relaxed text-muted">
          Nous vous rappelons sous un jour ouvré pour fixer votre premier
          rendez-vous. Vérifiez vos indésirables, notre confirmation y atterrit
          parfois.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Envoyer une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-card border border-line bg-surface p-6 sm:p-8 shadow-card"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor={`${id}-nom`} className="text-sm font-medium">
            Nom et prénom
          </label>
          <input
            id={`${id}-nom`}
            name="nom"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.nom)}
            aria-describedby={errors.nom ? `${id}-nom-error` : undefined}
            className={`${fieldClass} ${errors.nom ? "border-danger" : "border-line-strong"}`}
          />
          {errors.nom ? (
            <p id={`${id}-nom-error`} className="text-sm text-danger">
              {errors.nom}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-email`} className="text-sm font-medium">
            Adresse e-mail
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
            className={`${fieldClass} ${errors.email ? "border-danger" : "border-line-strong"}`}
          />
          {errors.email ? (
            <p id={`${id}-email-error`} className="text-sm text-danger">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${id}-tel`} className="text-sm font-medium">
            Téléphone
            <span className="ml-1.5 font-normal text-subtle">(facultatif)</span>
          </label>
          <input
            id={`${id}-tel`}
            name="telephone"
            type="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            aria-invalid={Boolean(errors.telephone)}
            aria-describedby={errors.telephone ? `${id}-tel-error` : undefined}
            className={`${fieldClass} ${errors.telephone ? "border-danger" : "border-line-strong"}`}
          />
          {errors.telephone ? (
            <p id={`${id}-tel-error`} className="text-sm text-danger">
              {errors.telephone}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor={`${id}-formation`} className="text-sm font-medium">
            Formation souhaitée
          </label>
          <select
            id={`${id}-formation`}
            name="formation"
            defaultValue=""
            aria-invalid={Boolean(errors.formation)}
            aria-describedby={
              errors.formation ? `${id}-formation-error` : undefined
            }
            className={`${fieldClass} ${errors.formation ? "border-danger" : "border-line-strong"}`}
          >
            <option value="" disabled>
              Sélectionnez une formation
            </option>
            {formations.map((formation) => (
              <option key={formation.id} value={formation.id}>
                {formation.name}
              </option>
            ))}
            <option value="autre">Je ne sais pas encore</option>
          </select>
          {errors.formation ? (
            <p id={`${id}-formation-error`} className="text-sm text-danger">
              {errors.formation}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor={`${id}-message`} className="text-sm font-medium">
            Votre message
            <span className="ml-1.5 font-normal text-subtle">(facultatif)</span>
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={4}
            className={`${fieldClass} border-line-strong resize-y`}
          />
        </div>
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2 text-sm text-danger"
        >
          <WarningCircleIcon aria-hidden size={18} className="mt-px shrink-0" />
          <span>
            L’envoi a échoué. Réessayez, ou appelez-nous directement au{" "}
            {site.phone}.
          </span>
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <CircleNotchIcon aria-hidden size={18} className="animate-spin" />
              Envoi en cours
            </>
          ) : (
            "Envoyer ma demande"
          )}
        </Button>
        <p className="text-sm text-subtle">Réponse sous un jour ouvré.</p>
      </div>
    </form>
  );
}
