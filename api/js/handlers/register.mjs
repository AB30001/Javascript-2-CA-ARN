import { register } from "../auth/register.mjs";

export function setRegisterFormListener () {

    const form = document.querySelector("#registerForm");



form.addEventListener("submit", (event) => {

    event.preventDefault()
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries())
    const action = form.action;
    const.method = form.method;
    
//need to send it to the API
    register(profile, action, method)
})

}