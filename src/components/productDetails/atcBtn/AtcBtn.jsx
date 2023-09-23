import React from 'react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AtcBtn.css'


const AtcBtn = ({cbFunc}) => {
    const [clicked, setClicked] = useState(false)

    const notify = toast.success('Added!', {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });




    const clickHandler = () => {

        setClicked(true);
        cbFunc();
    }



  return (
    <>
         
         <button className={`cart-button ${clicked ? 'clicked' : null}`} onClick={clickHandler}>
        <span className="add-to-cart">Add to cart</span>
        <span className="added">Added!</span>
        <i className="fas fa-shopping-cart"></i>
        {/* <i className="fas fa-box"></i> */}
    </button>
    </>
    
   
  )
}

export default AtcBtn