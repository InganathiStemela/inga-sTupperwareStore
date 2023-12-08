let products = []

let item1 = {
    id: 1,
    name: 'Bulk Keeper',
    description: '10L',
    price: 469,
    image: 'https://i.postimg.cc/httw1JtM/bulk-keeper-10-L-1.webp'
}

function Constructor(id, name, description, price, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image
}

let item2 = new Constructor(2, 'Mickey Gift Set', 'Printed 500ml Eco Bottles with Gift Box ', 199, 'https://i.postimg.cc/5Ny0xvsf/mickey-gift-set.webp');
let item3 = new Constructor(3, 'Mickey Sig Line', 'Rectangular Luncher (980ml)', 139, 'https://i.postimg.cc/hGbmr0P7/mickey-sig-line.webp');
let item4 = new Constructor(4, 'Ombre Set', 'Printed Slimline Luncher (590ml) with drinking Tumbler (330ml)', 209, 'https://i.postimg.cc/bJYScvrM/ombre-set.webp');
let item5 = new Constructor(5, 'Festive Set', 'Crystal Round (1L) with Eco Bottle (1L)', 209, 'https://i.postimg.cc/qv4FJ4Zf/festive-set.webp');
let item6 = new Constructor(6, 'Eco Bottle Set', '3X 350ml', 159, 'https://i.postimg.cc/qRT1H2HL/eco-bottle-set.webp');
let item7 = new Constructor(7, 'Patty Press', '', 399, 'https://i.postimg.cc/9XwDYqtp/patty-press.webp');
let item8 = new Constructor(8, 'Small Square away', '3X 330ml', 188, 'https://i.postimg.cc/tgpNJp7d/small-square-away.webp');
let item9 = new Constructor(9, 'Gamer Set', 'Printed Ombre Slimline Luncher (590ml) with Drinking Tumbler(330ml)', 209, 'https://i.postimg.cc/g20VRNmQ/gamer-set.webp');
let item10 = new Constructor(10, 'Disney Baby Gift Set', '4X Sippy Bell Tumblers (Baby Donald, Baby Daisy, Baby Mickey, Baby Minnie), 4 x Snack Cups (Baby Donald, Baby Daisy, Baby Mickey, Baby Minnie)', 399, 'https://i.postimg.cc/sfKh35R2/disney-baby-gift-set.webp');
let item11 = new Constructor(11, 'Blossom Server', '1,9L Meat and Veg Server', 179, 'https://i.postimg.cc/kM0jXKgR/blossom-server-1.webp');
let item12 = new Constructor(12, 'Inspiration Bowls', '4X 400ml', 228, 'https://i.postimg.cc/c4445gf2/inspirations-bowls-400ml.jpg');
let item13 = new Constructor(13, 'Fast Quench Bottle', '600ml', 199, 'https://i.postimg.cc/rpFS1gT7/fast-quench-bottle.jpg');
let item14 = new Constructor(14, 'Snack Cups', '2X 110ml', 109, 'https://i.postimg.cc/Vvh9pyZV/snack-cups.jpg');
let item15 = new Constructor(15, 'Multi Server', '3L drains, wash, stores fruits and vegetables', 259, 'https://i.postimg.cc/BQ0d7T3B/multi-server.webp');
let item16 = new Constructor(16, 'Click to Go', '2X 900ml with Handle', 219, 'https://i.postimg.cc/mD979G1B/click-to-go.jpg');
let item17 = new Constructor(17, 'Beverage Dispenser', '8,7L', 599, 'https://i.postimg.cc/76HGRVvp/beverage-dispenser-1.jpg');
let item18 = new Constructor(18, 'Freezer Square', '2,5L', 229, 'https://i.postimg.cc/HkW9Vx0g/freezer-square.jpg')

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
        <td><image hey src='${products.image}'></image></td>
        <td><button class='edit' value='${index}'>Edit</button>
        <button class='delete' value='${index}'>Delete</button></td>
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




