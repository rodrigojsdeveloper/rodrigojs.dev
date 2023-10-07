import Link from "next/link";
import { Paragraphy } from "./Paragraphy";

const Work = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-5 bg-gray-7 border border-gray-4 rounded-def my-6">
      <p className="font-title text-xl">Let{"'"}s work together!</p>

      <Paragraphy
        text="If you are interested in my work or want to give feedback about this
        website, let's have a chat."
        style="text-md"
      />

      <Link
        href="/contact"
        className="w-full max-w-121 h-44 flex justify-center items-center bg-gray-1 text-gray-7 font-normal text-md rounded-def hover:bg-button-1 active:bg-button-2"
      >
        Contact me
      </Link>
    </div>
  );
};

export { Work };
