import { Link } from 'gatsby'
import React from 'react'

import * as headerStyles from "./header.module.scss"

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className="{headerStyles.overlay}"></div>
            <div className={headerStyles.heroContent}>
                <p className={headerStyles.brand}>
                    <Link to='/'>Matthew Yasul</Link>
                </p>
                <p className={headerStyles.description}>I write code, lift weights, and drink coffee.</p>
            </div>
            <nav className={headerStyles.navContainer}>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link to="/" activeClassName={headerStyles.activeMenuItem}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog/" activeClassName={headerStyles.activeMenuItem}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact/" activeClassName={headerStyles.activeMenuItem}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>
                            About
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header