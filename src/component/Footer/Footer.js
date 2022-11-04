import { FaGithubSquare, FaEnvelope } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="d-flex bottom flex-column flex-sm-row justify-content-between py-4 my border-top"
    >
      <div className="container">
        <div className="row justify-content-md-center">
          <IconContext.Provider value={{ color: "black", size: "40px" }}>
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
          </IconContext.Provider>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
