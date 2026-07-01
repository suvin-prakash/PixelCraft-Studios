"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Lightbulb,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    description: "We deliver projects on time without compromising quality.",
    icon: Rocket,
  },
  {
    title: "Trusted Solutions",
    description: "Reliable and scalable solutions for startups and enterprises.",
    icon: ShieldCheck,
  },
  {
    title: "Creative Ideas",
    description: "Unique and innovative designs tailored to your business.",
    icon: Lightbulb,
  },
  {
    title: "Client First",
    description: "We focus on building long-term relationships with our clients.",
    icon: Users,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-white dark:bg-[#2F4850]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#876E7D] font-semibold">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-bold mt-3">
            We Create Experiences That Matter
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Combining creativity, technology, and strategy to build
            digital products that help businesses grow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                key={feature.title}
                className="rounded-3xl bg-slate-50 dark:bg-[#677987] p-8 shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-white p-4 text-[#876E6D] mb-6">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}