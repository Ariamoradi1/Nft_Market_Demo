import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserData from "../../../Context/Shopping";
import './Slide.css'



const Slide = () => {
   const [SlideArray, setSlideArray] = useState([
    {id:1, img:"product1.png", name:"anime #1", price:2000000},
    {id:2, img:"product2.png", name:"anime #2", price:4000000},
    {id:3, img:"product3.png", name:"anime #3", price:6000000},
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
        <h2>NFT های خارق العاده را کشف، جمع آوری و بفروشید</h2>
        <div className="container">
            <div className="information">
            <div className="products">
          {
            SlideArray.map(newb => (
                
                <div key={newb.id} className="product1">
                <img src={newb.img} alt="monkey" className="img-header" />
                <p>{newb.name}</p>
                <p>{newb.price} تومان</p>
                <div className="bbb">
                <button onClick={() => counterHandler(newb)} className="product-button">اضافه به سبد خرید</button>
                <Link to='/Information'><button className="btt">جزییات محصول</button></Link>
                </div>
            </div>
            
            ))
          }
          </div>
          </div>
          </div>
        
        </>
    )
}

export default Slide