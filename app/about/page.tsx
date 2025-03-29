import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Award, Clock, Heart, Check, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | ImageOptimizer",
  description: "Learn about ImageOptimizer and our mission to provide the best image and PDF optimization tools",
  keywords: "about us, image optimization, PDF tools, Saim Amir, company mission",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">About ImageOptimizer</h1>
              <p className="text-lg text-muted-foreground mb-6">
                We're on a mission to make digital asset optimization accessible to everyone. Our tools help you
                compress, resize, and convert images and PDFs without sacrificing quality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/tools">Explore Our Tools</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-6 shadow-xl">
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-primary/20 backdrop-blur-xl" />
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-primary/20 backdrop-blur-xl" />
                <div className="relative h-full w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=About+ImageOptimizer"
                    alt="About ImageOptimizer"
                    fill
                    className="object-cover rounded-lg"
                  />
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

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative order-2 md:order-1">
              <div className="relative h-80 w-full">
                <Image
                  src="/placeholder.svg?height=500&width=700&text=Our+Story"
                  alt="Our Story"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-primary/20 rounded-full backdrop-blur-xl"></div>
                <div className="absolute -top-4 -left-4 h-16 w-16 bg-primary/20 rounded-full backdrop-blur-xl"></div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  ImageOptimizer was founded in 2023 by Saim Amir, a developer with a passion for web performance and
                  digital optimization. After years of working with clients who struggled with slow-loading websites due
                  to unoptimized images and documents, Saim decided to create a solution that would make optimization
                  accessible to everyone.
                </p>
                <p>
                  What started as a simple image compression tool has grown into a comprehensive suite of optimization
                  tools for both images and PDFs. Our platform is designed to be intuitive and powerful, allowing users
                  of all technical levels to optimize their digital assets with just a few clicks.
                </p>
                <blockquote>
                  "I believe that everyone should have access to tools that make their digital content faster, smaller,
                  and more efficient. That's the driving force behind ImageOptimizer."
                  <footer>— Saim Amir, Founder</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
              <p className="text-muted-foreground">
                We design our tools with users in mind, focusing on simplicity, efficiency, and results. Your success is
                our success.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Intuitive interfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Responsive design</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Accessible to everyone</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Our optimization algorithms are designed to reduce file size while
                maintaining visual integrity.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Advanced compression algorithms</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Quality preservation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Rigorous testing</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
              <p className="text-muted-foreground">
                We're always exploring new technologies and techniques to improve our tools and provide better results
                for our users.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Regular updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>New features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Cutting-edge technology</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <Image src="/images/saim-profile.png" alt="Saim Amir" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Saim Amir</h3>
              <p className="text-muted-foreground mb-2">Founder & Lead Developer</p>
              <div className="flex justify-center gap-2">
                <Link
                  href="https://x.com/Arshman771?t=-aSkU-mcIgRVf_VYZL2joQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/saim.king.505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                <Link
                  href="https://www.instagram.com/saim3717771?igsh=YzljYTk1ODg3Zg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/placeholder.svg?height=160&width=160&text=JS"
                  alt="John Smith"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-muted-foreground mb-2">Backend Developer</p>
              <div className="flex justify-center gap-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-fulll overflow-hidden border-4 border-primary/20">
                <Image
                  src="/placeholder.svg?height=160&width=160&text=EJ"
                  alt="Emily Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Emily Johnson</h3>
              <p className="text-muted-foreground mb-2">UI/UX Designer</p>
              <div className="flex justify-center gap-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dribbble"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/placeholder.svg?height=160&width=160&text=MR"
                  alt="Michael Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
              <p className="text-muted-foreground mb-2">Marketing Specialist</p>
              <div className="flex justify-center gap-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

            {/* Timeline items */}
            <div className="relative z-10">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">2023</h3>
                  <h4 className="text-lg font-semibold text-primary">Foundation</h4>
                  <p className="text-muted-foreground">
                    ImageOptimizer was founded with a simple image compression tool.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 md:text-left">
                  <div className="h-32 w-full relative">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Foundation"
                      alt="Foundation"
                      fill
                      className="object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-8 md:text-right order-1 md:order-1">
                  <div className="h-32 w-full relative">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Expansion"
                      alt="Expansion"
                      fill
                      className="object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 md:text-left order-2 md:order-2 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">2023</h3>
                  <h4 className="text-lg font-semibold text-primary">Expansion</h4>
                  <p className="text-muted-foreground">
                    Added PDF tools and expanded our image optimization capabilities.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">2024</h3>
                  <h4 className="text-lg font-semibold text-primary">Growth</h4>
                  <p className="text-muted-foreground">Reached 50,000+ users and introduced premium features.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 md:text-left">
                  <div className="h-32 w-full relative">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Growth"
                      alt="Growth"
                      fill
                      className="object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Become part of our growing community of users who are optimizing their digital assets and improving their
            online presence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/signup">
                Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

