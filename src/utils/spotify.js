import processServerResponse from "./processServerResponse";

const baseURL = "https://api.spotify.com/v1";

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

export const getTopItems = (type, time) => {
  const access_token = localStorage.getItem("access_token");
  return request(`${baseURL}/me/top/${type}?time_range=${time}_term`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getArtist = (id) => {
  return request(`${baseURL}/artists/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: "Bearer ",
    },
  });
};
