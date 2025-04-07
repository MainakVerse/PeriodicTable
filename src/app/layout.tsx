import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/context/ThemeProvider";

export const metadata: Metadata = {
  title: "Modern Period Table",
  description:
    "Elemental Explorer is an innovative and interactive platform that reimagines the traditional periodic table for the digital age. With an intuitive interface and comprehensive details on each element, this modern periodic table provides an engaging educational experience for students, educators, and science enthusiasts. Explore atomic properties, electron configurations, historical data, and practical applications with ease. Elemental Explorer brings chemistry to life, making the study of elements more accessible and fascinating than ever before.",
  keywords: [
    "Next JS",
    "Tailwind CSS",
    "Periodic Table of Elements",
    "Modern Periodic Table",
    "Chemistry",
    "Science",
    "Education",
    "Properties of Elements",
    "Atomic Properties",
    "Electron Configurations",
    "Practical Applications",
    "Interactive Periodic Table",
    "Educational Platform",
    "Atomic Structure",
    "Thermodynamic Properties",
    "Material Properties",
    "Neutron Properties",
    "Health & Safety",
    "Prevalence",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://modern-periodic-table.vercel.app/",
    siteName: "Modern Periodic Table of Elements",
    title: "Modern Periodic Table of Elements",
    description:
      "Elemental Explorer is an innovative and interactive platform that reimagines the traditional periodic table for the digital age. With an intuitive interface and comprehensive details on each element, this modern periodic table provides an engaging educational experience for students, educators, and science enthusiasts. Explore atomic properties, electron configurations, historical data, and practical applications with ease. Elemental Explorer brings chemistry to life, making the study of elements more accessible and fascinating than ever before.",
    images: [
      {
        url: "https://github.com/MainakVerse/PeriodicTable/blob/master/public/OpenGraph.png?raw=true",
        width: 1280,
        height: 640,
        alt: "Modern Periodic Table of Elements",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/loader.png",
        href: "/loader.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className="font-sans">
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
