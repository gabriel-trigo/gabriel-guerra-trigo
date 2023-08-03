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
    <div className="fixed top-0 h-fit inset-x-0
        bg-zinc-100 border-b border-zinc-300 p-2 z-[10]">
        <div className="w-1/3 h-full mx-auto items-center 
            justify-between gap-2 flex">
            <a className="no-underline text-gray-500 hover:text-black" 
                href="#About">About</a>
            <a className="no-underline text-gray-500 hover:text-black" 
                href="#Education">Education</a>
            <a className="no-underline text-gray-500 hover:text-black" 
                href="#Experience">Experience</a>
            <a className="no-underline text-gray-500 hover:text-black" 
                href="#Projects">Projects</a>
            <button className="bg-green-600 hover:bg-green-700 border border-green-800 px-3 py-1 text-white font-semibold rounded" onClick={toggleDarkMode}>
                Dark Mode
            </button>
        </div>
    </div>
  );
}

export default Navbartw;