import React from 'react'

const Backdrop = ({bdClickHandler}) => {
  return (
    <div className='fixed z-30 w-[100vw] h-[100vh] top-0 left-0 bg-black/[0.2] backdrop-blur-sm' onClick={bdClickHandler}></div>
  )
}

export default Backdrop