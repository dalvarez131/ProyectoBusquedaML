/* External */
import React from "react";

/* Style */
import "./Navbar.scss";

/* Components */
import SearchInput from "./SearchInput";

/* Assets */
import logo from "../../../public/assets/icons/Logo_ML.png";

const Navbar = () => {
  return (
    <div className="ml-navbar">
      <img src={logo} alt="Logo" />
      <SearchInput />
    </div>
  );
};

export default Navbar;