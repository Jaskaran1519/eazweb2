import { PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Herobutton = () => {
  return (
    <button
      type="button"
      className="bg-white text-center w-48 rounded-2xl h-12 relative font-sans text-black text-xl font-semibold group"
    >
      <div className="bg-green-400 rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
        <Link href='/contact'>
        <PhoneCallIcon />
        </Link>
      </div>
      <p className="translate-x-2">lets Talk</p>
    </button>
  );
};

export default Herobutton;
