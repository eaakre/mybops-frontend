import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const accessTokenParam = new URLSearchParams(window.location.search).get(
  "access_token"
);
const refreshTokenParam = new URLSearchParams(window.location.search).get(
  "refresh_token"
);

function PostSigninHandler({ handleAccessToken, handleRefreshToken }) {
  const getAccessToken = () => {
    localStorage.setItem("access_token", accessTokenParam);
    localStorage.setItem("refresh_token", refreshTokenParam);
    handleAccessToken(accessTokenParam);
  };
  if (accessTokenParam) {
    getAccessToken();
  }

  return <Redirect to={"/"} />;
}

export default PostSigninHandler;
