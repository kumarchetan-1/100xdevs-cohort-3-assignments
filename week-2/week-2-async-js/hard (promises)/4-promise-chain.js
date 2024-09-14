/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function setTimeoutPromisified(t){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        }, t*1000)
    })
}
function wait1(t) {
    return setTimeoutPromisified(t);
}

function wait2(t) {
    return setTimeoutPromisified(t);
}

function wait3(t) {
    return setTimeoutPromisified(t);
}

function calculateTime(t1, t2, t3) {
    let startTime = Date.now();
    return new Promise((resolve, reject)=>{
        wait1(t1).then(()=>{
            wait2(t2).then(()=>{
                wait3(t3).then(()=>{
                    let endTime = Date.now();
                    let duration = endTime - startTime;
                    // console.log(duration);
                    resolve(duration);
                })
            })
        })
    })
}
// let t = calculateTime(1,2,3);
module.exports = calculateTime;
