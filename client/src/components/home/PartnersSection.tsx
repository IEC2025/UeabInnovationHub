// Import partner logos
import universityLogo from "/src/assets/images/logos/university-logo.png";
import keniaImage from "/src/assets/images/20241127_112142.jpg";
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Partner: UEAB */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src={universityLogo}
              alt="University of Eastern Africa, Baraton"
              className="max-h-16 object-contain"
            />
          </div>
          
          {/* Partner: KeNIA */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src={keniaImage}
              alt="Kenya National Innovation Agency"
              className="max-h-16 object-contain"
            />
          </div>
          
          {/* Partner: Huawei */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src={huaweiLogo}
              alt="Huawei"
              className="max-h-16 object-contain"
            />
          </div>
          
          {/* Partner: Factor-Y */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src={factoryLogo}
              alt="Factor-Y CbaaS"
              className="max-h-16 object-contain"
            />
          </div>
          
          {/* Partner: Microsoft */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src={microsoftLogo}
              alt="Microsoft"
              className="max-h-16 object-contain"
            />
          </div>
          
          {/* Partner: KIPI */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src={kipiLogo}
              alt="Kenya Industrial Property Institute"
              className="max-h-16 object-contain"
            />
          </div>
          
          {/* Partner: NACOSTI */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src={nacostiImage}
              alt="National Commission for Science, Technology and Innovation"
              className="max-h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
