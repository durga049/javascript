let user = function(first,last){
    this.first=first,
    this.last=last
    this.getcount=function(){
        console.log(`last name is ${this.last}`)
    }
    
}
user.prototype.getfirsts=function(){
    console.log(`first name is ${this.first}`)
}

let a=new user ("durga","prasad")
if(a.hasOwnProperty('first')){
    a.getfirsts();
}

a.last="shiva"

a.getcount();

// let obj = {
//     names:"durga",

// }
// function Obj(give){
//     this.gg=give
// }
// Obj.prototype.getfirst=function(){
//     console.log( this.gg)
// }
// let u = new Obj("hanuman")
// u.getfirst();
