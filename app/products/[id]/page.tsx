"use client";

import { notFound } from "next/navigation";

const products = [
  { id: "1", name: "Eco Linen Shirt", price: "$89", desc: "Breathable linen...", image: "/images/products/linen-shirt.jpg" },
  { id: "2", name: "Tailored Blazer", price: "$149", desc: "Sharp blazer...", image: "/images/products/blazer.jpg" },
  { id: "3", name: "Organic Cotton Tee", price: "$39", desc: "Soft cotton tee...", image: "/images/products/cotton-tee.jpg" },
  { id: "4", name: "Sustainable Denim", price: "$129", desc: "Eco denim...", image: "/images/products/denim.jpg" },
];

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params); // ✅ unwrap the promise
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();
  return (
    <main className="min-h-screen bg-[#F7F3EE] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 px-6 py-24">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-md shadow-md" />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">{product.name}</h1>
          <p className="text-neutral-700 dark:text-neutral-400">{product.desc}</p>
          <span className="text-amber-600 dark:text-amber-400 font-bold text-xl">{product.price}</span>
          <button className="mt-4 px-6 py-3 bg-amber-600 dark:bg-amber-400 text-white dark:text-neutral-900 rounded-sm hover:bg-amber-700 dark:hover:bg-amber-300 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
