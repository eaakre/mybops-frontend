import React from "react";
import { loginURL } from "../../utils/spotify";
import "./LoginButton.css";

export default function Login() {
  return (
    <>
      <a className="loginButton" href={loginURL}>
        Login With Spotify
      </a>
    </>
  );
}
