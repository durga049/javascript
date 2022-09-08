let states = new Array("hyd","goa","kerala","mumbai");
console.log(states.length)
console.log(states[1])
console.log(states.pop())
states[1]="chennai"
console.log(states);
states.push("delhi")
console.log(states)
delete states[3]
console.log(states)
console.log(states.indexOf("kerala"))
console.log(states.indexOf("punjab"))
console.log(states.indexOf("kashmir"))
states.unshift("ap")
console.log(states)
states.shift();
console.log(states)

console.log(Array.from("durga"))
console.log(states.at(-2))



