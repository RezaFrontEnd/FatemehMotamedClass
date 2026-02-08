let myObject = 
{
    a:true,
    b:null,
    c:25,
};
console.log(myObject["a"]);
console.log(myObject["b"]);
const ObjectC = "c";
console.log(myObject[ObjectC]);
console.log(myObject);
myObject["New"+"Property"+"name"] = "ali";
console.log(myObject);