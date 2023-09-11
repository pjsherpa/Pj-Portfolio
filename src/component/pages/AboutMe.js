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
          <h2>Greetings,</h2>
          <p>
            I am Phinjock Sherpa, but I prefer to go by Pj. I recently completed
            a rigorous full-stack web development program at UC Berkeley, and I
            am excited to showcase my journey and aspirations as a React
            Developer.
          </p>
          <h3>Educational Background</h3>
          <p>
            My journey into web development was inspired by my previous role as
            an end user, where I had the privilege of working alongside skilled
            developers. This experience ignited my passion for coding and led me
            to pursue a comprehensive education in full-stack web development at
            UC Berkeley. The program equipped me with a strong foundation in web
            technologies, including front-end and back-end development, database
            management, and more.
          </p>

          <h3>Passion for Learning</h3>
          <p>
            One of my defining traits is my unwavering desire to learn and adapt
            to emerging technologies. I believe that the tech industry is
            ever-evolving, and staying current is essential. To this end, I have
            consistently sought out additional online courses and resources to
            enhance my skills. My dedication to continuous improvement drives me
            to stay at the forefront of industry trends.
          </p>
          <h3>Career Aspirations</h3>
          <p>
            My ultimate goal is to become a Software Engineer. I am confident
            that my dedication, problem-solving abilities, and collaborative
            mindset make me a valuable asset to any development team. I am eager
            to contribute to innovative projects, tackle complex challenges, and
            expand my knowledge in the field.
          </p>
          <h3>Personal Interests</h3>
          <p>
            Beyond my professional pursuits, I am an adventurous individual who
            loves to travel and explore new places. This passion for exploration
            mirrors the dynamic and ever-changing nature of the tech industry,
            and I believe it adds a unique dimension to my perspective as a
            developer.
          </p>
          <p>
            Thank you for visiting my portfolio. I invite you to explore my work
            and accomplishments in more detail. I look forward to the
            opportunity to discuss how I can contribute to your team's success.
          </p>
          <p>Best regards,</p>
          <p> Phinjock Sherpa (Pj)</p>
        </p>
      </div>
    </>
  );
};

export default AboutMe;
