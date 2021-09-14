const reverseInt = (number) => {
	//Implementación
	if (typeof number !== 'number') throw new Error('Tipo de dato no admitido');
	if (Math.sign(number) < 0) {
		return -parseInt(number.toString().slice(1).split('').reverse().join(''));
	}
	return parseInt(number.toString().split('').reverse().join(''));
};

module.exports = {
	reverseInt
};
