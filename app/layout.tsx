import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { businessName } from "@/lib/site";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${businessName} — Affordable Car Hire in Kigali, Rwanda`,
  description:
    "Rent reliable cars in Kigali at affordable daily rates. Toyota, Honda, Hyundai and more. Airport pickup, insurance included. Book with GENI CAR RENTAL KIGALI today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
