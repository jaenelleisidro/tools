const path = require('path');
const fs =require('fs');
const unzipper=require('unzipper');
const deleteFile=require('./../file_manager/delete_file');

module.exports=async function unZip({filePath,outputFolder=null,deleteZipAfter=false}={}){
    if(outputFolder==null){
        outputFolder=path.dirname(filePath);
    }
    const zip = fs.createReadStream(filePath).pipe(unzipper.Parse({forceStream: true}));
    for await (const entry of zip) {
        const {path:zipedContentFilePath,type,vars}=entry;
        // const size = vars.uncompressedSize; // There is also compressedSize;
        // console.log({zipedContentFilePath,outputFolder});
        await deleteFile(path.join(outputFolder,zipedContentFilePath));
        entry.pipe(fs.createWriteStream(path.join(outputFolder,zipedContentFilePath)));
        entry.autodrain();
    }
    if(deleteZipAfter){
        deleteFile(filePath);
    }
}