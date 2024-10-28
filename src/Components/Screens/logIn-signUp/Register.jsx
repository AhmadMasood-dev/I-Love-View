import { useState } from "react";

import {
  Eye,
  side1,
  lock,
  email,
  user,
  eyeOff,
  eyeOn,
} from "../../../assets/images/images";
// import locksvg from "../../../assets/images/Screen2/Group 9.svg";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="flex h-[1024px] w-full ">
      {/* Left Side with Background Image */}
      <div className="w-1/2 bg-cover bg-center relative antumnImg">
        <div className="absolute top-4 left-4">
          <img src={Eye} alt="Eye Icon" className="w-8 h-8" />
        </div>
      </div>

      {/* Right Side with Form */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100 bgImage">
        <div className="w-[644px] h-[885px]  shadow-xl rounded-lg flex items-center justify-center flex-col">
          <img src={side1} alt="" />
          <h2 className="text-xl font-semibold mb-1 text-center">
            Create Your iLoveView Account
          </h2>
          <p className="text-secondary text-center mb-6 text-sm font-normal">
            Sign up to send and receive private videos with family and friends.
          </p>

          <form className="space-y-4">
            {/* Full Name */}
            <div className="relative">
              <img
                src={user}
                className="absolute top-3 left-3 text-secondary items-center"
              />

              <input
                type="text"
                placeholder="Full Name"
                className="w-[463px] px-9 py-2 mb-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm text-black"
              />
            </div>

            {/* Email */}

            <div className="relative flex justify-center items-center">
              <div className="flex justify-between">
                <img
                  src={email}
                  className="absolute top-3 left-3 text-secondary items-center"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[463px] px-9 py-2 mb-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm text-black"
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <img
                src={lock}
                className="absolute top-3 left-3 text-secondary items-center"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-[463px] px-9 py-2 mb-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
              />
              <img
                src={eyeOn}
                alt=""
                className="absolute right-3 top-3 cursor-pointer"
                onClick={togglePassword}
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <img
                src={lock}
                className="absolute top-3 left-3 text-secondary items-center"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-9 py-2 mb-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
              />
              <img
                src={eyeOff}
                alt=""
                className="absolute right-3 top-3"
                onClick={toggleConfirmPassword}
              />
            </div>

            {/* Terms and Register Button */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="w-5 h-5" />
              <label htmlFor="terms" className="text-sm">
                By signing up, you agree to our{" "}
                <a href="#" className="text-blue hover:underline">
                  [Terms of Service]
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue hover:underline">
                  [Privacy Policy]
                </a>
                .
              </label>
            </div>

            <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-red-600">
              Register
            </button>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <a href="#" className="text-blue hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
