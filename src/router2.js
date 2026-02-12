import React from 'react'

import { BrowserRouter, NavLink } from 'react-router-dom'

const Router2 = () => {
    return (
        <BrowserRouter>
            <nav className='nav'>
                {/* HOME */}
                <NavLink to='/' className={({isActive})=>
                    isActive? "active_menu" : "menu"
                } style={({isActive})=>{
                    return {fontWeight:isActive? "bold": ""}
                }}>Home</NavLink>-&nbsp;
                
                {/* Product */}
                <NavLink to='/product' className={({isActive})=>
                    isActive? "active_menu" : "menu"
                }>Product</NavLink>-&nbsp;
                {/* Member */}
                <NavLink to='/member' className={({isActive})=>
                    isActive? "active_menu" : "menu"
                }>Member</NavLink>-&nbsp;
                {/* Contact */}

                <NavLink to='/contact' className={({isActive})=>
                    isActive? "active_menu" : "menu"
                }>Contact Us</NavLink>-&nbsp;
                
            </nav>

        </BrowserRouter>
    )
}
export default Router2
