import React from "react";

const Get = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 my-4">
        Get in Touch With Us
      </h1>

      <p className="text-lg text-gray-600 leading-relaxed items-center justify-center px-80 my-6">
        For more information about our product & services, please feel free to
        drop us an email. Our staff will always be there to help you out. Do not
        hesitate!
      </p>

      <div>
        <div className="mb-24 mt-10">
          <h3 className="text-1xl font-bold ml-32">Address</h3>
          <p  className=" ml-32">236 5th SE Avenue, </p>
          <p  className=" ml-32"> New York NY1000,0</p>
          <p  className=" ml-32">United States,</p>
        </div>

        <div className="mb-24 mt-10">
          <h3 className="text-1xl font-bold ml-32">Phone</h3>
          <p  className=" ml-32">Mobile: +(84) 546-6789           </p>
          <p  className=" ml-32"> Hotline: +(84) 456-6789</p>

        </div>

        <div className="mb-24 mt-10">
          <h3 className="text-1xl font-bold ml-32">Working Time</h3>
          <p  className=" ml-32">Monday-Friday: 9:00            </p>
          <p  className=" ml-32">- 21:00</p>
          <p  className=" ml-32">Saturday-Sunday: 9:00</p>
          <p  className=" ml-32">  - 22:00</p>
        </div>

      </div>
    </div>
  );
};

export default Get;
