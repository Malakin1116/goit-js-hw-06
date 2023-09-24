const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const linkElement = document.createElement("link");
// linkElement.href = "./css/task-03.css";
// linkElement.rel = "stylesheet";
// document.head.appendChild(linkElement);

function markup(arr) {
  const ul = document.querySelector(".gallery");
  

  const images = arr.map((item) => `<li class="gallery-item">
       <img class="gallery-image" 
       src="${item.url}" 
       alt="${item.alt}">
      </li>`)
    .join(""); 
  
  ul.insertAdjacentHTML("beforeend", images);
  
}

markup(images);