'use client'
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');

  };

  return (
    <section className="px-8 py-24 max-w-4xl mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-neutral-600 max-w-xl mx-auto leading-relaxed">
          Have a question about our products or orders?
          Send us a message and we’ll get back to you soon.
        </p>
      </div>


      <form className="grid gap-6"
        onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />


        <textarea
          placeholder="Your Message"
          rows={6}
          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="w-fit px-8 py-4 bg-neutral-900 text-white font-semibold rounded-full
                     transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact

