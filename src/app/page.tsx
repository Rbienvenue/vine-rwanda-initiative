'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Mail, Phone, Instagram, Youtube, Heart, Users, Target, Award, Lightbulb, HandHeart, TrendingUp, Star, CheckCircle, ArrowRight, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'programs', 'impact', 'team', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/vine-rwanda-logo.png"
                alt="Vine Rwanda Initiative"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-gray-900 text-lg">Vine Rwanda Initiative</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'programs', label: 'Programs' },
                { id: 'impact', label: 'Impact' },
                { id: 'team', label: 'Team' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors ${activeSection === item.id
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'programs', label: 'Programs' },
                { id: 'impact', label: 'Impact' },
                { id: 'team', label: 'Team' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 font-medium transition-colors ${activeSection === item.id
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-amber-50"></div>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-bg.png"
            alt="Youth empowerment"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/images/vine-rwanda-logo.png"
                alt="Vine Rwanda Initiative"
                width={120}
                height={120}
                className="mx-auto rounded-2xl shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Rwanda's Youth Through{" "}
              <span className="text-green-600">Talent</span> and{" "}
              <span className="text-amber-600">Purpose</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Welcome to Vine Rwanda Initiative, where every young Rwandan's talent is nurtured, celebrated, and empowered to build a brighter future. We believe in the power of dreams and the strength of community. Join us as we unlock the potential of Rwanda's youth through creativity, mentorship, and opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                <Users className="mr-2 h-5 w-5" />
                Join Us
              </Button>
              <Button size="lg" variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-50 px-8 py-3 text-lg">
                <Heart className="mr-2 h-5 w-5" />
                Support Our Youth
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-700 hover:bg-green-50 px-8 py-3 text-lg"
                onClick={() => scrollToSection('programs')}
              >
                <Target className="mr-2 h-5 w-5" />
                Discover Our Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Vine Rwanda Initiative</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6 leading-relaxed text-green-100">
                Founded by Frank Ritararenga, Vine Rwanda Initiative is a passionate movement dedicated to discovering, mentoring, and supporting young talents across Rwanda. Our core belief is that every young person holds a unique gift that, when nurtured, can contribute meaningfully to society.
              </p>
              <p className="text-lg leading-relaxed text-green-100">
                We focus on creating safe, inspiring spaces where youth can develop skills in music, acting, sports, arts, and leadership. We combine training, financial support, and community engagement to break barriers and open doors for Rwanda's next generation of leaders and creatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to nurture talent and create opportunities for Rwanda's youth
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-gray-900">Talent Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We offer training programs designed to develop skills in music, acting, photography, sports, and more — empowering youth to pursue their passions professionally.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-gray-900">Community Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We organize events, workshops, and build infrastructure like basketball courts to foster a supportive environment for youth development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <HandHeart className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-gray-900">Vine Dream Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  The Vine Dream Fund supports young talents who face financial barriers that limit their opportunities.
                </CardDescription>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-green-200 text-green-700">Scholarships</Badge>
                  <Badge variant="outline" className="border-green-200 text-green-700 ml-2">Equipment Support</Badge>
                  <Badge variant="outline" className="border-green-200 text-green-700">Project Grants</Badge>
                  <Badge variant="outline" className="border-green-200 text-green-700 ml-2">Mentorship Access</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/impact-bg.png"
            alt="Success stories"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Measuring success through the lives we've touched and the dreams we've helped realize
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-green-100">Youth Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-green-100">Programs Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">25+</div>
              <div className="text-green-100">Community Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
              <div className="text-green-100">Commitment to Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals driving change and empowering Rwanda's youth
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg aspect-square">
                  <Image
                    src="/images/team-member-1.jpg"
                    alt="Frank Ritararenga"
                    width={400}
                    height={400}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Frank Ritararenga</h3>
                  <p className="text-green-600 font-medium mb-3">CEO & Founder</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Visionary leader passionate about youth empowerment and community development. Frank founded Vine Rwanda Initiative to create opportunities for young talents across Rwanda.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg aspect-square">
                  <Image
                    src="/images/team-member-2.jpg"
                    alt="Program Coordinator"
                    width={400}
                    height={400}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Uwimana</h3>
                  <p className="text-green-600 font-medium mb-3">Multimedia Production Specialist</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Crafting compelling visual and audio content, including videos and photos, to tell the stories of our impact and showcase the talents of Rwandan youth.                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg aspect-square">
                  <Image
                    src="/images/team-member-3.jpg"
                    alt="Community Mentor"
                    width={400}
                    height={400}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rudasingwa Bienvenue</h3>
                  <p className="text-green-600 font-medium mb-3">Web Development & Digital Solutions Specialist</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Leveraging technology to create innovative digital tools and strategies that enhance our programs and expand our reach to more youth.                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Word from the CEO & Founder</h2>
          <blockquote className="text-lg text-gray-800 italic mb-6 leading-relaxed">
            "I started Vine Rwanda Initiative because I believe in the power of every young person to change their story and shape our nation's future. Talent is everywhere; sometimes all it needs is a chance to grow and be seen. We are here to provide that chance — through support, mentorship, and community. To every young person reading this: never underestimate your potential. Keep dreaming, keep working, and know that you are not alone. Together, we rise."
          </blockquote>
          <p className="text-gray-700 font-semibold">— Frank Ritararenga</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the young talents whose lives have been transformed through our programs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Vine Rwanda Initiative gave me the opportunity to develop my music skills. Today, I'm performing professionally and inspiring other young artists in my community."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-700 font-semibold">AM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alice Mukamana</p>
                    <p className="text-sm text-gray-600">Musician</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "The mentorship I received helped me believe in myself. I've now started my own youth program in my village, reaching over 50 young people."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-amber-700 font-semibold">JB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Jean Baptiste</p>
                    <p className="text-sm text-gray-600">Community Leader</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Through the Vine Dream Fund, I received the equipment I needed to pursue photography. Now I run my own studio and employ three other young people."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-700 font-semibold">MN</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Marie Nyirahabimana</p>
                    <p className="text-sm text-gray-600">Photographer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Motivational Quotes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Words of Inspiration</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-amber-200 bg-amber-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <p className="text-sm text-gray-800 italic mb-3">
                  "The future belongs to those who believe in the beauty of their dreams."
                </p>
                <p className="text-xs text-gray-600">— Eleanor Roosevelt</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <p className="text-sm text-gray-800 italic mb-3">
                  "Your talent is God's gift to you. What you do with it is your gift back to God."
                </p>
                <p className="text-xs text-gray-600">— Leo Buscaglia</p>
              </CardContent>
            </Card>
            <Card className="border-amber-200 bg-amber-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <p className="text-sm text-gray-800 italic mb-3">
                  "Success is not final, failure is not fatal: It is the courage to continue that counts."
                </p>
                <p className="text-xs text-gray-600">— Winston Churchill</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <p className="text-sm text-gray-800 italic mb-3">
                  "Each of us has a unique role to play. Discover your purpose and live it fully."
                </p>
                <p className="text-xs text-gray-600">— Unknown</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-lg text-green-100 mb-8">
            Subscribe to our newsletter to receive updates on our programs, success stories, and upcoming events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white border-white"
            />
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Partners & Sponsors</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We are grateful for the support of organizations and individuals who believe in youth empowerment. Partnering with Vine Rwanda means investing in Rwanda's future by supporting creative and motivated young people.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Positive Social Impact</h3>
                <p className="text-sm text-gray-600">CSR alignment and meaningful community contribution</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Brand Visibility</h3>
                <p className="text-sm text-gray-600">Recognition at events and in media coverage</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Direct Impact</h3>
                <p className="text-sm text-gray-600">Involvement in inspiring transformation stories</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to join our mission or learn more about our programs? We'd love to hear from you.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-3 text-amber-400" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:vinerwanda524@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  vinerwanda524@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-3 text-amber-400" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+250781830239" className="text-gray-300 hover:text-green-400 transition-colors">
                  +250 781 830 239
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Instagram className="h-8 w-8 mb-3 text-amber-400" />
                <h3 className="font-semibold mb-2">Instagram</h3>
                <a href="https://instagram.com/vine_rwandainitiative" className="text-gray-300 hover:text-green-400 transition-colors">
                  @vine_rwandainitiative
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Youtube className="h-8 w-8 mb-3 text-amber-400" />
                <h3 className="font-semibold mb-2">YouTube</h3>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  Vine Rwanda TV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image
              src="/images/vine-rwanda-logo.png"
              alt="Vine Rwanda Initiative"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-white">Vine Rwanda Initiative</span>
          </div>
          <p className="mb-4">© 2025 Vine Rwanda Initiative. Empowering Rwanda's youth, inspiring greatness.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
