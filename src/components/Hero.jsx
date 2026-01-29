import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTAzfHx3b21lbnxlbnwwfHwwfHx8MA%3D%3D"
        alt="Woman in modern fashion outfit"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 z-10 flex items-center justify-center px-8 md:px-20">
        <div className="max-w-xl space-y-6 text-center text-white animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Style That Speaks for You
          </h2>

          <p className="text-base md:text-lg text-neutral-200 leading-relaxed">
            Discover the latest fashion trends at unbeatable prices.
          </p>

          <button className="rounded-full px-8 py-4 bg-white text-black font-semibold transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
