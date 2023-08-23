import Link from "next/link";
import React from "react";

const Breadcrumb = ({ navDetails }) => {
  const backTick = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );

  return (
    <nav className="flex items-center mt-4 pb-4 lg:hidden">
      {navDetails.label && navDetails.url && (
        <>
          <div>{backTick}</div>
          <Link href={navDetails.url} className="hover:underline">
            {navDetails.label}
          </Link>
        </>
      )}
    </nav>
  );
};

export default Breadcrumb;
