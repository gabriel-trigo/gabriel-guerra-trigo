import React, { useState, useEffect } from 'react'
import NavButton from './NavButton'

function Navbar(props) {


    return (
        <div>
            <div className="flex w-fit border-b-[1px] border-b-black justify-center items-center ml-auto mr-auto">
                <NavButton name="About" currSection={ props.currSection } setCurrSection={ props.setCurrSection }/>

                <NavButton name="Blog" currSection={ props.currSection } setCurrSection={ props.setCurrSection }/>

                <NavButton name="Contact" currSection={ props.currSection } setCurrSection={ props.setCurrSection }/>
            </div>
        </div>
    );
}

export default Navbar