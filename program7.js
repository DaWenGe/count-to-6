module.exports = function average (...args) {
	return args.map(x => x/args.length)
				.reduce( (adder, value) => adder + value );
};