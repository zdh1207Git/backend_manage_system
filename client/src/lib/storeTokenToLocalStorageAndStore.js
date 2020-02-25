import storeTokenToStore from "./storeTokenToStore";

export default ($store, localStorage, token) => {
   localStorage.setItem("eleToken", token);
   storeTokenToStore($store, token);
}