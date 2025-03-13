import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Heart, Calendar, MapPin, Clock, Gift, Hotel, Phone, Mail } from "lucide-react"
import RsvpForm from "@/components/rsvp-form"
import Gallery from "@/components/gallery"
import Timeline from "@/components/timeline"
import AnimatedSection from "@/components/animated-section"
import FloatingHearts from "@/components/floating-hearts"
import CountdownTimer from "@/components/countdown-timer"
import DecorativeElement from "@/components/decorative-element"

export default function WeddingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Wedding hero image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-dark/50 via-blue-DEFAULT/40 to-blue-light/30"></div>
        </div>

        <div className="absolute inset-0">
          <FloatingHearts count={30} />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
          <div className="animate-fade-in-up will-change-transform bg-white/10 backdrop-blur-sm px-12 py-10 rounded-lg border border-white/20 shadow-xl">
            <h1
              className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 animate-glow text-white"
              style={{ textShadow: "0 0 15px rgba(70, 130, 180, 0.8), 0 0 30px rgba(135, 206, 250, 0.8)" }}
            >
              Bryan & Shaira
            </h1>
            <p className="text-xl md:text-2xl mb-6 animate-fade-in text-white">Are getting married</p>
            <p className="text-2xl md:text-3xl font-light animate-fade-in delay-300 text-white">December 18, 2025</p>
          </div>
          <div className="mt-12 animate-bounce-slow will-change-transform">
            <Button
              variant="default"
              size="lg"
              className="bg-blue-DEFAULT hover:bg-blue-dark text-white border border-white/70 shadow-md hover:scale-105 transform duration-300 font-medium px-6 py-5 text-lg"
              asChild
            >
              <a href="#rsvp">RSVP Now</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce will-change-transform">
          <a href="#countdown" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-muted relative" id="countdown">
        <DecorativeElement position="top-right" />
        <DecorativeElement position="bottom-left" />
        <AnimatedSection>
          <div className="container mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-12">Counting Down to Our Special Day</h2>
            <CountdownTimer targetDate="2025-12-18T15:00:00" />
          </div>
        </AnimatedSection>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative" id="story">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Our story background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">Our Love Story</h2>
              <div className="flex justify-center mb-6">
                <Heart className="text-blue-light h-6 w-6 animate-pulse" />
              </div>
              <p className="text-white/80 max-w-2xl mx-auto">
                Every love story is beautiful, but ours is our favorite.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-DEFAULT to-blue-light rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Couple"
                  width={600}
                  height={800}
                  className="rounded-lg shadow-lg relative transform transition duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="space-y-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <p className="text-lg">
                  We met on a rainy afternoon at a local coffee shop in the fall of 2020. What started as a chance
                  encounter turned into hours of conversation and laughter.
                </p>
                <p className="text-lg">
                  After three years of adventures, growth, and creating beautiful memories together, Bryan proposed
                  during a sunset hike at our favorite mountain overlook.
                </p>
                <p className="text-lg">
                  Now, we're excited to begin the next chapter of our lives together and we're thrilled to celebrate
                  this special day with our closest friends and family.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Wedding Details Section */}
      <section className="py-20 relative" id="details">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-light/10 to-blue-DEFAULT/10"></div>
        <DecorativeElement position="bottom-right" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Wedding Details</h2>
              <div className="flex justify-center mb-6">
                <Calendar className="text-primary h-6 w-6" />
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We can't wait to celebrate our special day with you. Here's everything you need to know.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border border-blue-light/20 will-change-transform h-full flex flex-col">
                <CardContent className="pt-6 flex flex-col flex-1 justify-between">
                  <div>
                    <Calendar className="h-10 w-10 mx-auto mb-4 text-blue-DEFAULT animate-wiggle will-change-transform" />
                    <h3 className="text-xl font-medium mb-2">Date</h3>
                    <p>Thursday</p>
                    <p className="text-lg font-medium">December 18, 2025</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border border-blue-light/20 will-change-transform h-full flex flex-col">
                <CardContent className="pt-6 flex flex-col flex-1 justify-between">
                  <div>
                    <Clock className="h-10 w-10 mx-auto mb-4 text-blue-light animate-spin-slow will-change-transform" />
                    <h3 className="text-xl font-medium mb-2">Time</h3>
                    <p>Ceremony</p>
                    <p className="text-lg font-medium">3:00 PM</p>
                    <p className="mt-2">Reception</p>
                    <p className="text-lg font-medium">5:30 PM</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border border-blue-light/20 will-change-transform h-full flex flex-col">
                <CardContent className="pt-6 flex flex-col flex-1 justify-between">
                  <div>
                    <MapPin className="h-10 w-10 mx-auto mb-4 text-blue-DEFAULT animate-bounce-slow will-change-transform" />
                    <h3 className="text-xl font-medium mb-2">Location</h3>
                    <p>Rosewood Gardens</p>
                    <p className="text-lg font-medium">123 Blossom Lane</p>
                    <p>Meadowville, CA 90210</p>
                    <Button variant="link" className="mt-2 hover:scale-105 transition-transform" asChild>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                        View Map
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative" id="timeline">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Timeline background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <DecorativeElement position="top-center" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">Wedding Day Timeline</h2>
              <div className="flex justify-center mb-6">
                <Clock className="text-white h-6 w-6" />
              </div>
              <p className="text-white/80 max-w-2xl mx-auto">Here's what to expect on our wedding day.</p>
            </div>
          </AnimatedSection>

          <Timeline />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 relative" id="gallery">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-DEFAULT/10 to-blue-light/10"></div>
        <DecorativeElement position="bottom-left" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Gallery</h2>
              <div className="flex justify-center mb-6">
                <Heart className="text-primary h-6 w-6 animate-pulse" />
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">A glimpse into our journey together.</p>
            </div>
          </AnimatedSection>

          <Gallery />
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 relative" id="rsvp">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="RSVP background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <DecorativeElement position="top-right" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">RSVP</h2>
              <div className="flex justify-center mb-6">
                <Mail className="h-6 w-6 text-blue-light" />
              </div>
              <p className="text-white/80 max-w-2xl mx-auto">
                We hope you can join us! Please RSVP by November 18, 2025.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-md mx-auto">
            <AnimatedSection>
              <div className="bg-background/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-blue-light/20">
                <RsvpForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Registry Section */}
      <section className="py-20 relative" id="registry">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-light/10 to-blue-DEFAULT/10"></div>
        <DecorativeElement position="bottom-right" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Gift Registry</h2>
              <div className="flex justify-center mb-6">
                <Gift className="text-primary h-6 w-6 animate-wiggle" />
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift,
                we've registered at the following places.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {["Amazon", "Crate & Barrel", "Target", "Zola"].map((store, index) => (
              <AnimatedSection key={store} delay={index * 0.1}>
                <div className="text-center">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-sm h-full flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt={store}
                      width={80}
                      height={80}
                      className="mb-4"
                    />
                    <h3 className="font-medium">{store}</h3>
                    <Button variant="link" size="sm" className="hover:scale-110 transition-transform" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        View Registry
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-20 relative" id="accommodations">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Accommodations background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <DecorativeElement position="top-left" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">Accommodations</h2>
              <div className="flex justify-center mb-6">
                <Hotel className="text-white h-6 w-6 animate-float" />
              </div>
              <p className="text-white/80 max-w-2xl mx-auto">
                For our out-of-town guests, we've arranged special rates at these nearby hotels.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Grand Hotel",
                address: "456 Main Street, Meadowville, CA 90210",
                phone: "(555) 123-4567",
                distance: "0.5 miles from venue",
                code: "WEDDING2025",
              },
              {
                name: "Meadowville Inn & Suites",
                address: "789 Park Avenue, Meadowville, CA 90210",
                phone: "(555) 987-6543",
                distance: "1.2 miles from venue",
                code: "BRYANSHAIRA",
              },
            ].map((hotel, index) => (
              <AnimatedSection key={hotel.name} delay={index * 0.2} direction={index % 2 === 0 ? "left" : "right"}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-2">{hotel.name}</h3>
                    <p className="mb-1">{hotel.address}</p>
                    <p className="mb-1">{hotel.phone}</p>
                    <p className="mb-1">{hotel.distance}</p>
                    <p className="mb-4">
                      Group Code: <span className="font-medium">{hotel.code}</span>
                    </p>
                    <Button variant="outline" className="hover:scale-105 transition-transform" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" id="contact">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-DEFAULT/10 to-blue-light/10"></div>
        <DecorativeElement position="bottom-center" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Questions?</h2>
              <div className="flex justify-center mb-6">
                <Phone className="text-primary h-6 w-6 animate-wiggle" />
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you have any questions, please don't hesitate to reach out.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <AnimatedSection direction="left">
              <div className="text-center bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-medium mb-2">Wedding Planner</h3>
                <p>Jessica Thompson</p>
                <p className="mb-2">(555) 555-1234</p>
                <p>jessica@weddingplanner.com</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="text-center bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-medium mb-2">Maid of Honor</h3>
                <p>Emily Johnson</p>
                <p className="mb-2">(555) 555-5678</p>
                <p>emily@example.com</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-2xl md:text-3xl mb-4 animate-glow">Bryan & Shaira</h2>
          <p className="mb-6">December 18, 2025 • Meadowville, CA</p>
          <Separator className="max-w-xs mx-auto opacity-30 mb-6" />
          <p className="text-sm opacity-80">Made with love for our special day</p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <FloatingHearts count={10} speed={0.5} />
        </div>
      </footer>
    </div>
  )
}

