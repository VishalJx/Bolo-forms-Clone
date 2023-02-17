import React from "react"
import styled from 'styled-components';


function Slide2(){
  return (
    <Container>
        <h1>BoloForms Is Used By</h1>
        <div class="container">
            <div class="image"><img src="https://www.boloforms.com/_next/static/media/1.890362c3.svg" alt=""/></div>
            <div class="image"><img src="https://www.boloforms.com/_next/static/media/2.0b0df285.svg" alt=""/></div>
            <div class="image"><img src="https://www.boloforms.com/_next/static/media/3.8cf4b5f3.svg" alt=""/></div>
            <div class="image"><img src="https://www.boloforms.com/_next/static/media/4.b84353dc.svg" alt=""/></div>
            <div class="image"><img src="https://www.boloforms.com/_next/static/media/5.9b049047.svg" alt="" /></div>
        </div>
      
    </Container>
  )
};
const Container = styled.div`
    {
        height:60vh;
    }
    h1{
        text-align:center;
        font-size:3rem;
        font-family: 'Rubik',sans-serif;
        margin-bottom:6rem;
    }
    .container {
        height:35rem;
        overflow: hidden;
        display: flex;
        margin: 0 auto;
    }

    .container div {
        width:30rem;
        margin-left: 100px;
        animation: slide 15s linear infinite;
    }
    
    .image{
        display:flex;
        justify-content:center;
        background-color:white;
    }
    img{
        border:1px solid rgb(235, 182, 252);
        border-radius: 1rem;
        height:30rem;
        min-width:30rem;
    }
    @keyframes slide {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(-44rem, 0, 0); /* The image width */
        }
    }
`

export default Slide2;
