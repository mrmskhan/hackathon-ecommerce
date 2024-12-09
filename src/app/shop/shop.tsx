import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Shop = () => {
  return (
    <div>
      <div className="flex">
        <img
          src="feature2.png"
          alt="Image 3"
          className="w-[600px] h-[550px] rounded-lg ml-52 mr-20"
        />
        <div className="flex flex-col">
          <h1 className="font-inter font-bold text-[60px] leading-[66px] text-[#272343] mb-4 pr-40">
            Library Stool Chair
          </h1>
          <button className="w-[118px] h-[32px] font-inter font-semibold text-[20px] leading-[22px] text-white bg-[#029FAE] rounded-full p-1">
            $20.00 USD
          </button>
          <div className="w-[521px] h-[1px] bg-[#D9D9D9] mt-10"></div>
          <div>
            <p className="w-[543px] opacity-60 font-inter font-normal text-[22px] leading-[33px] text-[#272343] mt-5 mb-5 rounded-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
          </div>
          <button className="flex flex-row justify-center items-center px-6 py-3 gap-2.5 mt-2 w-[212px] h-[63px] bg-[#029FAE] rounded-lg text-white">
            <FaShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
      
      <div>

      </div>
    </div>
  );
};

export default Shop;
