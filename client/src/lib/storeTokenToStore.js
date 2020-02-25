import jwt_decode from "jwt-decode";
import isEmpty from "./isEmpty"

export default ($store, token) => {
   const decode = jwt_decode(token);
   $store.dispatch("setIsAuthenticated", !isEmpty(decode));
   $store.dispatch("setUser", decode);
}