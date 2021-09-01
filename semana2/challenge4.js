function landMass(name, area) {
	//Implementación
	const LAND_MASS = 148940000;
	const COUNTRY_PERCENTAGE = parseFloat((area * 100 / LAND_MASS).toFixed(2));
	return {
		percent : COUNTRY_PERCENTAGE,
		message : `${name} representa el ${COUNTRY_PERCENTAGE}% de la masa de la tierra`
	};
}

module.exports = landMass;
