const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

const leo = {
	leoName,
	leoBalance,
	access: '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
	address: {
	leoNumber,
	leoStreet,
	leoPostal,
}
}

const sarah = {
	name: sarahName + sarahSurname,
	age: 62,
	access: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	address: {
	sarahNumber,
	sarahStreet,
	sarahPostal,
}
}

console.log(leo.address, sarah.address)