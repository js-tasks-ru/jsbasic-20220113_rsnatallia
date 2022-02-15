let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [ vasya, petya, masha ];

function namify(users) {
  let names=[]
  for (el of users) {
    names.push(el.name)
  }
  return names
}

let names = namify(users); // ['Вася', 'Петя', 'Маша']

console.log (names);
