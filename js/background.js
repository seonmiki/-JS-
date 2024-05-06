const images = [
    "photo1-1.jpeg", 
    "photo1-2.jpeg", 
    "photo1-3.jpeg", 
    "photo1-4.jpeg", 
    "photo2-1.jpeg", 
    "photo2-2.jpeg", 
    "photo2-3.jpeg", 
    "photo2-4.jpeg", 
    "photo3-1.jpeg", 
    "photo3-2.jpeg", 
    "photo3-3.jpeg", 
    "photo3-4.jpeg", 
    "photo4-1.jpeg", 
    "photo4-2.jpeg", 
    "photo4-3.jpeg", 
    "photo4-4.jpeg", 
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);