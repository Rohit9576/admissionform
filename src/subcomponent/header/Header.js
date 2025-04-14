import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    // const navlink = [
    //     {
    //         text: 'Dashboard',
    //         link: '/'
    //     },

    //     {
    //         text: 'Transaction',

    //         link: "",
    //         // onClick: scrollToWhyUs,
    //     },
    //     {
    //         text: 'Reports',
    //         link: '/scrap-rate'
    //     },
    //     {
    //         text: 'master',
    //         link: '/'
    //     },

    //     {
    //         text: 'setting',
    //         link: '#why-us',
    //         // onClick: scrollToWhyUs,
    //     },
    //     {
    //         text: 'support center',
    //         link: '/scrap-rate'
    //     },
    // ];


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeSidebar = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className='container'>
                <div className='row v-center'>
                    <div className='header-item item-left'>
                        <div className='logo'>
                            <NavLink exact to='/' ClassName='logo'><i class="fas fa-fire"> </i> ERP </NavLink>

                        </div>
                    </div>
                    {/* <div className='header-item item-center'>
                        <nav className='menu'>
                            <ul className='menu-main'>
                                {navlink.map((val, i) => (
                                    <li key={i}>
                                        <NavLink exact="true" to={val.link} className='main-nav'>{val.text}</NavLink>
                                        
                                    </li>
                                ))}
                            </ul>
                            <div className="fas fa-close" id="close" onClick={closeSidebar}>
                             
                            </div>
                        </nav>
                    </div> */}

                    <div className='header-item item-center'>
                        <nav className='menu'>
                            <ul className='menu-main'>
                                <li>
                                    <NavLink exact="true" to='/' className='main-nav'><i class="fa-solid fa-gauge"></i> Dashboard</NavLink>
                                </li>


                                <li className="menu-item-has-children">
                                    <NavLink exact="true" to='/about' className='main-nav'><i class="fa-solid fa-briefcase"></i> Transaction <i className="fas fa-angle-down"></i></NavLink>
                                    <div className='sub-menu single-column-menu'>
                                        <ul>
                                            <li><Link to='#' className='review'>client's review</Link></li>
                                            <li><Link to='#' className='review'>student's review</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item-has-children">
                                    <NavLink exact="true" to='/about' className='main-nav'> <i class="fa-solid fa-chart-simple"></i> Reports <i className="fas fa-angle-down"></i></NavLink>
                                    <div className='sub-menu single-column-menu'>
                                        <ul>
                                            <li><Link to='#' className='review'>client's review</Link></li>
                                            <li><Link to='#' className='review'>student's review</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item-has-children">
                                    <NavLink exact="true" to='/about' className='main-nav'> <i class="fas fa-id-card"></i> master <i className="fas fa-angle-down"></i></NavLink>
                                    <div className='sub-menu single-column-menu'>
                                        <ul>
                                            <li><Link to='#' className='review'>client's review</Link></li>
                                            <li><Link to='#' className='review'>student's review</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item-has-children">
                                    <NavLink exact="true" to='/about' className='main-nav'> <i class="fa-solid fa-wrench"></i> setting <i className="fas fa-angle-down"></i></NavLink>
                                    <div className='sub-menu single-column-menu'>
                                        <ul>
                                            <li><Link to='#' className='review'>client's review</Link></li>
                                            <li><Link to='#' className='review'>student's review</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item-has-children">
                                    <NavLink exact="true" to='/about' className='main-nav'><i class="fa-solid fa-plus"></i> support center <i className="fas fa-angle-down"></i></NavLink>
                                    <div className='sub-menu single-column-menu'>
                                        <ul>
                                            <li><Link to='#' className='review'>client's review</Link></li>
                                            <li><Link to='#' className='review'>student's review</Link></li>
                                        </ul>
                                    </div>
                                </li>

                            </ul>
                            <div className="fas fa-close" id="close" onClick={closeSidebar}>

                            </div>
                        </nav>
                    </div>


                    <div className='header-item item-right'>
                        <div class="icons">
                            <div class="fas fa-search" id="search-btn"></div>

                            <div class="fas fa-heart" id="heart-btn"></div>
                            <div class="fas fa-user" id="user-btn">

                            </div>

                            <button className='stn' type='submit'>subscribe</button>
                            <div className="fas fa-bars" id="menu-btn" onClick={toggleMenu}></div>
                        </div>


                        <div class="search-form">
                            <input type="search" id="search-box" placeholder="search here..." />
                            <label for="search-box" class="fas fa-search"></label>
                        </div>

                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;