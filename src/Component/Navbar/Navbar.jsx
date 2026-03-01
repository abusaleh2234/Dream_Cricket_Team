import React from 'react';
import logo from "../../assets/logo.png"

const Navbar = ({availableBalance}) => {
    return (
        <div className='shadow-sm'>
            <div className="navbar  max-w-7xl mx-auto">
                <div className="flex-1">
                    <a className=" text-xl">
                        <img className='w-12' src={logo} alt="" />
                    </a>
                </div>
                <div className="flex-none">
                    <div className="p-2 border rounded-lg shadow-sm">
                        <span className='mr-2 font-semibold'>{availableBalance}</span>
                        <span>Coin</span>
                        {/* <img src={} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;