function removeDups(arrayItems) {
	//Implementación
	return [
		...new Set(arrayItems)
	];
}

module.exports = removeDups;
