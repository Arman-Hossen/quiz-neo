import React from "react";

const Blog = () => {
  return (
    <div>
        <p className="bg-black dark:text-lime-500 rounded-xl text-3xl font-mono font-extrabold inline-block mt-3 px-7 py-2">Blog</p>
        <div className="grid md:grid-cols-2 mx-12 mt-10 sm:grid-cols-1 rounded lg:grid-cols-3 gap-4  ">
      <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <div className="mt-6 mb-2">
          <span className="block  font-extrabold tracking-widest uppercase dark:text-lime-500 text-xl">
            What is the purpose of react-router?
          </span>
        </div>
        <p className="dark:text-gray-100">
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL. ReactJS Router is mainly used for developing Single Page
          Web Applications. React Router is used to define multiple routes in
          the application. When a user types a specific URL into the browser,
          and if this URL path matches any 'route' inside the router file, the
          user will be redirected to that particular route..
        </p>
      </div>
      <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <div className="mt-6 mb-2">
          <span className="block  font-extrabold tracking-widest uppercase dark:text-lime-500 text-xl">
            How does context API works?
          </span>
        </div>
        <p className="dark:text-gray-100">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.React.createContext() is all you need. It
          returns a consumer and a provider. Provider is a component that as
          it's names suggests provides the state to its children. It will hold
          the "store" and be the parent of all the components that might need
          that store. Consumer as it so happens is a component that consumes and
          uses the state.
        </p>
      </div>
      <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <div className="mt-6 mb-2">
          <span className="block  font-extrabold tracking-widest uppercase dark:text-lime-500 text-xl">
          Write details about UseRef?
          </span>
        </div>
        <p className="dark:text-gray-100">
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
          The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue  useRef(initialValue). The object can persist a value for a full lifetime of the component.
        </p>
      </div>
    </div>
    </div>
    
    
  );
};

export default Blog;
