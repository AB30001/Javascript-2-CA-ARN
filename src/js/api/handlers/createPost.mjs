/*import { createPost } from "../posts/index.mjs";

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
      form.addEventListener("submit", (event) => {
          event.preventDefault();
          const form = event.target;
          const formData = new FormData(form);
          const post = Object.fromEntries(formData.entries());

          // Send it to the API
          createPost(post);
      });
  }
}
*/

import { createPost } from "../posts/index.mjs";

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      // Ensure tags are parsed as an array of strings
      if (post.tags) {
        post.tags = post.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
      } else {
        post.tags = [];  // Ensure tags is always an array, even if empty
      }

      // Send the formatted post data to the API
      createPost(post);
    });
  }
}




