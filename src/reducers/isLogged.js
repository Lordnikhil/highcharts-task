/* eslint-disable default-case */
// const loggedReducer = (state = false, action)=>{
//     switch(action.type){
//         case "SIGN_IN":
//             return true

//         case "SIGN_OUT":
//             return false
            
//         default:
//             return state
//     }
// }

// export default loggedReducer;

class Auth {
    constructor() {
        this.isLoggedIn = false;
    }

    setDummyLogin(){
        sessionStorage.setItem("loggedIn","true");
        this.isLoggedIn = true;
    }

    logOut(){
        sessionStorage.removeItem("loggedIn");
        this.isLoggedIn = false;
    }
  
    returnAuthToken() {
        if(sessionStorage.getItem("loggedIn")){
            this.isLoggedIn = Boolean.valueOf(sessionStorage.getItem("loggedIn"));
        }
      return this.isLoggedIn;
    }
  }
  
  export default new Auth();