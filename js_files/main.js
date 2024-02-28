const url = "https://dummyjson.com/products";
const productList = document.querySelector(".productList");
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
    var card = "";
    for (let i = 0; i < data.products.length; i++) {
      card += `

     <div class="col-sm-4 mt-5">
        <div class="card">
                <img class="card-img-top cardImg" src="${data.products[i].images[0]}"  alt="Card image cap">
             <div class="card-body">
                    <h5 class="card-title">${data.products[i].title}</h5>
                    <p class="card-text">${data.products[i].description}</p>
                    <a href="product.html?index=${i}" class="btn text-white viewBtn">view</a>
            </div>
        </div>
    </div>
        `;
      productList.innerHTML = card;
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
