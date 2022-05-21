const loginForm = document.querySelector("#loginSite");
const loginInput = document.querySelector("#loginSite input");
const greeting = document.querySelector("#greeting");

function handelBtn(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const myName = loginInput.value;
    localStorage.setItem("myName", myName);
    paintGreeting(myName);
}

function paintGreeting(myName) {
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("myName");

if (savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", handelBtn);
} else {
    paintGreeting(savedUsername);
}
