function countPrimes(number) {
	//Implementación
	if (number <= 0) return 0;

	return Math.round(number / (Math.floor(Math.log(number)) + 0.5));
}

module.exports = countPrimes;
