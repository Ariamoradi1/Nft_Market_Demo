import React from "react";
import './Footer.css'
import {BsDiscord} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"


const Footer = () => {
    return(
        <>
        <footer>
            <div className="footer-container">
                    <div className="left-content">
                    <img src="footer.png" alt="footer" className="footer-img"/>
                    <h3>ایران..تهران میدان انقلاب</h3>
                    <div className="footer-icons">
                    <AiFillLinkedin></AiFillLinkedin>
                    <AiOutlineTwitter></AiOutlineTwitter>
                    <BsInstagram></BsInstagram>
                    <FaFacebookF></FaFacebookF>
                    </div>
                    </div>

                <div className="footer-profile">
                    <h2 className="footer-h2">پروفایل</h2>
                    <ul className="footer-profiler">
                        <li className="footer-li"><a href="#">پروفایل من</a></li>
                        <li className="footer-li"><a href="#">ورود/ثبت نام</a></li>
                        <li className="footer-li"><a href="#">سبد خرید</a></li>
                        <li className="footer-li"><a href="#">علاقه</a></li>
                        <li className="footer-li"><a href="#">فروشگاه</a></li>
                    </ul>
                </div>    
                <div className="footer-profile">
                    <h2 className="footer-h2">درباره ما</h2>
                    <ul className="footer-profiler">
                        <li className="footer-li"><a href="#">درباره</a></li>
                        <li className="footer-li"><a href="#">ما که هستیم</a></li>
                        <li className="footer-li"><a href="#">اخرین اخبار</a></li>
                        <li className="footer-li"><a href="#">محصولات جدید</a></li>
                        <li className="footer-li"><a href="#">ارتباط با ما</a></li>
                    </ul>
                </div>
                <div className="footer-profile">
                    <h2 className="footer-h2">پشتیبانی</h2>
                    <ul className="footer-profiler">
                        <li className="footer-li"><a href="#">حریم خصوصی</a></li>
                        <li className="footer-li"><a href="#">خط مشی</a></li>
                        <li className="footer-li"><a href="#">سوالات متداول</a></li>
                        <li className="footer-li"><a href="#">ارتباط با ما</a></li>
                        <li className="footer-li"><a href="#">امنیت</a></li>
                    </ul>
                </div>
                
                
            </div>
            <p style={{textAlign:'center'}}>توسعه دهنده: اریا مرادی</p>
            <p style={{textAlign:'center'}}>Aria Man Technology,inc</p>
        </footer>
        </>
    )
}

export default Footer