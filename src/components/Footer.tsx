import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#2F4850] py-1 text-white">
      <hr className="py-5"/>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div>
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icon.png" alt="pixelcraft Logo" width={70} height={50} />

          <div className="leading-none">
            <h1 className="text-2xl font-bold text-white">
              Pixel<span className="text-[#876E7D]">Craft</span>
            </h1>

            <p className="text-s tracking-[0.2em] text-gray-400">
              STUDIO
            </p>
          </div>
        </Link>

          <p className="mt-3 text-gray-400">
            Creating digital experiences that inspire.
          </p>

        </div>

        <div className="flex gap-8">

          <a href="#hero">Home</a>

          <a href="#services">Services</a>

          <a href="#portfolio">Portfolio</a>

          <a href="#contact">Contact</a>

        </div>

      </div>

      <div className="mt-5 border-t border-slate-700 pt-2 text-center text-white-500">
        <hr />
        © 2026 PixelCraft Studio. All rights reserved.

      </div>

    </footer>
  );
}