import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserData from "../../../Context/Shopping";
import { Link } from "react-router-dom";
import './Bestes.css'
const Bests = (props) => {
    const [Best, setBest] = useState([
        {id:4, img:"zombe.png", name:"zombie", price:20000000},
        {id:5, img:"vagheat.png", name:"واقعیت مجازی", price:1000000},
        {id:6, img:"khok.png", name:"خوک", price:50000000},
        {id:7, img:"carton.png", name:"کارتون", price:30000000},
    ])
    const userDatas = useContext(UserData)
    const counterHandler = newb => {
        userDatas.setCounter(prev => {
          return prev + 1
        })
        let isInUserCart = userDatas.UserBasket.some(bagProduct => bagProduct.title === newb.name)
        console.log(isInUserCart)
        if (!isInUserCart) {
        let userArray = {
            id: userDatas.UserBasket.length + 1,
            title: newb.name,
            img: newb.img,
            much: newb.price,
            count: 1
        }
        userDatas.setUserBasket(prev => {
            return [...prev, userArray]
        })
    } else {
        let userCart = [...userDatas.UserBasket]
        // way 1
        userCart.some(bagProduct => {
            if (bagProduct.title === newb.name) {
                bagProduct.count += 1
                return true
            }
        })
        userDatas.setUserBasket(userCart)
        //way 2
       // let newUserCart = userCart.map(bagProduct => {
            //if (bagProduct.name === newb.title) {
             // bagProduct.count +=1
           // }
       // })
        //userDatas.setUserBasket(newUserCart)
    }
        alert('محصول با موفقیت به سبد خرید اضافه شد')
    }
    return (
        <>
        <hr></hr>
        <div className="bests-container">
            <h1 className="h1-best">پرفروش ترین ها</h1>
            <div className="bests">
                
        
        
            {
                Best.map(newb => (
                
                <div key={newb.id} className="best1">
                <img src={newb.img} alt="zom" className="bests-img" />
                <p>{newb.name}</p>
                <p>{newb.price} تومان</p>
                <div className="bbb">
                <button onClick={() => counterHandler (newb)} className="product-button">اضافه به سبد خرید</button>
                <Link to='/Information'><button className="btt">جزییات محصول</button></Link>
                </div>
            </div>
            
                ))
            }
        </div>
        </div>
        </>
    )
}

export default Bests