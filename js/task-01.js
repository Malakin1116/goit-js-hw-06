

// 1)
const ulElement = document.querySelector("ul#categories");
const categoryItems = ulElement.querySelectorAll("li.item");
console.log("Number of categories:", categoryItems.length);

// 2)
categoryItems.forEach((item)=>{
    const categoryTitle = item.querySelector("h2");
    const categoryListItems = item.querySelectorAll("ul > li");

    console.log("Category:", categoryTitle.textContent);
    console.log("Elements:", categoryListItems.length);
});
