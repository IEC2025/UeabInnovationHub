// Import partner logos
import universityLogo from "/src/assets/images/logos/university-logo.png";
import huaweiLogo from "/src/assets/images/logos/huawei-logo.jpg";
import factoryLogo from "/src/assets/images/logos/factory-logo.jpeg";
import microsoftLogo from "/src/assets/images/logos/microsoft-logo.png";
import kipiLogo from "/src/assets/images/logos/kipi-logo.webp";
import nacostiImage from "/src/assets/images/NACOSTI-Logo-.webp";
import keniaLogo from "@assets/final-kenia-logo.jpg_1756132535703.jpeg";

const PartnersSection = () => {
  const partners = [
    {
      name: "University of Eastern Africa, Baraton",
      logo: universityLogo,
      alt: "University of Eastern Africa, Baraton"
    },
    {
      name: "Factor-Y CbaaS",
      logo: factoryLogo,
      alt: "Factor-Y CbaaS"
    },
    {
      name: "Kenya National Innovation Agency",
      logo: keniaLogo,
      alt: "Kenya National Innovation Agency"
    },
    {
      name: "NACOSTI",
      logo: nacostiImage,
      alt: "National Commission for Science, Technology and Innovation"
    },
    {
      name: "Microsoft",
      logo: microsoftLogo,
      alt: "Microsoft"
    },
    {
      name: "Huawei",
      logo: huaweiLogo,
      alt: "Huawei"
    },
    {
      name: "KIPI",
      logo: kipiLogo,
      alt: "Kenya Industrial Property Institute"
    }
  ];

  // Duplicate the partners array for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Our Network
          </div>
          <h2 className="text-3xl font-bold text-primary mt-2 mb-4">
            Our Partners & Collaborators
          </h2>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            We work with industry leaders, government agencies, and other
            innovation hubs to provide the best opportunities for our community.
          </p>
        </div>

        {/* Scrolling ticker container */}
        <div className="relative">
          <div className="ticker-container">
            <div className="ticker-track">
              {duplicatedPartners.map((partner, index) => (
                <div 
                  key={`${partner.name}-${index}`}
                  className="ticker-item flex items-center justify-center p-6 hover:scale-110 transition-all duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.alt}
                    className="max-h-16 max-w-32 object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
