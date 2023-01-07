import React from 'react'
import "./Collection.css"

  const Collection = ({img,des}) => {
  return (
    <div className="shoe-collection">
      <div className="shoe-imgcollection">
        <h4>New</h4>
        <img src={img} />
        <div className="both">
          <h3 className="titled">{des}</h3>
          <span>$159</span>
        </div>
      </div>
    </div>
  );
}


export default Collection