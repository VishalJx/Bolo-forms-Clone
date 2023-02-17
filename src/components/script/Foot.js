import React from "react"
import styled from 'styled-components';
import { BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs';

function Foot(){
  return (
    <Container>
        <div className="foot-content">
            <div className="content1">
                <ul>
                    <li><h3>Live Chat</h3></li>
                    <li><h3>Support Email</h3></li>
                    <li><h3>Help Center</h3></li>
                    <li><h3>Video Call</h3></li>
                </ul>
            </div>
            <div className="content1">
                <ul>
                    <li><h5>Pages</h5></li>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Blogs</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className="content1">
                <ul>
                    <li><h5>Products</h5></li>
                    <li>Forms Approval</li>
                    <li>Signature</li>
                    <li>Sheetgod</li>
                    <li>Google Form UI Enhancer</li>
                    <li>Timer + Proctor</li>
                    <li>Google Meet Attendance Tracker</li>
                </ul>
            </div>
            <div className="content1">
                <ul>
                    <li><h5>Legal</h5></li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Refund Policy</li>
                    <li>Data Security & Policy</li>
                </ul>
            </div>
        </div>
        <div className="social-icons">
            <BsTwitter id="icons"/>
            <BsYoutube id="icons"/>
            <BsFacebook id="icons"/>
        </div>
      
    </Container>
  )
};
  const Container = styled.div`
    {
        position:relative;
        height:45vh;
        width:100%;
        background-color:rgb(245, 245, 245);
    }
    .foot-content{
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        margin-top:8rem;
    }
    ul{
        width:28rem;
        display:flex;
        flex-direction:column; 
        align-items: flex-start;
    }
    h3{
        font-size:2.8rem;
        font-family: 'Rubik',sans-serif;
        font-weight: 600; 
        padding:0.2rem;      
    }
    h5{
        font-size:1.8rem;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
    }
    li{
        font-size:1.7rem;
        font-family: 'Open Sans',sans-serif;
        font-weight:500;
        padding:0.3rem;
    }
    .social-icons{
        text-align:center;
        font-size:3rem;
    }
    #icons{
        margin:8rem 2rem 0rem 2rem;
        padding:1rem;
    }
    #icons:hover{
        border-radius:20rem;
        background-color:black;
        color:white;
        padding:1rem;
        transition:0.3s ease-out;
    }

`

export default Foot;
