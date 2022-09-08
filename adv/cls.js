class user{
    constructor(name ,age){
        this.name=name
        this.age=age
    }
    getinfo(){
        return [this.name, this.age]
    }
    info(){
        return "hai"
    }
    static fo(){
        return "goin to us"
    }
}
durga = new user("durga",22)
console.log(durga)
class animal extends user {
    constructor(name,age,school){
    super(name,age)
    this.school=school
}
}
rohan= new animal("shiva",25,"bhashyam")
console.log(rohan.info())
console.log(rohan.getinfo())
console.log(user.fo())

// module.exports = user;