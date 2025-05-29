import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { CgDarkMode } from "react-icons/cg";
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {

    const [dropdown, setdropdown] = useState(false)

    const handleDropDown = () => {
        setdropdown((prev) => !prev)
    };

    return (
        <div className={darkMode ? "text-white bg-black" : "text-black bg-white"}>
            <nav className='flex justify-between p-5'>
                <NavLink to={'/'} className='text-3xl font-serif text-violet-600'>Dream Feature Portal</NavLink>
                <div className='menu-items flex gap-5 text-xl font-light'>
                    <NavLink to={'/'} className="hover:border-b hover:text-violet-600">Home</NavLink>
                    <NavLink to={'/idea'} className="hover:border-b hover:text-violet-600">Ideas</NavLink>
                    <NavLink to={'/about'} className="hover:border-b hover:text-violet-600">About us</NavLink>
                    <NavLink to={'/contact'} className="hover:border-b hover:text-violet-600">Contact us</NavLink>
                </div>
                <div className='darkmode-container'>
                    <CgDarkMode
                        size={25}
                        className='cursor-pointer'
                        onClick={() => setDarkMode(prev => !prev)}
                    />
                </div>
                <div className='mobile-view' onClick={handleDropDown}>
                    <TiThMenu
                        size={25}
                    />
                </div>
            </nav>
            {dropdown && (
                <div className='flex flex-col text-center items-center w-full'>
                    <NavLink to={'/'} className="hover:border-b hover:text-violet-600 py-2 border-b w-full" onClick={() => setdropdown(false)}>Home</NavLink>
                    <NavLink to={'/idea'} className="hover:border-b hover:text-violet-600 py-2 border-b w-full" onClick={() => setdropdown(false)}>Ideas</NavLink>
                    <NavLink to={'/about'} className="hover:border-b hover:text-violet-600 py-2 border-b w-full" onClick={() => setdropdown(false)}>About us</NavLink>
                    <NavLink to={'/contact'} className="hover:border-b hover:text-violet-600 py-2 border-b w-full" onClick={() => setdropdown(false)}>Contact us</NavLink>
                    <div className='py-2'>
                        <CgDarkMode
                            size={20}
                            className='cursor-pointer'
                            onClick={() => setDarkMode(prev => !prev)}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;
