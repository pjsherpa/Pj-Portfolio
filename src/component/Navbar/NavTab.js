import React from "react";

//Assigning to own variable names
const NavTab = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <ul className="nav nav-tabs topend">
        <li className="nav-item">
          <a
            href="#aboutme"
            style={{ color: "white" }}
            onClick={() => handlePageChange("AboutMe")}
            //changes selected nav-items to 'nav-link-active' using bootstrap to show a better visual, stating we are in this page.
            className={
              currentPage === "AboutMe"
                ? "nav-link active text-dark"
                : "nav-link"
            }
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            style={{ color: "white" }}
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio"
                ? "nav-link active text-dark"
                : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            style={{ color: "white" }}
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact"
                ? "nav-link active text-dark"
                : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            style={{ color: "white" }}
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume"
                ? "nav-link active text-dark"
                : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavTab;
