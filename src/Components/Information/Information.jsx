import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import './Information.css';
import Table from 'react-bootstrap/Table';
import Related from "./Related";
import Guarante from "./Guarante";
import Footer from "../Footer/Footer";
import Chart from "./Chart";
import { chartData } from "../../Datas";



const Information = () => {
    return (
        <>
        <Navbar/>
         
        <div className="information-container">
            <img src="information.png" alt="infor" className="information-picture"/>
            <div className="text-information">
        <h1>کلاب Bored Ape Yacht</h1>
        <h3>5.000.000 تومان</h3>
        <button className="information-button">خرید</button>
        <div className="valid">
            <p>دسته بندی : هنر دیجیتال</p>
           <button className="valid-button">معتبر</button>
        </div>
<Table striped bordered hover className="information-table">
      
      <tbody>
        <tr>
          <td>برند</td>
          <td>Etrade</td>
        </tr>
        <tr>        
          <td>کالکشن</td>
          <td>eTrade Capsules</td>
        </tr>
        <tr>
          <td>سازنده</td>
          <td>Aria Moradi</td>
        </tr>
        <tr>
          <td>تعداد</td>
          <td>1</td>
        </tr>
        <tr>
          <td>نادر</td>
          <td>Epic</td>
        </tr>
        <tr>
          <td>نوع</td>
          <td>دیجیتال ارت</td>
        </tr>
        <tr>
          <td>ادرس کانترکت</td>
          <td>0xd4fio...se520</td>
        </tr>
        <tr>
          <td>توکن ایدی</td>
          <td>41</td>
        </tr>
        <tr>
          <td>بلاکچین</td>
          <td>اتریوم</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    <Chart data={chartData} datakey="sale"/>
    <Related/>
    <Guarante/>
    <Footer/>
        </>
    )
}

export default Information