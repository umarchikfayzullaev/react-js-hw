import React from "react";
import '../styles/Footer.css'

export default function Footer(){
    return(
        <div className="container3">
            <div className="min_con3">
                <p className="f_text">Stay in Touch</p>
                <label>
                    <input type="email" placeholder="Enter your email address" />
                    <button>Submit</button>
                </label>
            </div>
            <div className="foot">
                    <h1>Escape.</h1>
                    <ul className="f_ul">
                        <li className="f_li">
                            <p>Hom</p>
                        </li>
                        <li className="f_li">
                            <p>Categories</p>
                        </li>
                        <li className="f_li">
                            <p>About</p>
                        </li>
                        <li className="f_li">
                            <p>Contact</p>
                        </li>
                    </ul>
                </div>
        </div>
    )
}