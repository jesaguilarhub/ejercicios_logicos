function plantTrees(w, l, g) {
	//Implementación
	const CENTER = Math.pow(w - 2, 2);
	let END = w * l - CENTER;
	if (g === 0) return END;

	const land = [];
	let start = 0;
	let count = 0;
	let field = 1;
	let border = [];
	let last = '';
	g++;

	while (++start <= END) {
		if (field % g === 0) {
			field = 1;
			border.push('-');
			last = '-';
		}
		else {
			count++;
			field++;
			border.push('o');
			last = 'o';
		}
		if (start === END) border.push('o');
		if (border.length === w) {
			land.push(border);
			border = [];
			border.push(last);
		}
	}
	const isAsymmetric = land[1].toString() !== land[3].toString() || land[0].toString() !== land[2].toString();
	if (isAsymmetric) return 0;
	return count;
}

module.exports = plantTrees;
