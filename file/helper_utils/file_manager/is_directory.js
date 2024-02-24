const fs=require('fs');


module.exports=async function isDirectory(path){
    return fs.lstatSync(path).isDirectory()
}