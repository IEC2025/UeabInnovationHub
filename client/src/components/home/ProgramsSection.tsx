import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Our Key Programs
          </h2>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            Explore our comprehensive range of programs designed to foster
            innovation, develop entrepreneurial skills, and support startup
            growth at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Program 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-3d">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')",
              }}
            ></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Startup Incubation
              </h3>
              <p className="text-neutral-600 mb-4">
                Providing workspace, mentorship, and resources to help
                early-stage startups grow and succeed in the market.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-neutral-700">
                  <Check className="text-green-600 mr-2 h-4 w-4" />
                  Dedicated workspace
                </li>
                <li className="flex items-center text-neutral-700">
                  <Check className="text-green-600 mr-2 h-4 w-4" />
                  Business development support
                </li>
                <li className="flex items-center text-neutral-700">
                  <Check className="text-green-600 mr-2 h-4 w-4" />
                  Networking opportunities
                </li>
              </ul>
              <Link href="/programs#incubation" className="inline-flex items-center text-secondary font-semibold hover:text-secondary/80 transition-colors">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-3d">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1475506631979-72412c606f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')",
              }}
            ></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Mentorship Program
              </h3>
              <p className="text-neutral-600 mb-4">
                Connecting students and entrepreneurs with industry experts and
                successful business leaders for guidance.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-neutral-700">
                  <Check className="text-green-600 mr-2 h-4 w-4" />
                  One-on-one coaching
                </li>
                <li className="flex items-center text-neutral-700">
                  <Check className="text-green-600 mr-2 h-4 w-4" />
                  Industry-specific guidance
                </li>
                <li className="flex items-center text-neutral-700">
                  <Check className="text-green-600 mr-2 h-4 w-4" />
                  Career development
                </li>
              </ul>
              <Link href="/programs#mentorship" className="inline-flex items-center text-secondary font-semibold hover:text-secondary/80 transition-colors">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Program 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-3d">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')",
              }}
            ></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Workshops & Training
              </h3>
              <p className="text-neutral-600 mb-4">
                Regular workshops and training sessions on business skills,
                innovation, and entrepreneurship fundamentals.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-neutral-700">
                  <Check className="text-green-600 mr-2 h-4 w-4" />
                  Practical skill development
                </li>
                <li className="flex items-center text-neutral-700">
                  <Check className="text-green-600 mr-2 h-4 w-4" />
                  Industry expert sessions
                </li>
                <li className="flex items-center text-neutral-700">
                  <Check className="text-green-600 mr-2 h-4 w-4" />
                  Hands-on learning
                </li>
              </ul>
              <Link href="/programs#workshops" className="inline-flex items-center text-secondary font-semibold hover:text-secondary/80 transition-colors">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                Submit Your Innovation
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
