import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Table from 'react-bootstrap/Table';
import {BsInstagram} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import './About.css'
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <>
        <Navbar/>
        <h1 style={{textAlign:'center'}}>درباره من</h1>
        <p style={{textAlign:'center'}}>اریا هستم 19 ساله.از 17 سالگی به سمت علاقه خودم رفتم و با شور و اشتیاق  مشغول به یادگیری شدم و</p>
        <p style={{textAlign:'center'}}>الان با انگیزه دنبال چالش های جدید و کار تیمی هستم و الان میخوام تمام چیز هایی را که یاد گرفتم به کار بگیرم</p>
        <div className="about-container">
        <img src="aria.jpg" alt="javad" className="aria-img" />
            
            <div className="about">
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
          <td>تاریخ تولد</td>
          <td>1382/4/8</td>
        </tr>
        <tr>
          <td>سن</td>
          <td>19</td>
        </tr>
        <tr>
          <td>وضعیت تاهل</td>
          <td>مجرد</td>
        </tr>
        <tr>
          <td>وضعیت سربازی</td>
          <td>معافیت تحصیلی</td>
        </tr>
        <tr>
          <td>تخصص</td>
          <td>Front-End</td>
        </tr>
        <tr>
          <td>مهارت ها</td>
          <td>Html,Css,JavaScript,React,React-Router,Mui,Git,Api</td>
        </tr>
        <tr>
          <td>شماره تلفن</td>
          <td>09032860170</td>
        </tr>
        <tr>
          <td>ایمیل</td>
          <td>ariaman2002@gmail.com</td>
        </tr>
      </tbody>
    </Table>

            </div>
        </div>
        <div className="icons-about">
       <a className="linkedin-icon" href="https://www.linkedin.com/in/aria-moradi-a4402a244/"> <AiFillLinkedin style={{ marginLeft:'50px'}}></AiFillLinkedin></a>
       <a href="https://www.instagram.com/__aria_man/"> <BsInstagram className="insta-icon"></BsInstagram></a>
       <a className="github-icon" href="https://github.com/Ariamoradi1/"> <AiFillGithub style={{marginRight:'50px'}}></AiFillGithub></a>

        </div>
        <Footer/>
        </>
    )
}


export default About