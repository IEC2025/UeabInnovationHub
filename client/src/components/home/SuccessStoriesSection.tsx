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
          {/* Success Story 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Success Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6">
              <span className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                AgriTech
              </span>
              <h3 className="text-xl font-bold text-primary mt-3 mb-2">
                FarmSense Solutions
              </h3>
              <p className="text-neutral-600 mb-4">
                A student-led startup developing affordable soil sensors and
                analytics software to help small-scale farmers optimize crop
                yields.
              </p>
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/42.jpg"
                  alt="Founder"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-primary">Jane Mwangi</div>
                  <div className="text-sm text-neutral-500">
                    Computer Science, Class of 2019
                  </div>
                </div>
              </div>
              <Link href="/resources#farmsense">
                <a className="inline-flex items-center text-secondary font-semibold hover:text-secondary/80 transition-colors">
                  Read Their Story <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Link>
            </div>
          </div>

          {/* Success Story 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Success Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6">
              <span className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                EdTech
              </span>
              <h3 className="text-xl font-bold text-primary mt-3 mb-2">
                LearnConnect
              </h3>
              <p className="text-neutral-600 mb-4">
                An educational platform connecting students with local tutors and
                providing personalized learning resources tailored to the Kenyan
                curriculum.
              </p>
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Founder"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-primary">David Kimani</div>
                  <div className="text-sm text-neutral-500">
                    Education, Class of 2020
                  </div>
                </div>
              </div>
              <Link href="/resources#learnconnect">
                <a className="inline-flex items-center text-secondary font-semibold hover:text-secondary/80 transition-colors">
                  Read Their Story <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="default"
            className="bg-primary hover:bg-primary/90"
            asChild
          >
            <Link href="/resources#success-stories">
              <a>View All Success Stories</a>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
