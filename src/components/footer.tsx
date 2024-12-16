import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaCcPaypal } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa6";
import { RiMastercardLine } from "react-icons/ri";
import { TbBrandVisa } from "react-icons/tb";


const Footer = () => {
  return (
    <div>
    <footer className="w-full h-[343px] bg-[#f3f2f5] text-gray-600 py-20 px-10 md:px-56">
      {/* Parent Div */}
      <div className="flex flex-row justify-between gap-8">
        {/* 1st Child Div */}
        <div className="w-[1150px] h-[198px] top-[80px] left-[300px] gap-24px flex flex-row space-x-10">
          {/* Logo + Link 1 */}


<div className="grid w-[260px] h-[150px] top-[80px] left-[200px] gap-24px space-x-2">
  <div className="flex flex-row items-start space-y-4">
    <img src="/logo-Icon.png" alt="Logo" className="w-12 h-12" />
    <span className="text-lg font-bold text-gray-800 pl-2"> Comfortly </span>
  </div>
  <p className="hover:underline hover:text-teal-600 text-[14px]">
    Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus
  </p>

  {/* Social Media Icons */}
  <div className="flex justify-start gap-4 mt-4">
    <a href="https://www.facebook.com/" target="blank" className="text-xl text-gray-600 hover:text-teal-600">
      <FaFacebookF />
    </a>
    <a href="#" className="text-xl text-gray-600 hover:text-teal-600">
      <FaTwitter />
    </a>
    <a href="https://www.instagram.com/" target="blank" className="text-xl text-gray-600 hover:text-teal-600">
      <FaInstagram />
    </a>
    <a href="https://nl.pinterest.com/" target="blank" className="text-xl text-gray-600 hover:text-teal-600">
      <FaPinterestP />
    </a>
    <a href="https://www.youtube.com/" target="blank" className="text-xl text-gray-600 hover:text-teal-600">
      <FaYoutube />
    </a>
  </div>
</div>


          {/* Links 2, 3, 4 */}
          <div className="w-[450px] h-[150px] top-[80px] left-[747px] gap-20px flex flex-row space-x-10">
            {/* Links 2 */}
            <div>
              <h4 className="text-lg font-semibold font-inter mb-4">
                CATEGORY
              </h4>
              <ul className="font-inter  text-[14px] leading-[17.6px] text-[#272343] space-y-2 ">
                <li>
                  <a href="#" className="hover:underline hover:text-teal-600 ">
                    Sofa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-teal-600">
                    Armchair
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-teal-600">
                    Wing Chair
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-teal-600">
                    Desk Chair
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-teal-600">
                    Wooden Chair
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-teal-600">
                    Park Bench
                  </a>
                </li>
              </ul>
            </div>

            {/* Links 3 */}
            <div className="w-276px] h-[143px] top-[80px] left-[971.5px] pl-24 gap-5">
              <h4 className="text-lg font-semibold mb-4"> SUPPORT</h4>
              <ul className="font-inter font-normal  text-[14px] leading-[17.6px] text-[#272343] space-y-2">
                <li>
                  <a href="#" className="hover:underline hover:text-teal-600">
                    Help & Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-teal-600">
                    Tearms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-teal-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-teal-600">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2nd Child Div */}
        <div className="flex flex-row space-x-10 ">
          {/* Subscription */}
          <div>
            <h4 className="font-inter font-medium text-[16px] leading-[28.4px] tracking-[6%]">
              NEWSLETTER
            </h4>
            <form className=" flex justify-between ali text-[14px] mt-4 gap-20 w-[270px] h-[46px] rounded-[8px] border-[2px]  ">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded bg-gray-100 text-gray-800 text-[16px]"
              />
              <button className="block bg-[#029FAE] hover:bg-teal-600  text-white py-2 px-4 rounded">
                Subscribe
              </button>
            </form>
            <p className=" text-[14px] pt-4 hover:underline hover:text-teal-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>

    </footer>
    <div className="w-full h-[75px] flex items-center justify-between bg-gray-200 px-40">
  {/* Left div */}
  <div className="w-[341px] h-[21px] text-sm text-gray-600">
    <span>@ 2021 - Blogy - Designed & Developed by <a href="#" target="blank" className="font-semibold">Zakirsoft</a></span>
  </div>

  {/* Right div */}
  <div className=" w-[227px] h-[27px] top-[24px] left-[1393px] flex justify-between items-center">
  <a href="https://www.paypal.com/pk/home" target="blank"  className="text-gray-600 hover:text-teal-600"><RiMastercardLine className="w-10 h-10 hover:text-[#0D9488]" style={{ color: 'rgba(0, 0, 0, 0.2)' }} /></a>
    <a href="https://www.mastercard.us/en-us.html" target="blank" className="text-gray-600 hover:text-teal-600"><FaCcPaypal className="w-10 h-10 hover:text-[#0D9488]" style={{ color: 'rgba(0, 0, 0, 0.2)' }} /></a>
    <a href="https://www.americanexpress.com/" target="blank"  className="text-gray-600 hover:text-teal-600"> <FaCcAmex className="w-10 h-10  text-gray-400 hover:text-[#0D9488]" /></a>
    <a href="https://www.cimbanque.com/" target="blank"  className="text-gray-600 hover:text-teal-600"><TbBrandVisa  className="w-12 h-12 text-gray-400 hover:text-teal-600" /></a>
  </div>
</div>

    </div>
  );
};

export default Footer;