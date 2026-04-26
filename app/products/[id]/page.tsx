import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "1",
    name: "Linen Shirt",
    price: "Taka 500",
    desc: "Breathable, lightweight linen made from eco-friendly fibers.",
    image: "/images/IMAGE01.jpg",  // ✅ Fixed
    details: [
      "Made from 100% organic linen",
      "Machine washable, gentle cycle",
      "Available in sizes S-XL",
    ],
    video: "https://www.youtube.com/embed/ScMzIvxBSiQ",
  },
  {
    id: "2",
    name: "Tailored shirt",
    price: "Taka 1490",
    desc: "Sharp, versatile blazer crafted for modern silhouettes.",
    image: "/images/IMAGE02.jpg",  // ✅ Fixed
    details: [
      "Premium wool blend",
      "Slim fit with modern cut",
      "Dry clean only",
    ],
    video: null,
  },
];

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // ✅ unwrap async params
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-[#F7F3EE] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 px-6 py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        {/* <img src={product.image} alt={product.name} className="w-full h-auto rounded-md shadow-md" /> */}

        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="w-full h-auto rounded-md shadow-md"
        />

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100">{product.name}</h1>
          <p className="text-neutral-700 dark:text-neutral-400">{product.desc}</p>
          <span className="text-amber-600 dark:text-amber-400 font-bold text-xl">{product.price}</span>

          {/* Extra Details */}
          <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-400">
            {product.details?.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          {/* Add to Cart */}
          <button className="mt-4 px-6 py-3 bg-amber-600 dark:bg-amber-400 text-white dark:text-neutral-900 rounded-sm hover:bg-amber-700 dark:hover:bg-amber-300 transition-colors duration-200">
            <Link  href="https://wa.me/+8801401260160" target="_blank" rel="noopener noreferrer">
              Order now
            </Link>
          </button>
        </div>
      </div>

      {/* Product Video */}
      {product.video && (
        <div className="max-w-5xl mx-auto mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100">Product Video</h2>
          <div className="aspect-video">
            <iframe
              src={product.video}
              title={`${product.name} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-md shadow-md"
            />
          </div>
        </div>
      )}
    </main>
  );
}
