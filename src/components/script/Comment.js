import React from "react"
import styled from 'styled-components';
import { AiFillStar } from "react-icons/ai";

function Comment({name, comment, photo}){
  return (
    <Container>
        <img src={photo} alt=""/>
        <div>
            <div className="star"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
            <p>{comment}</p>
            <h3>{name}</h3>
        </div>
      
    </Container>
  )
};
  const Container = styled.div`
    {
        width:80%;
        display:flex;
        align-items:center;
        margin:10rem;
        border-radius:3rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    img{
        width:15rem;
        height:15rem;
        border-radius:30rem;
        padding:3rem;
        object-fit:contain;
    }
    p{
        font-size:1.8rem;
        padding:1rem 3rem;
        font-family: 'Open Sans',sans-serif; 

    }
    h3{
        font-size:1.8rem;
        padding:0.2rem 3rem;
        font-family: 'Inter',sans-serif; 
    }
    .star{
        font-size:2.5rem;
        color:rgb(245, 164, 2);
        padding:1rem 3rem 0rem 3rem;
    }
`

export default Comment;
