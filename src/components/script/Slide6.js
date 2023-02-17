import React from "react"
import styled from 'styled-components';

function Slide6(){
  return (
    <Container>
        <h1>Frequently Asked Questions</h1>
        <div className="content">
            <div className="dropdown">
                <span className="div">What is the difference between email and request?</span>
                <div className="dropdown-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum alias quis at facere saepe illum temporibus vero obcaecati voluptas soluta esse expedita libero vel consequatur, sapiente facilis non consequuntur eaque.</p>
                </div>
            </div>
            <div className="dropdown">
                <span className="div">How to calculate the number of requests based on email quota?</span>
                <div className="dropdown-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum alias quis at facere saepe illum temporibus vero obcaecati voluptas soluta esse expedita libero vel consequatur, sapiente facilis non consequuntur eaque.</p>
                </div>
            </div>
            <div className="dropdown">
                <span className="div">What will happen if I run out of email quota?</span>
                <div className="dropdown-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum alias quis at facere saepe illum temporibus vero obcaecati voluptas soluta esse expedita libero vel consequatur, sapiente facilis non consequuntur eaque.</p>
                </div>
            </div>
            <div className="dropdown">
                <span className="div">Why the addon requires access to my Google Drive?</span>
                <div className="dropdown-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum alias quis at facere saepe illum temporibus vero obcaecati voluptas soluta esse expedita libero vel consequatur, sapiente facilis non consequuntur eaque.</p>
                </div>
            </div>
            <div className="dropdown">
                <span className="div">What will happen to my data if I cancel my subscription?</span>
                <div className="dropdown-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum alias quis at facere saepe illum temporibus vero obcaecati voluptas soluta esse expedita libero vel consequatur, sapiente facilis non consequuntur eaque.</p>
                </div>
            </div>
            <div className="dropdown">
                <span className="div">How does approval workflow feature work?</span>
                <div className="dropdown-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum alias quis at facere saepe illum temporibus vero obcaecati voluptas soluta esse expedita libero vel consequatur, sapiente facilis non consequuntur eaque.</p>
                </div>
            </div>
            <div className="dropdown">
                <span className="div">I receive a permission error when I try to setup the Add-on</span>
                <div className="dropdown-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum alias quis at facere saepe illum temporibus vero obcaecati voluptas soluta esse expedita libero vel consequatur, sapiente facilis non consequuntur eaque.</p>
                </div>
            </div>
            <div className="dropdown">
                <span className="div">Does recipient need Google Account?</span>
                <div className="dropdown-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum alias quis at facere saepe illum temporibus vero obcaecati voluptas soluta esse expedita libero vel consequatur, sapiente facilis non consequuntur eaque.</p>
                </div>
            </div>
            <div className="dropdown">
                <span className="div">Can Form Respondent or Recipients edit a form submission?</span>
                <div className="dropdown-content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum alias quis at facere saepe illum temporibus vero obcaecati voluptas soluta esse expedita libero vel consequatur, sapiente facilis non consequuntur eaque.</p>
                </div>
            </div>
        </div>

      
    </Container>
  )
};
  const Container = styled.div`
    {
        height:50vh;
        margin-top:5rem;
    }
    h1{
        text-align: center;
        font-size:3rem;
        font-family: 'Rubik',sans-serif;
        margin-bottom:5rem;  
    }
    .content{
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: flex-start;
        margin-left:5rem;
    }
    .dropdown {
        width:55rem;
        position: relative;
        display: inline-block;
        border:1px solid rgb(219, 219, 219);
        padding:1rem;
        border-radius:1rem;
        margin:1rem;
    }
    span{
        font-size:2rem;
        font-family: 'Rubik',sans-serif;
        margin-bottom:0.7rem;  
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    p{
        font-family: 'Inter',sans-serif;
        font-size:1.8rem;
        margin-bottom:1rem;
        padding:1rem;
    }

`
export default Slide6;
