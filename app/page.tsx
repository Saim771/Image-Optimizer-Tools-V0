import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ImageIcon, FileText, Zap, BarChart, CheckCircle, Sparkles } from "lucide-react"
import ToolCard from "@/components/tool-card"
import AuthorSection from "@/components/author-section"
import TestimonialCard from "@/components/testimonial-card"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "ImageOptimizer | Fast & Easy Image & PDF Tools",
  description:
    "Free online tools to compress and optimize your images and PDFs with adjustable compression levels for faster websites and better SEO",
  keywords:
    "image compression, PDF tools, image optimizer, compress images, reduce image size, image optimization tool, Saim Amir",
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-20 pb-24">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-black/10" />
        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                <span>By Saim Amir</span>
                <div className="flex items-center gap-1">
                  <Link
                    href="https://tiktok.com/@saim.amir786"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                      <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                      <path d="M15 8v8a4 4 0 0 1-4 4" />
                      <line x1="15" y1="4" x2="15" y2="12" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.facebook.com/saim.king.505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Optimize Your <br />
                <span className="text-primary">Digital Assets</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Free online tools to compress images, convert PDFs, and more. Optimize your files in seconds without
                losing quality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="#tools">
                    Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/signup">Create Free Account</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-xl bg-card p-6 shadow-2xl border border-border/40 backdrop-blur">
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-primary/20 backdrop-blur-xl" />
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-primary/20 backdrop-blur-xl" />
                <div className="relative z-20">
                  <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Image+Optimization+Tool"
                      alt="Digital asset optimization preview"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-primary/5 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <ImageIcon className="h-4 w-4 text-primary" />
                        <p className="text-sm font-medium">Image Tools</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Compress, resize, convert</p>
                    </div>
                    <div className="rounded-lg bg-primary/5 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="h-4 w-4 text-primary" />
                        <p className="text-sm font-medium">PDF Tools</p>
                      </div>
                      <p className="text-xs text-muted-foreground">Compress, merge, split</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2M+</div>
              <p className="text-muted-foreground">Files Optimized</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">75%</div>
              <p className="text-muted-foreground">Average Size Reduction</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Happy Users</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6</div>
              <p className="text-muted-foreground">Powerful Tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section id="tools" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Our Tools</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Powerful tools to optimize your digital assets. Free, fast, and easy to use.
              </p>
            </div>
            <Link href="/tools" className="text-primary hover:underline flex items-center mt-4 md:mt-0">
              View all tools <Sparkles className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ToolCard
              icon={<ImageIcon className="h-6 w-6" />}
              title="Image Compressor"
              description="Reduce image file size without losing quality"
              href="/tools/image-compressor"
              gradient="from-blue-500/20 to-indigo-500/20"
            />

            <ToolCard
              icon={<FileText className="h-6 w-6" />}
              title="PDF Compressor"
              description="Compress PDF files while maintaining document quality"
              href="/tools/pdf-compressor"
              gradient="from-orange-500/20 to-red-500/20"
            />

            <ToolCard
              icon={<ImageIcon className="h-6 w-6" />}
              title="Image Resizer"
              description="Resize images to specific dimensions or file size"
              href="/tools/image-resizer"
              gradient="from-green-500/20 to-emerald-500/20"
            />

            <ToolCard
              icon={<FileText className="h-6 w-6" />}
              title="PDF Merger"
              description="Combine multiple PDF files into a single document"
              href="/tools/pdf-merger"
              gradient="from-purple-500/20 to-pink-500/20"
            />

            <ToolCard
              icon={<ImageIcon className="h-6 w-6" />}
              title="Image Converter"
              description="Convert images between different formats (JPG, PNG, WebP)"
              href="/tools/image-converter"
              gradient="from-cyan-500/20 to-blue-500/20"
            />

            <ToolCard
              icon={<FileText className="h-6 w-6" />}
              title="PDF Splitter"
              description="Extract pages or split PDF files into multiple documents"
              href="/tools/pdf-splitter"
              gradient="from-amber-500/20 to-yellow-500/20"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground mb-8">Optimize your files in three simple steps</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Upload Your File</h3>
                    <p className="text-muted-foreground">
                      Select and upload the image or PDF file you want to optimize.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Adjust Settings</h3>
                    <p className="text-muted-foreground">
                      Choose your preferred compression level or other optimization settings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Download Result</h3>
                    <p className="text-muted-foreground">
                      Download your optimized file and enjoy the reduced file size.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative h-80 w-full">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=How+It+Works"
                  alt="How It Works"
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

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Tools?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our tools provide the perfect balance between quality and optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Process files in seconds, not minutes. Our optimized algorithms work efficiently to save you time.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Quick processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Efficient algorithms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>No waiting time</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Preserved</h3>
              <p className="text-muted-foreground">
                Smart compression that maintains visual quality while significantly reducing file size.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Visually identical results</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Adjustable quality settings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Smart optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SEO Friendly</h3>
              <p className="text-muted-foreground">
                Faster loading assets improve your website's performance and search engine rankings.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Better page speed scores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Improved user experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Higher search rankings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative order-2 md:order-1">
              <div className="relative h-80 w-full">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Pricing+Plans"
                  alt="Pricing Plans"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-primary/20 rounded-full backdrop-blur-xl"></div>
                <div className="absolute -top-4 -left-4 h-16 w-16 bg-primary/20 rounded-full backdrop-blur-xl"></div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Choose the plan that fits your needs. Start with our free tier and upgrade as you grow.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Free Plan</h3>
                    <p className="text-muted-foreground">
                      Basic tools with limited usage, perfect for occasional needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Pro Plan</h3>
                    <p className="text-muted-foreground">Unlimited access to all tools with advanced features.</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="mt-8" asChild>
                <Link href="/pricing">
                  View Pricing Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <AuthorSection />

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who optimize their files with our tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            name="Sarah Johnson"
            role="Web Developer"
            image="/placeholder.svg?height=48&width=48&text=SJ"
            content="These tools saved me so much time! I was able to compress all my website images and improve loading speed dramatically."
          />

          <TestimonialCard
            name="Michael Chen"
            role="Graphic Designer"
            image="/placeholder.svg?height=48&width=48&text=MC"
            content="The image compression is amazing. I can optimize my design files without any noticeable quality loss. Highly recommended!"
          />

          <TestimonialCard
            name="Jessica Williams"
            role="Content Creator"
            image="/placeholder.svg?height=48&width=48&text=JW"
            content="The PDF tools are a game changer for my workflow. Merging and compressing documents has never been easier."
          />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Files?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Start using our tools today and see the difference in your website's performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="#tools">
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

