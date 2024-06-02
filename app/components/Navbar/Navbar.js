import React, { useState, useEffect } from 'react'
import NavButton from './NavButton'


function Navbar() {

    return (
        <div className="fixed top-0 inset-x-0
            p-2 z-[10] inline-flex h-14 bg-slate-50 font-sans">
            <div className="w-1/3 h-full mx-auto items-center 
                justify-between gap-2 flex">
                <NavButton name="About" link="#About"/>

                <NavButton name="Contact" link="#Contact"/>

                <NavButton name="Education" link="#Education"/>

                <NavButton name="Experience" link="#Experience"/>

                <NavButton name="Projects" link="#Projects"/>
            </div>
        </div>
  );
}

export default Navbar;
       