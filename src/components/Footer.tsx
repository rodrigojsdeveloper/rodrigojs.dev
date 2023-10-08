import { Line } from "./Line";

const Footer = () => {
  return (
    <footer className="w-full hidden flex-col mt-6 max-lg:flex">
      <Line />

      <small className="font-medium text-xs text-gray-3 text-center">
        © 2023 - rodrigojsdeveloper
      </small>
    </footer>
  );
};

export { Footer };
