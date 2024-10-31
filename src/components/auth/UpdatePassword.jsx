import { useState } from "react";

import {
  Eye,
  lock,
  emailsent,
  eyeOff,
  eyeOn,
  passwords,
} from "../../assets/images/images.js";
function UpdatePassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggles
  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // Handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation and submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required.";
    if (!formData.password) newErrors.password = "Password is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitError("");
      setFormData({
        password: "",
        confirmPassword: "",
      });
    } else {
      setSubmitError("Some went Wrong..");
    }
  };

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
            src={emailsent}
            alt=""
            className="w-[213px] sm:w-[344px] sm:h-[263px] h-[163px]"
          />
          <h2 className="text-xl font-semibold mb-1 text-center">
            UpdatePassword
          </h2>

          <form
            className="space-y-6 max-w-md w-full mx-auto"
            onSubmit={handleSubmit}
          >
            {/* Password */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img src={lock} className=" text-secondary items-center" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className={` border text-sm rounded-2xl shadow-md   block w-full ps-10 p-2.5 ${
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

            {/* Confirm Password */}
            <div className="relative">
              <img
                src={lock}
                className="absolute top-3 left-3 text-secondary items-center"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className={`border rounded-2xl shadow-md block w-full  ps-10 p-2.5 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <img
                src={showConfirmPassword ? eyeOn : eyeOff}
                alt=""
                className="absolute right-3 top-3 cursor-pointer"
                onClick={toggleConfirmPassword}
              />
            </div>

            <button className="w-full py-2 bg-primary text-white rounded-3xl shadow-md hover:bg-red-600">
              Login
            </button>
            {submitError && (
              <p className="text-red-500 text-center mt-4">{submitError}</p>
            )}
            <button className="w-full py-2 bg-gray-500 text-white rounded-3xl shadow-md hover:bg-secondary">
              Skip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
