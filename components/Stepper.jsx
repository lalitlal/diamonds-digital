import Link from "next/link";
import {
  borderHiraBlack,
  hiraBlack,
  hiraBlackBG,
  hiraDarkGrayBG,
} from "./constants";

const iconObjects = [
  {
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        class="w-5 h-5 mr-3 hidden md:block"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: "Diamonds",
    href: "/diamond",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        class="w-5 h-5 mr-3 hidden md:block"
      >
        <path
          stroke-linecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Settings",
    href: "/ringsettings",
  },
];

const Stepper = ({ stage }) => {
  return (
    <section className="text-gray-600 body-font w-full overflow-x-hidden">
      <div className="py-4 flex justify-center w-full">
        <div className="w-screen mx-4">
          <div className="flex">
            {iconObjects.map((iconObj, i) => {
              return (
                <Link
                  href={iconObj.href}
                  key={i}
                  // px-6?
                  className={`flex-grow py-3 w-1/2 justify-center border font-black font-Raleway ${borderHiraBlack} text-black inline-flex items-center leading-none tracking-wider active:bg-[#848484] active:text-black ${
                    i === stage
                      ? `${hiraBlackBG} text-white`
                      : ` hover:bg-[#848484] text-black`
                  } `}
                >
                  {iconObj.icon}
                  {iconObj.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stepper;
