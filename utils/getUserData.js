import React from "react";
import ReactDOM from "react-dom";
import Token from "../token";

const URL = "https://api.github.com" ;
const URLs = "https://api.github.com/users/"+`${username}`;

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

export const getUser = username => {
  return fetch(`${URL}/users/${username}?access_token=${token}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUsername failed ${err}`);
    });
};

export const photoUrls = photoUrl => {
  return fetch(`${URLs.avatar_url}?access_token=${token}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUsername failed ${err}`);
    })
};

export {checkResponse , getUser , photoUrl}
