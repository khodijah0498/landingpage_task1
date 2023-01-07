import React from 'react'
import "./List.css"
const List = () => {
  return (
    <div className="section3">
      <div className="part3">
        <h1 className='title'>Why design a new shoe? Simple: You. </h1>
        <p>
          Our product philosophy is pretty straight-forward only make something
          new if it can be used every single day and is the absolute best of its
          kind. Model001 was born directly from customer demand. More durable
          materials. Better structure and support. Asuperior fit.These sre the
          things we heard over and over that motivated us to take the next step.
        </p>
        <button className="shop-button">Shop Men</button>
        <button className="shop-button">Shop Women</button>
      </div>
      <img src="/public/vector/shoe8.webp" alt="" />
    </div>
  );
}

export default List