const fs = require("fs")


fs.writeFile("4-write-to-file.md", "\nFile written by Chetan", { flag: "a"}, (err)=>{
    if (err) {
        console.log("Error writing the file ", err);
    }
    console.log("user content saved");
    
})