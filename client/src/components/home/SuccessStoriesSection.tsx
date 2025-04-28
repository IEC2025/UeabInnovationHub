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

        <div className="grid grid-cols-1 md:grid-cols-1 max-w-3xl mx-auto gap-8">
          {/* Success Story - M-Kiondo ChapChap */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row card-3d">
            <div className="md:w-2/5">
              <img
                src="/src/assets/images/Screenshot 2025-03-23 110152.png"
                alt="M-Kiondo ChapChap Innovation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6">
              <span className="bg-secondary text-white text-xs py-1 px-2 rounded-full">
                E-Commerce Innovation
              </span>
              <h3 className="text-xl font-bold text-primary mt-3 mb-2">
                M-Kiondo ChapChap
              </h3>
              <p className="text-neutral-600 mb-4">
                A groundbreaking innovation developed by UEAB students that has been shortlisted for the 
                Presidential Innovation Award. M-Kiondo ChapChap is a digital marketplace designed to 
                connect buyers and sellers, streamlining the shopping experience for essential goods.
              </p>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full mr-3 bg-primary flex items-center justify-center text-white font-bold">
                  IEC
                </div>
                <div>
                  <div className="font-semibold text-primary">UEAB Innovation Team</div>
                  <div className="text-sm text-neutral-500">
                    Innovation & Entrepreneurship Centre
                  </div>
                </div>
              </div>
              <a href="https://ueab.ac.ke/ueab-students-groundbreaking-m-kiondo-chapchap-innovation-shortlisted-for-presidential-innovation-award/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-secondary font-semibold hover:text-secondary/80 transition-colors">
                Read Their Story <ArrowRight className="ml-1 h-4 w-4" />
              </a>
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
