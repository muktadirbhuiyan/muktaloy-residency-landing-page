import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Muktaloy Residency",
  description:
    "Premium residential apartments with modern living facilities, trusted amenities, and comfortable family-friendly spaces.",
  openGraph: {
    title: "Muktaloy Residency",
    description:
      "Premium residential apartments with modern living facilities, trusted amenities, and comfortable family-friendly spaces.",
    url: "https://muktaloy.com",
    siteName: "Muktaloy Residency",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Muktaloy Residency",
    description:
      "Premium residential apartments with modern living facilities, trusted amenities, and comfortable family-friendly spaces."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-body`}>{children}</body>
    </html>
  );
}
