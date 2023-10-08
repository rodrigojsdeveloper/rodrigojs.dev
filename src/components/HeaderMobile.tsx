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
            viewBox="0 0 24 24"
          >
            <path
              fill="#8c8c8c"
              d="M16.92 4.5c-1.851 0-3.298 1.394-4.608 3.165C10.512 5.373 9.007 4.5 7.206 4.5C3.534 4.5.72 9.28.72 14.338c0 3.165 1.531 5.162 4.096 5.162c1.846 0 3.174-.87 5.535-4.997c0 0 .984-1.737 1.66-2.934c.238.383.487.795.75 1.238l1.107 1.862c2.156 3.608 3.358 4.831 5.534 4.831c2.5 0 3.89-2.024 3.89-5.255c0-5.297-2.877-9.745-6.372-9.745Zm-8.37 8.886c-1.913 3-2.575 3.673-3.64 3.673c-1.097 0-1.749-.963-1.749-2.68c0-3.672 1.831-7.427 4.014-7.427c1.182 0 2.17.682 3.683 2.848c-1.437 2.204-2.307 3.586-2.307 3.586Zm7.224-.377L14.45 10.8a45.161 45.161 0 0 0-1.032-1.608c1.193-1.841 2.176-2.759 3.347-2.759c2.43 0 4.375 3.58 4.375 7.976c0 1.676-.549 2.649-1.686 2.649c-1.09 0-1.61-.72-3.68-4.05Z"
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
