import React from 'react'
import Link from 'next/link'

const Product = () => {

    const product = [
        {
            slug: "denim-skinny-jeans",
            name: "Denim Skinny Jeans",
            price: 49.99,
            image: " https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            image: " https://images.unsplash.com/photo-1708533644535-fcf447ac0cad?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="p-7 text-center text-3xl font-bold mb-8">Our Products</h1>

            <div className="flex flex-wrap gap-6">
                {product.map((item) => (
                    <div
                        key={item.slug}
                        className="w-full sm:w-[48%] lg:w-[31%] border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-56 object-cover rounded"
                        />

                        <h2 className="mt-4 text-lg font-semibold">{item.name}</h2>
                        <p className="text-gray-600">${item.price}</p>
                        <Link href={`/products/${item.slug}`}>
                            <button className='text-black bg-white hover:bg-cyan-200 rounded px-5 py-2 mt-4 w-fit'>View Product</button>
                        </Link>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Product