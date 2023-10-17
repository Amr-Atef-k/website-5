let productsInCart = localStorage.getItem("productsInCart");
let productsInFav = localStorage.getItem("productsInFav");
let productsDiv = document.querySelector(".productsDiv");
let favDiv = document.querySelector(".favDiv");

if (productsInCart) {
  let item = JSON.parse(productsInCart);
  drawCart(item);
}

function drawCart(products) {
  let x = products.map((item) => {
    return `
        <div class="card col-3 m-5" style="width: 18rem;" id="product">
              <img src="${item.imageUrl}" class="card-img-top" alt="ERROR!">
              <div class="card-body parent">
                  <h5 class="card-title" id="productTitle">Name: ${item.title}</h5>
                  <h5 class="card-title">Price: ${item.price}</h5>
                  <h5 class="card-title" id="productCategory">Category: ${item.category}</h5>
                  <a class="btn btn-danger">Remove From Cart</a>
              </div>
        </div>
              `;
  });
  productsDiv.innerHTML = x;
}

if (productsInFav) {
  let ele = JSON.parse(productsInFav);
  drawCart(ele);
}

function drawFav(products) {
  let x = products.map((item) => {
    return `
        <div class="card col-3 m-5" style="width: 18rem;" id="product">
              <img src="${item.imageUrl}" class="card-img-top" alt="ERROR!">
              <div class="card-body parent">
                  <h5 class="card-title" id="productTitle">Name: ${item.title}</h5>
                  <h5 class="card-title">Price: ${item.price}</h5>
                  <h5 class="card-title" id="productCategory">Category: ${item.category}</h5>
                  <a class="btn btn-danger">Remove From Favorite</a>
              </div>
        </div>
              `;
  });
  favDiv.innerHTML = x;
}
drawCart();
drawFav();
