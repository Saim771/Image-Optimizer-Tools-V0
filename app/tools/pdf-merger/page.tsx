import type { Metadata } from "next"
import PdfMerger from "@/components/pdf-merger"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PDF Merger Tool | ImageOptimizer",
  description: "Free online tool to merge multiple PDF files into a single document",
  keywords: "pdf merger, combine pdf, merge pdf files, pdf joiner, pdf tool",
}

export default function PdfMergerPage() {
  return (
    <div className="min-h-screen">
      {/* Tool Header */}
      <section className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <Button variant="ghost" size="sm" asChild className="mb-2">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
              <h1 className="text-3xl font-bold">PDF Merger</h1>
              <p className="text-muted-foreground">Combine multiple PDF files into a single document</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/tools">View All Tools</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Save Your Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space - Top */}
      <div className="container mx-auto px-4 py-6">
        <div className="w-full h-[90px] bg-muted/50 flex items-center justify-center border border-border/50 rounded-xl overflow-hidden">
          <p className="text-muted-foreground">Advertisement Space</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <PdfMerger />
      </section>

      {/* Ad Space - Bottom */}
      <div className="container mx-auto px-4 py-6">
        <div className="w-full h-[90px] bg-muted/50 flex items-center justify-center border border-border/50 rounded-xl overflow-hidden">
          <p className="text-muted-foreground">Advertisement Space</p>
        </div>
      </div>

      {/* Related Tools */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Related Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/tools/pdf-compressor" className="block group">
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">PDF Compressor</h3>
              <p className="text-muted-foreground text-sm">Reduce the size of your PDF files</p>
            </div>
          </Link>
          <Link href="/tools/pdf-splitter" className="block group">
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">PDF Splitter</h3>
              <p className="text-muted-foreground text-sm">Extract or split pages from PDF files</p>
            </div>
          </Link>
          <Link href="/tools/image-compressor" className="block group">
            <div className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                Image Compressor
              </h3>
              <p className="text-muted-foreground text-sm">Reduce the size of your image files</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

