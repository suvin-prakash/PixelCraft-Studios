"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white/80 dark:bg-[#2F4858]/80 backdrop-blur-md shadow"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icon.png" alt="pixelcraft Logo" width={70} height={50} />

          <div className="leading-none">
            <h1 className="text-2xl font-bold text-[#2F4858] dark:text-white">
              Pixel<span className="text-[#876E7D]">Craft</span>
            </h1>

            <p className="text-s tracking-[0.2em] text-[#677987] dark:text-gray-400">
              STUDIO
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#hero">Home</Link>

          <Link href="#services">Services</Link>

          <Link href="#portfolio">Portfolio</Link>

          <Link href="#contact">Contact</Link>

          <ThemeToggle />

          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-full bg-[#876E7D] px-5 py-2 text-white hover:bg-[#877E8D]"
          >
            Let's Talk
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 bg-white p-5 shadow-lg dark:bg-[#2F4858] md:hidden">
          <ThemeToggle />

          <Link href="#hero">Home</Link>

          <Link href="#services">Services</Link>

          <Link href="#portfolio">Portfolio</Link>

          <Link href="#contact">Contact</Link>

          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-lg bg-[#876E7D] py-2 text-white"
          >
            Let's Talk
          </button>
        </div>
      )}
    </motion.nav>
  );
}
