/* External */
import React from "react";

/* Style */
import "./Home.scss";

/* Assets */
import homeImage from "../../../public/assets/images/home.png";

/* Components */

const Home = () => {
  return <img className="ml-home" src={homeImage} alt="home image" />;
}

export default Home;