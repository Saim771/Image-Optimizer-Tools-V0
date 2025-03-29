import type { Metadata } from "next"
import ThemesClientPage from "./ThemesClientPage"

export const metadata: Metadata = {
  title: "Themes | ImageOptimizer",
  description: "Customize the look and feel of ImageOptimizer with beautiful themes",
  keywords: "themes, customization, appearance, color schemes, dark mode, light mode",
}

export default function ThemesPage() {
  return <ThemesClientPage />
}

