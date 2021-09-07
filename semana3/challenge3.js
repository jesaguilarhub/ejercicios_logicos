function mcm(a, b) {
	function GCF(a, b) {
		while (b - a > 0) {
			const gcf = b - a;
			b = Math.max(gcf, a);
			a = Math.min(gcf, a);
		}
		return b;
	}

	return a * b / GCF(Math.min(a, b), Math.max(a, b));
}

module.exports = mcm;
