import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { navLinks } from '../constants';
import { signOut } from 'firebase/auth';
import { removeUser } from '../redux-slices/auth-slice';
import { auth } from '../firebase';

const Menu = ({ closeMN }) => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const isUser = useSelector((s) => s.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        signOut(auth);
        dispatch(removeUser());
        navigate('/sign-in');
    };

    return (
        <>
            <ul
                key={'jsdfgklsdjfklgj'}
                className='flex-1 flex justify-center items-center gap-10 max-lg:flex-col '
            >
                {navLinks.map((item) => {
                    if (item.label === 'Products') {
                        return (
                            <li
                                key={Math.random()}
                                className='text-black/[0.8] font-semibold cursor-pointer relative z-20'
                                onClick={() => setShowSubMenu(!showSubMenu)}
                            >
                                {showSubMenu ? (
                                    <div
                                        key={'asdasd234234324s2'}
                                        className={`bg-white shadow-md border-black/25 border absolute w-32 h-auto top-8 z-20 p-5 rounded-xl transition-all `}
                                    >
                                        <ul key={Math.random()}>
                                            {item.subMenu.map((item) => {
                                                return (
                                                    <li key={Math.random()}>
                                                        <Link
                                                            className=' font-montserrat leading-normal text-lg text-black/[0.8] flex items-center '
                                                            to={item.to}
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                ) : null}
                                <Link
                                    to={item.href}
                                    className=' font-montserrat leading-normal text-lg text-black/[0.8] flex items-center'
                                >
                                    {item.label}{' '}
                                    <IoIosArrowDown
                                        className={`mx-2 transition-all  ${
                                            showSubMenu ? 'rotate-180 ' : null
                                        } `}
                                    />
                                </Link>
                            </li>
                        );
                    } else {
                        if (item.href) {
                            return (
                                <li key={Math.random()} onClick={closeMN}>
                                    <a
                                        href={item.href}
                                        className='font-montserrat leading-normal text-lg text-black/[0.8] font-semibold'
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        } else {
                            return (
                                <li key={Math.random()} onClick={closeMN}>
                                    <Link
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                        }}
                                        to={item.to}
                                        className='font-montserrat leading-normal text-lg text-black/[0.8] font-semibold'
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        }
                    }
                })}

                {isUser ? (
                    <li
                        key={Math.random()}
                        className='flex gap-2 leading-normal font-medium font-montserrat  wide:mr-24'
                    >
                        <a className='cursor-pointer' onClick={logoutHandler}>
                            Log out
                        </a>{' '}
                    </li>
                ) : (
                    <li className='flex gap-2 leading-normal font-medium font-montserrat  wide:mr-24'>
                        <Link to='/sign-in'>Sign in</Link>
                        <span>/</span>
                        <Link to='/sign-up'>Sign up</Link>
                    </li>
                )}
            </ul>
        </>
    );
};

export default Menu;
