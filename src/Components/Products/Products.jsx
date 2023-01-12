import React from "react";
import { useContext } from "react";
import UserData from "../../Context/Shopping";
import Navbar from "../Home/Navbar/Navbar";
import './Products.css'


const Products = () => {
    const userDatas = useContext(UserData)

    const removeHandler = (item) => {
       userDatas.setUserBasket(userDatas.UserBasket.filter((event) => {
        return item !== event.id
       }))
       userDatas.setCounter(prev => {
        return prev - 1
       })
       
    }
    if (userDatas.UserBasket === '') {
        userDatas.setCounter(prev => prev == 0)
       }
    return (
        <>
        <Navbar/>
        <h1 style={{textAlign:'center'}}>سبد خرید شما</h1>
        <div className="user-container">
            <div className="user">

                {
                    userDatas.UserBasket.map((item) => (

                        <div key={item.id} className="user-product">
                     <img src={item.img} alt="zomm" className="user-img" />
                     <p>{item.title}</p>
                     <p>{item.much} تومان</p>
                     <p>تعداد:{item.count}</p>
                     <div className="buttons">
                     <button onClick={() => removeHandler (item.id)} className="product-delet">حذف محصول</button>
                     <button className="product-button">خرید محصول</button>
                     </div>
                        </div>
                    ))
                }

            </div>
        </div>
        </>
    )
}


export default Products