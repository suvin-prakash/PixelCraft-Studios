"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#F8F9FA] via-white to-[#E7EEF2] dark:from-[#1E2C36] dark:via-[#243844] dark:to-[#2F4850]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full bg-[#9BAEB8] px-4 py-2 text-sm font-medium text-[#2F4858] dark:bg-[#876E7D] dark:text-[#2F4858]">
            🚀 Creative Design Agency
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
            We Build
            <span className="text-[#876E6D]"> Digital </span>
            Experiences
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
            We help startups and businesses create beautiful websites,
            powerful branding, and unforgettable user experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className=" flex gap-2 rounded-full bg-[#876E7D] px-7 py-4 font-semibold text-white transition hover:bg-[#877E8D]"><Link href="#services"> 
              Get Started <ArrowRight size={18} /></Link>
            </button>

            <button className="rounded-full border border-[#677987] px-7 py-4 font-semibold transition hover:bg-[#9BAEB8] dark:border-gray-600 dark:hover:bg-slate-800"><Link href="#portfolio"> 
              View Portfolio</Link>
            </button>

          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/images/images.jpg"
            alt="Hero Illustration"
            width={900}
            height={900}
            priority
            className="mx-auto rounded-3xl"
          />

          {/* Floating Card 1 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-10 left-0 rounded-2xl bg-white p-5 shadow-xl dark:bg-[#2F4858]"
          >
            <h3 className="text-3xl font-bold text-[#876E7D]">150+</h3>
            <p className="text-sm">Projects Delivered</p>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-8 right-0 rounded-2xl bg-white p-5 shadow-xl dark:bg-[#2F4858]"
          >
            <h3 className="text-3xl font-bold text-[#876E7D]">98%</h3>
            <p className="text-sm">Client Satisfaction</p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}