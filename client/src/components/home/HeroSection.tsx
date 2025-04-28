import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.7)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-3xl animate-in fade-in duration-700">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Empowering Innovation & Entrepreneurship
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Building tomorrow's leaders and innovators through collaboration,
            education, and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/programs"
              className="bg-secondary hover:bg-secondary/80 text-white font-bold py-3 px-6 rounded-md transition duration-300 text-center"
            >
              Our Programs
            </Link>
            <Link 
              href="/contact"
              className="bg-white hover:bg-neutral-200 text-primary font-bold py-3 px-6 rounded-md transition duration-300 text-center"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
