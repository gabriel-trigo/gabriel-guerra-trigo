import React, { useState, useEffect } from 'react'
import NavButton from './NavButton'
import { Nav } from 'react-bootstrap';

function Navbar() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode)
    };
    
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode]);

  return (
    <div>
        <div className="flex w-fit border-b-[1px] border-b-white justify-center items-center ml-auto mr-auto">
            <NavButton name="Education"/>

            <NavButton name="Experience"/>

            <NavButton name="Projects"/>

            <NavButton name="Blog"/>

            <NavButton name="Contact"/>
        </div>
    </div>
  );
}

export default Navbar