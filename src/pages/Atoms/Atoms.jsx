import React from 'react';
import "./Atoms.css";
import ShoeCollection from "../../components/collections/Collection";

const datam = [
  {
    title: "Essential Colors For Model001",
    data: [
      {
        img: "/public/vector/shoe2.jpg",
        des: "Model001",
      },
      {
        img: "/public/vector/shoe5.webp",
        des: "Model001",
      },
      {
        img: "/public/vector/shoe6.webp",
        des: "Model001",
      },
    ]
}
]

const Atoms = () => {
  return (
    <div className='atom'>
      <div className="part1">
        <h1>
          Simple Shoe, <br /> Crazy Comfort
        </h1>
        <img src="/public/vector/shoe1.jpg" alt="shoe1" />
        <div>
          <p>Introducting Model 001---the ultimate everyday shoe.</p>
          <button className="button">Shop</button>
        </div>
      </div>
      {datam.map((data, index) => (
        <section className="section2">
          <h1>{data.title}</h1>
          <div className="part2">
            {data.data.map(({ img, des }, i) => (
              <ShoeCollection key={i} img={img} des={des} />
            ))}
          </div>
        </section>
      ))}

    </div
  );
}

export default Atoms;