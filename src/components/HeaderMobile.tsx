const HeaderMobile = () => {
  return (
    <header className="w-full h-81 hidden flex-row justify-between items-center bg-black border-b border-solid border-gray-6 fixed top-0 pt-2 px-8 max-lg:flex">
      <div className="w-full max-w-45 h-45 group relative p-5 mb-2 -ml-1 rounded-full border border-solid border-gray-2 ease-in-out duration-500"></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="29"
        viewBox="0 0 24 24"
      >
        <path
          fill="#a3a3a3"
          fillRule="evenodd"
          d="M19.75 12a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0-5a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Zm0 10a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Z"
          clipRule="evenodd"
        />
      </svg>
    </header>
  );
};

export { HeaderMobile };
