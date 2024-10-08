"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showPopup = () => {
    setIsOpen(true);
  };

  const hidePopup = () => {
    setIsOpen(false);
  };

  const handleOption1 = () => {
    alert("Option 1 selected");
    hidePopup();
  };

  const handleOption2 = () => {
    alert("Option 2 selected");
    hidePopup();
  };
  return (
    <footer className="">
      <div className="mx-auto w-full">
        <div className="lg:grid lg:grid-cols-2">
          <div className="container hidden lg:flex justify-center items-center relative">
            <Image src="/whitelogo.png" width={300} height={300} alt="" />
          </div>
          <div className="py-8 lg:py-16 lg:pe-16 pl-10 bg-[#201E1F] text-white">
            <div className="hidden lg:block -ml-2">
              <Image src="/whitelogo.png" width={120} height={120} alt="/" />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="font-medium ">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <div className="relative">
                      {/* Button to trigger the popup */}
                      <button onClick={showPopup} className="" type="button">
                        Call now
                      </button>

                      {/* Popup box */}
                      {isOpen && (
                        <div className="w-[60vw] sm:w-[30vw] flex flex-col justify-center items-center space-y-3 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50">
                          <h2 className="text-lg font-semibold mb-4 text-black">
                            Call now
                          </h2>
                          <a href="tel:+916284607938">
                            <button className="text-primary bg-white hover:bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mr-2">
                              +91 6284607938
                            </button>
                          </a>
                          <a href="tel:+917341138757">
                            <button className="text-primary bg-white hover:bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 mr-2">
                              +91 7341138757
                            </button>
                          </a>
                        </div>
                      )}

                      {/* Overlay to darken the background when the popup is displayed */}
                      {isOpen && (
                        <div
                          onClick={hidePopup}
                          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
                        ></div>
                      )}
                    </div>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      Twitter
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/eazweb?igsh=ZW1oMnE5MGVlZmpz"
                      target="_blank"
                      className=" transition hover:opacity-75"
                    >
                      Instagram
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      Upwork
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://github.com/Jaskaran1519"
                      target="_blank"
                      className=" transition hover:opacity-75"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium ">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className=" transition hover:opacity-75"
                    >
                      {" "}
                      About{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className=" transition hover:opacity-75"
                    >
                      Talk to us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium ">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="/contact"
                      className=" transition hover:opacity-75"
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>

                  <li>
                    <a href="/faq" className=" transition hover:opacity-75">
                      {" "}
                      FAQs{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <p className="mt-8 text-xs text-gray-500">
                &copy; 2023, Eazweb. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
