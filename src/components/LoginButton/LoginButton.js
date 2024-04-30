import React from "react";
import "./LoginButton.css";

// const AUTH_URL =
//   "https://accounts.spotify.com/authorize?client_id=b02cd930766c4253aabc84697e1e61ca&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <>
      <a className="loginButton" href="http://localhost:3001/login">
        Login With Spotify
      </a>
    </>
  );
}
