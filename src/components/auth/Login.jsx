import { useState } from "react";

import {
  Eye,
  lock,
  email,
  eyeOff,
  eyeOn,
  passwords,
} from "../../assets/images/images.js";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Toggles
  const togglePassword = () => setShowPassword(!showPassword);

  // Handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Form validation and submission handler
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const newErrors = {};
  //     if (!formData.email) newErrors.email = "Email is required.";
  //     if (!formData.password) newErrors.password = "Password is required.";

  //     setErrors(newErrors);

  //     if (Object.keys(newErrors).length === 0) {
  //       setTimeout(() => {
  //         setSubmitError("");
  //         setFormData({
  //           email: "",
  //           password: "",
  //         });
  //       }, 1000);
  //     } else {
  //       setSubmitError("Some went Wrong..");
  //     }
  //   };

  return (
    <div className="flex h-[852px] sm:h-[1024px] w-full ">
      {/* Left Side with Background Image */}
      <div className="hidden md:block md:w-1/2  relative antumn2Img"></div>
      <div className="absolute top-4 left-4">
        <img src={Eye} alt="Eye Icon" className="w-8 h-8" />
      </div>

      {/* Right Side with Form */}
      <div className="w-full sm:w-1/2 flex items-center justify-center  bgImage px-5">
        <div className="w-full sm:w-[644px] sm:h-[852px] h-full pt-40 sm:pt-5   sm:shadow-2xl rounded-lg flex items-center justify-center flex-col">
          <img
            src={passwords}
            alt=""
            className="w-[213px] sm:w-[344px] sm:h-[263px] h-[163px]"
          />
          <h2 className="text-xl font-semibold mb-1 text-center">
            Create Your iLoveView Account
          </h2>
          <p className="text-secondary text-center mb-6 text-sm font-normal">
            Sign up to send and receive private videos with family and friends.
          </p>

          <form
            className="space-y-6 max-w-md mx-auto"
            //   onSubmit={verifyEmail ? handleSubmit : handleVerify}
          >
            {/* Full Name */}

            {/* Email */}
            <div className="relative">
              <div className="absolute  inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img src={email} className=" text-secondary items-center" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className={` border text-sm rounded-2xl shadow-md  block w-[352px] sm:w-[463px] ps-10 p-2.5   ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {/* {errors.email && (
                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
               )} */}
            </div>

            {/* Password */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img src={lock} className=" text-secondary items-center" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className={` border text-sm rounded-2xl shadow-md   block w-[352px] sm:w-[463px] ps-10 p-2.5 ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <img
                src={showPassword ? eyeOn : eyeOff}
                alt=""
                className="absolute right-3 sm:right-3 top-3 cursor-pointer"
                onClick={togglePassword}
              />
            </div>

            <button className="w-full py-2 bg-primary text-white rounded-3xl shadow-md hover:bg-red-600">
              Register
            </button>
            {submitError && (
              <p className="text-red-500 text-center mt-4">{submitError}</p>
            )}

            <p className="text-center mt-4">
              {`Don't hav a account?`}
              <a href="#" className="text-blue hover:underline">
                Register
              </a>
            </p>
          </form>
          <div className="w-full flex justify-center items-center mt-auto pb-4">
            <p>
              <span className="text-blue">[Terms of Service]</span> and{" "}
              <span className="text-blue">[Privacy Policy]</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
