const fs = require("fs")
const fs2 = require("fs").promises

// Using function callback based approach
// fs.readFile("1-file-cleaner.md", "utf-8", (readErr, data)=>{
//     if (readErr) {
//         console.log("Error in reading the file");
//     }
//     const filteredData =  data.replace(/\s+/g, " ").trim()
//     console.log(filteredData)
//     fs.writeFile("1-file-cleaner.md", filteredData, (writeErr)=>{
//         console.log("Error in writing the file");
//     })
// })


// Using Async await

// async function cleanFile(){
//     try {
//         let data = await fs2.readFile("1-file-cleaner.md", { encoding: "utf-8"})
//         let filteredData = data.replace(/\s+/g, " ").trim()
//         await fs2.writeFile("1-file-cleaner.md", filteredData)
//         console.log("File cleaned and written successfully")
//     } catch (error) {
//         console.log("Error ", error)
//     }
// }

// cleanFile()

// using then catch approach
fs2.readFile("1-file-cleaner.md", "utf-8")
.then(data=>{
    const filteredData = data.replace(/\s+/g, " ").trim()
    return fs2.writeFile("1-file-cleaner.md", filteredData)
}).then(()=>{
    console.log("File cleaned and written successfully.");
}).catch((err)=>{
    console.log("Error :", err);
})

