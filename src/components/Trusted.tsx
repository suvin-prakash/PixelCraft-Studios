"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  {
    name: "Google",
    logo: "/logos/google.png",
  },
  {
    name: "Microsoft",
    logo: "/logos/microsoft.png",
  },
  {
    name: "Adobe",
    logo: "/logos/adobe.png",
  },
  {
    name: "Spotify",
    logo: "/logos/spotify.png",
  },
  {
    name: "Slack",
    logo: "/logos/slack.png",
  },
];

export default function Trusted() {
  return (
    <section className="bg-white py-20 dark:bg-[#2F4850]">

      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-2xl font-semibold text-gray-600 dark:text-gray-300"
        >
          Trusted by Innovative Companies
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">

          {companies.map((company) => (
            <motion.div
              whileHover={{ scale: 1.08 }}
              key={company.name}
              className="flex items-center justify-center rounded-xl border border-gray-20 p-6 grayscale transition hover:grayscale-0 dark:border-slate-700"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={300}
                height={50}
                className="object-contain"
              />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}