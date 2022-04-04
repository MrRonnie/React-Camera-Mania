import React from "react";
import Images from "../Images/camera.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="flex mx-auto mt-20">
        <div className=" mx-auto text-left mt-24">
          <h1 className="text-4xl font-bold text-blue-700">
            Start your Journey
          </h1>
          <h1 className="text-4xl font-bold ">Start your Dream</h1>
          <p className="mt-6 text-left font-normal">
            A picture is a reflection of the dreams hidden within Look beyond
            <br /> what you see. A real camera will help you stand out from the
            crowd
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
            Book Now
          </button>
        </div>
        <div className="m-auto w-80 mt-7">
          <img src={Images} alt="" />
        </div>
      </div>
      <div>
        <div className="mt-20">
          <h1 className="text-3xl font-bold">Customer Reviews</h1>
        </div>
        <div class="py-4">
          <div class="mx-auto w-96 border-t border-gray-400"></div>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-52 my-6">
            See All Reviews
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
