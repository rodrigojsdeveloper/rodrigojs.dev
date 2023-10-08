import { Line } from "./Line";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full hidden flex-col mt-6 max-lg:flex">
      <Line />

      <small className="font-medium text-xs text-gray-3 text-center">
        © 2023 -{" "}
        <Link
          target="_blank"
          className="hover:text-gray-2"
          href="https://github.com/rodrigojsdeveloper/rodrigojsdeveloper.com"
        >
          rodrigojsdeveloper
        </Link>
      </small>
    </footer>
  );
};

export { Footer };
