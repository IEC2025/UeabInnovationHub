import { Link } from "wouter";
import { ArrowRight, Clock, MapPin } from "lucide-react";

const EventsSection = () => {
  // Google Form registration link for the mentorship program and innovation week
  const registrationFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=sf_link";

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Innovation Week Featured Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-16 text-white">
          <div className="text-center mb-8">
            <div className="text-sm font-semibold uppercase tracking-wider opacity-90">
              🚀 Featured Event
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Innovation Week 2025
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transforming Ideas into Impact: The Premier Innovation & Entrepreneurship Showcase
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
              <div className="text-2xl font-bold">📅 August 28 - September 3, 2025</div>
              <div className="text-lg">📍 UEAB Main Campus</div>
            </div>
          </div>

          {/* Achievement Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Expected Participants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Innovation Showcases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-white/80">Expert Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-white/80">Industry Partners</div>
            </div>
          </div>

          {/* Goals Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">Innovation Week 2025 Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Showcase Student Innovations</h4>
                  <p className="text-white/90">Present groundbreaking solutions developed by UEAB students addressing real-world challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Foster Industry-Academia Linkages</h4>
                  <p className="text-white/90">Connect students with industry experts, mentors, and potential employers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Promote Entrepreneurship Culture</h4>
                  <p className="text-white/90">Inspire and equip students with entrepreneurial skills and mindset.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Celebrate Innovation Excellence</h4>
                  <p className="text-white/90">Recognize outstanding innovations and their potential for societal impact.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Packages */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">Choose Your Participation Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Student Pass</h4>
                <div className="text-3xl font-bold mb-4">FREE</div>
                <ul className="text-sm text-white/90 mb-6 space-y-2">
                  <li>• All workshops access</li>
                  <li>• Networking sessions</li>
                  <li>• Innovation showcase</li>
                  <li>• Certificate of participation</li>
                </ul>
                <a 
                  href={registrationFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Register Now
                </a>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center border-2 border-white/30">
                <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm mb-2 inline-block">RECOMMENDED</div>
                <h4 className="text-xl font-bold mb-2">Professional Pass</h4>
                <div className="text-3xl font-bold mb-4">KSH 5,000</div>
                <ul className="text-sm text-white/90 mb-6 space-y-2">
                  <li>• All student pass benefits</li>
                  <li>• VIP networking dinner</li>
                  <li>• Exclusive mentorship sessions</li>
                  <li>• Industry partnership opportunities</li>
                  <li>• Premium workshop materials</li>
                </ul>
                <a 
                  href={registrationFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary/90 transition-colors inline-block"
                >
                  Register Now
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Organization Pass</h4>
                <div className="text-3xl font-bold mb-4">KSH 15,000</div>
                <ul className="text-sm text-white/90 mb-6 space-y-2">
                  <li>• Up to 5 team members</li>
                  <li>• Exhibition space included</li>
                  <li>• Speaking opportunity</li>
                  <li>• Custom branding options</li>
                  <li>• Post-event follow-up</li>
                </ul>
                <a 
                  href={registrationFormUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Submit Your Innovation <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Other Events Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              More Events
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
              Upcoming Events
            </h2>
          </div>
          <Link href="/events" className="mt-4 md:mt-0 bg-neutral-100 hover:bg-neutral-200 text-primary font-semibold py-2 px-4 rounded-md transition duration-300 inline-flex items-center">
            View All Events <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Event 1 - Community Event */}
          <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-md card-3d">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-secondary text-white text-center rounded p-2 mr-4">
                  <div className="text-xl font-bold">11-12</div>
                  <div className="text-xs uppercase">Sept</div>
                </div>
                <div>
                  <span className="bg-primary text-white text-xs py-1 px-2 rounded-full">
                    Community
                  </span>
                  <span className="text-neutral-500 text-sm ml-2 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> All Day
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                CIEL Summit 2025
              </h3>
              <p className="text-neutral-600 mb-4">
                Connect with researchers, innovators, and policymakers at this 
                major national summit showcasing innovations and entrepreneurship.
              </p>
              <div className="flex items-center text-neutral-500 text-sm mb-4">
                <MapPin className="h-4 w-4 mr-2" /> Kenya
              </div>
              <a href="https://ceil.kenia.go.ke/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-secondary hover:text-secondary/80 transition-colors">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Event 3 - Past Event */}
          <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-md card-3d">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-secondary text-white text-center rounded p-2 mr-4">
                  <div className="text-xl font-bold">4-7</div>
                  <div className="text-xs uppercase">Nov</div>
                </div>
                <div>
                  <span className="bg-neutral-600 text-white text-xs py-1 px-2 rounded-full">
                    Past Event
                  </span>
                  <span className="text-neutral-500 text-sm ml-2 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> All Day
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                1st Innovation and Entrepreneurship Week 2024
              </h3>
              <p className="text-neutral-600 mb-4">
                The inaugural Innovation and Entrepreneurship Week showcased student projects, 
                workshops, and connected students with industry partners.
              </p>
              <div className="flex items-center text-neutral-500 text-sm mb-4">
                <MapPin className="h-4 w-4 mr-2" /> UEAB Main Campus
              </div>
              <Link href="/events#innovation-week-2024" className="inline-flex items-center font-semibold text-secondary hover:text-secondary/80 transition-colors">
                View Details <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
