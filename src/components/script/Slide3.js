import React from "react"
import styled from 'styled-components';

function Slide3(){
  return (
    <Container>
        <h1>How does BoloForms work?</h1>
        <p className="head-p">Set up your first workflow in just 3 easy steps.</p>
        <div className="process-install">
            <div>
                <img src="https://www.boloforms.com/_next/static/media/2.2709e204.svg" alt=""></img>
                <h3>Step 1:</h3>
                <p>Choose a template or add questions to create your Google Form.</p>
            </div>
            <div>
                <img src="https://www.boloforms.com/_next/static/media/1.b2cc23b0.svg" alt=""></img>
                <h3>Step 2:</h3>
                <p>Enable Single/Multi Step approval and add necessary approvers!</p>
            </div>
            <div>
                <img src="https://www.boloforms.com/_next/static/media/3.1a7ec00e.svg" alt=""></img>
                <h3>Step 3:</h3>
                <p>Now you can enable the workflow and share the Google Form.</p>
            </div>
        </div>
        <div className="nav-install" style={{marginTop:"6rem",paddingBottom:"1rem"}}>
            <span className="install" style={{width:"12rem", marginLeft:"5rem"}}> Install For Free</span>
            <span className="premium" style={{marginLeft:"2rem"}}>BoloForms Premium</span>
        </div>
      
    </Container>
  )
};

const Container = styled.div`
    {
        border:1px solid rgb(252, 250, 252);
        background-color: rgb(251, 245, 252);
        height:88vh;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center
    }
    .process-install{
        display: flex;
    }
    .process-install div{
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-between;
    }
    img{
        width:55rem;
        padding:1rem 2rem;
        position: relative;
        animation-name: content;
        animation-duration: 3s;
        animation-fill-mode: forwards;
        overflow: hidden;
        box-sizing: border-box;                 
    }
    @keyframes content {
    0% {
        bottom: -1000px;
    }

    100% {
        bottom: 0px;
    }
}
    h1{
        font-size:3rem;
        font-family: 'Rubik',sans-serif;
        margin-bottom:0.7rem;   
    }
    .head-p{
        font-size: 1.7rem;
        font-family: 'Open Sans',sans-serif; 
        margin-bottom:2rem;   
    }
    p{
        text-align:center;
        width:30rem;
        font-size:1.8rem;
        font-family: 'Open Sans',sans-serif; 
        padding:0.7rem;
        font-weight:500;
    }
    h3{
        font-size:2.2rem;
        font-family: 'Open Sans',sans-serif
    }

`


export default Slide3;
