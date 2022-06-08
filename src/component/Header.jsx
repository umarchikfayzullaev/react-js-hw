import React from "react";
import '../styles/Header.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div>
            <div className="container">
                <div className="min_con">
                    <div className="box1">
                        <h1>Escape.</h1>
                        <ul className="h_ul">
                            <li>
                                <p>Home</p>
                            </li>
                            <li>
                                <p>Categories</p>
                            </li>
                            <li>
                                <p>About</p>
                            </li>
                            <li>
                                <p>Contact</p>
                            </li>
                        </ul>
                    </div>
                    <p className="h_text">Let's do it together.</p>
                    <p className="h_subtext">We travel the world in search of stories. Come along for the ride.</p>
                    <a className="h_link" href="">View Latest Posts</a>
                </div>
            </div>
        </div>
    )
}







{/* <Link className='h_link' to='/'>Main</Link> 
                <ul>
                    <li>
                        <Link className='h_link' to='/navbar'>list1</Link>
                    </li>
                    <li>
                        <Link className='h_link' to='/section1'>list2</Link>
                    </li>
                    <li>
                        <Link className='h_link' to='footer'>list3</Link>
                    </li>
                </ul> */}