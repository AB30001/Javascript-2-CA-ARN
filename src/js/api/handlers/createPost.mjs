import { createPost } from "../posts/index.mjs";

export function setCreatePostFormListener() {
    const form = document.querySelector("#createPost");

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());

            // Ensure "tags" is an array of strings
            if (post.tags && typeof post.tags === 'string') {
                post.tags = post.tags.split(',').map(tag => tag.trim());
            }

            console.log('Form submitted with data:', post);

            // Send it to the API
            try {
                const response = await createPost(post);
                console.log('Post created successfully:', response);
            } catch (error) {
                console.error('Error creating post:', error);
            }
        });
    }
}


