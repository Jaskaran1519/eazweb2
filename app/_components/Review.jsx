"use client";
import { useState, useRef, useEffect } from "react";
import KeenSlider from "keen-slider";

function YourComponent() {
  const [keenSlider, setKeenSlider] = useState(null);

  const keenSliderRef = useRef(null);

  useEffect(() => {
    if (keenSliderRef.current) {
      setKeenSlider(new KeenSlider(keenSliderRef.current));
    }
  }, []);

  const goToPrevSlide = () => {
    if (keenSlider) {
      keenSlider.prev();
    }
  };

  const goToNextSlide = () => {
    if (keenSlider) {
      keenSlider.next();
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don't just take our word for it...
            </h2>

            <p className="mt-4 text-gray-700">
              Look at some of the reviews that our customers gave us
            </p>

            <div className="hidden lg:mt-8 lg:flex justify-center lg:gap-4">
              <button
                aria-label="Previous slide"
                onClick={goToPrevSlide}
                className="rounded-full border border-primary p-3 text-primary transition hover:bg-primary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                onClick={goToNextSlide}
                className="rounded-full border border-primary p-3 text-primary transition hover:bg-primary hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0 p-3">
            <div
              ref={keenSliderRef}
              className="keen-slider flex overflow-hidden"
            >
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {/* Stars */}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-primary sm:text-3xl">
                        Great Work
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        Thanks for the amazing work you guys did for me. The
                        website is running smooth and would not
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Harry Uppal
                  </footer>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {/* Stars */}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-primary sm:text-3xl">
                        Nice Job
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        Brilliant work guys, you made the management process of
                        all the products very simple. Continue the good work
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; parminder singh
                  </footer>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {/* Stars */}
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-primary sm:text-3xl">
                        Rajvarinder Singh
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        Great work and smooth management service.
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; nigger banda
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            onClick={goToPrevSlide}
            className="rounded-full border border-primary p-4 text-primary transition hover:bg-primary hover:text-white"
          >
            <svg
              className="size-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            onClick={goToNextSlide}
            className="rounded-full border border-primary p-4 text-primary transition hover:bg-primary hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default YourComponent;
