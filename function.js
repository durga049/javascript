// function fruit(fruitname){
//     console.log(`i like ,${fruitname} `)
// }
// fruit("mango")

// function users()
// {
//     return "hai"
// }
// console.log(users())

// function languages(enter_which_language_u_know)
// {
//     console.log("i know ",enter_which_language_u_know);
// }
// languages("javascript");

// function ids(enter_id)
// {
//     console.log("my id is", enter_id);
// }
// ids(123);

// fuction with variables

//function userroles(namess,role)
let userroles=function(namess,role)

{
    switch(namess){

   
    case("durga","admin"):
    return `${namess},can acces any files,${namess} role is ${role}`;
    case("sai","subadmin"):
    return `${namess},can acces fewfiles,${namess} role is ${role}`;
    case("pavan","db"):
    return `${namess},can delete the files,${namess} role is ${role}`;
    case("padu","user"):
    return `${namess},can only commet on the files,${namess} role is ${role}`;
    default:
        return"there is no such position";
    }
}
//console.log(userroles("admin","durga"));
let userrole = userroles("ddagh","db");
console.log(userrole);