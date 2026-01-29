import React from 'react'
import { notFound } from 'next/navigation'

const products = [
  {
    slug: "denim-skinny-jeans",
    name: "Denim Skinny Jeans",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Slim-fit denim jeans for a sleek and trendy look.",
  },
  {
    slug: "urban-classic-tshirt",
    name: "Urban Classic T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    description: "Soft cotton t-shirt with a modern urban fit, perfect for everyday wear.",
  },
  {
    slug: "classic-red-bomber-jacket",
    name: "Classic Red Bomber Jacket",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1555487497-5538584fb126?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Bold red bomber jacket with zip details and a cozy lining.",
  },
  {
    slug: "black-oversized-hoodie",
    name: "Black Oversized Hoodie",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1708533644535-fcf447ac0cad?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Soft and oversized hoodie, perfect for layering and comfort.",
  },
  {
    slug: "white-leather-sneakers",
    name: "White Leather Sneakers",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1597350584914-55bb62285896?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Clean white sneakers with leather finish for casual and chic style.",
  },
  {
    slug: "black-cotton-baseball-cap",
    name: "Black Cotton Baseball Cap",
    price: 14.99,
    image: "https://plus.unsplash.com/premium_photo-1677404693004-d5b10cc39cbc?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Simple black baseball cap made from breathable cotton.",
  },
]

const Page = async({ params }) => {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);


  if (!product) {
    notFound();
  }

  return (
  <div className="min-h-screen flex items-center justify-center px-4">
    <div className="max-w-4xl w-full p-6 flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-sm">
      
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-80 object-cover rounded"
      />

      {/* Details */}
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-3xl font-bold text-gray-500">{product.name}</h1>
        <p className="text-xl text-gray-700">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>

        <button className="w-fit px-6 py-2 bg-black text-white rounded hover:opacity-90 transition">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
)

}

export default Page
