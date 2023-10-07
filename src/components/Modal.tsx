"use client";
import { useEffect, useState } from "react";
import { CustomLink } from "./CustomLink";

const Modal = () => {
  const [currentUrl, setCurrentUrl] = useState<string>(
    typeof window !== "undefined" ? window.location.href.split("/")[3] : ""
  );

  useEffect(() => {
    setCurrentUrl(
      typeof window !== "undefined" ? window.location.href.split("/")[3] : ""
    );
  }, []);

  return (
    <nav className="w-full max-w-140 fixed top-16 right-6 z-10 bg-black border border-solid border-gray-4 rounded-def">
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
  );
};

export { Modal };
