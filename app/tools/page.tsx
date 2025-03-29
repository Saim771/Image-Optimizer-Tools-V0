import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ImageIcon, FileText } from "lucide-react"
import ToolCard from "@/components/tool-card"

export const metadata: Metadata = {
  title: "All Tools | ImageOptimizer",
  description: "Browse our collection of free online tools for optimizing images and PDFs",
  keywords: "image tools, pdf tools, compression tools, optimization tools, Saim Amir",
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <Button variant="ghost" size="sm" asChild className="mb-2">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
              <h1 className="text-3xl font-bold">All Tools</h1>
              <p className="text-muted-foreground">Browse our collection of free optimization tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2">Image Tools</h2>
        <p className="text-muted-foreground mb-6">Optimize and transform your images</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ToolCard
            icon={<ImageIcon className="h-6 w-6" />}
            title="Image Compressor"
            description="Reduce image file size without losing quality"
            href="/tools/image-compressor"
            gradient="from-blue-500/20 to-indigo-500/20"
          />

          <ToolCard
            icon={<ImageIcon className="h-6 w-6" />}
            title="Image Resizer"
            description="Resize images to specific dimensions or file size"
            href="/tools/image-resizer"
            gradient="from-green-500/20 to-emerald-500/20"
          />

          <ToolCard
            icon={<ImageIcon className="h-6 w-6" />}
            title="Image Converter"
            description="Convert images between different formats (JPG, PNG, WebP)"
            href="/tools/image-converter"
            gradient="from-cyan-500/20 to-blue-500/20"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2">PDF Tools</h2>
        <p className="text-muted-foreground mb-6">Manage and optimize your PDF documents</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ToolCard
            icon={<FileText className="h-6 w-6" />}
            title="PDF Compressor"
            description="Compress PDF files while maintaining document quality"
            href="/tools/pdf-compressor"
            gradient="from-orange-500/20 to-red-500/20"
          />

          <ToolCard
            icon={<FileText className="h-6 w-6" />}
            title="PDF Merger"
            description="Combine multiple PDF files into a single document"
            href="/tools/pdf-merger"
            gradient="from-purple-500/20 to-pink-500/20"
          />

          <ToolCard
            icon={<FileText className="h-6 w-6" />}
            title="PDF Splitter"
            description="Extract pages or split PDF files into multiple documents"
            href="/tools/pdf-splitter"
            gradient="from-amber-500/20 to-yellow-500/20"
          />
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="container mx-auto px-4 py-12 border-t border-border/20 mt-8">
        <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl border border-border/50 opacity-70">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-muted-foreground" />
              <span>Image Cropper</span>
              <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Soon</span>
            </h3>
            <p className="text-muted-foreground text-sm">Crop and adjust your images with precision</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border/50 opacity-70">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <span>PDF to Image</span>
              <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Soon</span>
            </h3>
            <p className="text-muted-foreground text-sm">Convert PDF pages to high-quality images</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border/50 opacity-70">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-muted-foreground" />
              <span>Bulk Image Processor</span>
              <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Soon</span>
            </h3>
            <p className="text-muted-foreground text-sm">Process multiple images at once with various operations</p>
          </div>
        </div>
      </section>
    </div>
  )
}

