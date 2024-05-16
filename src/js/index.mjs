
import { setRegisterFormListener } from "./api/handlers/register.mjs";
import { setLoginFormListener } from "./api/handlers/login.mjs";
import * as post from "./api/posts/index.mjs";


const path = location.pathname;

if (path ==='/profile/login/') {
    setLoginFormListener ()
} else if (path ==='/profile/register/') {
    setRegisterFormListener ()
}


//post.createPost()
//post.updatePost()
//post.removePost()
//post.getPost()
//post.getPosts().then(console.log)
//post.getPosts().then(console.log)
post.removePost(2084)