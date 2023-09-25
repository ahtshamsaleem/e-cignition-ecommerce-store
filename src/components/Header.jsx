import React from 'react'
import { useEffect, useRef } from 'react';
import Nav from './Nav'


const Header = () => {
        const ref = useRef();

    let glassHeader = 'padding-x py-6 w-[100vw] z-20 absolute border-b-2 border-transparent';



    const scrollHandler = () => {
        if (document.scrollingElement.scrollTop > 10) {
            glassHeader = 'padding-x py-6 w-[100vw] z-20 fixed bg-gradient-to-r from-gray-200/[0.4] to-white/[0.4] backdrop-blur-sm border-b-2 border-black/[0.1] ';
        } else {
            glassHeader = 'padding-x py-6 w-[100vw] z-20 absolute border-b-2 border-transparent';
        }
        ref.current.className = glassHeader;
    }


    useEffect(() => {
        
        document.addEventListener('scroll', scrollHandler);

        return () => {
            
            document.removeEventListener('scroll', scrollHandler)
        }

    }, [])

  return (
        <header className={glassHeader} ref={ref}>
                <Nav/>
        </header>
  )
}

export default Header








//GLASSS HEADER FOR LATER USE

// import React from 'react'
// import Nav from './Nav'

// const Header = () => {
//   return (
//         <header className='padding-x py-6 fixed w-[100vw] z-20 bg-gradient-to-r from-gray-200/[0.4] to-white/[0.4] backdrop-blur-sm border-b-2 border-black/[0.1]'>
//                 <Nav />
//         </header>
//   )
// }

// export default Header