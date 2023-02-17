import React from "react"
import styled from 'styled-components';
import { AiFillStar } from "react-icons/ai";


function name(){
  return (
    <Container>
        <div style={{fontSize:"4rem", color:"rgb(245, 164, 2)"}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
        <h1>Award-winning support<span style={{color:"rgb(214, 66, 255)"}}> .</span></h1>
        <p className="support-p">Best-in-class support. We’re always here to help – here’s how to connect.</p>
        <div id="support-media">
            <div className="support-media">
                <img src="https://www.boloforms.com/_next/static/media/live-chat-support.8700dc17.png" alt="" />
                <h3>Whatsapp chat</h3>
                <p>Ask a question right now.</p>
                <div className="button">Start a chat</div>
            </div>
            <div className="support-media">
                <img src="https://www.boloforms.com/_next/static/media/support-email.d67bf660.png" alt="" />
                <h3> Email</h3>
                <p>Get in touch by email.</p>
                <div className="button">Send an Email</div>
            </div>
            <div className="support-media">
                <img src="https://www.boloforms.com/_next/static/media/helpcenter.1d93444b.png" alt="" />
                <h3>Help center</h3>
                <p>In Depth Guides.</p>
                <div className="button">Read articles</div>
            </div>
            <div className="support-media">
                <img src="https://www.boloforms.com/_next/static/media/book-time.934f28c8.png" alt="" />
                <h3>Google Meet</h3>
                <p>Guided support and Q&A.</p>
                <div className="button">Book a time</div>
            </div>
        </div>
      
    </Container>
  )
};
  const Container = styled.div`
    {
        height:80vh;
        display:flex;
        flex-direction:column;
        text-align:center;
        margin-top:8em;
    }
    .support-media{
        width:35rem;
        height:47rem;
        border:1px solid rgb(235, 235, 235);
        border-radius: 3rem;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        margin:1rem;
        display:flex;
        flex-direction: column;
        align-items: center
    }
    .support-media:hover{
        transform:scale(1.02);
        transition:0.3s ease-out;
    }
    #support-media{
        display:flex;
    }
    img{
        width:30rem;
    }
    h1{
        font-size:3rem;
        font-family: 'Rubik',sans-serif;
        margin-bottom:0.7rem;  
    }
    h3{
        margin-top:0.8rem;
        font-size:2rem;
        font-family: 'Open Sans',sans-serif;
    }
    .support-p{
        font-size: 1.7rem;
        font-family: 'Open Sans',sans-serif; 
        margin-bottom:8rem;
    }
    p{
        font-family: 'Open Sans',sans-serif; 
        font-size:1.5rem;
        margin-bottom:2rem;
    }
    .button{
        font-size:1.5rem;
        font-family: 'Rubik',sans-serif;
        border: 2px solid rgb(157, 52, 255);
        width:12rem;
        height: 2rem;
        text-align: center;
        color: black;
        border-radius: 0.8rem;
        padding:0.8rem 1rem;
        margin-right: 0.8rem;
        cursor: pointer;     
    }
    .button:hover{
        background-color:rgb(157, 52, 255);
        color:white;
        transition:0.3s ease-out; 
    }
  `


export default name;
