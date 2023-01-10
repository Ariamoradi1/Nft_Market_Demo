import React from "react";
import Table from 'react-bootstrap/Table';
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import Logout from "./Logout";
import './User.css'
const User = () => {
    return (
        <>
        <Navbar/>
        <h1 style={{textAlign:'center'}}>پروفایل شما</h1>
        <div className="information-container">
            <img src="last3.jpg" alt="javad" className="javad-img" />
            <div className="text-information">
            <div className="valid">
            <p>اگر Aria_Man نیستید لطفا خارج شوید</p>
           <button className="valid-button">خروج</button>
        </div>
        <Table striped bordered hover className="information-table">
      
      <tbody>
        <tr>
          <td>نام</td>
          <td>Aria</td>
        </tr>
        <tr>        
          <td>نام خانوادگی</td>
          <td>Moradi</td>
        </tr>
        <tr>
          <td>ایدی</td>
          <td>Aria_Man</td>
        </tr>
        <tr>
          <td>سن</td>
          <td>19</td>
        </tr>
        <tr>
          <td>شماره ملی</td>
          <td>423244</td>
        </tr>
        <tr>
          <td>تعداد خریدها</td>
          <td>3</td>
        </tr>
        <tr>
          <td>ادرس کانترکت</td>
          <td>0xd4fio...se520</td>
        </tr>
        <tr>
          <td>کالکشن مورد علاقه</td>
          <td>CryptoPunks</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    <Logout/>
    <Footer/>
        </>
    )
}

export default User