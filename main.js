const heading = document.querySelector("h1");

heading.textContent = "hello world!!!".toUpperCase();


const image = document.querySelector("img");
image.addEventListener("click", () => {
    console.log("1")
    const src = image.getAttribute("src");
    if (src === "./images/1.png") {
        image.src = "./images/image-w1280.webp"
        image.width = 200;
    } else {
        image.src = "./images/1.png"

    }
})

const username = localStorage.getItem("username") || "no name";

const usernameHeading = document.querySelector("h2");

usernameHeading.textContent = "Hello " + username;

const button = document.querySelector("button");

button.addEventListener("click", changeName)

function changeName() {
    const newName = prompt("enter your username");
    if (!newName) {
        changeName()
    } else {
        localStorage.setItem("username", newName)
        usernameHeading.textContent = "Hello " + newName;

    }
}
