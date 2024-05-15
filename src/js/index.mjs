//import * as constants from "./api/constants.mjs";

//console.log(constants.API_SOCIAL_URL);


import { setRegisterFormListener } from "./api/handlers/register.mjs";
import { setLoginFormListener } from "./api/handlers/login.mjs";

setRegisterFormListener ()
setLoginFormListener ()

const path = location.pathname;

if (path ==='/profile/login/') {
    setLoginFormListener ()
} else if (path ==='/profile/register/') {
    setRegisterFormListener ()
}