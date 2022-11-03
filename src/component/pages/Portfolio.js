import React from "react";
import "../../App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <Button className="bg-image hoversm" variant="transparent">
                    <a href="https://codeapedia.herokuapp.com/">Code-a-pedia</a>
                  </Button>
                  {""}
                  <Button className="bg-image hoversm" variant="transparent">
                    <a href="https://github.com/pjsherpa/Code-a-pedia">
                      github
                    </a>
                  </Button>
                </Card.Title>
                <Card.Text>
                  This is a knowledge bank for coding terms/definitions/slangs.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-6 mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <Button className="bg-image hoversm" variant="transparent">
                    <a href="https://pjsherpa.github.io/AirSoup/">AirSoup</a>
                  </Button>
                  {""}
                  <Button className="bg-image hoversm" variant="transparent">
                    <a href="https://github.com/pjsherpa/AirSoup">github</a>
                  </Button>
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
          <div className="col-lg-6 mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <Button className="bg-image hoversm" variant="transparent">
                    <a href="https://pjsherpa.github.io/weather-dashboard-v.01/">
                      Weather
                    </a>
                  </Button>
                  {""}
                  <Button className="bg-image hoversm" variant="transparent">
                    <a href="https://github.com/pjsherpa/weather-dashboard-v.01">
                      github
                    </a>
                  </Button>
                </Card.Title>
                <Card.Text>Weather Forecast</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-6 mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <Button className="bg-image hoversm" variant="transparent">
                    <a href="https://cryptic-island-27891.herokuapp.com/">
                      Note Taker
                    </a>
                  </Button>
                  {""}
                  <Button className="bg-image hoversm" variant="transparent">
                    <a href="https://github.com/pjsherpa/Note-Taker">github</a>
                  </Button>
                </Card.Title>
                <Card.Text>Note takers</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <Button className="bg-image hoversm" variant="transparent">
                    <a href="https://pjsherpa.github.io/Work-Day-Scheduler/">
                      Scheduler
                    </a>
                  </Button>
                  {""}
                  <Button className="bg-image hoversm" variant="transparent">
                    <a href="https://github.com/pjsherpa/Work-Day-Scheduler">
                      github
                    </a>
                  </Button>
                </Card.Title>
                <Card.Text>Work Day Scheduler</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-6 mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>
                  <Button className="bg-image hoversm" variant="transparent">
                    <a href="https://pjsherpa.github.io/Password-Generator/">
                      Scheduler
                    </a>
                  </Button>
                  {""}
                  <Button className="bg-image hoversm" variant="transparent">
                    <a href="https://github.com/pjsherpa/Password-Generator">
                      github
                    </a>
                  </Button>
                </Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
