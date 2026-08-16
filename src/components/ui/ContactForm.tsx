"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "@/components/ui/icons";
import { formationOptions } from "@/data/formations";

type Status = { kind: "idle" } | { kind: "error" | "sent"; message: string };

/**
 * Front-end only, exactly like the static template: the submit handler runs
 * the checks itself (the form is `noValidate` so the browser's own bubbles
 * never fight the in-page status line) and reports back through one live
 * region. Wire `onSubmit` to a real endpoint or a server action before launch.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nom = String(data.get("nom") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const tel = String(data.get("tel") ?? "").trim();
    const formation = String(data.get("formation") ?? "");

    if (!nom || !email || !tel || !formation) {
      setStatus({
        kind: "error",
        message:
          "Merci de renseigner votre nom, votre e-mail, votre téléphone et la formation souhaitée.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus({
        kind: "error",
        message: "Cette adresse e-mail semble incomplète. Pouvez-vous la vérifier ?",
      });
      return;
    }

    setStatus({
      kind: "sent",
      message: `Merci ${nom}, votre demande est bien partie. On vous rappelle sous 24 heures ouvrées au ${tel}.`,
    });
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid-2">
        <div className="field">
          <label htmlFor="nom">Nom et prénom</label>
          <input
            id="nom"
            name="nom"
            type="text"
            placeholder="Camille Rousseau"
            autoComplete="name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="camille@exemple.fr"
            autoComplete="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="tel">Téléphone</label>
          <input
            id="tel"
            name="tel"
            type="tel"
            placeholder="06 12 34 56 78"
            autoComplete="tel"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="formation">Formation souhaitée</label>
          <select id="formation" name="formation" defaultValue="" required>
            <option value="">Choisir une formation</option>
            {formationOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grows to absorb the leftover height so the button lands on the same
          baseline as the bottom of the social panel next to it. */}
      <div className="field field-grow">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Vos disponibilités, votre niveau actuel, vos questions sur les tarifs…"
        />
      </div>

      <button type="submit" className="btn btn-fill">
        Demander des informations <Arrow />
      </button>

      <p className="form-note">
        Vos données servent uniquement à traiter votre demande. Aucune
        inscription à une newsletter, aucun partage.
      </p>

      <p
        className={status.kind === "idle" ? "form-status" : "form-status show"}
        role="status"
      >
        {status.kind === "idle" ? "" : status.message}
      </p>
    </form>
  );
}
