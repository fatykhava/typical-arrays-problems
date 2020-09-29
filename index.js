exports.min = function min(s) {
	if (arguments.length === 0 || s.length === 0) return 0;
	s.sort(function (a, b) {
		return a - b;
	});
	return s[0];
}

exports.max = function max(p) {
	if (arguments.length === 0 || p.length === 0) return 0;
	if (p.length === 0) return 0;
	p.sort(function (a, b) {
		return a - b;
	});
	return p[p.length - 1];
}

exports.avg = function avg(l) {
	if (arguments.length === 0 || l.length === 0) return 0;
	let sum = 0;
	for (let i = 0; i < l.length; i++) {
		sum += l[i];
	}
	let average = sum / l.length;
	return average;
}
