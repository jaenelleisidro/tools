const fs=require('fs');

module.exports=async function isPathExists(path){
    return fs.existsSync(path);
}