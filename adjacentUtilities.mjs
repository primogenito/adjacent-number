export { sortDescending, sortNameAlpha, listNames };

/**
 * 
 * @param {object} a 
 * @param {string} a.name
 * @param {number} a.weight
 * @param {object} b 
 * @param {string} b.name
 * @param {number} b.weight
 * 
 * @returns {number} Number -1 thru 1
 */
const sortDescending = (a, b) => {
    if (a.weight > b.weight) {
        return -1;
    }
    else if (a.weight < b.weight) {
        return 1;
    }

    return 0;
};

/**
 * 
 * @param {string} a 
 * @param {string} b 
 * 
 * @returns {number} Number -1 thru 1
 */
const sortNameAlpha = (a, b) => {
    var a = a.name.toLowerCase();
    var b = b.name.toLowerCase();

    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }

    return 0;
};

/**
 * 
 * @param {[{name: string, weight: number}]} array 
 * 
 * @returns {string} A list of names
 */
const listNames = array => {
    let names;

    if (!array.length) {
        names = "There are no names matching your criteria.";
    }
    else if (array.length === 1) {
        names = "There is one name matching your search: \n";
    }
    else {
        names = `There are ${array.length} names matching your criteria: \n`;
    }

    array.forEach((el, index) => {
        names += `${el.name}: ${el.weight} pounds`;

        if (array.length > 1 && index !== array.length - 1) {
            names += ", \n";
        }
    });

    return names;
};