var userin={
    names:"durga",
    roll:046,
    role:"admin",
    course: [],
    info : function(){
        console.log("count of course",this.course.length)
    },
    getcourse: function(coursename){
        this.course.push(coursename)
    },
    countCourse: function()
    {
        return `${this.names} register course${this.course.length}`

    },
    
}
userin.getcourse("javascript")
userin.getcourse("angular")
userin.getcourse("python")
console.log(userin.countCourse());
userin.info();


let items={
    Ganesh:15000,
    maharastra : 20000,
    poojari: 5000,
    andanam: 30000
}
console.log(items['maharastra'])
console.log(items.Ganesh)
items.duurga="sairam"
console.log(items)
items.Ganesh=900000
console.log(items)