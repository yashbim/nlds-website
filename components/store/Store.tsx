"use client";

import { useState } from "react";
import Image from "next/image";
import { MERCH_ITEMS, MerchItem } from "@/constants/Merch";

export default function Store() {
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const handleAddToCart = (productName: string, size: string, quantity: number) => {
    setPopupMessage(`${quantity} × ${productName}${size ? ` (${size})` : ""} added to your cart!`);
    setTimeout(() => setPopupMessage(null), 2500); // Auto-hide after 2.5s
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/squid-game-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mt-10 mb-8 flex items-center justify-center pb-10">
          <Image
            src="/topics/Store.png"
            alt="Store"
            width={512}
            height={64}
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-auto h-auto hover:scale-105 hover:shadow-xl rounded-2xl transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {MERCH_ITEMS.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>

      {/* Popup Message */}
      {popupMessage && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-pink-600 text-white py-3 px-6 rounded-xl shadow-xl text-center z-50 animate-fade-in-out">
          {popupMessage}
        </div>
      )}
    </section>
  );
}

function ProductCard({
  product,
  onAddToCart,
}: {
  product: MerchItem;
  onAddToCart: (productName: string, size: string, quantity: number) => void;
}) {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[2] || "");
  const [quantity, setQuantity] = useState(1);

  const hasMultipleImages =
    Array.isArray(product.images) && product.images.length > 1;
  const mainImage = hasMultipleImages
    ? product.images[hoverIndex]
    : product.images?.[0];

  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prev) => (increment ? prev + 1 : Math.max(1, prev - 1)));
  };

  return (
    <div
      className="bg-black/70 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col"
      onMouseEnter={() => hasMultipleImages && setHoverIndex(1)}
      onMouseLeave={() => setHoverIndex(0)}
    >
      {/* Image container */}
      <div className="relative w-full aspect-square bg-white/5 p-4">
        <div className="relative w-full h-full">
          <Image
            src={mainImage}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Content section */}
      <div className="p-4 text-center flex flex-col flex-grow space-y-4">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <p className="text-gray-300 text-xl font-medium">{product.price} LKR</p>

        {/* Size Selector */}
        {product.type === "tshirt" && product.sizes && (
          <div className="space-y-2">
            <label className="text-sm text-gray-300 block">Size:</label>
            <div className="flex flex-wrap gap-2 justify-center">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedSize === size
                      ? "bg-squid-teal text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity Selector */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300 block">Quantity:</label>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => handleQuantityChange(false)}
              disabled={quantity <= 1}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors duration-200"
            >
              -
            </button>
            <span className="text-white font-medium text-lg min-w-[2rem] text-center">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(true)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-200"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product.name, selectedSize, quantity)}
          className="w-full bg-pink-600 hover:bg-squid-teal text-white py-3 px-4 rounded-xl transition-colors duration-300 font-medium mt-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
