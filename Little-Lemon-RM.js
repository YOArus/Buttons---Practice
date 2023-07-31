/*In this exercise, you will work with some data provided as an array of objects, 
listing information about dishes available in the Little Lemon restaurant.

You will need to write a function declaration which will be able to do two things:

If the function is called with the argument true, it will output the names of the dishes and calculate 
their final price (including 20% tax)

If the function is called with the argument false, it will output the names of the dishes and give their prices 
without the additional tax*/

const pricesDishes= [
   {
  	"dish": "Italian pasta",
  	"price": 9.55,
	},
	{
  	"dish": "Rice with veggies",
  	"price": 8.65,
	},
	{
  	"dish": "Chicken with potatoes",
  	"price": 15.55,
	},
	{
  	"dish": "Vegetarian Pizza",
  	"price": 6.45,
	},
]

function TotalPrices(booleanTax) {
    for (let i = 0; i < pricesDishes.length; i++){
      	let dish = pricesDishes[i].dish; 
      	let price = pricesDishes[i].price;
        let totalPrice =  price + (price * 0.20);  
        if(booleanTax === true) {
            console.log(dish +": " +  totalPrice);
        } else if( booleanTax === false) {
          	console.log(dish +": " +  price);
        }
    }
}

TotalPrices(true);
TotalPrices(false);
