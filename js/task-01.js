const ulEl = document.querySelector("#categories");
const ulElChilds = ulEl.querySelectorAll(".item");

console.log("Number of categories:", ulElChilds.length);

ulElChilds.forEach((item) => {
  console.log("Category:", item.firstElementChild.innerText);
  console.log("Elements:", item.lastElementChild.children.length);
});

// console.dir(ulElChilds);
