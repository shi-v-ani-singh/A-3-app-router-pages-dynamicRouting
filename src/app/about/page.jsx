import React from "react";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-24 space-y-24">
      
      <h1 className="text-xs uppercase tracking-widest text-neutral-400">
        About Our Store
      </h1>

      <section>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          Our Story
        </h2>
        <p className="mt-8 max-w-2xl text-neutral-600 leading-relaxed">
          We started FashionStore to make trendy clothing affordable and accessible for everyone.
        </p>
      </section>

      <section>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          Our Mission
        </h2>
        <p className="mt-8 max-w-2xl text-neutral-600 leading-relaxed">
          Our mission is to deliver stylish, high-quality clothing that boosts confidence.
        </p>
      </section>

      {/* Our Team */}
      <section>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          Our Team
        </h2>
        <p className="mt-8 max-w-2xl text-neutral-600 leading-relaxed">
          We are a passionate team of fashion lovers and developers.
        </p>
      </section>

    </div>
  );
};

export default page;
