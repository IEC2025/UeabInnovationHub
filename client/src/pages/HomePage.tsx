import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Target, Users, Lightbulb, Award, Calendar, MapPin, Mail, Phone } from "lucide-react";
import FullPageAnimatedSlider from "@/components/sliders/FullPageAnimatedSlider";
import PartnersSection from "@/components/home/PartnersSection";
import TeamSection from "@/components/home/TeamSection";
import ContactSection from "@/components/home/ContactSection";

const HomePage = () => {
  // Set document title
  useEffect(() => {
    document.title = "Innovation & Entrepreneurship Centre | UEAB";
  }, []);

  // Slider data with Innovation Week as the main featured slide
  const heroSlides = [
    {
      id: 1,
      title: "Innovation Week 2025",
      subtitle: "August 28 - September 3, 2025",
      description: "Join us for the biggest innovation event of the year! Experience cutting-edge showcases, workshops, networking sessions, and discover groundbreaking solutions from UEAB's brightest minds. Don't miss this opportunity to connect with industry leaders and fellow innovators.",
      image: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      mobileImage: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      tabletImage: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      desktopImage: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      cta: {
        text: "Register for Innovation Week",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header",
        variant: "primary" as const
      },
      overlay: {
        opacity: 0.4,
        color: "rgba(0,0,0,0.3)",
        gradient: "linear-gradient(135deg, rgba(30,64,175,0.7) 0%, rgba(59,130,246,0.5) 50%, rgba(147,51,234,0.8) 100%)"
      },
      animation: {
        type: "parallax" as const,
        direction: "up" as const,
        duration: 1500
      },
      contentPosition: "center" as const,
      textAlign: "center" as const,
      specialContent: "countdown" as const
    },
    {
      id: 2,
      title: "Innovation & Entrepreneurship Centre",
      subtitle: "Catalysing Innovation and Entrepreneurial Ecosystems",
      description: "Transform your ideas into impactful ventures through comprehensive startup incubation, mentorship, and cutting-edge resources at the University of Eastern Africa, Baraton. Join a community of innovators and entrepreneurs.",
      image: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      mobileImage: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      tabletImage: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      desktopImage: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      cta: {
        text: "Submit Your Innovation",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header",
        variant: "secondary" as const
      },
      overlay: {
        opacity: 0.4,
        color: "rgba(0,0,0,0.2)",
        gradient: "linear-gradient(135deg, rgba(30,64,175,0.6) 0%, rgba(59,130,246,0.4) 50%, rgba(30,64,175,0.7) 100%)"
      },
      animation: {
        type: "slide" as const,
        direction: "right" as const,
        duration: 1200
      },
      contentPosition: "left" as const,
      textAlign: "left" as const
    },
    {
      id: 3,
      title: "Student Innovation Hub",
      subtitle: "Where Ideas Come to Life",
      description: "Access state-of-the-art facilities, receive guidance from industry experts, and join a vibrant community of innovators to turn your entrepreneurial dreams into reality. Build the future of Africa through innovation.",
      image: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      mobileImage: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      tabletImage: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      desktopImage: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      cta: {
        text: "Explore Programs",
        link: "/programs",
        variant: "outline" as const
      },
      overlay: {
        opacity: 0.4,
        color: "rgba(0,0,0,0.2)",
        gradient: "linear-gradient(135deg, rgba(147,51,234,0.6) 0%, rgba(59,130,246,0.4) 50%, rgba(30,64,175,0.7) 100%)"
      },
      animation: {
        type: "zoom" as const,
        direction: "up" as const,
        duration: 1400
      },
      contentPosition: "center" as const,
      textAlign: "center" as const
    },
    {
      id: 4,
      title: "Partnership & Collaboration",
      subtitle: "Building Bridges to Success",
      description: "Connect with industry partners, investors, and global networks to accelerate innovation and create sustainable business solutions for Africa and beyond. Be part of a transformative ecosystem.",
      image: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      mobileImage: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      tabletImage: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      desktopImage: "@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png",
      cta: {
        text: "Join Our Network",
        link: "/about",
        variant: "primary" as const
      },
      overlay: {
        opacity: 0.4,
        color: "rgba(0,0,0,0.2)",
        gradient: "linear-gradient(135deg, rgba(16,185,129,0.6) 0%, rgba(59,130,246,0.4) 50%, rgba(30,64,175,0.7) 100%)"
      },
      animation: {
        type: "fade" as const,
        duration: 1100
      },
      contentPosition: "right" as const,
      textAlign: "right" as const
    }
  ];

  return (
    <div className="relative">
      {/* Hero Slider with Innovation Week Featured */}
      <div className="relative w-full h-screen overflow-hidden">
        <FullPageAnimatedSlider 
          slides={heroSlides}
          autoPlay={true}
          autoPlayInterval={8000}
          showControls={true}
          showPagination={true}
          enableKeyboard={true}
          enableTouch={true}
          enableParallax={true}
          className="fullpage-hero-slider"
        />
      </div>

      {/* Content sections positioned below the full-page slider */}
      <div className="relative z-20 bg-white">
        {/* Research Development Section */}
        <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Innovation Development</h3>
              <p className="text-gray-600 mb-6">
                Gain insights into cutting-edge innovation development, research commercialization, and establishment of sustainable enterprises within the academic environment.
              </p>
              <div className="text-sm font-semibold text-secondary mb-2">Strategy</div>
              <h4 className="text-lg font-bold text-primary">Innovation Development</h4>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Entrepreneurship</h3>
              <p className="text-gray-600 mb-6">
                Shed light on entrepreneurial opportunities for students, faculty, and the broader community through comprehensive mentorship and resource provision.
              </p>
              <div className="text-sm font-semibold text-secondary mb-2">Strategy</div>
              <h4 className="text-lg font-bold text-primary">Entrepreneurship</h4>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Impact Creation</h3>
              <p className="text-gray-600 mb-6">
                Showcase and celebrate practical solutions developed by innovators within universities that address job creation and sustainable development.
              </p>
              <div className="text-sm font-semibold text-secondary mb-2">Strategy</div>
              <h4 className="text-lg font-bold text-primary">Impact Creation</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About IEC Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="@assets/generated_images/Kenyan_innovation_lab_students_6fdd30ee.png" 
                alt="Innovation Centre" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">About IEC</h2>
              <h3 className="text-2xl font-semibold text-secondary mb-6">Centre 2025</h3>
              <h4 className="text-lg font-medium text-gray-600 mb-6">
                Hosted By: University of Eastern Africa, Baraton (UEAB)
              </h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Innovation and Entrepreneurship Centre (IEC) at UEAB is dedicated to 
                'Transforming Ideas into Impact: Building Sustainable Innovation Ecosystems for Africa.' 
                We emphasize the importance of robust innovation ecosystems in driving sustainable 
                economic development. Our centre underscores the need for effective industry-academia 
                linkages, strategic institutional frameworks, and resilient funding mechanisms to foster 
                innovation and entrepreneurship across the continent.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-gray-600">Students Engaged</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-gray-600">Innovation Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-gray-600">Industry Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-gray-600">Successful Startups</div>
                </div>
              </div>
              <Link 
                href="/about" 
                className="inline-flex items-center text-secondary font-semibold hover:text-secondary/80 transition-colors"
              >
                Learn More About IEC <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IEC Goals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Why Choose IEC?
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Innovation & Entrepreneurship Centre Goals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Increase innovation commercialization success in academia
                </h3>
                <p className="text-gray-600">
                  by enhancing industry-academia linkages and providing comprehensive support for research commercialization.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Train students and faculty on innovation strategies
                </h3>
                <p className="text-gray-600">
                  and explore ways to leverage emerging technologies and AI in innovation development.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Ensure sustainability of innovations
                </h3>
                <p className="text-gray-600">
                  by exploring comprehensive funding models and establishing long-term support mechanisms.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Showcase and celebrate practical solutions
                </h3>
                <p className="text-gray-600">
                  developed by innovators within academia that address job creation and employment challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              Programs
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Choose Your Best Participation Plan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Student Program</h3>
              <div className="text-4xl font-bold text-secondary mb-6">FREE</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Innovation workshops access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Mentorship sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Networking opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Resource library access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Certificate of participation</span>
                </li>
              </ul>
              <Link
                href="/programs"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
              >
                Join Program
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-secondary">
              <div className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                RECOMMENDED
              </div>
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Professional Program</h3>
              <div className="text-4xl font-bold text-secondary mb-6">KSH 5,000</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>All student program benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>VIP networking sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Industry expert mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Partnership opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Premium resources & materials</span>
                </li>
              </ul>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transition-colors inline-block"
              >
                Register Now
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Organization Partnership</h3>
              <div className="text-4xl font-bold text-secondary mb-6">KSH 15,000</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Up to 5 team members access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Exhibition space included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Speaking opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Custom branding options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Post-program follow-up support</span>
                </li>
              </ul>
              <a
                href="mailto:info@ueab.ac.ke"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

        {/* Team and Partners Sections */}
        <TeamSection />
        <PartnersSection />
        
        {/* Contact Section */}
        <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-white/80">
                Innovation Hub, UEAB Main Campus<br />
                University of Eastern Africa, Baraton<br />
                Kenya
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-white/80">
                +254 123 456 789<br />
                +254 987 654 321
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-white/80">
                info@ueab.ac.ke<br />
                Director: Mr. Wakoli Albert
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center"
            >
              Submit Your Innovation Today <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
