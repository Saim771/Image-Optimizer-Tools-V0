"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    // Apply saved color theme if exists
    const savedColorTheme = localStorage.getItem("color-theme") || "default"
    document.documentElement.classList.add(`theme-${savedColorTheme}`)

    // Listen for theme changes
    const handleThemeChange = () => {
      const theme = localStorage.getItem("color-theme") || "default"
      document.documentElement.classList.remove(
        "theme-default",
        "theme-purple",
        "theme-green",
        "theme-orange",
        "theme-rose",
      )
      document.documentElement.classList.add(`theme-${theme}`)
    }

    window.addEventListener("storage", handleThemeChange)

    return () => {
      window.removeEventListener("storage", handleThemeChange)
    }
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

