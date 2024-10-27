import { Eye } from "../../assets/images/images.js";
import { Onboarding } from "../../assets/images/data.js";
function View1() {
  // const Onboarding = [
  //   {
  //     id: 1,
  //     image: Welcome1,
  //     description: "Send and receive private videos with family and friends, and schedule future releases.",
  //     heading: "Welcome to",
  //     buttonText: "Get Started",
  //   },
  // ];
  return (
    <div className="bgImage  w-[1440px]">
      <div className="mx-auto sm:pl-7 pl-5 sm:pt-5 pt-4">
        <img src={Eye} alt="Eye Logo" className="sm:w-14 w-8 h-9 sm:h-14 " />
      </div>
      <div className=" h-full mx-auto flex items-center justify-center  ">
        {/* Card */}
        <div className=" rounded-2xl sm:shadow-lg  flex items-center justify-center text-center h-[550px] w-[500px] ">
          {Onboarding.map((boarding) => (
            <div key={boarding.id} className="w-4/5 h-full">
              {/* images */}
              <img
                src={boarding.image}
                alt="Welcome Illustration"
                className=" w-full px-5 h-[325px] mb-10 sm:mb-3 "
              />

              {/* Heading */}
              <h2 className=" font-semibold text-2xl mb-1     ">
                {boarding.heading}
                <span className="text-primary">ILoveView</span>
              </h2>
              {/* Description */}
              <p className="text-secondary text-sm w-full sm:mb-10 mb-8">
                {boarding.description}
              </p>

              {/* Button */}
              <button className="bg-primary self-end hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 w-full mb-2">
                {boarding.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default View1;
