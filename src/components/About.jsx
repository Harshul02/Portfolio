import React from "react";
import "./About-styles.css";

function Header()
{
    return (
        <div id="about">
        <div class="about-information">
            <h1 style={{fontSize:"40px"}}>Hey _______</h1>
            <h2 style={{fontSize:"60px"}}>I AM HARSHUL</h2>
            <h3 style={{fontSize:"30px"}}>Web Developer</h3>
        </div>
        <img src={require("../images/profile8.jpg")} className="img1" alt="profile-image1"/>
        <img src={require("../images/profile6.jpg")} className="img2"alt="profile-image2"/>
        <div class="about-information2">
            <h1>LET ME </h1>
            <h1>INTRODUCE</h1>
            <h1>MYSELF</h1>
            <br/>
            <div style={{width:"400px"}}>
                <p style={{wordSpacing: "3px"}}>I'm Harshul Jain. I'm pursuing B.Tech from
                    Graphic Era (Deemed To be
                    University), Dehradun.</p>
                <br/>
                <p style={{wordSpacing: "3px"}}>I'm a  Developer.I have knowledge of Data Structures and Algorithms. I work on technologies including React.js, Express.js, Node.js, MongoDB etc.</p>
                <br/>
                <button class="button"><a href="https://drive.google.com/file/d/1KWKQzHpJDM0pY9apkJMEg9G5NGjSo9E1/view?usp=sharing" download={"Harshul Resume"}>Get Resume</a></button>
            </div>

        </div>
    </div>
    );
}

export default Header;