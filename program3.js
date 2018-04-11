var inputs = process.argv.slice(2);
var result = inputs.map(elem => elem[0])
					.reduce((preValue, elem) => preValue + elem);
console.log(`[${inputs}] becomes "${result}"`);