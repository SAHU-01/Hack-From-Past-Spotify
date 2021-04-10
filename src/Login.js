import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";
import logo from "./images/hpf.png";

function Login() {
  return (
    <div className="login">
      <img
        src={logo}
        alt=""
      />
      <a href={accessUrl}>LOGIN TO HFP SPOTIFY</a>
    </div>
  );
}

export default Login;
