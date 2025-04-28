const StatsSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-in slide-in-from-bottom-4 duration-700">
            <div className="text-4xl font-bold mb-2">30+</div>
            <div className="text-lg">Innovation Ideas</div>
          </div>
          <div className="animate-in slide-in-from-bottom-4 duration-700 delay-150">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-lg">Students Trained</div>
          </div>
          <div className="animate-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="text-4xl font-bold mb-2">5+</div>
            <div className="text-lg">Industry Partners</div>
          </div>
          <div className="animate-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="text-4xl font-bold mb-2">$1M</div>
            <div className="text-lg">Funding Target</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
