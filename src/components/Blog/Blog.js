import React from "react";

const Blog = () => {
  return (
    <div className='grid mt-10 ml-5 lg:ml-20  sm:grid-cols-1  lg:grid-cols-3 gap-4  '>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <div className="mt-6 mb-2">
                    <span className="block  font-extrabold tracking-widest uppercase dark:text-lime-500 text-xl">What is the purpose of react router</span>
                </div>
                <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <div className="mt-6 mb-2">
                    <span className="block  font-extrabold tracking-widest uppercase dark:text-lime-500 text-xl">How does context API work</span>
                </div>
                <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <div className="mt-6 mb-2">
                    <span className="block  font-extrabold tracking-widest uppercase dark:text-lime-500 text-xl">Why use useRef</span>
                </div>
                <p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.
                Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            </div>
        </div>
  );
};

export default Blog;
