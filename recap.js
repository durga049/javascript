let ganesh=["idol","band","pooja","decartion"]
ganesh.forEach((i) =>(console.log(i)));
for(let c of ganesh)
{
   console.log(c)
}
let items={
    Ganesh:15000,
    maharastra : 20000,
    poojari: 5000,
    andanam: 30000
}
console.log(items['maharastra'])
for(let d in items){
    console.log(`item ${d} amount for ecah item ${items[d]}`)
   
}