import type { ComponentPropsWithoutRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "onPhoto";

const base =
  // Pill radius is the page-wide rule for anything interactive.
  "inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap " +
  "font-medium leading-none transition-[background-color,color,border-color,transform] " +
  "duration-200 ease-out active:translate-y-px disabled:opacity-60 " +
  "disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  // `accent-strong` clears 5.0:1 against white, so the label is AA at any size.
  primary: "bg-accent-strong text-on-accent hover:bg-accent-hover",
  secondary:
    "bg-surface text-ink border border-line-strong hover:border-ink hover:bg-surface-2",
  // Sits on the hero photo. Solid fill rather than a ghost, so contrast never
  // depends on what happens to be behind it.
  onPhoto: "bg-white text-stone-900 hover:bg-stone-100",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
} as const;

type CommonProps = {
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  className?: string;
};

type AnchorProps = CommonProps &
  ComponentPropsWithoutRef<"a"> & { href: string };
type NativeButtonProps = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorProps;
    return <a href={href} className={classes} {...anchorRest} />;
  }

  const { ...buttonRest } = rest as NativeButtonProps;
  return <button className={classes} {...buttonRest} />;
}
