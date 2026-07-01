import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PixelCraft Studio | Design Agency",
  description:
    "Modern Design Agency specializing in UI/UX, Web Development, Branding and Digital Marketing.",
  keywords: [
    "Design Agency",
    "Next.js",
    "UI UX",
    "Web Development",
    "Branding",
    "Portfolio",
  ],
  authors: [{ name: "PixelCraft Studio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
  className={`${poppins.className} bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-colors duration-300`}
>
  <ThemeProvider>
    {children}
  </ThemeProvider>
</body>
    </html>
  );
}