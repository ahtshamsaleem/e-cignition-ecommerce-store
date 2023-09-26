import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import './AtcBtn.css'


const AtcBtn = ({cbFunc}) => {
    const [clicked, setClicked] = useState(false)

   
    const bgColor = useSelector(s=> s.ui.uiColor.bgColor);
   
    



    const clickHandler = () => {

        setClicked(true);
        cbFunc();
    }



  return (
    <>
         
         <button className={`cart-button hover:${bgColor} ${clicked ? 'clicked' : null}`} onClick={clickHandler}>
        <span className="add-to-cart">Add to cart</span>
        <span className="added">Added!</span>
        <i className="fas fa-shopping-cart"></i>
        {/* <i className="fas fa-box"></i> */}
    </button>
    </>
    
   
  )
}

export default AtcBtn