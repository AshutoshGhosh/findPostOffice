import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="topnav">
      <Link to={"/"}>Home</Link>
      <Link to={"/post"}>Post Office</Link>
      <Link to={"/airport"}>Airports</Link>
    </div>
  );
};

export default Header;
