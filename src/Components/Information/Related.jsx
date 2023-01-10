import React from "react";
import { useState } from "react";
import UserData from "./.src/../../../Context/Shopping";
import { useContext } from "react";
import './Related.css'


const Related = () => {
    const [Related, setRelated] = useState([
        {id:29, img:"related1.png", name:"کلاب  Ar Act", price:2500000},
        {id:30, img:"related2.png", name:"کلاب  Ar Act", price:1500000},
        {id:31, img:"related3.png", name:"کلاب  Ar Act", price:19000000},
        {id:32, img:"related4.png", name:"کلاب  Ar Act", price:1700000},
    ])
    const userDatas = useContext(UserData)
    const counterHandler = newb => {
    userDatas.setCounter(prev => {
       return prev + 1
    })
    let userArray = {
        id: userDatas.UserBasket.length + 1,
        title: newb.name,
        img: newb.img,
        much: newb.price
    }
    userDatas.setUserBasket(prev => {
        return [...prev, userArray]
    })
}
    return (
        <>
        <h1 className="h1-related">محصولات مرتبط</h1>
        <div className="related-container">

            {
                Related.map(newb => (
                    <div className="related-content">
            
                    <img src={newb.img} alt="zomm" className="new-img" />
                    <p>{newb.name}</p>
                    <p>{newb.price} تومان</p>
                    <button onClick={() => counterHandler(newb)} className="product-button">اضافه به سبد خرید</button>
           </div>
                ))
            }
        </div>
        
        </>
    )
}


export default Related