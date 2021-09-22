function findLetters(str) {
	const unique = {};
	for (const char of str) {
		if (unique[char]) unique[char]++;
		else unique[char] = 1;
	}
	return str.split('').filter((char) => unique[char] === 1);
}

module.exports = findLetters;
