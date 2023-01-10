import React from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Bests from "./Bests/Bests";
import Grouping from "./Grouping/Grouping";
import How from "./How/How";
import Last from "./Last/Last";
import Navbar from './Navbar/Navbar'
import New from "./New/New";
import News from "./News/News";
import Slide from "./Slider/Slide";

const Home = () => {
   const [Counter, setCounter] = useState(0)
  
   
     return (
        <>
        <Navbar/>
        <Slide/>
        <Grouping/>
        <Bests/>
        <New/>
        <Last/>
        <How/>
        <News/>
        <Footer/>
        </>
     )
}


export default Home