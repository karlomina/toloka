// const groupByCity = require('./index')
// const negate = require('./index')
// const logSpy = jest.spyOn(global.console, 'log');
// const myArray = [
//     { name: 'John', age: 30, city: 'New York' },
//     { name: 'Jane', age: 25, city: 'Chicago' },
//     { name: 'Mary', age: 35, city: 'Los Angeles' },
//     { name: 'Joseph', age: 23, city: 'Los Angeles' },
//     { name: 'Mark', age: 26, city: 'Chicago' },
//     { name: 'Emma', age: 31, city: 'New York' },
//     { name: 'Olivia', age: 42, city: 'New York' }
// ];

// function groupByCity(array) {
//     const groupedByCity = new Map();

//     array.forEach(item => {
//         const city = item.city; // Destructure the city property from the item

//         // If the city key doesn't exist in the map, initialize it with an empty array
//         if (!groupedByCity.has(city)) {
//             groupedByCity.set(city, []);
//         }

//         // Push the current item to the array corresponding to the city key
//         groupedByCity.get(city).push(item);
//     });

//     return groupedByCity;
// }

// describe("groupByCity", () => {
//     const groupedByCity = groupByCity(myArray);
//     test('Map object should be truthy', () => {
//         console.log(groupedByCity)
//         expect(groupedByCity).toBeTruthy();
//     });

//     test('Map object should have all cities in given array as keys', () => {
//         expect(Array.from(groupedByCity.keys())).toEqual(expect.arrayContaining(['New York', 'Chicago', 'Los Angeles']))
//     });
// });


// function negate(booleanValue) {
//     if (typeof booleanValue !== 'boolean') {
//         throw new Error('Input must be a boolean value');
//     }
//     return !booleanValue;
// }

// describe("negate", () => {
//     test('newValue should be false', () => {
//         const newValue = negate(true);
//         // Check if newValue is false because given value is true
//         expect(newValue).toBe(false);
//     });

//     test('Should throw an error', () => {
//         // Check if function throws an error if passed value is not a boolean
//         expect(() => {
//             negate(undefined)
//         }).toThrow('Input must be a boolean value');
//     });
// });

const school = {
    // Array of classes
    classes: [
        {
            // Details of Math 101 class
            name: 'Math 101',
            teacher: 'Mr. Smith',
            studentsCount: 30
        },
        {
            // Details of English 201 class
            name: 'English 201',
            teacher: 'Mrs. Johnson',
            studentsCount: 25
        },
        {
            // Details of History 301 class
            name: 'History 301',
            teacher: 'Ms. Lee',
            studentsCount: 20
        }
    ]
};

describe('school object', () => {
    test('classes should have correct structure', () => {
        expect(Array.isArray(school.classes)).toBe(true); // Check if classes is an array

        school.classes.forEach((classInfo) => {
            expect(typeof classInfo).toBe('object'); // Each class should be an object
            expect(typeof classInfo.name).toBe('string'); // Each class should have a string name
            expect(typeof classInfo.teacher).toBe('string'); // Each class should have a string teacher
            expect(typeof classInfo.studentsCount).toBe('number'); // Each class should have a number of students
        });
    });
    
    test('each class should have name, teacher, and studentsCount properties', () => {
        school.classes.forEach((classInfo) => {
            // Check if each class object has name, teacher, and studentsCount properties
            expect(classInfo).toHaveProperty('name');
            expect(classInfo).toHaveProperty('teacher');
            expect(classInfo).toHaveProperty('studentsCount');
        });
    });
});

