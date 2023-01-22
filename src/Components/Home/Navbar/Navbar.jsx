import React from "react";
import './Navbar.css'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlBasket} from 'react-icons/sl'
import { AiOutlineUser } from "react-icons/ai";
import { useContext } from "react";
import UserData from "../../../Context/Shopping";
import { Link } from "react-router-dom";

const Navbar = () => {
    const userDatas = useContext(UserData)
    return (
        
        <>
        <nav>
        <ul className="ul-nav">
        <Link to='/'>
            <li style={{color:'black'}}>
                
                خانه
               
            </li>
            </Link>
            <li>
                فروشگاه
            </li>
            <Link to='/About'>
            <li style={{color:'black'}}>
                درباره من
            </li>
            </Link>
            <li>
                ارتباط با ما
            </li>
            <li><AiOutlineHeart className="heart"></AiOutlineHeart></li>
          <Link to='/Products'> <li className="li-basket"><SlBasket className="basket"></SlBasket></li></Link>
         <Link to='/Profile'>  <li><img src="last1.jpg" alt="prof" className="prof-img"/></li> </Link>
        </ul>
        
        </nav>
        </>
    )
}

export default Navbar
