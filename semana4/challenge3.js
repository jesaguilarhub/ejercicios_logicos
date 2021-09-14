function isSpecialArray(specialArr) {
	for (let i = 0; i < specialArr.length; i++) {
		if (i % 2 === 0 && specialArr[i] % 2 === 0) continue;
		if (i % 2 !== 0 && specialArr[i] % 2 !== 0) continue;
		return false;
	}
	return true;
}

module.exports = isSpecialArray;
