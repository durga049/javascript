let us={
    name:"",
    roll:0574,
    getcourse:function(){
        console.log( `course are done by ${this.name}`)
    },
    
}
let du=Object.create(us)
du.name="jai sree ram"
console.log(du)
console.log(us)

let sammy=Object.create(us,{
   name:{value:'jyothi'} 
})
sammy.getcourse()