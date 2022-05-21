const image = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const myImage = image[Math.floor(Math.random() * image.length)];

const background = document.createElement("img");
background.src = `img/${myImage}`;
document.body.appendChild(background);
