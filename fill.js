let num3=[3,4,77,22,55,7]
console.log(num3.fill("durga",2,4))

let mynumber=[2,44,65,34,12]
var result=mynumber.filter((num) => (num < 36)) 
console.log(result)

let mynumber1=[2,44,65,34,12]
var result=mynumber1.filter((num) => (num != 65)) 
console.log(result)

console.log(mynumber.sort())

let array=[
    {club:"barcelona",county: "england"},
    {club:"manchestar",county:"usa"},
    {club:"realworld",county:"jersey"},
    {club:"liverpool",county:"new york"},

];
let clubfromengland=array.filter((item) => {
    return item.county === "england"
});
console.log(clubfromengland)

let aray=[2,4,78,99]
let arr=aray.filter((mm) => {
    return mm %2 !=0 ;
})
console.log(arr)