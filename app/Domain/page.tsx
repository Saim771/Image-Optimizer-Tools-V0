import type { Metadata } from "next"
import DomainConfig from "../domain-config"

export const metadata: Metadata = {
  title: "Domain Configuration | ImageOptimizer",
  description: "Configure your domain for the ImageOptimizer website",
  keywords: "domain setup, custom domain, vercel deployment, website configuration",
}

export default function DomainPage() {
  return <DomainConfig />
}

