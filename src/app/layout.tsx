import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ACE — Ahonzo Consulting Experts",
  description:
    "Cabinet de conseil en stratégie et analytique business. Data, IA, Cloud et transformation digitale pour PME et grands comptes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={outfit.variable}>
      <body>
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
