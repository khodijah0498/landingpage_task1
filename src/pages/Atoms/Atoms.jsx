import React from 'react';
import "./Atoms.css";
import ShoeCollection from "../../components/collections/Collection";
import List from '../../components/List/List';

const datam = [
  {
    title: "Essential Colors For Model001",
    data: [
      {
        img: "/vector/shoe2.jpg",
        des: "Model001",
      },
      {
        img: "/vector/shoe7.jpg",
        des: "Model001",
      },
      {
        img: "/vector/shoe6.webp",
        des: "Model001",
      },
    ]
}
]

const Atoms = () => {
  return (
    <div className='atom'>
      <div className="part1">
        <h1 className='part-title'>
          Simple Shoe, <br /> Crazy Comfort
        </h1>
        <img className = "image"src="/vector/shoe1.jpg" alt="shoe1" />
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
   < List />
 
    </div>
  );
}

export default Atoms;