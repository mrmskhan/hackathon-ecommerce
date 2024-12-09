import React from "react";
import Image from "next/image";

const PopularStyle = () => {
  return (
    <main className="container w-[1320px]  h-auto pl-8 py-12 lg:py-16">
      <div className="relative flex gap-4 items-center">
        {/* Title on the left */}
        <h1 className="text-2xl w-[300px] h-[270px] tracking-wide text-center  text-zinc-900 rotate-90">
          EXPLORE NEW AND POPULAR STYLES
        </h1>

        {/* pop-img1 */}
        <div className="w-[610px] h-[610px] pr-24">
          <Image
            src="/pop-img1.png"
            alt="1"
            width={500}
            height={500}
            className="object-cover rounded-lg w-[600px] h-[600px]"
          />
        </div>

        {/* Right Side: Grid of Images */}
        <div className="grid grid-cols-2 gap-12 gap-y-12 gap-x4">
          <div className="w-[260px] h-[260px]">
            <Image
              src="/pop-img2.png"
              alt="2"
              width={400}
              height={400}
              className="object-cover rounded-lg "
            />
          </div>
          <div className="w-[260px] h-[260px]">
            <Image
              src="/pop-img3.png"
              alt="3"
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-[260px] h-[260px]">
            <Image
              src="/pop-img4.png"
              alt="4"
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-[260px] h-[260px] ">
            <Image
              src="/pop-img5.png"
              alt="5"
              width={300}
              height={300}
              className="object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PopularStyle;
