let products = []

let item1 = {
    image: 'https://i.postimg.cc/httw1JtM/bulk-keeper-10-L-1.webp',
    name: 'Bulk Keeper',
    price: 469
}

function Constructor(image, name, price) {
    this.image = image,
    this.name = name,
    this.price = price
}

let item2 = new Constructor('https://i.postimg.cc/5Ny0xvsf/mickey-gift-set.webp', 'Mickey Gift Set', 199);
let item3 = new Constructor('https://i.postimg.cc/hGbmr0P7/mickey-sig-line.webp', 'Mickey Sig Line', 139);
let item4 = new Constructor('https://i.postimg.cc/bJYScvrM/ombre-set.webp', 'Ombre Set', 209);
let item5 = new Constructor('https://i.postimg.cc/qv4FJ4Zf/festive-set.webp', 'Festive Set', 209);
let item6 = new Constructor('https://i.postimg.cc/qRT1H2HL/eco-bottle-set.webp', 'Eco Bottle Set', 159);
let item7 = new Constructor('https://i.postimg.cc/9XwDYqtp/patty-press.webp', 'Patty Press', 399);
let item8 = new Constructor('https://i.postimg.cc/tgpNJp7d/small-square-away.webp', 'Small Square away', 188);
let item9 = new Constructor('https://i.postimg.cc/g20VRNmQ/gamer-set.webp', 'Gamer Set', 209);
let item10 = new Constructor('https://i.postimg.cc/sfKh35R2/disney-baby-gift-set.webp', 'Disney Baby Gift Set', 399);
let item11 = new Constructor('https://i.postimg.cc/kM0jXKgR/blossom-server-1.webp', 'Blossom Server', 179);
let item12 = new Constructor('https://i.postimg.cc/c4445gf2/inspirations-bowls-400ml.jpg', 'Inspiration Bowls', 228);
let item13 = new Constructor('https://i.postimg.cc/rpFS1gT7/fast-quench-bottle.jpg', 'Fast Quench Bottle', 199);
let item14 = new Constructor('https://i.postimg.cc/Vvh9pyZV/snack-cups.jpg', 'Snack Cups', 109);
let item15 = new Constructor('https://i.postimg.cc/BQ0d7T3B/multi-server.webp', 'Multi Server', 259);
let item16 = new Constructor('https://i.postimg.cc/mD979G1B/click-to-go.jpg', 'Click to Go', 219);
let item17 = new Constructor('https://i.postimg.cc/76HGRVvp/beverage-dispenser-1.jpg', 'Beverage Dispenser', 599);
let item18 = new Constructor('https://i.postimg.cc/HkW9Vx0g/freezer-square.jpg', 'Freezer Square', 229)

products.push(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18),

localStorage.setItem('products', JSON.stringify(products)),

products = localStorage.getItem('products'),

products = JSON.parse(localStorage.getItem('products'))
function displayProducts() {
  let cardContainer = document.querySelector('.cards')
  cardContainer.innerHTML = "",
  products.forEach((product, index) => {
    cardContainer.innerHTML += `
    <div class="card card-style mx-4 my-3">
    <img src='${product.image}' class="card-img-top img-fluid" alt="...">
  <div class="card-body d-flex justify-content-center my-3">
  <div>
  <h5 class="card-title fs-3">${product.name}</h5>
  <div class="d-flex justify-content-center">
  <p class="fs-3">R${product.price}</p>
  </div>
  <div class="d-flex justify-content-center"><button class='add' value='${index}'>Add to cart</button></div>
  </div>
  </div>
</div>
    `
  })
}
displayProducts();



// function displayProducts(){
//     let cardContainer = document.querySelector('.card')
//     cardContainer.innerHTML = "",
//     products.forEach((product, index)=> {
//         console.log(product);
//         // let card = document.createElement('div');
//         // card.classList.add('card')
//         cardContainer.innerHTML += `


//         <div class="card-body col-lg-4 col-md-4 col-12">
//         <img src='${product.image}' class="card-img-top" alt="...">
//         <h5 class="card-title">${product.name}</h5>
//         <p>R${product.price}</p>
//         <td><button class='add' value='${index}'>Add to cart</button>
//         </div>


//         `;
//         // cardContainer.appendChild(card);
//     });
// }


// let sortButton = document.querySelector('button');
// let itemList = document.getElementById('${products.name}');

// function sortItems() {
//   let productsT = Array.from(itemList.getElementsByTagName());
//   let sortedTasks = productsT.sort((a, b) => a.innerText.localeCompare(b.innerText));
  
//   while (itemList.firstChild) {
//     itemList.sortChild(itemList.firstChild);
//   }
//   sortedTasks.forEach(productsT => {
//     itemList.appendChild(productsT);
//   });
// }
// function searchItems() {
//     let del =  document.createElement('button');
//   let taskInput = document.getElementById('taskInput');
//   let taskText = `${taskInput.value.trim()}`

//   if (taskText !== '') {
//     let newTask = document.createElement();
//     newTask.textContent = taskText;
//     itemList.appendChild(newTask);
//     taskInput.value = '';
//   } else {
//     alert('Please enter a task!');
//   }
// }
// function displayProducts() {
//   for (let item of products) {
// let addToCartBtn = document.createElement("button");
//     addToCartBtn.classList.add("add-to-cart-btn");
//     addToCartBtn.setAttribute("data-item-id", products.id);
//     addToCartBtn.addEventListener('click', () => {
//       addToCart(products)
//     });
//     addToCartBtn.textContent = "Add To Cart";
//     card.appendChild(addToCartBtn);

//     document.getElementById("prods").appendChild(card);
//   }
// }
// displayProducts();

