let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
  };

  let user2 = {
  "balance": "$1,490.15",
  "picture": "https://placehold.it/32x32",
  "age": 25,
  "name": "Duncan Randall",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 10 unread messages.",
  "favouriteFruit": "apple"
  };
  // Массив пользователей
  let users = [user1, user2]
  let result = showSalary(users, 25);
  console.log (result);
  document.write (result.length);

  // Функция showSalary должна возвращать строку из имён и баланса подходящих пользователей, в формате:
  // 'Golden Branch, $1,825.65
  // Duncan Randall, $1,490.15'

  function showSalary (users, age) {
      let usersage="";
      for (el of users) {
          if (el.age<=age) usersage+=el.name+", "+el.balance+"\n"
      }
       return usersage.slice(0, usersage.length)
  }

