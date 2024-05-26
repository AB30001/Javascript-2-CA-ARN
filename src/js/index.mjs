

import { setRegisterFormListener } from "./api/handlers/register.mjs";
import { setLoginFormListener } from "./api/handlers/login.mjs";


import * as templates from "./api/templates/post.mjs";
import * as postMethods from "./api/posts/index.mjs"
//import { renderPostTemplates } from "./api/templates/post.mjs";



const path = location.pathname;

if (path === '/profile/login/') {
    listeners.setLoginFormListener();
} else if (path === '/profile/register/') {
    listeners.setRegisterFormListener();
} else if (path === '/post/create/') {
    listeners.setCreatePostFormListener();
} else if (path === '/post/edit/') {
    listeners.setUpdatePostListener();
}


async function testTemplate() {
    try {
        const posts = await postMethods.getPosts();
        const container = document.querySelector("#post");
        if (container) {
            templates.renderPostTemplates(posts, container);
        } else {
            console.error("Container with ID 'post' not found");
        }
    } catch (error) {
        console.error("Error fetching or rendering posts:", error);
    }
}

testTemplate();


//async function testTemplate() {
   // const posts = await postMethods.getPosts();
  //  const container = document.querySelector("#post");
  // templates.renderPostTemplates(posts, container);
//}

//testTemplate()
