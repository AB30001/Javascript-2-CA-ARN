import { load } from "../js/api/storage/index.mjs"

export function headers() {
    const token = load("token");

    if (!token) {
        console.error('Token not found');
        throw new Error('Authorization token is missing');
    } else {
        console.log('Token:', token);
    }

    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
}

export async function authFetch(url, options = {}) {
    console.log('Fetching URL:', url);
    console.log('Options:', options);

    const response = await fetch(url, {
        ...options,
        headers: {
            ...headers(),
            ...options.headers // In case options already include headers
        }
    });

    if (!response.ok) {
        console.error('Fetch error:', response.status, response.statusText);
        const errorText = await response.text();
        console.error('Error details:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
}

  

