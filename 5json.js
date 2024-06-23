

const jsonString = '{"name": "Krishna Khadka", "age": 22}'
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);


const jsonString1 = {
    "name": "Krishna Khadka",
    "age": 22
}
const jsonObject1 = JSON.stringify(jsonString1);
console.log(jsonObject1);