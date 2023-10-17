let productsDiv = document.querySelector("#productsDiv");
let products = [
  {
    id: 1,
    title: "Iphone 14",
    price: "$1200",
    category: "Phones",
    imageUrl: "images/img1.jpg",
  },
  {
    id: 2,
    title: "Tshirt",
    price: "$200",
    category: "Clothes",
    imageUrl: "images/img2.jpg",
  },
  {
    id: 3,
    title: "Juice",
    price: "$10",
    category: "Drinks",
    imageUrl: "images/img7.jpg",
  },
  {
    id: 4,
    title: "Jacket",
    price: "$300",
    category: "Clothes",
    imageUrl: "images/img3.jpg",
  },
  {
    id: 5,
    title: "Pizza",
    price: "$60",
    category: "Food",
    imageUrl: "images/img5.jpg",
  },
  {
    id: 6,
    title: "Samsung ultra",
    price: "$1000",
    category: "Phones",
    imageUrl: "images/img4.jpg",
  },

  {
    id: 7,
    title: "Hamburger",
    price: "$30",
    category: "Food",
    imageUrl: "images/img6.jpg",
  },

  {
    id: 8,
    title: "Coca-cola",
    price: "$15",
    category: "Drinks",
    imageUrl: "images/img8.jpg",
  },
  {
    id: 9,
    title: "Oppo Reno",
    price: "$900",
    category: "Phones",
    imageUrl: "images/img9.jpg",
  },
];
function drawItems() {
  let x = products.map((item) => {
    return `
      <div class="card col-3 m-5 cardd" style="width: 18rem;" id="product">
            <img src="${item.imageUrl}" class="card-img-top" alt="ERROR!">
            <div class="card-body parent">
                <h5 class="card-title" id="productTitle">Name: ${item.title}</h5>
                <h5 class="card-title">Price: ${item.price}</h5>
                <h5 class="card-title" id="productCategory">Category: ${item.category}</h5>
                <a class="btn btn-primary" id="addToCart" onClick="addToCart(${item.id})">Add to Cart</a>
                <a class="btn btn-danger"  id="removeFromCart" >Remove</a>
                <i class="fas fa-heart heart" id="heart" onClick=" addToFav(${item.id})"></i>
            </div>
      </div>
            `;
  });
  productsDiv.innerHTML = x;
}
drawItems();
///////////////////////////////////////////////////////////////////////////////////////////////
//Showing username,cart and logout
let userInfo = document.querySelector("#userInfo");
let userName = document.querySelector("#userName");
let logs = document.querySelector("#logs");

if (localStorage.getItem("email")) {
  logs.remove();
  userInfo.style.display = "block";
  userName.innerHTML = ": " + localStorage.getItem("firstName");
}
///////////////////////////////////////////////////////////////////////////////////////////////
//Logout
let logOutBtn = document.querySelector("#logout");

logOutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 700);
});
///////////////////////////////////////////////////////////////////////////////////////////////
//Adding to cart
let addToCartBtn = document.querySelectorAll("#addToCart");
let removeFromCartBtn = document.querySelectorAll("#removeFromCart");

addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (!localStorage.getItem("email")) {
      alert("You need to log in first");
      setTimeout(() => {
        window.location = "login.html";
      }, 100);
    } else {
      
      // removeFromCartBtn.forEach((btn2) => {
      //   btn2.style.display = "block";
      // });
      // btn.style.display = "none";
    }
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////
let productsInCart = document.querySelector(".products-in-cart");
let badge = document.querySelector(".badge");
let addedItem = [];

function addToCart(id) {
  let chosenItem = products.find((item) => item.id === id);
  productsInCart.innerHTML += `<h6>${chosenItem.title} - ${chosenItem.price}</h6>`;
  addedItem = [...addedItem, chosenItem];
  localStorage.setItem("productsInCart", JSON.stringify(addedItem));
  let cartProductLength = document.querySelectorAll(".products-in-cart h6");
  badge.innerHTML = cartProductLength.length;
}
///////////////////////////////////////////////////////////////////////////////////////////////
//Adding to favorite
let addToFavBtn = document.querySelectorAll("#heart");

addToFavBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (!localStorage.getItem("email")) {
      alert("You need to log in first");
      setTimeout(() => {
        window.location = "login.html";
      }, 100);
    } else {
      if (btn.style.color == "gray") {
        btn.style.color = "red";
      } else if ((btn.style.color = "red")) {
        btn.style.color = "gray";
      }
    }
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////
function addToFav(id) {
  let chosenItem = products.find((item) => item.id === id);
  addedItem = [...addedItem, chosenItem];
  localStorage.setItem("productsInFav", JSON.stringify(addedItem));
}
///////////////////////////////////////////////////////////////////////////////////////////////
//Open cart
let openCart = document.querySelector("#openCart");
let cartProducts = document.querySelector("#cartProducts");

openCart.addEventListener("click", function () {
  if (cartProducts.style.display == "block") {
    cartProducts.style.display = "none";
  } else {
    cartProducts.style.display = "block";
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////
//Get search type
let searchMode = "title";
let product = document.querySelectorAll("#product");

function getSearchMode(id) {
  let searchBar = document.querySelector("#searchBar");

  if (id === "title") {
    searchMode = "title";
    searchBar.placeholder = "search by name (caseSensitive)";
  } else {
    searchMode = "category";
    searchBar.placeholder = "search by category (caseSensitive)";
  }
  console.log(searchMode);
  searchBar.focus();
}
///////////////////////////////////////////////////////////////////////////////////////////////
//Search
function searchData(value) {
  if (searchMode == "title") {
    for (let i = 0; i < products.length; i++) {
      if (products[i].title.includes(value)) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  } else {
    for (let i = 0; i < products.length; i++) {
      if (products[i].category.includes(value)) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
