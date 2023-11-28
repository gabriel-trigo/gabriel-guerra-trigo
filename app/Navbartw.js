import React, { useState, useEffect } from 'react';

function Navbartw() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    
    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    
    // Update dark mode class on <html> element whenever the state changes
    useEffect(() => {
        if (isDarkMode) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

  return (
    <div className="fixed top-0 inset-x-0
        p-2 z-[10] inline-flex h-14 bg-slate-50
        dark:bg-black">
        <div className="w-1/3 h-full mx-auto items-center 
            justify-between gap-2 flex">
            <a className="no-underline text-gray-800 hover:text-black
                dark:text-gray-300 dark:hover:text-gray-100" 
                href="#About">About</a>
            <a className="no-underline text-gray-500 hover:text-black
                dark:text-gray-300 dark:hover:text-gray-100" 
                href="#Education">Education</a>
            <a className="no-underline text-gray-500 hover:text-black
                dark:text-gray-300 dark:hover:text-gray-100"  
                href="#Experience">Experience</a>
            <a className="no-underline text-gray-500 hover:text-black
                dark:text-gray-300 dark:hover:text-gray-100"  
                href="#Projects">Projects</a>
            <button className="bg-purple-500 hover:bg-purple-400 px-3 py-1 text-white font-semibold rounded-sm" onClick={toggleDarkMode}>
                Dark Mode
            </button>
        </div>
    </div>
  );
}

export default Navbartw;