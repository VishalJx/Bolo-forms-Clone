import React from "react"
import styled from 'styled-components';


function Slide4(){
  return (
    <Container>
        <h1>Features</h1>
        <p className="feature-p">Everything that your organisation will love, & more.</p>
        <div className="feature">
            <div id="feature">
                <img src="https://www.boloforms.com/_next/static/media/pr_agiledeploy.b988c9c8.svg" alt="" />
                <h2>Get started in less than 5 minutes.</h2>
                <p>Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made.</p>
            </div>
            <div id="feature">
                <img src="https://www.boloforms.com/_next/static/media/pr_dyncaseroute.02285ff2.svg" alt="" />
                <h2>Multi-level workflows</h2>
                <p>To ensure that your executives do not approve a document until it has been reviewed and accepted by other employees, you can set up multi-level approval processes.</p>
            </div>
            <div id="feature">
                <img src="https://www.boloforms.com/_next/static/media/pr_dynbusrules.572419de.svg" alt="" />
                <h2>Dynamic Reciepients</h2>
                <p>Approvers can be selected based on the answers to a form response or entered manually by the requestor.</p>
            </div>
            <div id="feature">
                <img src="https://www.boloforms.com/_next/static/media/pr_socialtask.06e17c13.svg" alt="" />
                <h2>Role Based Workflows</h2>
                <p>Assign the following roles to your recipients: Approver, Receive a Copy, and Send Final Email Only.</p>
            </div>
            <div id="feature">
                <img src="https://www.boloforms.com/_next/static/media/pr_visualprcdesign.0ff90171.svg" alt="" />
                <h2>Conditional Logic</h2>
                <p>To prevent unnecessary work for approvers, set logic with your approvals to ensure approvers only receive the requests that are relevant to them.</p>
            </div>
            <div id="feature">
                <img src="https://www.boloforms.com/_next/static/media/pr_visualprcdesign.0ff90171.svg" alt="" />
                <h2>One-click Approvals</h2>
                <p>Notification emails are sent to users and can be approved with a single click</p>
            </div>
            <div id="feature">
                <img src="https://www.boloforms.com/_next/static/media/pr_intuserinter.41c7f4bc.svg" alt="" />
                <h2>Responsive design</h2>
                <p>It is designed to be mobile-first, and seamlessly works on desktop and tablet as well.</p>
            </div>
            <div id="feature">
                <img src="https://www.boloforms.com/_next/static/media/pr_processoptim.f6216ec3.svg" alt="" />
                <h2>Enterprise grade security</h2>
                <p>Majority of data stored in your spreadsheet. This ensures you have the complete control of your data with end to end encryption.</p>
            </div>
            <div id="feature">
                <img src="https://www.boloforms.com/_next/static/media/pr_dashboard.64597267.svg" alt="" />
                <h2>Custom Dashboard</h2>
                <p>Track approvals of various forms from a single place! See the approval process for each request in real-time</p>
            </div>
        </div>
      
    </Container>
  )
};
  const Container = styled.div`
    {
        height:100vh;
        display:flex;
        flex-direction:column;
        align-items: center;
    }
    .feature{
        display:flex;
        align-items: center;
        flex-wrap:wrap;
    }
    #feature{
        height:30rem;
        width:35rem;
        // border:1px solid grey;
        margin-left:10rem;
    }
    h1{
        font-size:3rem;
        font-family: 'Rubik',sans-serif;
        margin-bottom:0.7rem;  
    }
    h2{
        font-size:2.2rem;
        font-family: 'Open Sans',sans-serif;
        padding:1rem;
    }
    .feature-p{
        font-size: 1.7rem;
        font-family: 'Open Sans',sans-serif; 
        margin-bottom:8rem;
    }
    p{
        font-size:1.8rem;
        font-family: 'Open Sans',sans-serif;
        padding:1rem; 
    }
    img{
        width:5rem;
    }

`

export default Slide4;
