import { Eye, Welcome1 } from "../../assets/images/images.js";
function View1() {
  return (
    // <div className=" ">
    <div className=" h-[1024px] w-[1440px]  m-auto flex items-center justify-center bgImage">
      {/* in-h-screen bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 "> */}
      <div className="absolute top-5 left-5">
        <img src={Eye} alt="Eye Logo" className="w-10 h-10" />
      </div>
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg  flex items-center justify-center text-center h-[578px] w-[514px] ">
        {/* Illustration Image */}
        <div className="w-4/6">
          <img
            src={Welcome1}
            alt="Welcome Illustration"
            className="w-[325px] h-[325px]  "
          />

          {/* Heading */}
          <h2 className=" font-semibold text-2xl     ">
            Welcome to <span className="text-red-500">ILoveView</span>
          </h2>
          {/* Description */}
          <p className="text-gray-600 mb-6">
            Send and receive private videos with family and friends, and
            schedule future releases.
          </p>

          {/* Button */}
          <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            Get Started
          </button>
        </div>
      </div>
      {/* </div>{" "} */}
    </div>
  );
}

export default View1;
