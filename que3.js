// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a 
// JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR.
// The program should use the map higher-order function to create a new object with the converted prices
// in Rupees


const exchangeRate = 80;
const items = [
  { name: "item1", priceUSD: 10 },
  { name: "item2", priceUSD: 20 },
  { name: "item3", priceUSD: 15 },
];

const convertedItems = items.map(item => {
  const convertedPriceINR = item.priceUSD * exchangeRate;
  return { name: item.name, priceINR: convertedPriceINR };
});

console.log(convertedItems);