import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import './topic.css'
import { useNavigate } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id,  name, logo, total } = topic;
  const handle = useNavigate();
  
  const handleTopis = () =>{
    handle(`/topic/${id}`);
 }

  
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src={logo}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-black"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {name}
          </h2>
          <p className="dark:text-gray-100">
            Question : {total}
          </p>
        </div>
        <button
          type="button" onClick={handleTopis}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-white dark:text-gray-900 hover:bg-blue-400 hover:text-white "
        >
          Start Practice
          <ArrowRightIcon className="h-7 w-7 mx-2"></ArrowRightIcon>
        </button>
      </div>
    </div>
  );
};

export default Topic;
