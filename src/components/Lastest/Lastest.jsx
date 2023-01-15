import React from "react";
import "./Lastest.css";

const Lastest = ({ img }) => {
  return (
    <div className="card-Lastest">
      <div className="card-imglastest">
        <img src={img} className="card-img" />
        
      </div>
    </div>
  );
};

export default Lastest;
