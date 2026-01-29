import React from "react";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-24 space-y-24">
      
      <h1 className="text-xl uppercase tracking-widest text-neutral-400">
        About Our Store
      </h1>

      {/* Our Story */}
      <section>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          Our Story
        </h2>

        <p className="mt-8 max-w-2xl text-neutral-600 leading-relaxed">
          We started FashionStore to make trendy clothing affordable and accessible for everyone.
        </p>

        <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed">
          What began as a small idea quickly grew into a brand driven by creativity, inclusivity, 
          and a love for modern fashion.
        </p>

        <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed">
          Today, we continue to evolve by listening to our community and adapting to the latest trends.
        </p>
      </section>

      {/* Our Mission */}
      <section>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          Our Mission
        </h2>

        <p className="mt-8 max-w-2xl text-neutral-600 leading-relaxed">
          Our mission is to deliver stylish, high-quality clothing that boosts confidence.
        </p>

        <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed">
          We believe fashion should be expressive, comfortable, and empowering—no compromises.
        </p>

        <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed">
          From design to delivery, we focus on quality, sustainability, and customer satisfaction.
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

        <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed">
          Our designers, developers, and marketers work closely to bring fresh ideas to life.
        </p>

        <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed">
          Together, we aim to build not just a store, but a community around style and confidence.
        </p>
      </section>

    </div>
  );
};

export default page;
