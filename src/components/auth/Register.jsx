import { useState } from "react";

import {
  Eye,
  login,
  lock,
  emailsvg,
  user,
  eyeOff,
  eyeOn,
  verify,
} from "../../assets/images/images.js";

import Loader from "../../ui/Spinner.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [email, setEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // verify email
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);

  // Toggles
  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // Handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Form validation and submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.terms)
      newErrors.terms = "You must agree to the Terms of Service.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const { fullName, email, password } = formData;

      setSubmitError("");
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });

      axios
        .post(
          "https://iloveview-backend-production.up.railway.app/auth/register",
          { fullName, email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status === 201) {
            setEmail(response.data.email); // Set email state
            setVerifyEmail(false);
            console.log("Navigating to verify page"); // Check if this is reached
            navigate("/verify");
          }
          console.log(response);
        })
        .catch((error) => {
          if (error.response) {
            const errorMessage =
              error.response.data.message || "Error occurred";
            setSubmitError(errorMessage);
          } else {
            setSubmitError("Network error, please try again.");
          }
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setSubmitError("Please fill out all required fields correctly.");
      setLoading(false);
    }
  };

  return (
    <div className="flex h-[852px] sm:h-[1024px] w-full ">
      {/* Left Side with Background Image */}
      <div className="hidden md:block md:w-1/2  relative antumnImg"></div>
      <div className="absolute top-4 left-4">
        <img src={Eye} alt="Eye Icon" className="w-8 h-8" />
      </div>

      {/* Right Side with Form */}
      <div className="w-full sm:w-1/2 flex items-center justify-center  bgImage px-5">
        {!loading ? (
          <div className="w-full sm:w-[644px] sm:h-[885px]  sm:shadow-xl rounded-lg flex items-center justify-center flex-col">
            <>
              <img
                src={login}
                alt=""
                className="w-[213px] sm:w-[344px] sm:h-[263px] h-[163px]"
              />
              <h2 className="text-xl font-semibold mb-1 text-center">
                Create Your iLoveView Account
              </h2>
              <p className="text-secondary text-center mb-6 text-sm font-normal">
                Sign up to send and receive private videos with family and
                friends.
              </p>

              <form
                className="space-y-4 max-w-md mx-auto"
                // onSubmit={verifyEmail ? handleSubmit : handleVerify}
                onSubmit={handleSubmit}
              >
                {/* Full Name */}

                <>
                  <div className="relative ">
                    <div className=" absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        src={user}
                        className=" text-secondary items-center"
                      />
                    </div>

                    <input
                      // className=" border text-sm rounded-2xl shadow-md  block w-full ps-10 p-2.5  "
                      type="text"
                      name="fullName"
                      className={`border text-sm rounded-2xl shadow-md block w-full ps-10 p-2.5  ${
                        errors.fullName ? "border-red-500" : ""
                      }`}
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        src={emailsvg}
                        className=" text-secondary items-center"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={` border text-sm rounded-2xl shadow-md  block w-full ps-10 p-2.5   ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {/* {errors.email && (
                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
               )} */}
                    <img
                      src={verify}
                      alt=""
                      className="absolute right-3 top-4 visible sm:invisible "
                    />
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <img
                        src={lock}
                        className=" text-secondary items-center"
                      />
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
                      className={`border rounded-2xl shadow-md block w-full ps-10 p-2.5 ${
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

                  {/* Terms and Register Button */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      className="w-5 h-5"
                    />

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
                  {errors.terms && (
                    <p className="text-red-500 text-xs">{errors.terms}</p>
                  )}
                </>

                <button className="w-full py-2 bg-primary text-white rounded-3xl shadow-md hover:bg-red-600">
                  {verifyEmail ? "Register" : "Verify"}
                </button>
                {submitError && (
                  <p className="text-red-500 text-center mt-4">{submitError}</p>
                )}

                <p className="text-center mt-4">
                  Already have an account?{" "}
                  <a href="#" className="text-blue hover:underline">
                    Login
                  </a>
                </p>
              </form>
            </>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Register;
