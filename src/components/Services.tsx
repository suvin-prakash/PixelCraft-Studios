"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-24 dark:bg-[#2F4850]"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-[#876E7D] font-semibold">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            What We Do
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600 dark:text-gray-300">
            We help businesses create exceptional digital experiences
            through innovative design, development, branding, and marketing.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl bg-white p-8 shadow-lg transition dark:bg-[#677987]"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-white p-4 text-[#876E7D]">
                  <Icon size={34} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}