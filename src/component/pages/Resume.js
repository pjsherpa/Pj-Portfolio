import React from "react";

const Resume = () => {
  return (
    <div className="container">
      <br></br>
      <h4>
        Download my{" "}
        <a
          href="PjResume.pdf"
          download="PjResume.pdf"
          style={{ color: "black", fontSize: "large" }}
        >
          Resume
        </a>
      </h4>
      <h1>Resume</h1>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React </li>
        <li>bootstrap</li>
        <li>Bulma</li>
      </ul>
      <h3>Back-End proficiencies</h3>
      <ul>
        <li>API's</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySql, Sequelize</li>
        <li>MongoDb, Mongoose</li>
        <li>REST</li>
        <li>GraphQl</li>
        <li>OOP</li>
        <li>MVC</li>
        <li>ODM</li>
      </ul>
    </div>
  );
};

export default Resume;
