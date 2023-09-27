import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/ProductContext";


const About = () => {
  const {myName}=useProductContext();
  const data={
    name:"Infinity Store",
    img:"images/shopping.jpg",
    para:"Shoppers' shopping experiences may vary. They are based on a variety of factors including how the customer is treated, convenience, the type of goods being purchased, and mood."
    
  }
  

  return(
    <>
    {myName}
    <HeroSection myData={data}/>
    </>
  )
};

export default About;   
    
