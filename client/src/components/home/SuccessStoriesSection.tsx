import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SuccessStoriesSection = () => {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            From Ideas to Impact
          </h2>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            Discover how students and faculty have transformed innovative ideas
            into successful ventures with support from our centre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Success Story 1 - mKiondo */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row card-3d">
            <div className="md:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="mKiondo Innovation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6">
              <span className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                Innovation
              </span>
              <h3 className="text-xl font-bold text-primary mt-3 mb-2">
                mKiondo - Digital Marketplace
              </h3>
              <p className="text-neutral-600 mb-4">
                A revolutionary digital marketplace connecting local artisans directly with 
                international buyers, helping to preserve cultural heritage while providing 
                sustainable income for rural communities.
              </p>
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="Founder"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-primary">James Kiprop</div>
                  <div className="text-sm text-neutral-500">
                    Information Technology, Class of 2022
                  </div>
                </div>
              </div>
              <Link href="/resources#mkiondo" className="inline-flex items-center text-secondary font-semibold hover:text-secondary/80 transition-colors">
                Read Their Story <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Success Story 2 - Renewable Energy Innovation */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row card-3d">
            <div className="md:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Success Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6">
              <span className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                Clean Energy
              </span>
              <h3 className="text-xl font-bold text-primary mt-3 mb-2">
                SolarFlow Solutions
              </h3>
              <p className="text-neutral-600 mb-4">
                An innovative low-cost solar energy solution designed to provide reliable 
                electricity to rural communities. The project was developed through the 
                Innovation & Entrepreneurship Centre's incubation program.
              </p>
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="Founder"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-primary">Sarah Otieno</div>
                  <div className="text-sm text-neutral-500">
                    Electrical Engineering, Class of 2023
                  </div>
                </div>
              </div>
              <Link href="/resources#solarflow" className="inline-flex items-center text-secondary font-semibold hover:text-secondary/80 transition-colors">
                Read Their Story <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="default"
            className="bg-primary hover:bg-primary/90 rotate-3d"
            asChild
          >
            <Link href="/resources#success-stories">
              View All Success Stories
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
