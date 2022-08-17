// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nealy all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.naem);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4};
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true; // => 이렇게 나중에 추가하는 것도 가능은 하지만 안쓰는게 좋다
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob; // => 삭제도 가능하긴 함
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Construcctor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5]

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
} // => 이렇게 작성할 수도 있지만 너무 복잡하고 적어야할게 많음

for (value of array) {
  console.log(value);
} // => 이렇게 작성하는게 훨신 간결함

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);
// => 이렇게 작성하면 복사되는 것이 아니고 기존의 user의 내용까지 같이 바뀜

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// Object.assign way
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // => 동일한 key가 있다면 뒤에있는 것이 앞에껄 덮음
console.log(mixed.color);
console.log(mixed.size);
