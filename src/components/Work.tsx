import Link from "next/link";

const Work = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-5 bg-gray-9 border border-gray-2 rounded-def my-6">
      <p className="font-title text-xl">Let{"'"}s work together!</p>

      <p className="text-gray-4 font-normal text-md leading-relaxed">
        If you are interested in my work or want to give feedback about this
        website, let{"'"}s have a chat.
      </p>

      <Link
        href="/contact"
        className="w-full max-w-121 h-44 flex justify-center items-center bg-gray-1 text-gray-9 font-normal text-md rounded-def duration-300 hover:bg-gray-10"
      >
        Contact me
      </Link>
    </div>
  );
};

export { Work };
