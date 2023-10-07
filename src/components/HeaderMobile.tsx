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
          className="w-full max-w-45 h-45 group relative p-5 mb-2 -ml-1 rounded-full border border-solid border-gray-2 ease-in-out duration-500"
        ></Link>

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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 7l10 10M7 17L17 7"
            />
          </svg>
        )}
      </header>
    </>
  );
};

export { HeaderMobile };
