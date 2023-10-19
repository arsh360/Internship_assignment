import React from "react";
import { Grid } from "@mui/material";
import "./login.css";
import googleimage from "../imgs/google 1.svg";
import facebookimage from "../imgs/facebook 1.svg";
import thunderbolt from "../imgs/thunderbolt 1.svg";
import woman from "../imgs/women with tab 1.svg";

const Login = () => {
  return (
    <Grid container>
        <Grid lg={6} sm={12} xm={12} order={{ xs: 2, md: 1 }} >
    
    <div className="left-container">
        <div className="login-container">
            <h2>Login</h2>
            <p>How to i get started lorem ipsum dolor at?</p>


            <input className="username"
            name="username"
            type="text"
            placeholder="Username"
            />
            <input className="password"
            name="userpasswrd"
            type="password"
            placeholder="Password"
            />
            <br/>

            <button className="login-btn">Login now</button><br/><br/>

            <p><strong>Login</strong> with others</p>

            <button className="google"><img src={googleimage} alt="icon"></img> Login with <strong> Google</strong></button><br/>
            <button className="facebook"><img src={facebookimage} alt="icon"></img> Login with <strong> Facebook</strong></button>
            </div>
            </div>
            </Grid>

            <Grid lg={6} sm={12} xm={12} order={{ xs: 1, md: 2 }}>

    <div className="right-container">
        <div className="right-text">
            <p>
                Very good<br/> works are<br/> waiting for<br/> you Login<br/> Now!!!
            </p>

            <div className="thunder">
                <img src={thunderbolt} alt="thunderbolt"/>
            </div>

            <div class="image"> 
                <img src={woman} alt="woman with tab"/>
            </div>
        </div>
    </div>
    </Grid>



    </Grid>
  );
};
export default Login;