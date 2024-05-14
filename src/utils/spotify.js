import processServerResponse from "./processServerResponse";

const baseURL = "https://api.spotify.com/v1";

export const loginURL =
  process.env.NODE_ENV === "production"
    ? "api.mybops.apps.dj/login"
    : "http://localhost:3001/login";

function request(url, options) {
  return fetch(url, options).then(processServerResponse);
}

export const getCurrentUser = (access_token) => {
  return request(`${baseURL}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
  });
};

export const getTopArtists = (time) => {
  const access_token = localStorage.getItem("access_token");
  return request(`${baseURL}/me/top/artists?time_range=${time}_term`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopTracks = (time) => {
  const access_token = localStorage.getItem("access_token");
  return request(`${baseURL}/me/top/tracks?time_range=${time}_term`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
