import React from "react";
import "./Footer-styles.css";

function Footer()
{
    return (
        <div id="footer" style={{textAlign: "center"}}>
        <h1 style={{textAlign: "center",margin:"5px 0px", fontSize: "20px"}}>Follow Me</h1>
        <a href="https://github.com/Harshul02" class="fa fa-github"></a>
        <a href="https://linkedin.com/in/harshul-jain-855027215" class="fa fa-linkedin"></a>
        <a href="https://twitter.com/Harshuljain02" class="fa fa-twitter"></a>
        <p>Made with  ❤  by Harshul Jain</p>
    </div>
    );
}

export default Footer;