## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0

function timer (){
    setTimeout(timer, 1000)
    console.log(count)
    count+=1
}

timer()
































































(Hint: setTimeout)