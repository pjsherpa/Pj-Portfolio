import React from "react";
import "../../App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Codeapediaimg from "../../images/codepedia.png";
import AirSoupimg from "../../images/airsoup.png";
import Noteimg from "../../images/Notetaker.png";
import Passwordimg from "../../images/PasswordGenerator.png";
import Schedulerimg from "../../images/scheduler.png";
import Weather from "../../images/weather dashboard.png";
import { FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

const Portfolio = () => {
  return (
    <>
      <br></br>
      <h1 className="d-flex justify-content-md-center ">Portfolio</h1>
      <br></br>
      <div className="container">
        <IconContext.Provider value={{ color: "black", size: "40px" }}>
          <div className="row">
            <div className="col-lg-6 mb-4 ">
              <Card className="text-center hovercard">
                <Card.Body>
                  <Card.Title>
                    <Button className="bg-image hoversm" variant="transparent">
                      <a
                        href="https://codeapedia.herokuapp.com/"
                        className="siteLink"
                      >
                        Code-a-pedia
                      </a>
                    </Button>
                    {"  "}
                    <Button className="bg-image hoversm" variant="transparent">
                      <a href="https://github.com/pjsherpa/Code-a-pedia">
                        <FaGithubSquare />
                      </a>
                    </Button>
                    <Card.Img src={Codeapediaimg} className="portcard" />
                  </Card.Title>
                  <Card.Text>
                    This is a knowledge bank for coding
                    terms/definitions/slangs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 mb-4 ">
              <Card className="text-center hovercard">
                <Card.Body>
                  <Card.Title>
                    <Button className="bg-image hoversm" variant="transparent">
                      <a
                        href="https://pjsherpa.github.io/AirSoup/"
                        className="siteLink"
                      >
                        AirSoup
                      </a>
                    </Button>
                    {"  "}
                    <Button className="bg-image hoversm" variant="transparent">
                      <a href="https://github.com/pjsherpa/AirSoup">
                        {" "}
                        <FaGithubSquare />
                      </a>
                    </Button>
                    <Card.Img src={AirSoupimg} />
                  </Card.Title>
                  <Card.Text>
                    Plan a trip to eat outside depending on the current air
                    quality.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4 ">
              <Card className="text-center hovercard">
                <Card.Body>
                  <Card.Title>
                    <Button className="bg-image hoversm" variant="transparent">
                      <a
                        href="https://pjsherpa.github.io/weather-dashboard-v.01/"
                        className="siteLink"
                      >
                        Weather
                      </a>
                    </Button>
                    {"  "}
                    <Button className="bg-image hoversm" variant="transparent">
                      <a href="https://github.com/pjsherpa/weather-dashboard-v.01">
                        <FaGithubSquare />
                      </a>
                    </Button>
                    <Card.Img src={Weather} />
                  </Card.Title>
                  <Card.Text>Weather Forecast</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 mb-4 ">
              <Card className="text-center hovercard">
                <Card.Body>
                  <Card.Title>
                    <Button className="bg-image hoversm" variant="transparent">
                      <a
                        href="https://cryptic-island-27891.herokuapp.com/"
                        className="siteLink"
                      >
                        Note Taker
                      </a>
                    </Button>
                    {"  "}
                    <Button className="bg-image hoversm" variant="transparent">
                      <a href="https://github.com/pjsherpa/Note-Taker">
                        {" "}
                        <FaGithubSquare />
                      </a>
                    </Button>
                    <Card.Img src={Noteimg} />
                  </Card.Title>
                  <Card.Text>Note takers</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4 ">
              <Card className="text-center hovercard">
                <Card.Body>
                  <Card.Title>
                    <Button className="bg-image hoversm" variant="transparent">
                      <a
                        href="https://pjsherpa.github.io/Work-Day-Scheduler/"
                        className="siteLink"
                      >
                        Scheduler
                      </a>
                    </Button>
                    {"  "}
                    <Button className="bg-image hoversm" variant="transparent">
                      <a href="https://github.com/pjsherpa/Work-Day-Scheduler">
                        <FaGithubSquare />
                      </a>
                    </Button>
                    <Card.Img src={Schedulerimg} />
                  </Card.Title>
                  <Card.Text>Work Day Scheduler</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 mb-4 ">
              <Card className="text-center hovercard">
                <Card.Body>
                  <Card.Title>
                    <Button className="bg-image hoversm" variant="transparent">
                      <a
                        href="https://pjsherpa.github.io/Password-Generator/"
                        className="siteLink"
                      >
                        Create Password
                      </a>
                    </Button>
                    {"  "}
                    <Button className="bg-image hoversm" variant="transparent">
                      <a href="https://github.com/pjsherpa/Password-Generator">
                        <FaGithubSquare />
                      </a>
                    </Button>
                    <Card.Img src={Passwordimg} />
                  </Card.Title>
                  <Card.Text>Geneate password</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Portfolio;
