"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryImages } from "./data";
import { Section } from "./section";

export function GallerySection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [category, setCategory] = useState("All");
  const categories = ["All", "Exterior", "Interior", "Rooms", "Surroundings"];
  const filteredImages = useMemo(
    () => galleryImages.filter((image) => category === "All" || image.category === category),
    [category]
  );

  return (
    <Section
      id="gallery"
      title="Gallery"
      subtitle="A glimpse of the exterior architecture, curated interiors, and welcoming environment of Muktaloy Residency."
      className="bg-slate-50"
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              category === item
                ? "bg-brand-600 text-white"
                : "bg-white text-slate-700 hover:bg-slate-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid auto-rows-[170px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveImage(image.src)}
            className={`group relative overflow-hidden rounded-2xl shadow-sm ${
              index % 5 === 0 ? "row-span-2 lg:col-span-2" : index % 3 === 0 ? "row-span-2" : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-900/0 transition group-hover:bg-slate-900/25" />
            <span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-slate-800">
              {image.category}
            </span>
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute right-5 top-5 rounded-full border border-white/40 p-2 text-white"
            onClick={() => setActiveImage(null)}
          >
            <X size={20} />
          </button>
          <div className="relative h-[70vh] w-full max-w-5xl overflow-hidden rounded-2xl">
            <Image
              src={activeImage}
              alt="Expanded gallery preview"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ) : null}
    </Section>
  );
}
