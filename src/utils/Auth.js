import { checkResponce } from "./utils";
export const BASE_URL = "https://auth.nomoreparties.co";

function request(url, options){
  return fetch(url, options).then(checkResponce);
}

export const register = (password, email) => {
  return request(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });
};

export const authorise = (password, email) => {
  return request(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });
};

export const getUserEmail = (token) => {
  return request(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
};
