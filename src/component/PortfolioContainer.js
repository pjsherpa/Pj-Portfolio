import React, { useState } from "react";
import NavTabs from "./NavTab";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import { FaGithubSquare, FaEnvelope } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { IconContext } from "react-icons";
import "../App.css";

const PortfolioContainer = () => {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  //Once we select navbar items the page gets rendered to the selected component as it's function is being called from pages.js.
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div>
        {/* {propping the handlePageChange function to trigger the page change while calling in our NavTabs} */}
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {/* {calling the rendered page} */}
        {renderPage()}
      </div>

      <footer
        id="footer"
        class="d-flex bottom flex-column flex-sm-row justify-content-between py-4 my border-top"
      >
        <div className="container">
          <div className="row justify-content-md-center">
            <IconContext.Provider value={{ color: "black", size: "40px" }}>
              <div className="col col-lg-2 hover">
                <a href="https://www.linkedin.com/in/pjsherpa/">
                  <GrLinkedin class="w-100" />
                </a>
              </div>
              <div className="col col-lg-2 hover">
                <a href="mailto:phinjock@gmail.com">
                  <FaEnvelope class="w-100" />
                </a>
              </div>
              <div className="col col-lg-2 hover">
                <a href="https://github.com/pjsherpa">
                  <FaGithubSquare class="w-100" />
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PortfolioContainer;
