import { Link } from 'gatsby'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div>
                <p>
                    <Link to='/'>Matthew Yasul</Link>
                </p>
                <p>I write code, lift weights, and drink coffee.</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header