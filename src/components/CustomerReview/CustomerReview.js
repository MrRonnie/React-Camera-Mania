import React from "react";

const CustomerReview = (props) => {
  const { name, img, title, rating } = props.review;
  return (
    <div className="max-w-sm mx-auto my-5 rounded overflow-hidden shadow-lg">
      <div className="">
        <img className="p-5 w-96" src={img} alt="" />
        <h4 className="font-bold text-xl mb-2">{name}</h4>
        <p className="text-gray-700 text-base p-5 text-left m-3">
          {" "}
          <span className="font-bold">Review:</span> {title}
        </p>
        <p>Rating : {rating}</p>
      </div>
      <div class="px-6 pt-4 pb-2 ">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

export default CustomerReview;
