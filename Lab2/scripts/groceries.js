	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 


var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		nutFree: true,
		organic: true,
		lactoseFree: true,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		nutFree: true,
		organic: false,
		lactoseFree: true,
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		nutFree: true,
		organic: true,
		lactoseFree: true,
		price: 10.00
	},
	{
		name: "Potato Chips",
		vegetarian: false,
		glutenFree: false,
		nutFree: true,
		organic: false,
		lactoseFree: true,
		price: 1.75
	},
	{
		name: "Spinach",
		vegetarian: true,
		glutenFree: true,
		nutFree: true,
		organic: true,
		lactoseFree: true,
		price: 4.00
	},{
		name: "Eggs",
		vegetarian: false,
		glutenFree: true,
		nutFree: true,
		organic: true,
		lactoseFree: true,
		price: 2.00
	},
	{
		name: "Milk",
		vegetarian: false,
		glutenFree: true,
		nutFree: true,
		organic: false,
		lactoseFree: false,
		price: 2.05
	},
	{
		name: "Almond milk",
		vegetarian: true,
		glutenFree: true,
		nutFree: false,
		organic: true,
		lactoseFree: true,
		price: 1.75
	},
	{
		name: "Steak",
		vegetarian: false,
		glutenFree: true,
		nutFree: true,
		organic: true,
		lactoseFree: true,
		price: 12.00
	},
	{
		name: "Soda",
		vegetarian: true,
		glutenFree: true,
		nutFree: true,
		organic: false,
		lactoseFree: true,
		price: 1.25
	},
	{
		name: "Apples",
		vegetarian: true,
		glutenFree: true,
		nutFree: true,
		organic: true,
		lactoseFree: true,
		price: 1.05
	},
	{
		name: "Trail-Mix",
		vegetarian: true,
		glutenFree: false,
		nutFree: false,
		organic: false,
		lactoseFree: true,
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
		
		
		if (vegCheck.checked && glutenCheck.checked && lactoseCheck.checked && nutCheck.checked && organicCheck.checked && (prods[i].vegetarian==true) && (prods[i].glutenFree==true) && (prods[i].lactoseFree==true) && (prods[i].nutFree==true) &&(prods[i].organic==true)){
			product_names.push(prods[i]);
			
		}
	
		else if (glutenCheck.checked && lactoseCheck.checked && nutCheck.checked && organicCheck.checked && (prods[i].glutenFree==true) && (prods[i].lactoseFree==true) && (prods[i].nutFree==true) &&(prods[i].organic==true)){
			product_names.push(prods[i]);

		}

		else if (vegCheck.checked && lactoseCheck.checked && nutCheck.checked && organicCheck.checked && (prods[i].vegetarian ==true) && (prods[i].lactoseFree==true) && (prods[i].nutFree==true) &&(prods[i].organic==true)){
			product_names.push(prods[i]);

		}

		else if (vegCheck.checked && glutenCheck.checked && lactoseCheck.checked && nutCheck.checked && (prods[i].vegetarian ==true) && (prods[i].glutenFree==true) && (prods[i].lactoseFree==true) && (prods[i].nutFree==true)){
			product_names.push(prods[i]);

		}
		
		else if(vegCheck.checked && glutenCheck.checked && nutCheck.checked && organicCheck.checked && (prods[i].vegetarian ==true) && (prods[i].glutenFree==true) && (prods[i].nutFree==true) &&(prods[i].organic==true)){
			product_names.push(prods[i]);

		}

		else if (vegCheck.checked && glutenCheck.checked && lactoseCheck.checked && organicCheck.checked && (prods[i].vegetarian ==true) && (prods[i].glutenFree==true) && (prods[i].lactoseFree==true)&&(prods[i].organic==true)){
			product_names.push(prods[i]);
	
		}

		else if (glutenCheck.checked && lactoseCheck.checked && nutCheck.checked && (prods[i].glutenFree==true) && (prods[i].lactoseFree==true) && (prods[i].nutFree==true) && (prods[i].vegetarian==false) && (prods[i].organic==false)){
			product_names.push(prods[i]);

		}

		else if (lactoseCheck.checked && nutCheck.checked && organicCheck.checked && (prods[i].lactoseFree==true) && (prods[i].nutFree==true) &&(prods[i].organic==true)){
			product_names.push(prods[i]);

		}
		
		else if (glutenCheck.checked && lactoseCheck.checked && organicCheck.checked && (prods[i].glutenFree==true) && (prods[i].lactoseFree==true) &&(prods[i].organic==true)){
			product_names.push(prods[i]);

		}
		
		else if (glutenCheck.checked && nutCheck.checked && organicCheck.checked && (prods[i].glutenFree==true) && (prods[i].nutFree==true) &&(prods[i].organic==true)){
			product_names.push(prods[i]);

		}
		
		else if (vegCheck.checked && lactoseCheck.checked && nutCheck.checked && (prods[i].vegetarian ==true) && (prods[i].lactoseFree==true) && (prods[i].nutFree==true) && (prods[i].glutenFree==false) && (prods[i].organic==false)){
			product_names.push(prods[i]);

		}
	
		else if (vegCheck.checked && lactoseCheck.checked && organicCheck.checked && (prods[i].vegetarian ==true) && (prods[i].lactoseFree==true) && (prods[i].organic==true)){

		}
		
		else if (vegCheck.checked && nutCheck.checked && organicCheck.checked && (prods[i].vegetarian ==true)&& (prods[i].nutFree==true) &&(prods[i].organic==true)){
			product_names.push(prods[i]);

		}
		
		else if (vegCheck.checked && glutenCheck.checked && nutCheck.checked && (prods[i].vegetarian ==true) && (prods[i].glutenFree==true) && (prods[i].nutFree==true)){
			product_names.push(prods[i]);

		}
		
		else if (vegCheck.checked && glutenCheck.checked && organicCheck.checked && (prods[i].vegetarian ==true) && (prods[i].glutenFree==true)&&(prods[i].organic==true)){
			product_names.push(prods[i]);

		}
		
		else if (vegCheck.checked && glutenCheck.checked && lactoseCheck.checked && (prods[i].vegetarian ==true) && (prods[i].glutenFree==true) && (prods[i].lactoseFree==true)){
			product_names.push(prods[i]);

		}
		
		else if (vegCheck.checked && glutenCheck.checked && (prods[i].vegetarian==true) && (prods[i].glutenFree==true)){
			product_names.push(prods[i]);

		}
		
		else if (vegCheck.checked && lactoseCheck.checked && (prods[i].vegetarian==true)){
			product_names.push(prods[i]);

		}
		
		else if (vegCheck.checked && nutCheck.checked && (prods[i].vegetarian==true) && (prods[i].nutFree==true)){
			product_names.push(prods[i]);

		}
		
		else if (vegCheck.checked && organicCheck.checked && (prods[i].vegetarian==true) && (prods[i].organic==true)){
			product_names.push(prods[i]);

		}
		
		else if (glutenCheck.checked && lactoseCheck.checked && (prods[i].glutenFree==true) && (prods[i].lactoseFree==true)){
			product_names.push(prods[i]);

		}
		
		else if (glutenCheck.checked && nutCheck.checked && (prods[i].glutenFree==true) && (prods[i].nutFree==true)){
			product_names.push(prods[i]);

		}
		
		else if (glutenCheck.checked && organicCheck.checked && (prods[i].glutenFree==true) && (prods[i].organic==true)){
			product_names.push(prods[i]);

		}
		
		else if (lactoseCheck.checked && nutCheck.checked && (prods[i].lactoseFree==true) && (prods[i].nutFree==true)){
			product_names.push(prods[i]);

		}
		
		else if (lactoseCheck.checked && organicCheck.checked && (prods[i].lactoseFree==true) && (prods[i].organic==true)){
			product_names.push(prods[i]);

		}
		
		else if (nutCheck.checked && organicCheck.checked && (prods[i].nutFree==true) && (prods[i].organic==true)){
			product_names.push(prods[i]);

		}
		
		else if (vegCheck.checked && (prods[i].vegetarian==true)){
			product_names.push(prods[i]);

		}
		
		else if (glutenCheck.checked && (prods[i].glutenFree==true)){
			product_names.push(prods[i]);

		}
		
		else if (lactoseCheck.checked && (prods[i].lactoseFree==true)){
			product_names.push(prods[i]);

		}
				 
		else if (nutCheck.checked && (prods[i].nutFree==true)){
			product_names.push(prods[i]);

		}
		
		else if (organicCheck.checked && (prods[i].organic==true)){
			product_names.push(prods[i]);
		}
		
		else if (vegCheck.checked==false && glutenCheck.checked==false && lactoseCheck.checked==false && nutCheck.checked==false && organicCheck.checked==false){
			product_names.push(prods[i]);
		}
			
	}
	
	product_names.sort((a, b) => (a.price > b.price) ? 1 : -1);
	return product_names;
}