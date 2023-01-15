import React from 'react'
import "./Label.css"

const Label = () => {
  return (
    <div className='label'>
        <h1 className='label-title'>"The most thoughtfully design sneakers ever"</h1>
        <div className='label-img'>
            <img src="/vector/vogue.png"  className="vogue" alt="" />
            <h1 className='new'>HUMANS OF NEW YORK</h1>
            <img src="/vector/Esquire-Magazine.png" className="esquire" alt="" />
            
        </div>
    </div>
  )
}

export default Label