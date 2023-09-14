import React from 'react'
import { useState } from 'react'
import './AtcBtn.css'


const AtcBtn = ({cbFunc}) => {
    const [clicked, setClicked] = useState(false)

    const clickHandler = () => {
        setClicked(true);
        cbFunc();
    }



  return (
    <button className={`cart-button ${clicked ? 'clicked' : null}`} onClick={clickHandler}>
        <span className="add-to-cart">Add to cart</span>
        <span className="added">Added!</span>
        <i className="fas fa-shopping-cart"></i>
        {/* <i className="fas fa-box"></i> */}
    </button>
  )
}

export default AtcBtn