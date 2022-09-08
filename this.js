const school={
    class :5,
    sub :"maths",
    full :"max", 
    info: function()
    {
        console.log(this);
        fun();
        function fun(){
            console.log("hello")
            console.log(this)
    
        }
       

    }
   

}

school.info();


//regular function
function temple(){
    console.log("line 24 ",this);
}
temple();



//
console.log(this)