import { Instagram, Twitter } from "lucide-react";
import ContactForm from "../../_components/ContactForm";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <ContactForm />
      <div className="mx-auto w-full h-auto ">
        <h1 className="flex justify-center items-center p-5 text-[2rem] font-semibold">
          Other ways to connect
        </h1>
        <div className="flex justify-center items-center gap-7">
          <a href="https://wa.me/+916284607938">
            <Image
              src="/whatsapp.svg"
              width={75}
              height={75}
              alt="/"
              className="rounded-full w-[10vh] h-auto"
            />
          </a>
          <a>
            <Image
              src="/instagram.svg"
              width={75}
              height={75}
              alt="/"
              className="rounded-full w-[10vh] h-auto"
            />
          </a>
          <a>
            <Image
              src="/x.png"
              width={75}
              height={75}
              alt="/"
              className="rounded-full w-[10vh] h-auto"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default page;
