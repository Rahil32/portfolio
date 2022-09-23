import React from "react";
import reactJs from "../assets/react.svg";
import tailwinCss from "../assets/tailwind-css.svg";
import adobeXd from "../assets/adobe-xd.svg";
import figma from "../assets/figma.svg";

const Technologies = () => {
  const contentArray = [
    {
      id: 1,
      image: reactJs,
      title: "ReactJS",
      border: "border-cyan-300"
    },
    {
      id: 2,
      image: tailwinCss,
      title: "Tailwind CSS",
      border: "border-cyan-500"
      
    },
    {
      id: 2,
      image: adobeXd,
      title: "AdobeXD",
      border: "border-pink-500"
      
    },
    {
      id: 2,
      image: figma,
      title: "Figma",
      border: "border-orange-200"
    }, 
  ];

  return (
    <div name="Technologies">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-12 text-gray-600 underline underline-offset-8">
            Technologies
          </h1>
          <div className="flex flex-wrap -m-4 mt-5 justify-center items-center">
            {contentArray.map(({ id, image, title, border}) => (
              <div key={id} className="lg:w-1/4 sm:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                  className={`w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 ${border} bg-gray-100`}
                    src={image}
                  />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    {title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
