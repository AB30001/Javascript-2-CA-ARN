import * as listeners from "./api/handlers/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as templates from "./api/templates/index.mjs";

const path = location.pathname;

if (path === '/profile/login/') {
  listeners.setLoginFormListener();
} else if (path === '/profile/register/') {
  listeners.setRegisterFormListener();
} else if (path === '/post/create/') {
  listeners.setCreatePostFormListener();
} else if (path === '/post/edit/') {
  listeners.setUpdatePostListener();
} else if (path === '/profile/edit/') {
  listeners.setUpdateProfileListener();
}







