function divisibleByLeft(n) {
	//Implementación
	return n.toString().split('').map((digit, idx, arr) => {
		if (idx === 0) return false;

		return parseInt(digit) % parseInt(arr[idx - 1]) === 0;
	});
}

module.exports = divisibleByLeft;
