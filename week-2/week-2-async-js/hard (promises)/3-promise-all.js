/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    function cb(resolve, reject) {
        setTimeout(resolve, t * 1000)
    }
    return new Promise(cb)
}

function wait2(t) {
    function cb(resolve, reject) {
        setTimeout(resolve, t * 1000)
    }
    return new Promise(cb)
}

function wait3(t) {
    function cb(resolve, reject) {
        setTimeout(resolve, t * 1000)
    }
    return new Promise(cb)
}

function calculateTime(t1, t2, t3) {
    let startTime = new Date()
    let time
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
        let endTime = new Date()
        return endTime - startTime
    })
}


module.exports = calculateTime;
