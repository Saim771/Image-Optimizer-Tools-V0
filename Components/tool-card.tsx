import type React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface ToolCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  gradient: string
}

export default function ToolCard({ icon, title, description, href, gradient }: ToolCardProps) {
  return (
    <Link href={href} className="block group">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-border/50">
        <CardContent className="p-0">
          <div className={`bg-gradient-to-br ${gradient} p-6 h-full flex flex-col`}>
            <div className="h-12 w-12 rounded-full bg-background/90 flex items-center justify-center mb-4 text-primary">
              {icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

            <div className="flex items-center text-primary font-medium mt-2 group-hover:translate-x-1 transition-transform">
              Try Now <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

