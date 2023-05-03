const warning = 'Free shipping only applies to single customer orders';
const banned_warning = 'Unfortunately we do not ship to your country of residence';
const none_selected = '0';
const customers = '1';
const customer_location = ['RSA', 'NAM', 'NK'];

let currency = ['R', '$'];
let shipping = "0";

shoes = 300 * 1;
toys = 100 * 5;
shirts = 150;
batteries = 35 * 2;
pens = 5;

if (customer_location == 'RSA') { 
    shipping = 400;
    currency = 'R';

    (customer_location == 'NAM') 
    shipping = 600; 
    currency = '$';

    (customer_location == 'Nk') 
    console.log(banned_warning);
} 

else {
    shipping = 800;
    currency = '$';
} 

if (shoes + batteries + pens + shirts >= 'R1000' || '$60') {
	customer_location == 'RSA', 'NAM' && customers <2 
	shipping = 0;
}
		    
if (shipping == 0 && customers !==1) {
    console.log(warning);
}

console.log('Price: ', currency = 'R', shoes + batteries + pens + shirts + toys)