import React from "react";
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div className="container2">
            <div className="min_con2">
                <ul className="nav_ul">
                    <li className="nav_li">
                        <Link className='nav_link' to='/'>Main</Link> 
                    </li>
                    <li>
                        <Link className='nav_link' to='/section1'>list1</Link>
                    </li>
                    <li>
                        <Link className='nav_link' to='/section2'>list2</Link>
                    </li>
                    <li>
                        <Link className='nav_link' to='/section3'>list3</Link>
                    </li>
                    <li>
                        <Link className='nav_link' to='/section4'>list4</Link>
                    </li>
                    <li>
                        <Link className='nav_link' to='/section5'>list5</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}