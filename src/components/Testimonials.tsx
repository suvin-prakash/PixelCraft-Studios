"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Kumar",
    role: "CEO, Sarab",
    rating:"4",
    review:
      "PixelCraft exceeded our expectations. Their design transformed our online presence.",
  },
  {
    name: "David john",
    role: "Founder, Tour",
    rating:"4",
    review:
      "Professional team with outstanding creativity and technical expertise.",
  },
  {
    name: "Saniya Khan",
    role: "Co-Founder, Instyle",
    rating:"4",
    review:
      "Their attention to detail and user experience helped increase our sales.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-[#2F4850]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#876E7D] font-semibold">TESTIMONIALS</p>

          <h2 className="text-4xl font-bold mt-3">What Our Clients Say</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={item.name}
              className="rounded-3xl bg-slate-50 dark:bg-[#677987] p-8 shadow-lg"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill={index < item.rating ? "currentColor" : "none"}
                    className={
                      index < item.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 italic">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold">{item.name}</h3>

                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
