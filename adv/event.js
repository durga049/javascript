const one = () => {
    console.log("one")
}
const two = () => {
    setTimeout(() => {
        console.log("user are logedin")
    },3000)
    console.log("two")
}

const three = () => {
    console.log("three")
}
one();
two()
three()