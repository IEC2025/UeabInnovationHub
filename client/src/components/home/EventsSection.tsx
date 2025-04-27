import { Link } from "wouter";
import { ArrowRight, Clock, MapPin } from "lucide-react";

const EventsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Stay Informed
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
              Upcoming Events
            </h2>
          </div>
          <Link href="/events">
            <a className="mt-4 md:mt-0 bg-neutral-100 hover:bg-neutral-200 text-primary font-semibold py-2 px-4 rounded-md transition duration-300 inline-flex items-center">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event 1 */}
          <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-secondary text-white text-center rounded p-2 mr-4">
                  <div className="text-xl font-bold">15</div>
                  <div className="text-xs uppercase">Sept</div>
                </div>
                <div>
                  <span className="bg-primary text-white text-xs py-1 px-2 rounded-full">
                    Workshop
                  </span>
                  <span className="text-neutral-500 text-sm ml-2 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 2:00 PM - 5:00 PM
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Design Thinking Workshop
              </h3>
              <p className="text-neutral-600 mb-4">
                Learn how to apply design thinking principles to solve
                real-world problems and create innovative solutions.
              </p>
              <div className="flex items-center text-neutral-500 text-sm mb-4">
                <MapPin className="h-4 w-4 mr-2" /> Innovation Hub, UEAB Main
                Campus
              </div>
              <Link href="/events#design-thinking">
                <a className="inline-flex items-center font-semibold text-secondary hover:text-secondary/80 transition-colors">
                  Register Now <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Link>
            </div>
          </div>

          {/* Event 2 */}
          <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-secondary text-white text-center rounded p-2 mr-4">
                  <div className="text-xl font-bold">22</div>
                  <div className="text-xs uppercase">Sept</div>
                </div>
                <div>
                  <span className="bg-primary text-white text-xs py-1 px-2 rounded-full">
                    Seminar
                  </span>
                  <span className="text-neutral-500 text-sm ml-2 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 10:00 AM - 12:00 PM
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Funding Opportunities for Startups
              </h3>
              <p className="text-neutral-600 mb-4">
                Discover various funding options available for early-stage
                startups and how to prepare winning grant applications.
              </p>
              <div className="flex items-center text-neutral-500 text-sm mb-4">
                <MapPin className="h-4 w-4 mr-2" /> Virtual Event (Zoom)
              </div>
              <Link href="/events#funding-opportunities">
                <a className="inline-flex items-center font-semibold text-secondary hover:text-secondary/80 transition-colors">
                  Register Now <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Link>
            </div>
          </div>

          {/* Event 3 */}
          <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-secondary text-white text-center rounded p-2 mr-4">
                  <div className="text-xl font-bold">30</div>
                  <div className="text-xs uppercase">Sept</div>
                </div>
                <div>
                  <span className="bg-primary text-white text-xs py-1 px-2 rounded-full">
                    Networking
                  </span>
                  <span className="text-neutral-500 text-sm ml-2 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 4:00 PM - 7:00 PM
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Entrepreneur Mixer
              </h3>
              <p className="text-neutral-600 mb-4">
                Connect with fellow entrepreneurs, investors, and industry
                experts in this networking event designed to build valuable
                relationships.
              </p>
              <div className="flex items-center text-neutral-500 text-sm mb-4">
                <MapPin className="h-4 w-4 mr-2" /> Innovation Hub, UEAB Main
                Campus
              </div>
              <Link href="/events#entrepreneur-mixer">
                <a className="inline-flex items-center font-semibold text-secondary hover:text-secondary/80 transition-colors">
                  Register Now <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
