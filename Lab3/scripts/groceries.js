	
// Array of products, each product is an object with different fieldset 

//
var products = [
	{
		name: "Brocoli",
		nutFree: true,
		organic: true,
		lactoseFree: true,
		image: "../Lab3/images/brocoli.jpg",
		price: 1.99
	},
	{
		name: "Bread",
		nutFree: true,
		organic: false,
		lactoseFree: true,
		image: "../Lab3/images/bread.jpg",
		price: 2.35
	},
	{
		name: "Salmon",
		nutFree: true,
		organic: true,
		lactoseFree: true,
		image: "../Lab3/images/salmon.jpg",
		price: 10.00
	},
	{
		name: "Potato Chips",
		nutFree: true,
		organic: false,
		lactoseFree: true,
		image: "../Lab3/images/potatochips.jpg",
		price: 1.75
	},
	{
		name: "Spinach",
		nutFree: true,
		organic: true,
		lactoseFree: true,
		image: "../Lab3/images/spinach.jpg",
		price: 4.00
	},{
		name: "Eggs",
		nutFree: true,
		organic: true,
		lactoseFree: true,
		image: "../Lab3/images/eggs.jpg",
		price: 2.00
	},
	{
		name: "Milk",
		nutFree: true,
		organic: false,
		lactoseFree: false,
		image: "../Lab3/images/milk.jpg",
		price: 2.05
	},
	{
		name: "Almond milk",
		nutFree: false,
		organic: true,
		lactoseFree: true,
		image: "../Lab3/images/almondmilk.jpg",
		price: 1.75
	},
	{
		name: "Steak",
		nutFree: true,
		organic: true,
		lactoseFree: true,
		image: "../Lab3/images/steak.jpg",
		price: 12.00
	},
	{
		name: "Soda",
		nutFree: true,
		organic: false,
		lactoseFree: true,
		image: "../Lab3/images/soda.jpg",
		price: 1.25
	},
	{
		name: "Apples",
		nutFree: true,
		organic: true,
		lactoseFree: true,
		image: "../Lab3/images/apples.jpg",
		price: 1.05
	},
	{
		name: "Trail-Mix",
		nutFree: false,
		organic: false,
		lactoseFree: true,
		image: "../Lab3/images/trailmix.jpg",
		price: 3.05
	}
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
/*
function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Gluten-Free") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Nut-Free") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Lactose-Free") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}*/

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function check(prods) {
	
	var vegCheck=document.getElementById("Vegetarian");
	var glutenCheck=document.getElementById("Gluten-Free");
	var lactoseCheck=document.getElementById("Lactose-Free");
	var nutCheck=document.getElementById("Nut-Free");
	var organicCheck=document.getElementById("Organic");
	
	let product_names = [];
	
	
	for (let i=0; i<prods.length; i+=1) {
		
		if (!(((lactoseCheck.checked) && (prods[i].lactoseFree == false)) || ((nutCheck.checked) && (prods[i].nutFree==false)) || ((organicCheck.checked) && (prods[i].organic ==false)) )){
			product_names.push(prods[i]);
		}		
	}
	
	product_names.sort((a, b) => (a.price > b.price));
	return product_names;
}