function plantTrees(w, l, g) {
	//Implementación
	const CENTER = (w - 2) * 2;
	let end = w * l - CENTER;
	if (g === 0) return end;

	let count = 1;
	let start = 2;
	let blank = 1;
	g++;
	while (start <= end) {
		if (blank % g === 0) {
			count++;
			blank = 1;
		}
		else {
			blank++;
		}
		start++;
	}
	if (blank > 2) return 0;
	return count;
	/* 

        o o o o
        o     o
        o     o
        o o o o
        
        o - o -
        -     o
        o     -
        - o - o

        o - o
        -   -
        o - o
    */
}

module.exports = plantTrees;
