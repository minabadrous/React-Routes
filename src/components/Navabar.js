import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'

const Navabar = () => {
    return (
        <div className="navbar">
            <div className="logo">YO MAMA!</div>
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
            </ul>
        </div>
    )
}

export default withRouter(Navabar);