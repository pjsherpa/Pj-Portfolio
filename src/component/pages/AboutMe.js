import React from "react";
import Pjimg from "../../images/pj image.jpeg";
const AboutMe = () => {
  return (
    <>
      <div className="container ">
        <h1 className="d-flex justify-content-md-center ">About Me</h1>

        <div className="d-flex justify-content-md-center ">
          <div className="col-lg-2 mb-2">
            <img className="my-pic" src={Pjimg} alt="Phinjock Sonam Sherpa" />
          </div>
        </div>
        <br></br>
        <p className="text-center">
          My name is Phinjock Sherpa aka Pj. Having the oppurtunity to work
          alongside developers in my previous job as an end user has inspired
          and lead me to study full stack web development. I have completed my
          full stack web development at UC Berkeley. I have a keen desire to
          learn new technology and continuing my coding practices through other
          means of online studies currently. My aim is to become a Software
          Engineer.
        </p>
        <p className="text-center">
          Personal side note:I'm adventurous and love to travel.{" "}
        </p>

        <p className="text-center">Thank you for visiting my portfolio.</p>
      </div>
    </>
  );
};

export default AboutMe;
