import { getPost, updatePost } from "../posts/index.mjs";

export async function setUpdatePostListener() {
    const form = document.querySelector("#editPost");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        // Disable the submit button while loading the post data
        const button = form.querySelector("button");
        button.disabled = true;

        const post = await getPost(id);

        form.title.value = post.title;
        form.body.value = post.body;
        form.tags.value = post.tags;
        form.media.value = post.media;

        // Enable the submit button after loading the post data
        button.disabled = false;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const updatedPost = Object.fromEntries(formData.entries());
            updatedPost.id = id;

            // Send it to the API
            updatePost(updatedPost);
        });
    }
}
