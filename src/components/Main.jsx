import React from "react";
import { motion } from "framer-motion";
// import { div } from "framer-motion/client";
import Feature from './FeatureSection'

const HeroSection = () => {
    const LogoCard = ({ logoText }) => (
      <div className="flex items-center justify-center h-w-52 w-52 md:h-20 md:w-20 bg-white rounded-full shadow-md">
        <span className="text-gray-700 font-medium">{logoText}</span>
      </div>
    );
  return (
    <section className="relative bg-gray-100 ">
      {/* Background Image with Overlay */}
      <div
        className="relative overflow-hidden  bg-cover bg-center bg-no-repeat h-[60vh] md:h-[80vh]"
        style={{ backgroundImage: "url('/img/3.jfif')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          {/* <div><img src="/img/1.jfif" alt="" /></div> */}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-start justify-center h-full text-white">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            New Energy for the Future
          </motion.h1>
          <p className="mt-2 text-lg lg:text-xl font-light">
            #1 Energy provider in the world
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg">
              Get in touch
            </button>
            <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg">
              Our services
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10 px-4 lg:px-0 text-gray-700 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold">6 mil</h2>
          <p className="text-sm text-gray-500">
            The company's annual net income
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">315</h2>
          <p className="text-sm text-gray-500">Projects completed worldwide</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">120K</h2>
          <p className="text-sm text-gray-500">
            Employees work in all parts of the world
          </p>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="flex flex-wrap justify-center items-center gap-8 py-10 bg-gray-50">
        <LogoCard logoText="Trend" />
        <LogoCard logoText="Cygate" />
        <LogoCard logoText="Business" />
        <LogoCard logoText="Headspace" />
        <LogoCard logoText="Medtronic" />
      </div>
      <div>
        <Feature></Feature>
      </div>
    </section>
  );
};




export default HeroSection;
