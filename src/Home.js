import React from 'react';
// import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FeatureProduct';

function Home() {
  
  const data={
    name:"Amazon Store",
    img:"images/hero.jpg",
    para:"Amazon Store is an e-commerce platform that sells many product lines, including media , baby products, consumer electronics, beauty products, , groceries, health and personal care products, industrial & scientific supplies, kitchen items, jewellry, watches "
  
   }
   
  
  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    
    </>
  )
};

export default Home;
 
