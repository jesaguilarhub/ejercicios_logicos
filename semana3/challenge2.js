function minMax(aNumbs) {
	//Implementación
	const ALL_ARE_NUMBERS = aNumbs.every((num) => typeof num === 'number');
	if (!ALL_ARE_NUMBERS || aNumbs.length < 2) return false;

	return aNumbs.reduce(
		(ans, current) => {
			const { min, max } = ans;
			ans.min = Math.min(min, current);
			ans.max = Math.max(max, current);
			return ans;
		},
		{ min: Infinity, max: -Infinity }
	);
}

module.exports = minMax;
