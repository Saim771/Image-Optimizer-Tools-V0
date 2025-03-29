import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Search, Calendar, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Blog | ImageOptimizer",
  description: "Tips, tutorials, and insights on image and PDF optimization",
  keywords: "blog, image optimization, PDF compression, web performance, SEO",
}

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "How Image Compression Can Boost Your Website's SEO",
    excerpt: "Learn how optimizing your images can lead to faster load times and better search engine rankings.",
    date: "March 15, 2023",
    readTime: "5 min read",
    author: "Saim Amir",
    authorImage: "/images/saim-profile.png",
    category: "SEO",
    image: "/placeholder.svg?height=300&width=600&text=Image+Compression+SEO",
    slug: "image-compression-seo",
  },
  {
    id: "2",
    title: "The Ultimate Guide to PDF Compression",
    excerpt: "Everything you need to know about compressing PDFs without losing quality or readability.",
    date: "February 28, 2023",
    readTime: "8 min read",
    author: "John Smith",
    authorImage: "/placeholder.svg?height=48&width=48&text=JS",
    category: "Tutorials",
    image: "/placeholder.svg?height=300&width=600&text=PDF+Compression+Guide",
    slug: "pdf-compression-guide",
  },
  {
    id: "3",
    title: "WebP vs JPEG vs PNG: Which Format Should You Use?",
    excerpt: "A detailed comparison of image formats to help you choose the right one for your needs.",
    date: "January 20, 2023",
    readTime: "6 min read",
    author: "Emily Johnson",
    authorImage: "/placeholder.svg?height=48&width=48&text=EJ",
    category: "Comparisons",
    image: "/placeholder.svg?height=300&width=600&text=Image+Formats+Comparison",
    slug: "image-formats-comparison",
  },
  {
    id: "4",
    title: "5 Ways to Reduce PDF File Size for Email Attachments",
    excerpt: "Practical tips for compressing PDFs to meet email attachment size limits.",
    date: "December 12, 2022",
    readTime: "4 min read",
    author: "Michael Rodriguez",
    authorImage: "/placeholder.svg?height=48&width=48&text=MR",
    category: "Tips & Tricks",
    image: "/placeholder.svg?height=300&width=600&text=PDF+Email+Tips",
    slug: "pdf-email-tips",
  },
  {
    id: "5",
    title: "How to Batch Process Images for E-commerce Websites",
    excerpt: "Learn how to efficiently optimize multiple product images for your online store.",
    date: "November 5, 2022",
    readTime: "7 min read",
    author: "Saim Amir",
    authorImage: "/images/saim-profile.png",
    category: "E-commerce",
    image: "/placeholder.svg?height=300&width=600&text=Batch+Image+Processing",
    slug: "batch-image-processing",
  },
  {
    id: "6",
    title: "The Impact of Page Speed on Conversion Rates",
    excerpt: "Discover how faster-loading pages can significantly improve your website's conversion rates.",
    date: "October 18, 2022",
    readTime: "5 min read",
    author: "John Smith",
    authorImage: "/placeholder.svg?height=48&width=48&text=JS",
    category: "Business",
    image: "/placeholder.svg?height=300&width=600&text=Page+Speed+Conversions",
    slug: "page-speed-conversions",
  },
]

// Categories for filtering
const categories = ["All", "SEO", "Tutorials", "Comparisons", "Tips & Tricks", "E-commerce", "Business"]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">ImageOptimizer Blog</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Tips, tutorials, and insights on image and PDF optimization to help you improve your website's
                performance.
              </p>
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input type="search" placeholder="Search articles..." className="pl-10 pr-4 py-6 rounded-full" />
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Blog+Articles"
                  alt="Blog Articles"
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

      {/* Categories */}
      <section className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto pb-2">
          <div className="flex justify-start gap-2 min-w-max">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-auto">
              <Image
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
              <div className="absolute bottom-4 left-4 md:hidden">
                <span className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-0.5 rounded">
                  {blogPosts[0].category}
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                  {blogPosts[0].category}
                </span>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-3 w-3 mr-1" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="h-3 w-3 mr-1" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20 overflow-hidden">
                    <Image
                      src={blogPosts[0].authorImage || "/placeholder.svg"}
                      alt={blogPosts[0].author}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{blogPosts[0].author}</span>
                </div>
                <Button variant="ghost" size="sm" className="gap-1" asChild>
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-border/50 h-full flex flex-col transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 overflow-hidden">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium">{post.author}</span>
                </div>
                <Button variant="ghost" size="sm" className="gap-1" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-8">
                Get the latest articles, tutorials, and tips on image and PDF optimization delivered straight to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input type="email" placeholder="Your email address" className="flex-grow" />
                <Button>Subscribe</Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-64 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Newsletter"
                  alt="Newsletter"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

