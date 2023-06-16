Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)
var counter1 = 0
function timer1(counter){
    console.clear()
    console.log(counter)
    count+=1
}

secs = setInterval(timer, 1000)

var counter2 = 0
function timer2(counter){
    console.clear()
    console.log(counter)
    count+=1
}
mins = setInterval(timer, 60 * 1000)

var counter3 = 0
function timer3(counter){
    console.clear()
    console.log(counter)
    count+=1
}

hrs = setInterval(timer, 60*60*1000)

console.log(hrs,":",mins,":",secs)
 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
var counter1 = 0
function timer1(counter){
    console.clear()
    console.log(counter)
    count+=1
}

secs = setInterval(timer, 1000)

var counter2 = 0
function timer2(counter){
    console.clear()
    console.log(counter)
    count+=1
}
mins = setInterval(timer, 60 * 1000)

var counter3 = 0
function timer3(counter){
    console.clear()
    console.log(counter)
    count+=1
}

hrs = setInterval(timer, 60*60*1000)

console.log(hrs,":",mins,":",secs)