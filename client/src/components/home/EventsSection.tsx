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
          <Link href="/events" className="mt-4 md:mt-0 bg-neutral-100 hover:bg-neutral-200 text-primary font-semibold py-2 px-4 rounded-md transition duration-300 inline-flex items-center">
            View All Events <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event 1 - Featured Upcoming Event */}
          <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-md card-3d">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-secondary text-white text-center rounded p-2 mr-4">
                  <div className="text-xl font-bold">25-29</div>
                  <div className="text-xs uppercase">Sept</div>
                </div>
                <div>
                  <span className="bg-primary text-white text-xs py-1 px-2 rounded-full">
                    Featured
                  </span>
                  <span className="text-neutral-500 text-sm ml-2 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> All Day
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                2nd Innovation and Entrepreneurship Week
              </h3>
              <p className="text-neutral-600 mb-4">
                Join us for a week of innovation showcases, workshops, and networking 
                opportunities with industry experts and fellow entrepreneurs.
              </p>
              <div className="flex items-center text-neutral-500 text-sm mb-4">
                <MapPin className="h-4 w-4 mr-2" /> Innovation Hub, UEAB Main
                Campus
              </div>
              <Link href="/events#innovation-week-2025" className="inline-flex items-center font-semibold text-secondary hover:text-secondary/80 transition-colors">
                Register Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Event 2 - Community Event */}
          <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-md card-3d">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-secondary text-white text-center rounded p-2 mr-4">
                  <div className="text-xl font-bold">19-22</div>
                  <div className="text-xs uppercase">May</div>
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
                NACOSTI Multisectoral Conference and Exhibition
              </h3>
              <p className="text-neutral-600 mb-4">
                Connect with researchers, innovators, and policymakers at this 
                major national exhibition showcasing innovations across sectors.
              </p>
              <div className="flex items-center text-neutral-500 text-sm mb-4">
                <MapPin className="h-4 w-4 mr-2" /> Nairobi, Kenya
              </div>
              <Link href="/events#nacosti-conference-2025" className="inline-flex items-center font-semibold text-secondary hover:text-secondary/80 transition-colors">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Event 3 - Past Event */}
          <div className="bg-neutral-100 rounded-lg overflow-hidden shadow-md card-3d">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-secondary text-white text-center rounded p-2 mr-4">
                  <div className="text-xl font-bold">17</div>
                  <div className="text-xs uppercase">Feb</div>
                </div>
                <div>
                  <span className="bg-neutral-600 text-white text-xs py-1 px-2 rounded-full">
                    Past Event
                  </span>
                  <span className="text-neutral-500 text-sm ml-2 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 10:00 AM
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                MoU Signing with Factor-Y CbaaS
              </h3>
              <p className="text-neutral-600 mb-4">
                A strategic partnership formed between UEAB and Factor-Y CbaaS to 
                enhance innovation and entrepreneurship opportunities for students.
              </p>
              <div className="flex items-center text-neutral-500 text-sm mb-4">
                <MapPin className="h-4 w-4 mr-2" /> UEAB Main Campus
              </div>
              <Link href="/events#mou-signing" className="inline-flex items-center font-semibold text-secondary hover:text-secondary/80 transition-colors">
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
