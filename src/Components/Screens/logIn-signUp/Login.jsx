import { useState } from "react";
import { Eye, side1 } from "../../../assets/images/images";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="flex h-screen">
      {/* Left Side with Background Image */}
      <div className="w-1/2 bg-cover bg-center relative antumnImg">
        <div className="absolute top-4 left-4">
          <img src={Eye} alt="Eye Icon" className="w-8 h-8" />
        </div>
      </div>

      {/* Right Side with Form */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="w-3/4  h-5/6 p-8 bg-white shadow-lg rounded-lg flex items-center justify-center flex-col">
          <img src={side1} alt="" />
          <h2 className="text-xl font-semibold mb-1 text-center">
            Create Your iLoveView Account
          </h2>
          <p className="text-secondary text-center mb-6 text-sm font-normal">
            Sign up to send and receive private videos with family and friends.
          </p>

          <form className="space-y-4">
            {/* Full Name */}
            <dv>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 mb-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
              />
            </dv>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mb-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 mb-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={togglePassword}
              >
                👁️
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 mb-1 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={toggleConfirmPassword}
              >
                👁️
              </span>
            </div>

            {/* Terms and Register Button */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="w-5 h-5" />
              <label htmlFor="terms" className="text-sm">
                By signing up, you agree to our{" "}
                <a href="#" className="text-red-500 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-red-500 hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Register
            </button>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <a href="#" className="text-red-500 hover:underline">
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
