"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  images: string[];
};

export default function PortfolioCard({ title, images }: Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) {
      setCurrentImage(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 900);

    return () => clearInterval(interval);
  }, [hovered, images.length]);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-colors duration-300 dark:bg-slate-800"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-72 overflow-hidden">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImage]}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw"
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="mt-2 text-2xl font-bold">{title}</h3>
      </div>
    </motion.div>
  );
}
