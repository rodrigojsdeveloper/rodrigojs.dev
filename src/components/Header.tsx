"use client";
import { useEffect, useState } from "react";
import { CustomLink } from "./CustomLink";
import { Line } from "./Line";
import Link from "next/link";

const Header = () => {
  const [currentUrl, setCurrentUrl] = useState<string>(
    typeof window !== "undefined" ? window.location.href.split("/")[3] : ""
  );

  useEffect(() => {
    setCurrentUrl(
      typeof window !== "undefined" ? window.location.href.split("/")[3] : ""
    );
  }, []);

  return (
    <header className="w-full max-w-230 sticky top-0 z-10 h-20 mr-12 pt-8 max-lg:hidden max-lg:mr-0">
      <div className="w-full max-w-81 h-81 flex justify-center items-center p-2.5 mb-2 -ml-1 rounded-full border border-solid border-gray-4 ease-in-out duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 32 32"
        >
          <path
            fill="#8C8C8C"
            d="M16 5C8.268 5 2 9.253 2 14.5c0 4.785 5.218 8.733 12 9.393V26h4v-2.107a19.13 19.13 0 0 0 3.764-.743L23.33 26H28l-2.7-4.414c2.878-1.74 4.7-4.265 4.7-7.086C30 9.253 23.732 5 16 5zm1.5 3C23.299 8 28 11.134 28 15c0 2.13-1.432 4.034-3.684 5.318a3.064 3.064 0 0 0-.75-.459A4.493 4.493 0 0 0 27 15.5a4.5 4.5 0 0 0-4.5-4.5H14v10.594C9.924 20.632 7 18.047 7 15c0-3.866 4.701-7 10.5-7zm.5 6h3.5a1.5 1.5 0 0 1 0 3H18v-3zm0 6h1.129c.558 0 1.07.304 1.338.793l.451.82c-.922.212-1.9.337-2.918.37V20z"
          />
        </svg>
      </div>

      <div className="w-full">
        <h1 className="text-xl">Rodrigo Silva</h1>
        <Link
          target="_blank"
          href="https://github.com/rodrigojsdeveloper"
          className="text-gray-3 font-medium text-sm hover:text-gray-2"
        >
          @rodrigojsdeveloper
        </Link>
        <p className="font-normal mt-2.5 text-sm">Full Stack Developer</p>
      </div>

      <Line />

      <nav className="flex flex-col gap-1">
        <CustomLink
          href=""
          Icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#D4D4D4"
                d="M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"
              />
            </svg>
          }
          text="Home"
          activeLink={
            currentUrl === ""
              ? "bg-link-1 text-gray-1"
              : "bg-transparent text-gray-2"
          }
        />
        <CustomLink
          href="about"
          Icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="#D4D4D4"
                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0ZM96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32Zm97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0Z"
              />
            </svg>
          }
          text="About"
          activeLink={
            currentUrl === "about"
              ? "bg-link-1 text-gray-1"
              : "bg-transparent text-gray-2"
          }
        />
        <CustomLink
          href="projects"
          Icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#d4d4d4"
                d="M7.25 6a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5A.75.75 0 0 0 7.25 6ZM12 6a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 6Zm4 .75a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-1.5 0v-9.5Z"
              />
              <path
                fill="#d4d4d4"
                d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2ZM3.5 3.75v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H3.75a.25.25 0 0 0-.25.25Z"
              />
            </svg>
          }
          text="Projects"
          activeLink={
            currentUrl === "projects"
              ? "bg-link-1 text-gray-1"
              : "bg-transparent text-gray-2"
          }
        />
        <CustomLink
          href="contact"
          Icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#D4D4D4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 21V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8l-4 4m8-10v.01M8 11v.01m8-.01v.01"
              />
            </svg>
          }
          text="Contact"
          activeLink={
            currentUrl === "contact"
              ? "bg-link-1 text-gray-1"
              : "bg-transparent text-gray-2"
          }
        />
        <CustomLink
          href="experiences"
          Icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#D4D4D4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8 8H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 9.52 3 10.08 3 11.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104v-5.607c0-1.118 0-1.678-.218-2.105a2.001 2.001 0 0 0-.875-.874C19.48 8 18.92 8 17.8 8H16M8 8h8M8 8a4 4 0 1 1 8 0"
              />
            </svg>
          }
          text="Experiences"
          activeLink={
            currentUrl === "experiences"
              ? "bg-link-1 text-gray-1"
              : "bg-transparent text-gray-2"
          }
        />
      </nav>

      <Line />

      <small className="text-gray-3 text-xs font-medium">
        © 2023 - rodrigojsdeveloper
      </small>
    </header>
  );
};

export { Header };
