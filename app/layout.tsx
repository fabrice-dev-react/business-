import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { businessFullName } from "@/lib/site";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${businessFullName} — New & Used Cars in Kigali, Rwanda`,
  description:
    "Buy new and pre-owned cars in Kigali at honest prices. Every vehicle inspected, documented and ready for a test drive. Trade-in, financing and delivery across Rwanda.",
  openGraph: {
    title: `${businessFullName} — New & Used Cars in Kigali, Rwanda`,
    description:
      "Inspected, documented cars with honest pricing. Trade-in, financing and nationwide delivery.",
    type: "website",
    locale: "en_RW",
  },
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
