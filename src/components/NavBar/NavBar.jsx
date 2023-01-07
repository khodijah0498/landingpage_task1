import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const tabs = [
    {
      name: "Atoms",
      link: "/",
    },
    {
      name: "Men",
      link: "/men",
    },
    {
      name: "Women",
      link: "/women",
    },
    {
      name: "Accessories",
      link: "/accessories",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  return (
    <div className="nav-wrapper">
      <div className="logo"><img src="/vector/shoelogo.jpg" alt="logo" /></div>
      <div className="tabs">
        {tabs.map(({ name, link }, index) => (
          <div key={index} onClick={() => navigate(link)} className="tab">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
