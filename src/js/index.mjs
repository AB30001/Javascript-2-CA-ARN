
import { setRegisterFormListener } from "./api/handlers/register.mjs";
import { setLoginFormListener } from "./api/handlers/login.mjs";
import { createPost} from "./api/posts/create.mjs";


const path = location.pathname;

if (path ==='/profile/login/') {
    setLoginFormListener ()
} else if (path ==='/profile/register/') {
    setRegisterFormListener ()
}


createPost ({
    title: "Example Post",
    body: "Also an example"
})