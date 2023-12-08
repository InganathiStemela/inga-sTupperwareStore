let checkout = JSON.parse(localStorage.getItem("products"))  || [];
let checkoutTable = document.getElementById("checkoutTable");
let price = document.getElementById('price');

let totalPrice = 0;
checkout.forEach((products)=>{
    let {image, name, price} = products;
    let price1 = parseFloat(price.sustring(1));
totalPrice += price;

let row = document.createElement('tr')
row.innerHTML =  `  
<td>${image}</td>
<td>${name}</td>
<td>${price}</td>
`;
checkoutTable.appendChild(row);
});
price.textContent = `Total: R${totalPrice.toFixed(2)}`;
displayContent()


// function groupBy(array, keySelector){
//     return array.reduce(function (result, items){
//         let index = keySelector(items);
//         (result[index] = result[index] || []).push(items);
//         return result;
//     }, {});
// }

// let table = document.querySelector('#checkoutTable') 

// function displayCheckoutItems() {
//     checkoutTable.innerHTML = "";
//     let data = groupBy(checkout, items => items.name);

//     for(let index in data) {
//         checkoutTable.innerHTML +=`
//         <tr>
//         <td>${data[index][0].name}</td>
//         <td>R${data[index][0].price}</td>
//         <td>${data[index].length}</td>
//         <td>R${data[index][0].price * data[index].length}</td>
//         </tr>
//         `;
//     }
// }
// displayCheckoutItems()

  