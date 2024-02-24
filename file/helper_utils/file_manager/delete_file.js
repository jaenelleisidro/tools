const fs =require('fs');
module.exports=async function deleteFile(filePath){
    //delete if already exist with same file name
    if(fs.existsSync(filePath)){
        fs.unlinkSync(filePath);
    }
}