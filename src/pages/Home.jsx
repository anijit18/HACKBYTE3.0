import FeaturedProfiles from "../components/FeaturedProfiles";
// import Services from "../components/Services";
// import TopProfiles from "../components/TopProfiles";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: "url('https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=600')" }} >
        <div className='absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center'>
          <h1 className=" text-4xl md:text-6xl font-bold text-white mb-4">Welcome to the Home Page</h1>
          <p className="text-lg md:text-2xl text-white mb-8">Discover the world</p>
          <button className="border text-white px-6 py-2 rounded-full text-lg md: text-xl hover:bg-blue-500 transform transition duration-300 hover:scale-105" >Get Started</button>
        </div>
      </div>
      <FeaturedProfiles/>
      {/* <Services/> */}
     {/* <TopProfiles/> */}
    </>

  );
}

