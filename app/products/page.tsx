
import type { Metadata } from "next";
import { use } from "react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Products | Clothing Lab",
    description:
        "Explore Clothing Lab’s latest collection — sustainable fashion, custom designs, and timeless apparel.",
};

const products = [
    {
        id: 1,
        name: "Eco Linen Shirt",
        price: "$89",
        image: "/images/products/linen-shirt.jpg",
        desc: "Breathable, lightweight linen made from eco-friendly fibers.",
    },
    {
        id: 2,
        name: "Tailored Blazer",
        price: "$149",
        image: "/images/products/blazer.jpg",
        desc: "Sharp, versatile blazer crafted for modern silhouettes.",
    },
    {
        id: 3,
        name: "Organic Cotton Tee",
        price: "$39",
        image: "/images/products/cotton-tee.jpg",
        desc: "Soft, durable cotton tee designed for everyday wear.",
    },
    {
        id: 4,
        name: "Sustainable Denim",
        price: "$129",
        image: "/images/products/denim.jpg",
        desc: "Classic denim reimagined with eco-conscious production.",
    },
];

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-[#F7F3EE] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 overflow-x-hidden">
            {/* HERO */}
            <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-100">
                    Our Collection
                </h1>
                <p className="mt-4 text-neutral-700 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
                    Discover fashion that blends innovation, sustainability, and timeless style.
                </p>
                <div className="mt-6 w-16 h-0.5 bg-amber-600 dark:bg-amber-400 mx-auto" />
            </section>

            {/* PRODUCT GRID */}
            <section className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((p) => (
                        <Link key={p.id} href={`/products/${p.id}`} className="group">
                            <div className="bg-[#FAF9F7] dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <img src={p.image} alt={p.name} className="w-full h-64 object-cover group-hover:opacity-90" />
                                <div className="p-6 flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">{p.name}</h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-500">{p.desc}</p>
                                    <span className="mt-2 text-amber-600 dark:text-amber-400 font-bold">{p.price}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
