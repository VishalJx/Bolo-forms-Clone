import React from "react";
import styled from 'styled-components';
import { BiRocket } from "react-icons/bi";


function Slide1(){
  return (
    <Container id="slide1">
        <div style={{width:"75rem", marginRight:"3rem"}}>
            <h1>Transform Google Forms Into Interactive Workflows</h1>
            <p>BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.</p>
            <div className="install"><BiRocket style={{paddingRight:"0.6rem"}}/> Install For Free</div>
        </div>
        <iframe className="youtube" src="https://www.youtube.com/embed/riiUkCRpIio" title='youtube'></iframe>
    </Container>
  )
};
  const Container = styled.div`
    {
        height:95vh;
        display: flex;
        flex-direction:row;
        justify-content: center;
        align-items: center;
    }
    h1{
        font-size: 4rem;
        font-family: 'Rubik',sans-serif;
        padding:2rem;
        padding-bottom:1rem;
    }
    p{
        font-size: 2.5rem;
        font-family: 'Open Sans',sans-serif; 
        padding:2rem;
        text-align:block;
    }
    .install{
        width:15rem;
        font-size:1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:2rem;
        font-family: 'Rubik',sans-serif;
    }
    .youtube{
        width:55rem;
        height:35rem;
        border:0.4rem solid purple;
        border-radius: 2rem;
        background-image: url("https://i.ytimg.com/vi_webp/riiUkCRpIio/sddefault.webp");
        background-position: center;
        background-size: cover;
    }
    .youtube:hover{
        opacity:0.8;
    }
  `

export default Slide1;
