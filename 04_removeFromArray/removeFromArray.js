const removeFromArray = function(array, ...elementsToRemove) {
	for (let i = 0; i < elementsToRemove.length; i++) {
		const index = array.indexOf(elementsToRemove[i]);
		if (index > -1) {
			array.splice(index, 1);
    	}
	}
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
