import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Menu = ({closeMN}) => {
    
    const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <>
    
        <ul className='flex-1 flex justify-center items-center gap-10 max-lg:flex-col '>
          {navLinks.map((item) => {
            if (item.label === 'Products') {
              return (
                <>
                
                  <li key={item.label} className=' cursor-pointer relative z-20' onClick={() => setShowSubMenu(!showSubMenu)}>
                  {showSubMenu ? (<div key={'asdasd234234324s2'} className={"bg-white shadow-md border-black/25 border absolute w-32 h-auto top-8 z-20 p-5 rounded-xl transition-all "}>
                    {item.subMenu.map((item) => {
                      return (
                        <li>
                          <Link className=' font-montserrat leading-normal text-lg text-slate-gray flex items-center ' to={item.to}>{item.label}</Link>
                        </li>
                      )
                    })}
                  </div>) : null}
                      <Link
                          to={item.href}
                          className=' font-montserrat leading-normal text-lg text-slate-gray flex items-center'
                      >
                          {item.label} <IoIosArrowDown className="mx-2"/>
                      </Link>
                      
                  </li>
                </>
                
              );
            } else {
                if (item.href) {
                    return (
                <li key={item.label} onClick={closeMN}>
              <a
                
                href={item.href}
                
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
              </li>
              )
                } else {
                    return (
                <li key={item.label} onClick={closeMN}>
              <Link
                
                to={item.to}
                
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </Link>
              </li>
              )
                }
            

              
            }
          })}

          <li className='flex gap-2 leading-normal font-medium font-montserrat  wide:mr-24' >
          <Link to='/sign-in'>Sign in</Link>
          <span>/</span>
          <Link to='/sign-up'>Sign up</Link>
        </li>
        </ul>

    </>
  )
}

export default Menu