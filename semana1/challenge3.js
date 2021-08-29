const capitalizeLetters = (str) => {
	//Implementación
	if (typeof str !== 'string') throw new Error('Tipo de dato no valido');
	return str
		.split(' ')
		.map((word) => {
			return word[0].toUpperCase() + word.slice(1);
		})
		.join(' ');
};

module.exports = {
	capitalizeLetters
};
