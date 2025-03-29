"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { toast } from "@/hooks/use-toast"

const themes = [
  {
    name: "Default",
    id: "default",
    primaryColor: "hsl(221.2 83.2% 53.3%)",
    bgColor: "white",
  },
  {
    name: "Purple",
    id: "purple",
    primaryColor: "hsl(270 95% 60%)",
    bgColor: "white",
  },
  {
    name: "Green",
    id: "green",
    primaryColor: "hsl(142.1 76.2% 36.3%)",
    bgColor: "white",
  },
  {
    name: "Orange",
    id: "orange",
    primaryColor: "hsl(24.6 95% 53.1%)",
    bgColor: "white",
  },
  {
    name: "Rose",
    id: "rose",
    primaryColor: "hsl(346.8 77.2% 49.8%)",
    bgColor: "white",
  },
]

export function ThemeSelector() {
  const { setTheme, theme: currentMode } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState("default")

  useEffect(() => {
    // Get the saved theme from localStorage on component mount
    const savedTheme = localStorage.getItem("color-theme") || "default"
    setSelectedTheme(savedTheme)

    // Apply the theme class to the document
    document.documentElement.classList.remove(
      "theme-default",
      "theme-purple",
      "theme-green",
      "theme-orange",
      "theme-rose",
    )
    document.documentElement.classList.add(`theme-${savedTheme}`)
  }, [])

  const handleThemeChange = (themeId: string) => {
    // Set the theme in localStorage
    localStorage.setItem("color-theme", themeId)

    // Update the document with the theme class
    document.documentElement.classList.remove(
      "theme-default",
      "theme-purple",
      "theme-green",
      "theme-orange",
      "theme-rose",
    )
    document.documentElement.classList.add(`theme-${themeId}`)

    // Update state
    setSelectedTheme(themeId)

    // Show toast notification
    toast({
      title: "Theme updated",
      description: `The ${themes.find((t) => t.id === themeId)?.name} theme has been applied.`,
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <div
            className="h-5 w-5 rounded-full"
            style={{ backgroundColor: themes.find((t) => t.id === selectedTheme)?.primaryColor }}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.id}
            onClick={() => handleThemeChange(theme.id)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="h-4 w-4 rounded-full" style={{ backgroundColor: theme.primaryColor }} />
            <span>{theme.name}</span>
            {selectedTheme === theme.id && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

