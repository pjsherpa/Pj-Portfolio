import React from "react";

const NavTab = ({ currentPage, handlePageChange }) => {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => handlePageChange("AboutMe")}
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavTab;
