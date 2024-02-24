const { rejects } = require('assert');
const fs=require('fs');
const { resolve } = require('path');



module.exports=async function moveFile(srcFile,targetFile){

    return new Promise((resolve,rejects)=>{
        fs.rename(srcFile, targetFile, function (err) {
            if (err) return rejects(err);
            resolve();
        });
    });
}

