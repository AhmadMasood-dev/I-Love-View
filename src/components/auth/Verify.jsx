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

const Verify = () => {
  const email = "zng9095@gmail.com";
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleVerify = () => {
    setLoading(true); // Start loading

    axios
      .post(
        "https://iloveview-backend-production.up.railway.app/auth/verify",
        {
          email,
          verificationCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("help");
        if (response.status === 200) {
          setMessage("✅ Code verified successfully!");

          navigate("/login"); // Redirect to login page on success
        } else {
          setMessage("❌ Invalid code, please try again.");
        }
        console.log(response);
      })
      .catch((error) => {
        setMessage("❌ Verification failed. Please try again.");
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
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
                Verify Your Account
              </h2>

              <form
                className="space-y-4 max-w-md mx-auto"
                onSubmit={handleVerify}
              >
                {/* Full Name */}

                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <img src={lock} className=" text-secondary items-center" />
                  </div>
                  <input
                    type="text"
                    name="code"
                    id="email"
                    required
                    className=" border text-sm rounded-2xl shadow-md  block w-[463px] ps-10 p-2.5           
                      "
                    placeholder="Enter your code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                  {/* {errors.email && (
                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
               )} */}
                </div>

                <button className="w-full py-2 bg-primary text-white rounded-3xl shadow-md hover:bg-red-600">
                  verify
                </button>
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

export default Verify;
