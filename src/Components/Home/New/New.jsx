import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserData from "../../../Context/Shopping";
import { Link } from "react-router-dom";
import './New.css'


const New = () => {
    const [New, setNew] = useState([
        {id:8, img:"new1.png", name:"anime #1", price:340000000},
        {id:9, img:"new2.png", name:"anime #2", price:5500000},
        {id:10, img:"new3.png", name:"anime #3", price:50000000},
        {id:11, img:"new4.png", name:"anime #4", price:30000000},
        {id:12, img:"new5.png", name:"anime #5", price:30000000},
        {id:13, img:"new6.png", name:"anime #6", price:30000000},
        {id:14, img:"new7.png", name:"anime #7", price:30000000},
        {id:15, img:"new8.png", name:"anime #8", price:30000000},
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
            count: 1,
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
        <h1 className="new-products">محصولات جدید</h1>
        <div className="new-container">
            <div className="new">

                {
                    New.map(newb => (

                        <div key={newb.id} className="new-product">
                     <img src={newb.img} alt="zomm" className="new-img" />
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


export default New