function keysAndValues(objInput) {
	//Implementación
	const keys = [];
	const values = [];
	for (const [
		key,
		value
	] of Object.entries(objInput).sort((a, b) => a[0].localeCompare(b[0]))) {
		keys.push(key);
		values.push(value);
	}
	return [
		keys,
		values
	];
}

module.exports = keysAndValues;
