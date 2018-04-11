// function getLength(str) {
// 	return str.length;
// }

// module.exports = (str, n = getLength(str)) => `${str}${"!".repeat(n)}`;

module.exports = (str, n = str.length) => `${str}${"!".repeat(n)}`;