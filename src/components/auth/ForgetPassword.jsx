import { useState } from "react";

import {
  Eye,
  lock,
  email,
  emailsent,
  eyeOff,
  eyeOn,
  passwords,
} from "../../assets/images/images.js";
function UpdatePassword() {
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
      [name]: value,
    });
  };

  // Form validation and submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitError("");
      setFormData({
        email: "",
        password: "",
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
          <h2 className="text-xl font-semibold mb-5 text-center">
            Forget Password
          </h2>

          <form
            className="space-y-6 max-w-md w-full mx-auto"
            onSubmit={handleSubmit}
          >
            {/* Email */}
            <div className="relative">
              <div className="absolute  inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img src={email} className=" text-secondary items-center" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className={` border text-sm rounded-2xl shadow-md  block w-full sm:w-[463px] ps-10 p-2.5   ${
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

            <button className="sm:w-[463px] w-full py-2 bg-primary text-white rounded-3xl shadow-md hover:bg-red-600">
              Register
            </button>
            {submitError && (
              <p className="text-red-500 text-center mt-4">{submitError}</p>
            )}
            <p className="text-center mt-4">
              {`Login with  `}
              <a href="#" className="text-blue hover:underline">
                Password
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
