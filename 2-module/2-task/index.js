function isEmpty(obj) {
  for ( x in obj){
      return false
  }
  return true
}
let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) );
