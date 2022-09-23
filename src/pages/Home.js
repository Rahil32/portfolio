import React from 'react'
import Image from "../assets/rahil.jpg"
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="Home" >
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-1/3 md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={Image}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-3xl text-4xl mb-4 font-bold text-gray-600">Hi I am a UI/UX designer and 
        <br className="hidden lg:inline-block"/>a Frontend developer
      </h1>
      <p className="mb-4 leading-relaxed text-xl font-semibold">A Graphic designer is someome who designe products such as UI/UX of a mobile application or of a website and also some illustrations. A Front-end developer is someone who makes aesthetics and styling of a mobile application or a website, along with some functionalities.</p>
      <div className="flex justify-center">
        <Link to='Contact' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center
             rounded-md bg-gradient-to-r  from-amber-800 to-amber-600 
             cursor-pointer">Contact
        <samp className='group-hover:rotate-90 duration-300'>
          <MdKeyboardArrowRight size={25} className='ml-2'/>
        </samp>
        </Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Home