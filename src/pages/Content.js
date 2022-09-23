import React from "react";
import faluda from "../assets/AdobeXD_Faluda.png";
import theBnoob from "../assets/FireAlpaca_TheBnoob.png";
import woble from "../assets/AdobeXD_Woble.png";
import groove from "../assets/AdobeXD_Groove.png";
import pranshuta from "../assets/FireAlpaca_Pranshuta.png";
import meetUp from "../assets/AdobeXD_Meetup.png";

function Content() {
  const contentArray = [
    {
      id: 1,
      image: faluda,
      title: "Faluda",
      detail:
        "It is a simple UI/UX design of a Food Delivery App made in AdobeXD.",
      link: "https://drive.google.com/file/d/1mOCrcLaObV8piiKVJDDLMa9satBP3t87/view?usp=sharing",
    },
    {
      id: 2,
      image: theBnoob,
      title: "The Bnoob",
      detail:
        "It is a simple illustration for a Youtuber - 'The Bnoob' made in FireAlpaca.",
      link: "https://drive.google.com/file/d/1LJ0sKWRUaQUfg5cWQwvl-p8t1fGAANDW/view?usp=sharing",
    },
    {
      id: 3,
      image: woble,
      title: "Woble",
      detail:
        "It is a simple UI/UX design of a Cab Booking App made in AdobeXD.",
      link: "https://drive.google.com/file/d/10Ao67x3YflGYexDi7FdQ2VW7Eh77Yfmb/view?usp=sharing",
    },
    {
      id: 4,
      image: groove,
      title: "Groove",
      detail:
        "It is a simple UI/UX design of a Cab Booking App made in AdobeXD.",
      link: "https://drive.google.com/file/d/10Ao67x3YflGYexDi7FdQ2VW7Eh77Yfmb/view?usp=sharing",
    },
    {
      id: 5,
      image: pranshuta,
      title: "Pranshuta",
      detail:
        "It is a simple illustration for my Youtube Channel made in FireAlpaca.",
      link: "https://drive.google.com/file/d/10Ao67x3YflGYexDi7FdQ2VW7Eh77Yfmb/view?usp=sharing",
    },
    {
      id: 4,
      image: meetUp,
      title: "Meet Up",
      detail:
        "It is a simple UI/UX design of a Video Calling App made in AdobeXD.",
      link: "https://drive.google.com/file/d/1nAgPjUN59SXKN83HCY4RmS5I0tXqPRZ6/view?usp=sharing",
    },
  ];

  return (
    <div name="Content">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-col text-center w-full mb-20 pb-8">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-8 text-gray-600 underline underline-offset-8">
              Content
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-medium">
              These are some of my UI/UX designs and illustration.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {contentArray.map(({ id, image, title, detail, link }) => (
              <div key={id} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {title}
                    </h1>
                    <p className="leading-relaxed mb-5">{detail}</p>

                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gradient-to-r hover: from-amber-800 to-amber-600 
           cursor-pointer text-white font-bold py-2 px-4 rounded-full"
                    >
                      Link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
