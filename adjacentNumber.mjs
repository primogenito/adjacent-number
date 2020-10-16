/**
 * List name(s) whose weight property is closest to or equal to the target number. 
 * 
 * Node.js requires .mjs file extensions for import statement. In browser Javascript
 * revert to the standards defined .js file extention. Node.js still working on standards compliant version.
 * 
 * https://nodejs.org/api/esm.html
 */

import { listNames, sortNameAlpha } from './adjacentUtilities.mjs';

const TARGET_NUMBER = 55;

let names = [
    { name: "Leo", weight: 54 },
    { name: "Lambert", weight: 30 },
    { name: "Cersei", weight: 69 },
    { name: "Tywin", weight: 56 },
    { name: "Tyrion", weight: 54 },
    { name: "Felix", weight: 50 },
    { name: "Mufasa", weight: 100 },
    { name: "Ferdinand", weight: 56 },
    { name: "Simba", weight: 80 },
    { name: "Voltron", weight: 90 }
];

let numDiff = names.map(name => {
    if (name.weight >= TARGET_NUMBER) {
        return name.weight - TARGET_NUMBER;
    }
    else if (name.weight < TARGET_NUMBER) {
        return TARGET_NUMBER - name.weight;
    }
})
    .reduce((a, b) => Math.min(a, b));

let targetNames = names.filter(name => {
    if (name.weight >= TARGET_NUMBER) {
        return name.weight - TARGET_NUMBER === numDiff;
    }
    else if (name.weight < TARGET_NUMBER) {
        return TARGET_NUMBER - name.weight === numDiff;
    }
})
    .sort(sortNameAlpha);

console.log(listNames(targetNames));