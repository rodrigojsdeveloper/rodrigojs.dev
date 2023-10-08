"use client";
import { useState } from "react";
import { Modal } from "./Modal";
import Link from "next/link";

const HeaderMobile = () => {
  const [openModa, setOpenModal] = useState<boolean>(false);

  return (
    <>
      {openModa ? <Modal /> : null}
      <header className="w-full h-81 hidden flex-row justify-between items-center bg-black border-b border-solid border-gray-6 fixed top-0 pt-2 px-8 max-lg:flex">
        <Link
          href="/"
          className="w-full max-w-45 h-45 flex justify-center items-center p-2 mb-2 -ml-1 rounded-full border border-solid border-gray-4 ease-in-out duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
            <path
              fill="#8c8c8c"
              d="M16 5C8.268 5 2 9.253 2 14.5c0 4.785 5.218 8.733 12 9.393V26h4v-2.107a19.13 19.13 0 0 0 3.764-.743L23.33 26H28l-2.7-4.414c2.878-1.74 4.7-4.265 4.7-7.086C30 9.253 23.732 5 16 5zm1.5 3C23.299 8 28 11.134 28 15c0 2.13-1.432 4.034-3.684 5.318a3.064 3.064 0 0 0-.75-.459A4.493 4.493 0 0 0 27 15.5a4.5 4.5 0 0 0-4.5-4.5H14v10.594C9.924 20.632 7 18.047 7 15c0-3.866 4.701-7 10.5-7zm.5 6h3.5a1.5 1.5 0 0 1 0 3H18v-3zm0 6h1.129c.558 0 1.07.304 1.338.793l.451.82c-.922.212-1.9.337-2.918.37V20z"
            />
          </svg>
        </Link>

        {!openModa ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => setOpenModal(true)}
            className="cursor-pointer"
          >
            <path
              fill="#a3a3a3"
              fillRule="evenodd"
              d="M19.75 12a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0-5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0 10a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => setOpenModal(false)}
            className="cursor-pointer"
          >
            <path
              fill="none"
              stroke="#d4d4d4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 7l10 10M7 17L17 7"
            />
          </svg>
        )}
      </header>
    </>
  );
};

export { HeaderMobile };
