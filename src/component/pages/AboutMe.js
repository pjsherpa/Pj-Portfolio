import React from "react";
import Card from "react-bootstrap/Card";
import Pjimg from "../../images/pj image.jpeg";
const AboutMe = () => {
  return (
    <>
      <div className="container ">
        <h1 className="d-flex justify-content-md-center ">About Me</h1>
        <div className="d-flex justify-content-md-center ">
          <div className="col-lg-2 mb-2">
            <Card.Img src={Pjimg} />
          </div>
        </div>
        <p>
          My name is Phinjock Sherpa aka Pj Having the oppurtunity to work
          alongside developers in my previous job as an end user. Inspired and
          lead me to learn full stack web development from UC Berkeley. My aim
          is to become a Front End Engineer. I had a huge role communicating
          with management,clients,vendors and external auditors. I had a role
          where I was teaching my colleagues on how to use a new cloud based
          system designed specifically for the company.
        </p>
        <p>I'm adventurous and love to travel. </p>

        <p>Thank you for your time.</p>
      </div>
    </>
  );
};

export default AboutMe;
