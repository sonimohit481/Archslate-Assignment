import React from "react";
import "./NavBar.css";
import { BsStars } from "react-icons/bs/";
import { BsGlobe2 } from "react-icons/bs/";
import { FiLock } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
export const NavBar = () => {
  return (
    <div id="Header">
      <div id="leftHeader">
        <img src="/Images/Logomain.png" alt="logo image" />
        <h1>Archslate</h1>
      </div>
      <div id="rightHeader">
        <div className="navicons">
          <BsStars size="1.5em" />
          <h5>Candidates</h5>
        </div>
        <div className="navicons">
          <BsGlobe2 size="1.5em" />
          <h5>Companies</h5>
        </div>
        <div className="navicons">
          <FiLock size="1.5em" />
          <h5>Jobs</h5>
        </div>
        <div className="navicons">
          <CgMail size="1.5em" />
          <h5>Notification</h5>
        </div>
        <div className="navicons">
          <AiOutlineUser size="1.5em" />
          <h5>User Name</h5>
        </div>
      </div>
    </div>
  );
};
