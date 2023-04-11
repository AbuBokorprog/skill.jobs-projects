import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="text-center flex justify-around items-center bg-slate-300">
        <img className="w-44" src="All Images/Vector.png" alt="" />
        <h2 className="text-4xl font-semibold">Blogs</h2>
        <img className="w-44" src="All Images/Vector-1.png" alt="" />
      </div>
      <div className="flex gap-5 justify-center my-10 container-lg mx-20 items-center">
        <div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              When should you use context API?
            </div>
            <div className="collapse-content">
              <p>
                ANS: অনেক সময় একটি কম্পোনেন্ট যেকোনো স্টেট ঐ কম্পোনেন্টের উপরে
                বা নিচের একের অধিক কম্পোনেন্টে পাঠাতে হয়। এইভাবে একটা একটা করে
                পাঠাতে অনেক সময় লাগে এবং বিরক্তিকর হয়ে যায়। এই সম্পূর্ণ বিষয়টা
                কে বলা হয় প্রপ ড্রিলিং। এভাবে একটা একটা করে স্টেট পাস এবং রিসিভ
                করার কাজটা কে সহজ ও কম সময়ে করার জন্য কন্টেক্সট এপিআই ব্যবহার
                করা হয়। কন্টেক্সট এপিআই একট অসাধারন টুল।
              </p>
            </div>
          </div>
          <div
            tabIndex={1}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What is a custom hook?
            </div>
            <div className="collapse-content">
              <p>
                ANS: A custom hook is a JavaScript function that allows you to
                reuse stateful logic between different components. When you have
                component logic that needs to be used by multiple components, we
                can extract that logic to a custom Hook. Custom hooks can be
                created by combining existing React hooks such as useState,
                useEffect, useContext, etc. and encapsulating them within a
                custom function. Custom Hooks start with "use".
              </p>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What is useRef?
            </div>
            <div className="collapse-content">
              <p>
                ANS: useRef is a React Hook that lets you reference a value
                that’s not needed for rendering. useRef is a hook in React that
                returns a mutable ref object, which can be used to store a
                reference to a DOM element or any other mutable value that needs
                to persist between renders. The useRef hook returns an object
                with a current property that can be used to store mutable
                values.
              </p>
            </div>
          </div>
          <div
            tabIndex={3}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What is useMemo?
            </div>
            <div className="collapse-content">
              <p>
                useMemo is a hook that allows you to memoize the result of a
                function so that it only recomputes the result when its
                dependencies have changed. Memoization is a technique that
                optimizes expensive computations by caching the result of a
                function call, so that subsequent calls with the same arguments
                can be returned from the cache instead of being recomputed.
                useMemo allows you to apply this optimization to a function call
                within a component. useMemo takes two arguments: a function that
                computes the value, and an array of dependencies that the
                function depends on. If any of the dependencies change, the
                function is recomputed, and the new result is returned.
                Otherwise, the cached result is returned.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="image-full"
            src="All Images/Bloggers and influencers writing articles.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
