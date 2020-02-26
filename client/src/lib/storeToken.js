import jwt_decode from "jwt-decode";
import isEmpty from "./isEmpty"

function storeTokenToStore($store, token) {
  const decode = jwt_decode(token);
  $store.dispatch("setIsAuthenticated", !isEmpty(decode));
  $store.dispatch("setUser", decode);
}

function storeTokenToLocalStorageAndStore($store, localStorage, token) {
  localStorage.setItem("eleToken", token);
  storeTokenToStore($store, token);
}

export {storeTokenToLocalStorageAndStore, storeTokenToStore}