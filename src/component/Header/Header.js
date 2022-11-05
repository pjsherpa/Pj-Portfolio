import "../../App.css";
import React, { useState } from "react";
import NavTabs from "../Navbar/NavTab";
import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  //Once we select navbar items the page gets rendered to the selected component as it's function is being called from pages.js.
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe style={{ color: "black" }} />;
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
    <header>
      <h1 className="topend">
        Phinjock Sherpa <small>(Pj)</small>
        {/* {propping the handlePageChange function to trigger the page change while calling in our NavTabs} */}
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {/* {calling the rendered page} */}
      </h1>
      {renderPage()}
    </header>
  );
};

export default Header;
