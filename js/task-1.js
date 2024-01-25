const categoryList = document.querySelector('#categories');
const categoryItems = categoryList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(categoryItem => {
    const categoryTitle = categoryItem.querySelector('h2').textContent;
    const categoryElements = categoryItem.querySelectorAll('ul li');
    console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});