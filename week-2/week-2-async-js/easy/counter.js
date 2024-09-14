function countUp(n = 0){
        setTimeout(()=>{
            console.log(n)
            countUp(n+1)
        }, 1000)

// setInterval(()=>{
//     console.log(n)
//     n++

// }, 1000)
}
countUp()