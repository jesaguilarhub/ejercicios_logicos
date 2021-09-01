function twoSums(numbs, target) {
	//Implementación
	const rests = {};
	for (let i = 0; i < numbs.length; i++) {
		if (numbs[i] in rests) {
			return [
				rests[numbs[i]],
				i
			];
		}
		rests[Math.abs(target - numbs[i])] = i;
	}
}

module.exports = twoSums;
