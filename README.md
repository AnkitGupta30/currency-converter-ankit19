#  Currency-converter-ankit19

A minimal currency converter library for **NodeJS** that works out of the box.

**Javascript Support**

# Getting Started

### Installation

	npm install currency-converter-ankit19

## Usage
	import {currencyConverter} from  "currency-converter-ankit19"

	currencyConverter("From", "To", units).then((res)=>{
	console.log(res);
	})

## example: 
	import {currencyConverter} from  "currency-converter-ankit19"

	currencyConverter("INR", "EUR", 600).then((res)=>{

	console.log(res);

	})

## Disclaimer

This package uses convert currency.

## License

Apache License 2.0

## Keywords
npm node.js
