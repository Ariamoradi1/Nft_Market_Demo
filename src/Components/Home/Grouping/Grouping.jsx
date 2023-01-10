import React from "react";
import './Grouping.css'


const Grouping = () => {
    return (
        <>
        <hr></hr>
        <div className="Grouping-Container">
            <h1>مرور بر اساس دسته بندی</h1>
            <div className="groups">
             <div className="group1">
                <img src="sport.png" alt="sp" className="group-img" />
                <h3>ورزش</h3>
             </div>
             <div className="group1">
                <img src="music.png" alt="sp" className="group-img" />
                <h3>موسیقی</h3>
             </div>
             <div className="group1">
                <img src="abzar.png" alt="sp" className="group-img" />
                <h3>ابزار</h3>
             </div>
             <div className="group1">
                <img src="social.png" alt="sp" className="group-img" />
                <h3>مجازی</h3>
             </div>
             <div className="group1">
                <img src="pic.png" alt="sp" className="group-img" />
                <h3>عکاسی</h3>
             </div>
            </div>
        </div>
        </>
    )
}


export default Grouping