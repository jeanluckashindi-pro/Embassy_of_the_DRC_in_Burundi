import React, { useEffect, useState } from "react";
import { Sun, Moon, Monitor, ChevronDown, Check } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion } from "motion/react";

const STORAGE_KEY = "ambardc-theme";
const options = [
  { value: "light", label: "Clair", icon: Sun },
  { value: "dark", label: "Sombre", icon: Moon },
  { value: "system", label: "Système", icon: Monitor },
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
  const activeTheme = resolveTheme(choice);
  const activeOption = options.find((option) => option.value === choice) ?? options[2];
  const ActiveIcon = activeOption.icon;

  useEffect(() => {
    const applyTheme = () => {
      const active = resolveTheme(choice);
      document.documentElement.dataset.theme = active;
      if (active === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    applyTheme();
    window.localStorage.setItem(STORAGE_KEY, choice);

    if (choice !== "system") return undefined;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, [choice]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 cursor-pointer"
          type="button"
          aria-label="Changer le thème"
        >
          <ActiveIcon className="h-4 w-4 text-amber-500 dark:text-blue-400" />
          <span>{activeOption.label}</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-60" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          asChild
          sideOffset={6}
          align="end"
          className="z-[200] min-w-[130px] rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg dark:border-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            {options.map((option) => {
              const Icon = option.icon;
              const isSelected = option.value === choice;
              return (
                <DropdownMenu.Item
                  key={option.value}
                  onClick={() => setChoice(option.value)}
                  className={`flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors outline-none ${
                    isSelected
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 font-semibold"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5" />
                    <span>{option.label}</span>
                  </div>
                  {isSelected && <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />}
                </DropdownMenu.Item>
              );
            })}
          </motion.div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
