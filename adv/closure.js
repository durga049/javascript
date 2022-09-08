// let sum = function(a){
//     return function addition(b){
//         return a+b;
//     }
//     return addition;
// }
// let store =sum(9)
// console.log(store(10))


// let sum = function(a,b,c){
//     return {
//        gettwonum:function(){
//         return a+b
//        },
//        getthreenum:function(){
//         return a+b+c

//        }
//     }
   
// }
// let store =sum(3,4,5)
// console.log(store.gettwonum())
// console.log(store.getthreenum())



// let sum = function(a){
//     return function (b){
//         return a+b;
//     }
    
// }
//  let store =sum(9)
// console.log(store(10))



// let sum = function(a){
//     return function (b){
//         return a+b;
//     }
    
// }

// console.log(sum(10)(10))


let sum = function(a){
    function du (b){
       return a+b;
   }
    return du;
}
let store =sum(9)
console.log(store(10))