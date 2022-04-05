import React from "react";
import Images from "../Images/Error.png";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-3xl text-bold mt-10 text-center text-blue-600 font-serif">
        Ops!! 404 Page Not Found
      </h1>
      <img className="mx-auto w-5/12" src={Images} alt="" />
    </div>
  );
};

export default NotFound;
