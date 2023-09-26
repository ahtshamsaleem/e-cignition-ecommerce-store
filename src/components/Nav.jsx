import { hamburger } from '../assets/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import Menu from './Menu';
import MobileNav from './MobileNav';



const Nav = () => {
    const products = useSelector((s) => s.cart.products);
    const [mobileMenu, setMobileMenu] = useState(false);

    const mobileMenuHandler = () => {
        setMobileMenu((prevState) => {
            return !prevState;
        })
    }


    const  logo = useSelector(state=> state.ui.uiColor.logo);


    return (
        <>  
            {mobileMenu && <MobileNav closeMN={mobileMenuHandler}/>}
        
            <nav className='flex justify-between items-center'>
                <div className='hidden max-lg:block' onClick={mobileMenuHandler}>
                    <img
                        src={hamburger}
                        alt='hamburger icon'
                        width={25}
                        height={25}
                    />
                </div>

                <div>
                    <Link to='/'>
                        <img
                            src={logo}
                            alt='logo'
                            width={'150px'}
                            
                            className='m-0 '
                        />
                    </Link>
                </div>

                <div className="max-lg:hidden">
                {<Menu />}
                </div>

                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat wide:mr-24 relative'>
                    <Link to='/cart'>
                        <CgShoppingCart className='h-8 w-8' />
                    </Link>
                    <span className='bg-black rounded-full text-white w-5 h-5 text-center absolute -top-4 -right-4 text-sm'>
                        {products.length}
                    </span>
                </div>
            </nav>
        </>
    );
};

export default Nav;

// after:text-sm after:bg-black after:w-4 after:h-4 after:rounded-full after:relative after:top-0 after:right-0 after:opacity-75
