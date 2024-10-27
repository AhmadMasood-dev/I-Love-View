import { Eye } from "../../assets/images/images.js";
import { skip } from "../../assets/images/images.js";
import { Onboarding } from "../../assets/images/data.js";
import { useState } from "react";
function View1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNextCard = () => {
    if (currentIndex < Onboarding.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      console.log(currentIndex);
    }
  };

  if (innerWidth > 450) {
    var skipButton = true;
  }
  return (
    <div className="bgImage  w-[1440px]">
      <div className="mx-auto sm:pl-7 pl-5 sm:pt-5 pt-4">
        <img src={Eye} alt="Eye Logo" className="sm:w-14 w-8 h-9 sm:h-14 " />
      </div>
      <div className=" h-full mx-auto flex items-center justify-center  ">
        {/* Card */}
        <div className=" rounded-2xl sm:shadow-lg  flex items-center justify-center text-center h-[550px] w-[500px] ">
          {Onboarding.map((boarding, index) =>
            index === currentIndex ? (
              <div key={boarding.id} className="w-4/5 h-full">
                {/* skip icon */}

                {skipButton && index !== 5 && index > 0 && (
                  <div className="flex justify-end">
                    <button onClick={handleNextCard}>
                      <img src={skip} alt="" />
                    </button>
                  </div>
                )}

                {/* images */}
                <img
                  src={boarding.image}
                  alt="Welcome Illustration"
                  className=" w-full px-5 h-[325px] mb-10 sm:mb-3 "
                />

                {/* Heading */}
                <h2 className=" font-semibold text-2xl mb-1     ">
                  {boarding.heading}
                  {index === 0 ? (
                    <span className="text-primary">ILoveView</span>
                  ) : (
                    ""
                  )}
                </h2>
                {/* Description */}
                <p className="text-secondary text-sm w-full sm:mb-10 mb-8">
                  {boarding.description}
                </p>

                {/* Button */}

                <button
                  onClick={handleNextCard}
                  className="bg-primary self-end hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 w-full mb-2"
                >
                  {Onboarding[currentIndex].buttonText}
                </button>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default View1;
