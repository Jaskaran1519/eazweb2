import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-[90%] mx-auto mb-20">
      <h1 className="text-[2em] font-herofont font-semibold text-primary mt-5 ">
        Who we really are...
      </h1>
      <Image
        src="/about.jpeg"
        width={500}
        height={500}
        alt="/"
        className="mx-auto my-6"
      />
      <p className="text-[1.5em] font-herofont font-light mt-8 leading-relaxed">
        Welcome to EazWeb, your gateway to digital brilliance and innovation in
        the heart of Chandigarh, India's vibrant and burgeoning tech hub. As you
        step into our world, prepare to be immersed in a realm where creativity
        knows no bounds, where every pixel, every line of code, and every frame
        of video is meticulously crafted to perfection.
      </p>
      <div className="flex my-10 justify-center gap-4 md:gap-8 flex-wrap">
        <Image
          src="/next.svg"
          width={75}
          height={75}
          alt="/"
          className="w-[15%] h-auto"
        />
        <Image
          src="/firebase.svg"
          width={75}
          height={75}
          alt="/"
          className="w-[15%] h-auto"
        />
        <Image
          src="/ps.svg"
          width={75}
          height={75}
          alt="/"
          className="w-[15%] h-auto"
        />
        <Image
          src="/blender.svg"
          width={75}
          height={75}
          alt="/"
          className="w-[15%] h-auto"
        />
        <Image
          src="/ai.svg"
          width={75}
          height={75}
          alt="/"
          className="w-[15%] h-auto"
        />
      </div>
      <p className="text-[1.5em] font-herofont font-light mt-2 leading-relaxed">
        At EazWeb, we're not just content with creating visually stunning
        websites; we're dedicated to ensuring that they perform flawlessly
        across all devices and platforms. That's why we harness the power of
        cutting-edge technologies like Next.js to supercharge the performance
        and aesthetics of our websites. With Next.js, we're able to leverage the
        latest advancements in web development to deliver lightning-fast load
        times, silky-smooth animations, and seamless user experiences that keep
        visitors engaged and coming back for more. By staying at the forefront
        of technology and embracing innovative solutions, we ensure that every
        website we create not only looks great but also performs optimally,
        providing our clients with a competitive edge in the digital landscape.
      </p>
    </div>
  );
};

export default page;
