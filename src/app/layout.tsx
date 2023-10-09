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
      <body
        className={`${
          (poppins.className, kanit.className)
        } w-full max-w-6xl min-h-screen relative flex flex-row justify-between m-auto pt-28 pb-8 px-8 max-lg:min-h-0 max-lg:justify-center`}
      >
        <div className="mt-12 relative centralize-background flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" />
        </div>

        {children}
      </body>
    </html>
  );
}
