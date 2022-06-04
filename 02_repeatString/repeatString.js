const repeatString = function(string, repeats) {
	let str = '';
	if (repeats < 0) {
		return 'ERROR';
	}
	for (let i = 0; i < repeats; i++) {
		str += string;
	}
	return str;
};

// Do not edit below this line
module.exports = repeatString;
