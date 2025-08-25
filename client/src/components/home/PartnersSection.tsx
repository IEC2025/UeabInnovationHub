// Import partner logos
import universityLogo from "/src/assets/images/logos/university-logo.png";
import huaweiLogo from "/src/assets/images/logos/huawei-logo.jpg";
import factoryLogo from "/src/assets/images/logos/factory-logo.jpeg";
import microsoftLogo from "/src/assets/images/logos/microsoft-logo.png";
import kipiLogo from "/src/assets/images/logos/kipi-logo.webp";
import nacostiImage from "/src/assets/images/NACOSTI-Logo-.webp";

const PartnersSection = () => {
  return (
    <section className="py-12 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {/* Partner: UEAB */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src={universityLogo}
              alt="University of Eastern Africa, Baraton"
              className="max-h-16 object-contain"
            />
          </div>
          
          {/* Partner: CBAAS */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src={factoryLogo}
              alt="Factor-Y CbaaS"
              className="max-h-16 object-contain"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
