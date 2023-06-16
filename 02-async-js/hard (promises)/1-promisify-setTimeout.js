/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(n) {
    let time = new Promise(resolve =>{setTimeout(resolve, n*1000)})
    return time
}
function print()
{
    console.log("promise recieved")
}
 wait(5)
.then(print)