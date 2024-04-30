import processServerResponse from "./processServerResponse";

const baseURL = "https://api.spotify.com/v1/";

function request(url, options) {
  return fetch(url, options).then(processServerResponse);
}

export const getCode = () => {
  return request("http:localhost://3001/login", {
    method: "POST",
    headers: {},
  }).then(processServerResponse);
};

export const getAccessToken = () => {
  return request("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "b02cd930766c4253aabc84697e1e61ca",
      client_secret: "b366209736bc4dbcb564f618cfb970b3",
    }),
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
