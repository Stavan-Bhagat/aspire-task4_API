const descriptionContainer = document.querySelector(".descriptionContainer");
const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get("index");
const url = "https://dummyjson.com/products";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let container = `
    <div class="col-sm-6 mt-5 text-center text-primary">
  <h2 class="p-2">${data.products[index].title}</h2>
  <img
    src="${data.products[index].thumbnail}"
    class="descriptionImg w-50 mt-5"
    alt="product description"
  />
</div>
<div class="col-sm-6 mt-1 p-5 productContainer">
  <h6>Description</h6>
  <p>${data.products[index].description}</p>
  <hr />
  <div class="d-flex">
    <div>
      <h6>Brand</h6>
      <p>${data.products[index].brand}</p>
    </div>
    <div class="px-5">
      <h6>category</h6>
      <p>${data.products[index].category}</p>
    </div>
  </div>
  <hr />
  <h6>Rating</h6>
  <p>${data.products[index].rating}</p>
  <hr />
  <h6>Price</h6>
  <p>${data.products[index].price}</p>
  <hr />
  <h6>Discount</h6>
  <p>${data.products[index].discountPercentage}</p>
  <hr />
  <h6>Stock</h6>
  <p>${data.products[index].stock}</p>
  <hr />
</div>
        `;
    descriptionContainer.innerHTML = container;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
