import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg
"
          alt="bg-img"
        />
      </div>
      <form className="w-3/12 absolute my-36 p-10 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-white text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full name"
            className="p-3 my-3 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-700 rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-700 rounded-md"
        />
        <button className="p-3 my-5 bg-red-700 w-full rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3 ">
          {isSignIn ? "New to Netflix? " : "Already Registered? "}
          {isSignIn ? (
            <span
              onClick={toggleSignInForm}
              className="hover:underline font-bold"
            >
              Sign up now.
            </span>
          ) : (
            <span
              onClick={toggleSignInForm}
              className="hover:underline font-bold"
            >
              Sign In now.
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
