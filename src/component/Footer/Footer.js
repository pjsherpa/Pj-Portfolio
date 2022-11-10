import { FaGithubSquare, FaEnvelope } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { TfiInstagram } from "react-icons/tfi";
import { IconContext } from "react-icons";
import Card from "react-bootstrap/Card";
const Footer = () => {
  return (
    <footer
      id="footer"
      className="d-flex bottom flex-column flex-sm-row justify-content-between py-5 my border-top bg-secondary"
    >
      <div className="container">
        <div className="row justify-content-md-center">
          <IconContext.Provider value={{ color: "white", size: "40px" }}>
            <div className="col col-lg-2 hover">
              <a href="https://www.linkedin.com/in/pjsherpa/">
                <GrLinkedin className="w-100" />
              </a>
            </div>
            <div className="col col-lg-2 hover">
              <a href="mailto:phinjock@gmail.com">
                <FaEnvelope className="w-100" />
              </a>
            </div>
            <div className="col col-lg-2 hover">
              <a href="https://github.com/pjsherpa">
                <FaGithubSquare className="w-100" />
              </a>
            </div>
            <div className="col col-lg-2 hover">
              <a href="https://www.instagram.com/wheniseeplaces/">
                <TfiInstagram className="w-100" />
              </a>
            </div>
          </IconContext.Provider>
        </div>
        <br></br>
        <Card.Text className="text-center">
          Phone no: 707 931 9391 Email: phinjock@gmail.com <br></br>Based
          in:Sonoma, California
        </Card.Text>
      </div>
    </footer>
  );
};

export default Footer;
