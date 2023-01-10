import React from "react";
import './News.css'


const News = () => {
    return (
        <>
        <h1 style={{textAlign:'center'}}>آخرین اخبار دنیای NFT</h1>
        <div className="news-container">
            <div className="news">
            <img src="news1.png" alt="news" className="news-img" />
            <h2 className="new-2">هنگام خرید NFT در تجارت الکترونیک، خود را ایمن نگه دارید</h2>
            <p>بیشتر بخوانید</p>
            </div>
            <div className="news">
            <img src="news2.png" alt="news" className="news-img" />
            <h2 className="new-h2">به‌روزرسانی‌های مهم برای فهرست کردن و حذف NFT‌های شما</h2>
            <p>بیشتر بخوانید</p>
            </div>
            <div className="news">
            <img src="news3.png" alt="news" className="news-img" />
            <h2 className="new-h2">10 نکته برای جلوگیری از کلاهبرداری و ایمن ماندن در وب غیرمتمرکز</h2>
            <p className="more">بیشتر بخوانید</p>
            </div>
        </div>
        </>
    )
}


export default News