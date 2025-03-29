import type { Metadata } from "next"
import PricingPlans from "@/components/pricing-plans"

export const metadata: Metadata = {
  title: "Pricing | ImageOptimizer",
  description: "Choose the perfect plan for your image and PDF optimization needs",
  keywords: "pricing, subscription, plans, premium features, image optimization, PDF tools",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include access to our core tools.
          </p>
        </div>
      </section>

      <PricingPlans />
    </div>
  )
}

