import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header/Header";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiet Le Tri",
  description: "Kiet Le Tri Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
