import React from "react";
import './Guarante.css'


const Guarante = () => {
    return (
        <>
        <div className="guarante-contaner">
            <div className="guarante-content1">
                <div className="guarant-img">
                    <img src="service1.png" alt="gua" className="guarante-img"/>
                </div>
                <div className="about-guarante">
                    <h3>ارسال سریع و ایمن</h3>
                    <p>برای تمامی سفارشات.</p>
                </div>
            </div>
            <div className="guarante-content1">
                <div className="guarant-img">
                    <img src="service2.png" alt="gua" className="guarante-img"/>
                </div>
                <div className="about-guarante">
                    <h3>گارانتی بازگشت وجه</h3>
                    <p>حتی بیشتر از 7 روز.</p>
                </div>
            </div>
            <div className="guarante-content1">
                <div className="guarant-img">
                    <img src="service3.png" alt="gua" className="guarante-img"/>
                </div>
                <div className="about-guarante">
                    <h3>مرجوعی طی 24 ساعت</h3>
                    <p>بدون سوال.</p>
                </div>
            </div>
            <div className="guarante-content1">
                <div className="guarant-img">
                    <img src="service4.png" alt="gua" className="guarante-img"/>
                </div>
                <div className="about-guarante">
                    <h3>پشتیبانی کامل</h3>
                    <p>24 ساعته پشتیبانی انلاین است</p>
                </div>
            </div>

        </div>
        </>
    )
}


export default Guarante