import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../../authFetch.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
    if (!id) {
        throw new Error("Remove requires a postID");
    }
    
    const deletePostURL = `${API_SOCIAL_URL}/posts/${id}`;
  
    const response = await authFetch(deletePostURL, { method: 'DELETE' });
  
    return await response.json();
}












