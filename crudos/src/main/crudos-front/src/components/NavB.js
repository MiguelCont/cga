import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/NavBar.css'

function NavB() {
    return (
        <>
            <div className="nav">
                <ul className="nav_ul">
                    <div className="nav_li"> 
                        <button className='nav_button'> Home </button>
                    </div>
                    <div className="nav_li">
                        <button className='nav_button'> Players </button>
                    </div>
                    <div className="nav_li">
                        <button className='nav_button'> About </button>
                    </div>
                    <div className="nav_li">
                        <button className='nav_button'> Contact </button> 
                    </div>
                </ul>
            </div>
        </>
    );
}

export default NavB;