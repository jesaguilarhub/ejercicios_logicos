function arrayOfMultiples(num, length) {
	const ans = [];
	for (let i = 1; i <= length; i++) {
		ans.push(num * i);
	}
	return ans;
}

module.exports = arrayOfMultiples;
