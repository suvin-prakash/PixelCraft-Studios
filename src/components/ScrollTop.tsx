"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const scroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", scroll);

    return () =>
      window.removeEventListener("scroll", scroll);

  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-8 right-8 rounded-full bg-indigo-600 p-4 text-white shadow-lg"
    >
      <ChevronUp />
    </button>
  );
}