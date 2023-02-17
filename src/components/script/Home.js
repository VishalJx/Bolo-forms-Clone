import React from "react";
import "../style/Home.css";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Comment from "./Comment";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5"
import Slide6 from "./Slide6";
import Foot from "./Foot";

function Home(){
  return (
    <div className="home">
        <Slide1/>
        <Slide2/>
        <Slide3/>
        <Comment name="Maria Paul"
         comment="'' Boloforms has been an absolute lifesaver for me. It makes workflow tasks much easier and helps to ensure that everything runs smoothly. I love how it automates tasks and eliminates manual processes, saving me time and effort. It's a great Google Workflow software and is well worth the money! ''" 
         photo="https://www.stepstherapy.com.au/wp-content/uploads/2018/10/Yazmin-profile-picture-square.jpg"/>
        <Slide4/>
        <Comment name="Sofie Hemsworth"
         comment="'' Boloforms has changed the way my team and I work. We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time. Plus, it's incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software! ''" 
         photo="https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg"/>
         <Slide5/>
         <Slide6/>
         <Foot/>
    </div>
  )
};

export default Home;
