"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

/**
 * The <html data-theme> attribute is the single source of truth — set before
 * paint by the inline script in layout.tsx and read here through
 * useSyncExternalStore, so the button never disagrees with the painted page
 * and never causes a hydration mismatch.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore<Theme>(
    subscribe,
    () =>
      (document.documentElement.getAttribute("data-theme") as Theme) ?? "dark",
    () => "dark",
  );

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode — the choice just won't persist.
    }
  }, [theme]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={`grid h-10 w-10 place-items-center rounded-full border border-line text-mute transition-colors duration-300 hover:border-accent hover:text-accent-bright ${className ?? ""}`}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
