import React from "react";
import "./globals.css";

export const metadata = {
  title: "Kael Veyr: The Neon Renegade",
  description: "A personal portfolio by Thomas Day featuring interactive websites, gaming content, animation experiments, and original game concepts.",
  metadataBase: new URL("https://lanterns-teddster.vercel.app"),
  openGraph: {
    title: "Kael Veyr: The Neon Renegade",
    description: "Interactive websites, gaming content, animation experiments, and original game concepts by Thomas Day.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Kael Veyr: The Neon Renegade" }],
  },
  twitter: { card: "summary_large_image", title: "Kael Veyr: The Neon Renegade", description: "Interactive worlds and creative work by Thomas Day.", images: ["/og.svg"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
