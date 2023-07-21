import Link from "next/link";

const iconObjects = [
  {
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth="2"
        class="w-5 h-5 mr-3"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: "Diamond",
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
        class="w-5 h-5 mr-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Setting",
    href: "/ringsettings",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        class="w-5 h-5 mr-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
    title: "Checkout",
    href: "/checkout",
  },
];

const Stepper = ({ stage }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap">
          {iconObjects.map((iconObj, i) => {
            return (
              <Link
                href={iconObj.href}
                key={i}
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none tracking-wider ${
                  i === stage
                    ? `border-indigo-500 text-indigo-700 rounded-t bg-gray-100`
                    : ` border-gray-200 hover:text-gray-900`
                } `}
              >
                {iconObj.icon}
                {iconObj.title}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stepper;
