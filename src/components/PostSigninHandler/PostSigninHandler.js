import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const accessTokenParam = new URLSearchParams(window.location.search).get(
  "access_token"
);

function PostSigninHandler({ handleAccessToken }) {
  const getAccessToken = () => {
    localStorage.setItem("access_token", accessTokenParam);
    handleAccessToken(accessTokenParam);
  };

  getAccessToken();

  return <Redirect to={"/"} />;
}

export default PostSigninHandler;
