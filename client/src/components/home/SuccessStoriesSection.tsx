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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Success Story 1 - Ms. Ester Ateka */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-3d">
            <div className="h-48">
              <img
                src="@assets/generated_images/African_mentorship_workspace_8e7b7b85.png"
                alt="Innovation Success"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                Leadership Excellence
              </span>
              <h3 className="text-xl font-bold text-primary mt-3 mb-2">
                Mentorship Impact
              </h3>
              <p className="text-neutral-600 mb-4">
                Through dedicated mentorship and leadership programs, fostering the next generation 
                of innovators and entrepreneurs at UEAB.
              </p>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full mr-3 bg-primary flex items-center justify-center text-white font-bold">
                  EA
                </div>
                <div>
                  <div className="font-semibold text-primary">Ms. Ester Ateka</div>
                  <div className="text-sm text-neutral-500">
                    Student Mentorship Coordinator
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Story 2 - Dr. Otengo Antoney */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-3d">
            <div className="h-48">
              <img
                src="@assets/generated_images/African_research_innovation_space_87e257ae.png"
                alt="Research Innovation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                Research Innovation
              </span>
              <h3 className="text-xl font-bold text-primary mt-3 mb-2">
                Academic Excellence
              </h3>
              <p className="text-neutral-600 mb-4">
                Leading groundbreaking research initiatives and contributing to innovation 
                frameworks within the academic environment.
              </p>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full mr-3 bg-primary flex items-center justify-center text-white font-bold">
                  OA
                </div>
                <div>
                  <div className="font-semibold text-primary">Dr. Otengo Antoney</div>
                  <div className="text-sm text-neutral-500">
                    Research & Innovation Lead
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Story 3 - Mr. Meule Wafula */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-3d">
            <div className="h-48">
              <img
                src="@assets/generated_images/African_student_leadership_space_6547dcc9.png"
                alt="Student Leadership"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                Student Leadership
              </span>
              <h3 className="text-xl font-bold text-primary mt-3 mb-2">
                Innovation Advocacy
              </h3>
              <p className="text-neutral-600 mb-4">
                Championing student innovation initiatives and building bridges between 
                student entrepreneurs and industry partners.
              </p>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full mr-3 bg-primary flex items-center justify-center text-white font-bold">
                  MW
                </div>
                <div>
                  <div className="font-semibold text-primary">Mr. Meule Wafula</div>
                  <div className="text-sm text-neutral-500">
                    Student Coordinator
                  </div>
                </div>
              </div>
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
