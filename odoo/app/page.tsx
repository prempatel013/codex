import React from "react";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import CategoryCard from "../components/CategoryCard";

const featuredItems = [
  { title: "Red Dress", imageUrl: "", subtitle: "M • Like New" },
  { title: "Denim Jacket", imageUrl: "", subtitle: "L • Good" },
  { title: "Kids T-shirt", imageUrl: "", subtitle: "S • New" },
  { title: "Formal Shirt", imageUrl: "", subtitle: "M • Good" },
];

const categories = [
  "Men", "Women", "Kids", "Formal", "Casual", "Sports", "Outerwear", "Accessories"
];

const productItems = [
  { title: "Blue Jeans", imageUrl: "", subtitle: "M • Good" },
  { title: "Summer Dress", imageUrl: "", subtitle: "S • Like New" },
  { title: "Sneakers", imageUrl: "", subtitle: "9 • Excellent" },
  { title: "Blazer", imageUrl: "", subtitle: "L • Good" },
  { title: "Scarf", imageUrl: "", subtitle: "One Size • New" },
  { title: "Hoodie", imageUrl: "", subtitle: "M • Good" },
];

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-10 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">ReWear – Community Clothing Exchange</h1>
        <p className="text-gray-600 mb-6 max-w-xl">Give your clothes a second life. Swap, redeem, and join a community that cares about sustainable fashion.</p>
        <div className="flex gap-4 mb-8 flex-wrap justify-center">
          <a href="/register" className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 font-semibold transition">Start Swapping</a>
          <a href="/browse" className="bg-white border border-blue-600 text-blue-700 px-6 py-2 rounded shadow hover:bg-blue-50 font-semibold transition">Browse Items</a>
        </div>
      </section>
      {/* Featured Carousel */}
      <section className="max-w-6xl mx-auto px-4 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Featured</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {featuredItems.map((item, i) => (
            <ItemCard key={i} {...item} />
          ))}
        </div>
      </section>
      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-4 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={i} label={cat} />
          ))}
        </div>
      </section>
      {/* Product Listings */}
      <section className="max-w-6xl mx-auto px-4 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Product Listings</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {productItems.map((item, i) => (
            <ItemCard key={i} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
