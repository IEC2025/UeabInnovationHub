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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Partner: UEAB */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src="https://ueab.ac.ke/wp-content/uploads/2019/10/WEBLOGO.png"
              alt="University of Eastern Africa, Baraton"
              className="max-h-16"
            />
          </div>
          
          {/* Partner: KeNIA */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src="https://kenia.go.ke/wp-content/uploads/2021/01/cropped-KENIA-Blue-Logo-Only-1.png"
              alt="KeNIA"
              className="max-h-16"
            />
          </div>
          
          {/* Partner: NACOSTI */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src="https://nacosti.go.ke/wp-content/themes/nacosti-theme/images/logo-footer.png"
              alt="NACOSTI"
              className="max-h-16"
            />
          </div>
          
          {/* Partner: Factor-Y */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <div className="h-16 flex items-center justify-center font-bold text-xl text-primary">
              Factor-Y CbaaS
            </div>
          </div>
          
          {/* Partner: KIPI */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src="https://kipi.go.ke/templates/kipi_r_v2/images/kipi_logo.png"
              alt="KIPI"
              className="max-h-16"
            />
          </div>
          
          {/* Partner: Huawei */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src="https://www.huawei.com/-/media/corporate/images/home/logo/new-logo.png"
              alt="Huawei"
              className="max-h-16"
            />
          </div>
          
          {/* Partner: Microsoft */}
          <div className="flex items-center justify-center p-4 hover:scale-110 transition-all duration-300 card-3d">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
              alt="Microsoft"
              className="max-h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
