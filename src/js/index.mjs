import * as listeners from "./api/handlers/index.mjs";
import * as templates from "./api/templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

let path = location.pathname;

// Normalize path by removing 'index.html' if present
if (path.endsWith("index.html")) {
  path = path.substring(0, path.length - "index.html".length);
}

if (path === "/profile/login/") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegisterFormListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostFormListener();
} else if (path === "/post/edit/") {
  listeners.setUpdatePostListener(); // Corrected function name
}

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#post");
  templates.renderPostTemplates(posts, container);
}

testTemplate();
