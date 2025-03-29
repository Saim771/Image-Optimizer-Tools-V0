import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Filter, Search, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { PluginInstaller } from "@/components/plugin-installer"

export const metadata: Metadata = {
  title: "Plugins Marketplace | ImageOptimizer",
  description: "Extend the functionality of ImageOptimizer with powerful plugins",
  keywords: "plugins, extensions, add-ons, image optimization, PDF tools",
}

// Sample plugins data
const plugins = [
  {
    id: "watermark-pro",
    name: "Watermark Pro",
    description: "Add custom watermarks to your images with advanced positioning and opacity controls.",
    author: "ImageOptimizer",
    category: "Image",
    rating: 4.8,
    downloads: 12500,
    price: "Free",
    image: "/placeholder.svg?height=200&width=200&text=Watermark",
    installed: false,
  },
  {
    id: "batch-processor",
    name: "Batch Processor",
    description: "Process multiple files at once with custom settings for each file type.",
    author: "Saim Amir",
    category: "Utility",
    rating: 4.9,
    downloads: 18700,
    price: "Premium",
    image: "/placeholder.svg?height=200&width=200&text=Batch",
    installed: true,
  },
  {
    id: "ai-enhancer",
    name: "AI Image Enhancer",
    description: "Use AI to enhance image quality while reducing file size.",
    author: "AI Tools Inc.",
    category: "Image",
    rating: 4.7,
    downloads: 9800,
    price: "Premium",
    image: "/placeholder.svg?height=200&width=200&text=AI",
    installed: false,
  },
  {
    id: "pdf-ocr",
    name: "PDF OCR",
    description: "Extract text from PDF files and make them searchable.",
    author: "PDF Solutions",
    category: "PDF",
    rating: 4.6,
    downloads: 7500,
    price: "Premium",
    image: "/placeholder.svg?height=200&width=200&text=OCR",
    installed: false,
  },
  {
    id: "image-filters",
    name: "Image Filters",
    description: "Apply professional filters to your images before or after compression.",
    author: "Creative Tools",
    category: "Image",
    rating: 4.5,
    downloads: 15200,
    price: "Free",
    image: "/placeholder.svg?height=200&width=200&text=Filters",
    installed: false,
  },
  {
    id: "pdf-form-filler",
    name: "PDF Form Filler",
    description: "Automatically fill PDF forms with data from various sources.",
    author: "Form Solutions",
    category: "PDF",
    rating: 4.4,
    downloads: 6300,
    price: "Premium",
    image: "/placeholder.svg?height=200&width=200&text=Forms",
    installed: false,
  },
  {
    id: "cloud-storage",
    name: "Cloud Storage Connector",
    description: "Connect directly to Dropbox, Google Drive, and OneDrive.",
    author: "Cloud Connect",
    category: "Utility",
    rating: 4.7,
    downloads: 11000,
    price: "Free",
    image: "/placeholder.svg?height=200&width=200&text=Cloud",
    installed: true,
  },
  {
    id: "metadata-editor",
    name: "Image Metadata Editor",
    description: "View and edit image metadata including EXIF, IPTC, and XMP.",
    author: "Metadata Tools",
    category: "Image",
    rating: 4.3,
    downloads: 5200,
    price: "Free",
    image: "/placeholder.svg?height=200&width=200&text=Metadata",
    installed: false,
  },
]

export default function PluginsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-black/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-left">
              <h1 className="text-4xl font-bold mb-4">Plugins Marketplace</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Extend the functionality of ImageOptimizer with powerful plugins and add-ons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search plugins..." className="pl-9" />
                </div>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Plugins+Marketplace"
                  alt="Plugins Marketplace"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-primary/20 rounded-full backdrop-blur-xl"></div>
                <div className="absolute -top-4 -left-4 h-16 w-16 bg-primary/20 rounded-full backdrop-blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plugins */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Plugins</h2>
          <Link href="#all-plugins" className="text-primary hover:underline flex items-center">
            View all plugins <Sparkles className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plugins.slice(0, 3).map((plugin) => (
            <PluginCard key={plugin.id} plugin={plugin} featured />
          ))}
        </div>
      </section>

      {/* All Plugins Section */}
      <section id="all-plugins" className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Browse All Plugins</h2>
        <Tabs defaultValue="all" className="w-full">
          <div className="overflow-x-auto pb-2">
            <TabsList className="mb-8 inline-flex">
              <TabsTrigger value="all">All Plugins</TabsTrigger>
              <TabsTrigger value="image">Image</TabsTrigger>
              <TabsTrigger value="pdf">PDF</TabsTrigger>
              <TabsTrigger value="utility">Utility</TabsTrigger>
              <TabsTrigger value="installed">Installed</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plugins.map((plugin) => (
                <PluginCard key={plugin.id} plugin={plugin} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="image">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plugins
                .filter((plugin) => plugin.category === "Image")
                .map((plugin) => (
                  <PluginCard key={plugin.id} plugin={plugin} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="pdf">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plugins
                .filter((plugin) => plugin.category === "PDF")
                .map((plugin) => (
                  <PluginCard key={plugin.id} plugin={plugin} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="utility">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plugins
                .filter((plugin) => plugin.category === "Utility")
                .map((plugin) => (
                  <PluginCard key={plugin.id} plugin={plugin} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="installed">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plugins
                .filter((plugin) => plugin.installed)
                .map((plugin) => (
                  <PluginCard key={plugin.id} plugin={plugin} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Submit Plugin Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Develop Your Own Plugin</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Are you a developer? Create and publish your own plugins to extend ImageOptimizer's functionality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/developer">Developer Portal</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs/plugins">Documentation</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Developer+Portal"
                  alt="Developer Portal"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function PluginCard({ plugin, featured = false }: { plugin: any; featured?: boolean }) {
  return (
    <Card
      className={`overflow-hidden border-border/50 h-full flex flex-col transition-all duration-300 hover:shadow-lg ${featured ? "shadow-md" : ""}`}
    >
      <div className="relative h-40 bg-muted/50 flex items-center justify-center">
        <Image
          src={plugin.image || "/placeholder.svg"}
          alt={plugin.name}
          width={80}
          height={80}
          className="object-contain"
        />
        <div className="absolute top-2 right-2 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
          {plugin.category}
        </div>
      </div>
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg">{plugin.name}</CardTitle>
        <CardDescription className="text-xs">
          By {plugin.author} • {plugin.downloads.toLocaleString()} downloads
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(plugin.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-xs ml-1">{plugin.rating}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">{plugin.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <PluginInstaller
          pluginId={plugin.id}
          pluginName={plugin.name}
          isPremium={plugin.price === "Premium"}
          isInstalled={plugin.installed}
        />
      </CardFooter>
    </Card>
  )
}

