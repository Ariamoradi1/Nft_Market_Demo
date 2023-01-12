import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserData from "../../../Context/Shopping";
import './Last.css'

const Last = () => {

    const [Last, setLast] = useState([
        {id:17, img:"last1.jpg", name:"anime #1", price:340000000},
        {id:18, img:"bro.png", name:"anime #2", price:5500000},
        {id:19, img:"last3.jpg", name:"anime #3", price:4320000000},
        {id:20, img:"last4.jpg", name:"anime #4", price:50000000},
        {id:21, img:"last5.jpg", name:"anime #5", price:770000000},
        {id:22, img:"last6.jpg", name:"anime #6", price:250000000},
        {id:23, img:"woman.jpg", name:"anime #7", price:2120000000},
        {id:24, img:"woman2.jpg", name:"anime #8", price:820000000},
        {id:25, img:"last-monkey.jpg", name:"anime #9", price:4120000000},
        {id:26, img:"moon.webp", name:"anime #10", price:30000000},
        {id:27, img:"nft2.png", name:"anime #11", price:4120000000},
        {id:28, img:"monk.webp", name:"anime #12", price:4120000000},
    ])
    const userDatas = useContext(UserData)
    const counterHandler = (newb) => {
        userDatas.setCounter(prev => {
           return prev + 1
        })
        let isInUserCart = userDatas.UserBasket.some(bagProduct => bagProduct.title === newb.name)
        console.log(isInUserCart)
        if(!isInUserCart) {
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
        <h1 style={{textAlign:'center'}}>پرفروش ترین ها</h1>
        <div className="best-lastweek">
            <div className="last-week">
                
                {
                    Last.map(newb => (
                        
                        <div key={newb.id} className="best-pro">
                        <div className="best-img">
                        <img src={newb.img} alt="as" className="best-pro-img"/>
                    </div>
                    <div className="best-information">
                    <p>{newb.name}</p>
                    <p>{newb.price} تومان</p>
                    <button onClick={() => counterHandler(newb)} className="product-button">اضافه به سبد خرید</button>
                    </div>
                    </div>
                    ))
                }
                
            </div>
        </div>
        </>
    )
}

export default Last