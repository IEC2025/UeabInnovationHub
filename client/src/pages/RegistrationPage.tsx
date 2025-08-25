import React from 'react';
import { ArrowRight, Users, Building, Award, MapPin, Calendar, CheckCircle, Globe, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - CEIL Style */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <img
                src="/src/assets/images/iec-logo.png"
                alt="IEC Logo"
                className="h-20 filter brightness-0 invert"
              />
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">
              Welcome! to BIEW 2025
            </div>
            <h1 className="text-5xl font-bold mb-6">
              2nd Annual Baraton Innovation & Entrepreneurship Week
            </h1>
            <p className="text-xl mb-4 opacity-90">
              "Blueprints for Tomorrow: Advancing Learning, Innovation & Enterprise through Design Thinking and Cognitive Mastery"
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-2" />
                September 29 - October 2, 2025
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-2" />
                Innovation Arena, UEAB Campus
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Pillars - CEIL Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img 
                src="/src/assets/images/BTV08785.JPG" 
                alt="Innovation Development" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
                Innovation Development
              </div>
              <p className="text-gray-600 mb-6">
                Gain insights into cutting-edge innovation development, research commercialization, and establishment of sustainable enterprises within the academic environment.
              </p>
              <div className="text-sm font-semibold text-secondary mb-2">Strategy</div>
              <h4 className="text-lg font-bold text-primary">Innovation Development</h4>
              <button className="mt-4 text-primary hover:text-secondary transition-colors">+</button>
            </div>
            <div className="text-center">
              <img 
                src="/src/assets/images/BTV08537.JPG" 
                alt="Entrepreneurship" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
                Entrepreneurship
              </div>
              <p className="text-gray-600 mb-6">
                Shed light on entrepreneurial opportunities for students, faculty, and the broader community through comprehensive mentorship and resource provision.
              </p>
              <div className="text-sm font-semibold text-secondary mb-2">Strategy</div>
              <h4 className="text-lg font-bold text-primary">Entrepreneurship</h4>
              <button className="mt-4 text-primary hover:text-secondary transition-colors">+</button>
            </div>
            <div className="text-center">
              <img 
                src="/src/assets/images/kiw-presentation.jpg" 
                alt="Impact Creation" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
                Impact Creation
              </div>
              <p className="text-gray-600 mb-6">
                Showcase and celebrate practical solutions developed by innovators within universities that address job creation and sustainable development.
              </p>
              <div className="text-sm font-semibold text-secondary mb-2">Strategy</div>
              <h4 className="text-lg font-bold text-primary">Impact Creation</h4>
              <button className="mt-4 text-primary hover:text-secondary transition-colors">+</button>
            </div>
          </div>
        </div>
      </section>

      {/* About BIEW Section - CEIL Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/src/assets/images/innovation-week-banner.jpg" 
                alt="BIEW 2025" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">About BIEW</h2>
              <h3 className="text-2xl font-semibold text-secondary mb-6">Week 2025</h3>
              <h4 className="text-lg font-medium text-gray-600 mb-6">
                Hosted By: University of Eastern Africa, Baraton (UEAB)
              </h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The theme for BIEW 2025 emphasizes 'Blueprints for Tomorrow: Advancing Learning, Innovation & Enterprise through Design Thinking and Cognitive Mastery' which underscores the importance of robust innovation ecosystems in driving sustainable economic development. It highlights the need for effective industry-academia linkages, strategic institutional frameworks, and resilient funding mechanisms to foster innovation and entrepreneurship across Africa.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-gray-600">Expected Attendees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-gray-600">Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-gray-600">Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">4</div>
                  <div className="text-sm text-gray-600">Action Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIEW Goals Section - CEIL Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Why Choose Us?
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">BIEW 2025 Goals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Celebrate Innovation & Startups
                </h3>
                <p className="text-gray-600">
                  Recognizing and promoting student-led innovations and breakthrough ideas that can transform communities across Africa.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Accelerate Research Commercialization
                </h3>
                <p className="text-gray-600">
                  Turning research into market-ready solutions through structured mentorship, funding access, and industry partnerships.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Bridge Innovation & Industry
                </h3>
                <p className="text-gray-600">
                  Creating strong partnerships between students, faculty, and industry stakeholders to facilitate career readiness and problem-solving.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Expand Market Opportunities
                </h3>
                <p className="text-gray-600">
                  Connecting students to regional and global innovation ecosystems and investment networks for sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Options - CEIL Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Registration
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Choose Your Best Registration Plan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Delegation Registration */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8 text-center">
                <img 
                  src="/src/assets/images/ueab-campus-flags.jpg" 
                  alt="Delegation Registration" 
                  className="w-full h-32 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-primary mb-4">Delegation Registration</h3>
                <div className="text-4xl font-bold text-secondary mb-6">Ksh25,000 / delegation</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Full 4-day access</strong> to all sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>VIP networking sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Exhibition booth visits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Meals, refreshments & delegate kit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Panel discussion participation</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header', '_blank')}
                >
                  Select Plan
                </Button>
              </div>
            </div>

            {/* Exhibition Registration */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8 text-center">
                <img 
                  src="/src/assets/images/innovation-week-group.jpg" 
                  alt="Exhibition Registration" 
                  className="w-full h-32 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-primary mb-4">Exhibition Registration</h3>
                <div className="text-4xl font-bold text-secondary mb-6">Ksh15,000 / booth</div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Dedicated exhibition</strong> space</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Setup & teardown support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Branding opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>2 complimentary passes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Digital marketing inclusion</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header', '_blank')}
                >
                  Select Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section - CEIL Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Sponsorship
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Become Part of BIEW</h2>
            <h2 className="text-4xl font-bold text-primary mb-6">Week 2025</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/src/assets/images/BTV08784.JPG" 
                alt="Sponsorship" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Elite Innovation Package</h3>
                <div className="text-3xl font-bold mb-4">Ksh 500,000</div>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Premium branding across all materials</li>
                  <li>• Speaking opportunity in main sessions</li>
                  <li>• 10 complimentary full-access passes</li>
                  <li>• VIP networking and deal room access</li>
                  <li>• Prime exhibition space allocation</li>
                  <li>• Post-event brand endorsement</li>
                </ul>
                <Button
                  className="w-full bg-white text-primary py-2 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Elite Innovation Package Sponsorship', '_blank')}
                >
                  Become sponsor
                </Button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Premium Partnership</h3>
                <div className="text-3xl font-bold text-secondary mb-4">Ksh 250,000</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Strategic branding on all materials</li>
                  <li>• Panel participation opportunity</li>
                  <li>• 6 complimentary full-access passes</li>
                  <li>• Networking session access</li>
                  <li>• Dedicated exhibition booth</li>
                  <li>• Digital marketing inclusion</li>
                </ul>
                <Button
                  className="w-full bg-secondary text-white py-2 px-6 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                  onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Premium Partnership Sponsorship', '_blank')}
                >
                  Become sponsor
                </Button>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Innovation Supporter</h3>
                <div className="text-3xl font-bold text-secondary mb-4">Ksh 100,000</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Event material branding</li>
                  <li>• Opening ceremony recognition</li>
                  <li>• 3 complimentary passes</li>
                  <li>• Shared exhibition space</li>
                  <li>• Social media recognition</li>
                  <li>• Thank you certificate</li>
                </ul>
                <Button
                  className="w-full bg-primary text-white py-2 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Innovation Supporter Sponsorship', '_blank')}
                >
                  Become sponsor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Preview - CEIL Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Speakers
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Let's Meet with Our Speakers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-primary" />
              </div>
              <h4 className="font-bold text-primary">Prof. Msafiri Jackson</h4>
              <p className="text-sm text-gray-600">Vice-Chancellor, UEAB</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-16 w-16 text-secondary" />
              </div>
              <h4 className="font-bold text-primary">Dr. Tonny K. Omwansa</h4>
              <p className="text-sm text-gray-600">CEO, KeNIA</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-16 w-16 text-primary" />
              </div>
              <h4 className="font-bold text-primary">Mr. Albert Wakoli</h4>
              <p className="text-sm text-gray-600">Director, IEC</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="h-16 w-16 text-secondary" />
              </div>
              <h4 className="font-bold text-primary">KIPI, ARIPO, WIPO</h4>
              <p className="text-sm text-gray-600">IP Expert Representatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Africa's Innovation Landscape?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join us for the most comprehensive innovation and entrepreneurship gathering in East Africa
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Venue</h3>
              <p className="text-white/80">
                Innovation Arena<br />
                UEAB Main Campus<br />
                Kenya
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Duration</h3>
              <p className="text-white/80">
                September 29 - October 2, 2025<br />
                4 Days of Innovation<br />
                Full Schedule Available
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contact</h3>
              <p className="text-white/80">
                Email: info@ueab.ac.ke<br />
                Director: Mr. Wakoli Albert<br />
                IEC Team
              </p>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header', '_blank')}
          >
            Register Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 BIEW all rights reserved. Design By Innovation & Entrepreneurship Centre, UEAB.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RegistrationPage;