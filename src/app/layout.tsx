import { Poppins, Kanit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  authors: [{ name: "Rodrigo Silva", url: "" }],
  title: "rodrigojsdeveloper",
  description:
    "Professional portfolio highlighting technical skills and problem solving in a simple, modern and intuitive interface.",
  category: "develop",
  creator: "Rodrigo Silva",
  publisher: "Rodrigo Silva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(poppins.className, kanit.className)}>{children}</body>
    </html>
  );
}
