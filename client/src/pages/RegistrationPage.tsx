import React from 'react';
import { ArrowRight, Users, Building, Award, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <img
                src="/src/assets/images/iec-logo.png"
                alt="IEC Logo"
                className="h-20 filter brightness-0 invert"
              />
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

      {/* Strategy Pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Innovation Development</h3>
              <p className="text-gray-600 mb-6">
                Gain insights into cutting-edge innovation development, research commercialization, and establishment of sustainable enterprises within the academic environment.
              </p>
              <div className="text-sm font-semibold text-secondary mb-2">Strategy</div>
              <h4 className="text-lg font-bold text-primary">Innovation Development</h4>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Entrepreneurship</h3>
              <p className="text-gray-600 mb-6">
                Shed light on entrepreneurial opportunities for students, faculty, and the broader community through comprehensive mentorship and resource provision.
              </p>
              <div className="text-sm font-semibold text-secondary mb-2">Strategy</div>
              <h4 className="text-lg font-bold text-primary">Entrepreneurship</h4>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Impact Creation</h3>
              <p className="text-gray-600 mb-6">
                Showcase and celebrate practical solutions developed by innovators within universities that address job creation and sustainable development.
              </p>
              <div className="text-sm font-semibold text-secondary mb-2">Strategy</div>
              <h4 className="text-lg font-bold text-primary">Impact Creation</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About BIEW Section */}
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
                The 2nd Annual Baraton Innovation and Entrepreneurship Week emphasizes the importance of robust innovation ecosystems in driving sustainable economic development. We underscore the need for effective industry-academia linkages, strategic institutional frameworks, and resilient funding mechanisms to foster innovation and entrepreneurship across Africa.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-gray-600">Expected Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-gray-600">Innovation Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-gray-600">Industry Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">4</div>
                  <div className="text-sm text-gray-600">Action-Packed Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIEW Goals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Why Participate?
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
                  Recognizing and promoting student-led innovations and breakthrough ideas that can transform communities.
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
                  Turning research into market-ready solutions through structured mentorship and funding access.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Expand Market Opportunities
                </h3>
                <p className="text-gray-600">
                  Connecting students to regional and global innovation ecosystems and investment networks.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Bridge Innovation & Industry
                </h3>
                <p className="text-gray-600">
                  Creating strong partnerships between students, faculty, and industry stakeholders for career readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Registration
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Choose Your Registration Type</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Delegation Registration */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-secondary">
              <div className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block">
                RECOMMENDED
              </div>
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Delegation Registration</h3>
              <div className="text-4xl font-bold text-secondary mb-6">KSH 25,000</div>
              <p className="text-gray-600 mb-6">Perfect for external institutions, organizations, and corporate delegations</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full 4-day access to all sessions</span>
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
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Certificate of participation</span>
                </li>
              </ul>
              <Button
                className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header', '_blank')}
              >
                Register Delegation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Exhibition Registration */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Exhibition Registration</h3>
              <div className="text-4xl font-bold text-secondary mb-6">KSH 15,000</div>
              <p className="text-gray-600 mb-6">Ideal for showcasing innovations, products, and services</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dedicated exhibition space</span>
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
                  <span>Networking session access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Digital marketing inclusion</span>
                </li>
              </ul>
              <Button
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header', '_blank')}
              >
                Register Exhibition <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Sponsorship
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Become Part of BIEW 2025</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Elite Package */}
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Elite Innovation Package</h3>
              <div className="text-4xl font-bold mb-6">KSH 500,000</div>
              <ul className="text-left space-y-3 mb-8 text-white/90">
                <li>• Premium branding across all materials</li>
                <li>• Speaking opportunity</li>
                <li>• 10 complimentary passes</li>
                <li>• VIP networking access</li>
                <li>• Prime exhibition space</li>
                <li>• Post-event brand endorsement</li>
              </ul>
              <Button
                className="w-full bg-white text-primary py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Elite Innovation Package Sponsorship', '_blank')}
              >
                Become Sponsor
              </Button>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-secondary">
              <div className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Premium Partnership</h3>
              <div className="text-4xl font-bold text-secondary mb-6">KSH 250,000</div>
              <ul className="text-left space-y-3 mb-8 text-gray-600">
                <li>• Strategic branding placement</li>
                <li>• Panel participation</li>
                <li>• 6 complimentary passes</li>
                <li>• Networking session access</li>
                <li>• Exhibition booth</li>
                <li>• Digital marketing inclusion</li>
              </ul>
              <Button
                className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Premium Partnership Sponsorship', '_blank')}
              >
                Become Sponsor
              </Button>
            </div>

            {/* Supporter Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Innovation Supporter</h3>
              <div className="text-4xl font-bold text-secondary mb-6">KSH 100,000</div>
              <ul className="text-left space-y-3 mb-8 text-gray-600">
                <li>• Event material branding</li>
                <li>• Recognition in opening ceremony</li>
                <li>• 3 complimentary passes</li>
                <li>• Shared exhibition space</li>
                <li>• Social media recognition</li>
                <li>• Thank you certificate</li>
              </ul>
              <Button
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Innovation Supporter Sponsorship', '_blank')}
              >
                Become Sponsor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Schedule Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">4-Day Program Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive program designed to maximize engagement, learning, and networking opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-primary mb-2">Day 1: Opening & Ecosystem</h3>
              <p className="text-sm text-gray-600">Launch ceremony, regional innovation report, and industry alignment discussions</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-primary mb-2">Day 2: Policy in Action</h3>
              <p className="text-sm text-gray-600">KeNIA CEO visit, keynote on innovation funding, and policy alignment</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-primary mb-2">Day 3: IP & Knowledge</h3>
              <p className="text-sm text-gray-600">Intellectual property training, registration consultations, and legal guidance</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-primary mb-2">Day 4: Impact & Awards</h3>
              <p className="text-sm text-gray-600">Youth pitching competition, awards ceremony, and closing celebrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Join BIEW 2025?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Don't miss this opportunity to be part of Africa's premier innovation and entrepreneurship gathering
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Venue</h3>
              <p className="text-white/80">
                Innovation Arena<br />
                University of Eastern Africa, Baraton<br />
                Kenya
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dates</h3>
              <p className="text-white/80">
                September 29 - October 2, 2025<br />
                4 Days of Innovation<br />
                Full Program Schedule
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
                IEC Coordination Team
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button
              size="lg"
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header', '_blank')}
            >
              Register Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;