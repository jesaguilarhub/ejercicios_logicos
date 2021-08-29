const reverseString = (str) => {
	//Implementación
	if (typeof str !== 'string') throw new Error('Tipo de dato no admitido');
	if (str.length > 15 || str.length <= 1) throw new Error('Longitud no admitida');
	return str.split('').reverse().join('');
};

module.exports = {
	reverseString
};
