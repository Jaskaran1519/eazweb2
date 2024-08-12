import React from "react";

const Stats = () => {
  return (
    <div className="mt-[5vh] w-[90%] mx-auto py-24 sm:py-32 container ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center  space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by creators worldwide
            </h2>
            <p className="text-lg leading-8 text-hoverprimary">
              We can help you grow your audience and your business, no matter
              the size.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center  md:grid-cols-3">
            <div className="flex flex-col bg-gray-200 p-8">
              <dt className="text-sm font-semibold leading-6 my-2 text-hoverprimary">
                Projects done in 2023
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
                20+ Projects
              </dd>
            </div>

            <div className="flex flex-col bg-gray-200 p-8">
              <dt className="text-sm font-semibold leading-6 my-2 text-hoverprimary">
                Years of Experience
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
                3+ years
              </dd>
            </div>
            <div className="flex flex-col bg-gray-200 p-8">
              <dt className="text-sm font-semibold leading-6 my-2 text-hoverprimary">
                Reviews
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
                30+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Stats;
