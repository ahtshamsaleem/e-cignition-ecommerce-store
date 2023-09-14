import React from 'react'
import Menu from './Menu'
import {RxCross2} from 'react-icons/rx'
import Backdrop from './UI/Backdrop'

const MobileNav = ({closeMN}) => {
  return (
    <>
        <Backdrop bdClickHandler={closeMN}/>
        <div className='fixed z-50 top-0 left-0 bg-white w-[70vw] h-[100vh] lg:hidden flex flex-row justify-center items-center overflow-hidden'>
        <span className='absolute top-8 right-8' onClick={closeMN}>
            {<RxCross2 className='scale-150 text-black/[0.6]'/>}
        </span>
        <Menu closeMN={closeMN}/>
    </div>
    </>
    
  )
}

export default MobileNav