import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className="about">
      <img src="/vector/bata3.webp" className="about-img" alt="" />
      <div>
        <h1 className='about-title'>
          Read the incredible Humans of New York story from our co-founder,
          Sidra Qasim, about struggle, chasing dreams, and making shoes.
        </h1>
        <p className='about-des'>
          From Lahore, Pakistan to Lafayette Street, New York — the Atoms
          co-founders' origins exemplify the American Dream. The history behind
          our company goes way back before our founders, Sidra Qasim and Waqas
          Ali, stepped foot in the United States, and even before they started
          speaking English. It's a story worth reading.
        </p>
        <button className='about-button'>Read Sidra's Story</button>
      </div>
    </div>
  );
}

export default About