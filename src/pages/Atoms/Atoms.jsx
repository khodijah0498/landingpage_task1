import React from 'react';
import "./Atoms.css";
import ShoeCollection from "../../components/collections/Collection";
import List from '../../components/List/List';
import ShoeLastest from "../../components/Lastest/Lastest"
import Label from '../../components/Label/Label';
import About from '../About/About';

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
];

const datad = [
  {
    title: "Atoms in everyday@atoms",
    data: [
      {
        img: "/vector/sneaker1.webp",
        
      },
      {
        img: "/vector/sneaker2.webp",
        
      },
      {
        img: "/vector/sneaker3.webp",
        
      },

      {
        img: "/vector/sneaker4.jpg",
        
      },
      {
        img: "/vector/sneaker5.jpg",
      
      },
      {
        img: "/vector/sneaker6.jpg",
        
      },
    ]
  }
]

const Atoms = () => {
  return (
    <div className="atom">
      <div className="part1">
        <h1 className="part-title">Comfort& magic await.Everyday.</h1>
        <img className="image" src="/vector/myshoe.png" alt="shoe1" />
        <div>
          <p>
            Designed for the way you live your life. Atoms are beautiful in
            their simplicity, supporting your feet with absolute comfort.
          </p>
          <button className="button">Shop</button>
        </div>
      </div>
      <Label />
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

      <List />

      {datad.map((data, index) => (
        <section className="section4">
          <h1>{data.title}</h1>
          <div className="part4">
            {data.data.map(({ img }, i) => (
              <ShoeLastest key={i} img={img} />
            ))}
          </div>
        </section>
      ))}
      <About />
    </div>
  );
}

export default Atoms;