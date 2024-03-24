import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
            <div className="mt-8 space-y-4 lg:mt-0">
              <span className="hidden h-1 w-10 rounded bg-primary lg:block"></span>

              <div>
                <h2 className="text-2xl font-medium text-primary">
                  Request a Demo
                </h2>

                <p className="mt-4 max-w-lg text-primary">
                  If you want to know more or want to talk about something, just
                  drop your email. We will get back to you as fast as we can.
                </p>
              </div>

              <form className="mt-6 w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border-gray-300 focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button className="mt-1 w-full rounded bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-hoverprimary sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pe-16">
            <div className="hidden lg:block">
              <Image src="/next.svg" width={100} height={100} alt="/" />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="font-medium text-gray-900">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      +91 6284607938
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Twitter
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Instagram
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Upwork
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      About{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Talk to us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>

                  <li>
                    <a
                      href="/faq"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      FAQs{" "}
                    </a>
                  </li>

                  <li>
                    <Link
                      href="/livechat"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Live Chat{" "}
                    </Link>
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
