import React from "react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "ambardc-theme";
const options = [
  { value: "light", label: "Clair", icon: "sun" },
  { value: "dark", label: "Sombre", icon: "moon" },
  { value: "system", label: "Systeme", icon: "screen" },
];

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredChoice() {
  if (typeof window === "undefined") return "system";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return ["light", "dark", "system"].includes(saved) ? saved : "system";
}

function resolveTheme(choice) {
  return choice === "system" ? getSystemTheme() : choice;
}

export function ThemeToggle() {
  const [choice, setChoice] = useState(() => getStoredChoice());
  const [open, setOpen] = useState(false);
  const activeTheme = resolveTheme(choice);
  const activeOption = options.find((option) => option.value === choice) ?? options[2];

  useEffect(() => {
    const applyTheme = () => {
      document.documentElement.dataset.theme = resolveTheme(choice);
    };

    applyTheme();
    window.localStorage.setItem(STORAGE_KEY, choice);

    if (choice !== "system") return undefined;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, [choice]);

  function selectTheme(nextChoice) {
    setChoice(nextChoice);
    setOpen(false);
  }

  return (
    <div className="theme-picker">
      <button
        className="theme-menu-button"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Changer le theme"
        data-theme-active={activeTheme}
      >
        <span className={`theme-icon ${activeOption.icon}`} aria-hidden="true" />
        <span>{activeOption.label}</span>
        <span className="theme-chevron" aria-hidden="true" />
      </button>

      {open ? (
        <div className="theme-menu" role="menu">
          {options.map((option) => (
            <button
              className={option.value === choice ? "active" : ""}
              key={option.value}
              type="button"
              role="menuitemradio"
              aria-checked={option.value === choice}
              onClick={() => selectTheme(option.value)}
            >
              <span className={`theme-icon ${option.icon}`} aria-hidden="true" />
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

