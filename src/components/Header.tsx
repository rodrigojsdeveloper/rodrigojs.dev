import { Line } from "./Line";
import { Link } from "./Link";

const Header = () => {
  return (
    <header className="w-full max-w-230 sticky top-0 z-10 h-20 mr-12 lg:w-1/2 lg:py-8 max-lg:hidden max-lg:mr-0">
      <svg
        width="81"
        height="81"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-2"
      >
        <circle cx="22" cy="22" r="22" fill="url(#paint0_linear_147_168)" />
        <defs>
          <linearGradient
            id="paint0_linear_147_168"
            x1="22"
            y1="0"
            x2="22"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0141ff" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-full">
        <h1 className="text-gray-1 text-md lg:text-xl">Rodrigo Silva</h1>
        <a
          target="_blank"
          href="https://github.com/rodrigojsdeveloper"
          className="text-gray-3 font-medium text-sm cursor-pointer hover:text-gray-4 duration-300"
        >
          @rodrigojsdeveloper
        </a>
        <p className="text-gray-1 font-normal mt-2.5 text-sm">
          Full Stack Developer
        </p>
      </div>

      <Line />

      <nav className="hidden lg:flex flex-col gap-1">
        <Link
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
        />
        <Link
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
        />
        <Link
          href="projects"
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
          text="Projects"
        />
        <Link
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
        />
        <Link
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
        />
      </nav>

      <Line />

      <div className="flex row justify-between items-center">
        <small className="text-gray-3 text-xs font-medium">
          © 2023 -{" "}
          <a
            target="_blank"
            className="duration-300 hover:text-gray-4"
            href="https://github.com/rodrigojsdeveloper/rodrigojsdeveloper.com"
          >
            rodrigojsdeveloper
          </a>
        </small>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 256 256"
        >
          <path
            fill="#A3A3A3"
            d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8Z"
          />
        </svg>
      </div>
    </header>
  );
};

export { Header };
