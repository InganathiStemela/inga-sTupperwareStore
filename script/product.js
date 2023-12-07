let products = []

let item1 = {
    id: 1,
    name: 'Bulk Keeper',
    description: 'Convenient and smart solution for storing bulk quantities in the kitchen. Ideal to store cool drink cans, children\'s toys, hobby items, blankets or cleaning supplies. The airtight seal keeps food fresh for longer. Perfect to use as a gift basket or to make up hampers',
    price: 469,
    image: 'https://i.postimg.cc/dVQDzrrR/bulk-keeper-10-L.webp'
}

function Constructor(id, name, description, price, image) {
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.image = image
}

let item2 = new Constructor(2, 'Mickey Gift Set', '', 199, 'https://i.postimg.cc/5Ny0xvsf/mickey-gift-set.webp');
let item3 = new Constructor(3, 'Mickey Sig Line', '', 139, 'https://i.postimg.cc/ncKx7G04/mickey-sig-line.webp');
let item4 = new Constructor(4, 'Ombre Set', '', 209, 'https://i.postimg.cc/bJYScvrM/ombre-set.webp');
let item5 = new Constructor(5, 'Festive Set', '', 209, 'https://i.postimg.cc/7LyRwFg0/festive-set.webp');
let item6 = new Constructor(6, 'Eco Bottle Set', '', 159, 'https://i.postimg.cc/qRT1H2HL/eco-bottle-set.webp');
let item7 = new Constructor(7, 'Patty Press', '', 399, 'https://i.postimg.cc/x1x1JP1s/patty-press.webp');
let item8 = new Constructor(8, 'Small Square away', '', 188, 'https://i.postimg.cc/tgpNJp7d/small-square-away.webp');
let item9 = new Constructor(9, 'Gamer Set', '', 209, 'https://i.postimg.cc/g20VRNmQ/gamer-set.webp');
let item10 = new Constructor(10, 'Disney Baby Gift Set', '', 399, 'https://i.postimg.cc/sfKh35R2/disney-baby-gift-set.webp');
let item11 = new Constructor(11, 'Blossom Server', '', 179, 'https://i.postimg.cc/Fsys94SV/blossom-server.webp');
let item12 = new Constructor(12, 'Inspiration Bowls', '', 228, 'https://i.postimg.cc/NfFFkV26/inspirations-bowls-400ml.jpg');
let item13 = new Constructor(13, 'Fast Quench Bottle', '', 199, 'https://i.postimg.cc/rpFS1gT7/fast-quench-bottle.jpg');
let item14 = new Constructor(14, 'Snack Cups', '', 109, 'https://i.postimg.cc/s2qzrjVm/snack-cups.jpg');
let item15 = new Constructor(15, 'Multi Server', '', 259, 'https://i.postimg.cc/GpGxh9cm/multi-server.webp');
let item16 = new Constructor(16, 'Click to Go', '', 219, 'https://i.postimg.cc/pLdNgbJT/click-to-go.jpg');
let item17 = new Constructor(17, 'Beverage Dispenser', '', 599, 'https://i.postimg.cc/3J4JzG8V/beverage-dispenser.jpg');
let item18 = new Constructor(18, 'Freezer Square', '', 229, 'https://i.postimg.cc/W4WfghB6/freezer-square.jpg')

products.push(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18),

localStorage.setItem('products', JSON.stringify(products)),

products = localStorage.getItem('products'),

products = JSON.parse(localStorage.getItem('products'))

function displayProducts(){
    let cardContainer = document.querySelector('.card')
    cardContainer.innerHTML = "card",
    products.forEach((product, index)=> {
        console.log(product);
        let card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
        <div class="card">
        <div class="card-body">
        <img src='${product.image}' class="card-img-top" alt="...">
        <h5 class="card-title">"${product.name}</h5>
        <p>R${product.price}</p>
        </div>
        </dv>
        `;
        cardContainer.appendChild(card);
    });
}
displayProducts();

let sortButton = document.querySelector('button');
let itemList = document.querySelector('products');

function sortItems() {
  let productsT = Array.from(itemList.getElementsByTagName());
  let sortedTasks = productsT.sort((a, b) => a.innerText.localeCompare(b.innerText));
  
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  sortedTasks.forEach(productst => {
    itemList.appendChild(productsT);
  });
}
function addTask() {
    let del =  document.createElement('button');
  let taskInput = document.getElementById('taskInput');
  let taskText = `${taskInput.value.trim()}`

  if (taskText !== '') {
    let newTask = document.createElement();
    newTask.textContent = taskText;
    itemList.appendChild(newTask);
    taskInput.value = '';
  } else {
    alert('Please enter a task!');
  }
}
