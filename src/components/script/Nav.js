import React from "react";
import "../style/Nav.css";

function Nav(){
  return (
    <div id="navbar" className="navbar">
      <div className="nav-header">
        <img src="https://www.boloforms.com/_next/static/media/logo-text.e6f7617c.svg" alt=""></img>
        <ul>
            <li className="menu"><a href="#product" >Products</a>
            <ul>
              <li>
                <h3>Form Approvals</h3>
                <p>Create interactive workflows, approval flows & automate processes using Google Forms.</p>
              </li>
              <li>
                <h3>SheetGod</h3>
                <p>AI-powered Excel magic made easy!</p>
              </li>
              <li>
                <h3>Signature</h3>
                <p>Add Signature href your Google Forms</p>
              </li>
            </ul>
            </li>
            <li id="samaan"><a href="#price" >Pricing</a></li>
            <li className="menu"><a href="#guides" >Guides</a></li>
            <li id="samaan"><a href="#templates" >Templates</a></li>
        </ul>
      </div>
      <div className="nav-install">
        <span className="install"> Install</span>
        <span className="premium">BoloForms Premium</span>
      </div>

    </div>
  )
};

export default Nav;
