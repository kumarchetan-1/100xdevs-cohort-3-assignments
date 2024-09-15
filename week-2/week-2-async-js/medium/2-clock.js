
(()=>{
   setInterval(()=>{
    const now = new Date()
    // const getHours = now.getHours()
    // const getMinutes = now.getMinutes()
    // const getSeconds = now.getSeconds()
    // console.log(`${getHours}:${getMinutes}:${getSeconds}`)

    // Using LocaleSting
    const timeSting = now.toLocaleTimeString('en-IN', {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
    console.log(timeSting)
   }, 1000) 
})();


(()=>{
   setInterval(()=>{
    const now = new Date()
    // Using LocaleSting
    const timeSting = now.toLocaleTimeString('en-IN', {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
    console.log(timeSting)
   }, 1000) 
})();