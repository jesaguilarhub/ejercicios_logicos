function isEqual(objInput1, objInput2) {
	//Implementación
	return JSON.stringify(objInput1) === JSON.stringify(objInput2);
}

module.exports = isEqual;
