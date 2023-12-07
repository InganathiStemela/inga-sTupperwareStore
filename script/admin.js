let products = []

let item1 = {
    id: 1,
    name: 'Bulk Keeper',
    description: '',
    price: 469,
    image: 'https://i.postimg.cc/dVQDzrrR/bulk-keeper-10-L.webp'
}

function Constructor(id, name, description, price, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
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


let table = document.querySelector('table')

function displayTable(){
    let items = products.map(function(products,index){
        console.log(products);
        console.log(index);
        return`
        <tr>
        <td>${products.id}</td>
        <td>${products.name}</td>
        <td>R${products.price}</td>
        <td>${products.description}</td>
        <td><image src='${products.image}'>/td>
        <td><button class='add' value='${index}'>Add to cart</button></td>
        </tr>
        `
    })

    table.innerHTML = items.join('')
}
displayTable(products)

function toLocal(){
    localStorage.setItem('products', JSON.stringify(products)),

    products =JSON.parse(localStorage.getItem('products'))
}

table.style.backgroundColor = 'grey'
table.style.color = 'black'

let addToCartButton = document.querySelector('add')

function add(position) {
   products.splice(position,1),
   displayTable(),
   toLocal()
}

table.addEventListener('click', function(){
    if (event.target.classList.contains('add to cart')){
       add(event.target.value)
    }
})
