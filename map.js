const nums = [1 ,3 ,5 ,7]

const evens = nums.map(function(num){
  return num + 1;
})
console.log(evens);

const doubles = nums.map(function(double){
  return double * 2
})

console.log(doubles);
console.log(evens);





var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];



const foo = passengers.map(function(name){
  return `${name[0].toUpperCase()} ${name[1].toUpperCase()}`
})

console.log(foo);



const bar = foo.map(function(two){
  return [two[0],two[1]]
})

console.log(bar);
