import { Link } from "wouter";
import { Lightbulb, Users, Rocket, GraduationCap, ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700&q=80"
                alt="Innovation Hub Space"
                className="rounded-lg shadow-lg object-cover h-[450px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
              Fostering Innovation in Academia
            </h2>
            <p className="text-neutral-700 mb-6">
              The Innovation and Entrepreneurship Centre at the University of
              Eastern Africa, Baraton is a hub for creativity, innovation, and
              entrepreneurial development. We provide students, faculty, and the
              wider community with resources, mentorship, and opportunities to
              transform ideas into impactful ventures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-neutral-100 p-3 rounded-lg mr-4">
                  <Lightbulb className="text-secondary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Innovation Support</h3>
                  <p className="text-neutral-600">
                    Nurturing creative ideas and solutions to real-world problems
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-neutral-100 p-3 rounded-lg mr-4">
                  <Users className="text-secondary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Collaboration</h3>
                  <p className="text-neutral-600">
                    Building partnerships with industry, government, and academia
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-neutral-100 p-3 rounded-lg mr-4">
                  <Rocket className="text-secondary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Startup Incubation</h3>
                  <p className="text-neutral-600">
                    Providing resources to transform ideas into viable businesses
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-neutral-100 p-3 rounded-lg mr-4">
                  <GraduationCap className="text-secondary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Skills Development</h3>
                  <p className="text-neutral-600">
                    Equipping students with entrepreneurial mindsets and skills
                  </p>
                </div>
              </div>
            </div>
            <Link href="/about">
              <a className="inline-flex items-center font-semibold text-secondary hover:text-secondary/80 transition-colors">
                Learn more about our mission
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
