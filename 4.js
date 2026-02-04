let objectWithNestedObject = {};
objectWithNestedObject.nestedObject = {};
objectWithNestedObject.nestedObject.a = 10;
const objectB = "b";
objectWithNestedObject.nestedObject[objectB] = true;
console.log(objectWithNestedObject);
