var customername = "Chaky";
// var price = [40,10,20,80,1000];
var quantity = 3;
// var products = [
// 	"Pizza",
// 	"Naan",
// 	"Sourdough",
// 	"Foccacia",
// 	"iphone X"
// ];
// var productsText = "";
// var productsElement = document.getElementById("product-list");

// productsText = productsText + "<li class='list-group-item'>"+product[0] + "<span class ='badge'>"
// + price[0] + "</li>";
// productsElement.innerHTML=productsText;
var totalPrice = price * quantity;
var shop = {
	customerName: "Chaky",
	totalPrice:0,
	products: [
	"Pizza",
	"Naan",
	"Sourdough",
	"Foccacia",
	"iPhone X"
	],
	price:[40,10,20,80,1000],


displayCustomerName: function(){
	var customerElement = document.getElementById("customer-name");
	customerElement.innerHTML = this.customerName;
},

displayProductList: function(){
	var productsText = "";
	var productsElement = document.getElementById("product-list");

	for(var i = 0; i<5;i++){
		productsText = productsText + "<li class='list-group-item'>"+this.products[i] + "<span class='badge badge-secondary'>$" + this.price[i]+"</li>";

	}
	productsElement.innerHTML=productsText;
},

displayPriceTotal: function(){
	var Totalprice = document.getElementById("price");
	var total = 0;
	for (var i = 0; i<5;i++){
		total = total + this.price[i]; 
	}
	Totalprice.innerHTML = "$" + total;

}

}
shop.displayCustomerName();
shop.displayProductList();
shop.displayPriceTotal();

// document.getElementById("customer-name").innerHTML = "Chaky";
// document.getElementById("price").innerHTML = "$" + totalPrice;