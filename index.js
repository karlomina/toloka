// var myArray = [
//     { name: 'John', age: 30, city: 'New York' },
//     { name: 'Jane', age: 25, city: 'Chicago' },
//     { name: 'Mary', age: 35, city: 'Los Angeles' }
// ];

// function mapArray(array) {
//     array.forEach(item => console.log(`${item.name}, ${item.age}, ${item.city}`));
// }

var myArray = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Chicago' },
    { name: 'Mary', age: 35, city: 'Los Angeles' },
    { name: 'Joseph', age: 35, city: 'Los Angeles' },
    { name: 'Mark', age: 35, city: 'Chicago' },
    { name: 'Emma', age: 35, city: 'New York' },
    { name: 'Olivia', age: 35, city: 'New York' }
];

function mapArray(array) {
    let newArray = {};
    for (var i = 0; i < myArray.length; i++) {
        if (!newArray[myArray[i].city]) {
            newArray[myArray[i].city] = [];
            newArray[myArray[i].city].push(myArray[i])
        } else {
            newArray[myArray[i].city].push(myArray[i])
        }
    }
    return newArray;
}

function groupByCity(array) {
    const groupedByCity = new Map();

    array.forEach(item => {
        const city = item.city; // Destructure the city property from the item

        // If the city key doesn't exist in the map, initialize it with an empty array
        if (!groupedByCity.has(city)) {
            groupedByCity.set(city, []);
        }

        // Push the current item to the array corresponding to the city key
        groupedByCity.get(city).push(item);
    });

    return groupedByCity;
}

function negate(booleanValue) {
    if (typeof booleanValue !== 'boolean') {
        throw new Error('Input must be a boolean value');
    }
    return !booleanValue;
}

module.exports = groupByCity;