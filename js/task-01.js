

const categoriesUll = document.querySelector('#categories');
const numOfCategories = categoriesUll.children.length;
const categoryItems = categoriesUll.querySelectorAll('.item');
const categoryInfo = [];

categoryItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const numElements = item.querySelectorAll('ul li').length;
    
    categoryInfo.push({
        category: categoryName,
        elements: numElements,
    });
});

console.log(`Number of categories: ${numOfCategories}`);
console.log(categoryInfo);
