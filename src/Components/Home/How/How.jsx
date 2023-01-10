import React from "react";
import './How.css'


const How = () => {
    return (
        <>
        <br></br>
        <h1 className="how-h1">چطور NFT بخریم ؟</h1>
        <div className="how-container">
            <div className="how-buy">
                <img src="choose.png" alt="hh" className="how-img" />
                <h3>انتخاب محصول مورد علاقه</h3>
                <p>شما میتوانید محصول مورد علاقه </p>
                <p>خودتان را به سبد خرید اضافه کنید و بخرید</p>
            </div>
            <div className="how-buy">
                <img src="succes.png" alt="hh" className="how-img" />
                <h3>اعتبار سنجی</h3>
                <p>وارد حساب کاربری خود شوید و اطلاعات خودرا وارد کنید</p>
                <p>تا بتوانید محصول خودرا بخرید</p>
            </div>
            <div className="how-buy">
                <img src="buy.png" alt="hh" className="how-img" />
                <h3>خرید NFT</h3>
                <p>به کیف پول متصل شوید و با استفاده از</p>
                <p>رمز ارز اتریوم تراکنش را انجام دهید</p>
            </div>
            <div className="how-buy">
                <img src="happy.png" alt="hh" className="how-img" />
                <h3>تبریک!</h3>
                <p>ما به شما تبریک  میگوییم اکنون میتوانید</p>
                <p>با nft خود مشغول سرمایه گذاری شوید</p>
            </div>
        </div>
        </>
    )
}

export default How