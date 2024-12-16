import React from "react";

const Get = () => {
  return (
    <div>
            <h1 className="text-2xl font-bold text-center text-gray-800 mt-20">
        Get in Touch With Us
      </h1>

      <p className=" text-center text-lg text-gray-400 leading-relaxed px-[440px] my-6 ">
        For more information about our product & services, please feel free to
        drop us An email. Our staff will always be there to help you out. Do not
        hesitate!
      </p>
    <div className="flex w-[1058px] h-[923px] top-[424px] left-[431px] gap-40 ml-48 mt-20 ">
      <div className="mt-5">
        <div className="mb-10 mt-5">
          
          <h3 className="text-1xl font-bold ml-32">Address</h3>
          <p  className=" ml-32">236 5th SE Avenue, </p>
          <p  className=" ml-32"> New York NY1000,0</p>
          <p  className=" ml-32">United States,</p>
        </div>

        <div className="mb-10 mt-5">
          <h3 className="text-1xl font-bold ml-32">Phone</h3>
          <p  className=" ml-32">Mobile: +(84) 546-6789           </p>
          <p  className=" ml-32"> Hotline: +(84) 456-6789</p>

        </div>

        <div className="mb-10 mt-5">
          <h3 className="text-1xl font-bold ml-32">Working Time</h3>
          <p  className=" ml-32">Monday-Friday: 9:00            </p>
          <p  className=" ml-32">- 21:00</p>
          <p  className=" ml-32">Saturday-Sunday: 9:00</p>
          <p  className=" ml-32">  - 22:00</p>
        </div>
 
      </div>

      {/* form section */}
    <div className="w-[635px] h-[923px] top-[424px] left-[854px] mt-10 ">
      <form className="form-grid w-[531px] h-[741px] top-[543px] left-[906px]">
        {/* First Input */}

        <div className="input-container w-[530px] h-[121px] top-[543px] left-[907px]">
        <p className="w-[111.25px] h-[24px] top-[543px] left-[907px] font-bold text-1xl leading-[24px]   ">Your Name</p>
          <input
            type="text"
            placeholder="abc"
            className="input-field w-[528.75px] h-[75px] top-[589px] left-[908.25px] rounded-xl border-2 border-[#9F9F9F] mt-5 mb-8 pl-2"

          />
        </div>

        {/* Second Input */}

        <div className="input-container w-[530px] h-[121px] top-[700px] left-[907px]">
        <p className="w-[143.75px] h-[24px] top-[700px] left-[907px] font-bold text-1xl leading-[24px]   ">Email address</p>
          <input
            type="email"
            placeholder="abc@def.com"
            className="input-field  w-[528.75px] h-[75px] top-[746px] left-[908.25px] rounded-xl border-2 border-[#9F9F9F] mt-5 mb-8 pl-2"
          />
        </div>

        {/* Second Input */}

        <div className="input-container w-[528px] h-[121px] top-[587px] left-[909px]">
        <p className="w-[75.96px] h-[24px] top-[857px] left-[909px] font-bold text-1xl leading-[24px]  ">Subject</p>
          <input
            type="subject"
            placeholder="this is an optional"
            className="input-field  w-[526.75px] h-[75px] top-[903px] left-[910.25px] rounded-xl border-2 border-[#9F9F9F] mt-5 mb-8 pl-2"
          />
        </div>

        {/* Third Input */}

        <div className="input-container w-[528px] h-[166px] top-[1014px] left-[906px]">
        <p className="w-[75.96px] h-[24px] top-[1014px] left-[906px] font-bold text-1xl leading-[24px]  ">Message</p>
          <input
            type="message"
            placeholder="Hi! i’d like to ask about"
            className="input-field  w-[527px] h-[120px] top-[1060px] left-[907px] rounded-xl border-2 border-[#9F9F9F] mt-5 mb-8 pl-2"
          />
        </div>

        {/* Button */}
        <div className="button-container">
          <button type="submit" className="submit-button  w-[237px] h-[55px] top-[1229px] left-[913px] rounded-md border-2 bg-[#029FAE] border-[#B88E2F] text-[#FFFFFF] mt-10 items-center justify-center">
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Get;
