import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen text-gray-600">
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center h-full w-full">
        <div className="pb-8 mt-6 text-center">
          <p className="text-3xl font-bold underline underline-offset-8">
            About
          </p>
        </div>
        <p className="mb-4 leading-relaxed text-xl font-semibold">
          Hello visitor, I am Rahil Pranshuta Topno, currently pursuing Masters
          in Computer Application. Do check out some of my work in the Content
          section and let me know your thougths on those projects in the Contact
          section. Thank you for taking your time to view this portfolio.
        </p>
        <br />
        <p className="leading-relaxed text-xl font-semibold">
          These are the skills that I know, *Graphic Design - AdobeXD, Figma,
          some free softwares that I use for making illustrations like
          FireAlpaca and Krita. *Front-end Development - There are some
          Front-end development technologies that I know such as React and
          TailwindCSS. In fact, this portfolio is made using only React and
          TailwindCSS.
        </p>
      </div>
    </div>
  );
};

export default About;
