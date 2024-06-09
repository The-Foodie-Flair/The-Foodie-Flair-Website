import React from "react";
import about from "../assets/about.jpeg";
const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor ">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8  ">
        About Us
      </h1>
      <div className="flex flex-row lg-flex-row item-center gap-5">
        <div className="w-full lg:w-2/4">
          <img className="rounded-lg " src={about} alt="img" />
        </div>
        <div className="w-full lg:w-2/4 p-4 space-y-6">
          <p className="font-semibold size-medium">
            Hey, I am Mira Deshpande, founder of The Foodie Flair. We are a
            home-bakery based in Kothrud, that aims at supplying fresh breads,
            authentic dips & sauces and wonderfully yummy sweet treats. We also have
            some Vegan options on our menu.
          </p>
          <p className="font-semibold size-medium">
            We bake all our products to order. So please place your orders 2-3
            days in advance!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
