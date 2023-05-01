const warning = 'Free shipping only applies to single customer orders';
const banned_warning = 'Unfortunately we do not ship to your country of residence';
const none_selected = '0';
const customers = '1';
const customer_location = ['RSA', 'NAM', 'NK'];

let currency = ['R', '$'];
let shipping = "0";

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150;
const batteries = 35 * 2;
const pens = 5;

if (customer_location == 'RSA') { 
    shipping = 400;
    currency = 'R';
    }
    
if (customer_location == 'NAM') { 
    shipping = 600; 
    currency = '$';
} else {
    shipping = 800;
}

if (customer_location == 'Nk') {
    console.log(banned_warning);
}

if (shoes + batteries + pens + shirts >= 'R1000' || '$60')
	if ([customer_location == 'RSA', 'NAM'] && customers <2) {
	shipping = 0;
}
		    
if (shipping == 0 && customers == 2) {
    console.log(warning);
}

console.log('Price: ', currency = 'R', shoes + batteries + pens + shirts + toys)