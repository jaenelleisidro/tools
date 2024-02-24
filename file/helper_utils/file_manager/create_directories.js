var path = require('path'),
fs = require('fs');




const isPathExists=require('./is_path_exists')


module.exports=async function createDirectories({folderPath,filePath}){
    if(filePath){
        folderPath=path.dirname(path);
    }


    const exists=await isPathExists(folderPath);

    if(exists){return;}

    try{
        // await fs.mkdir(folderPath, {recursive: true});
        fs.mkdirSync(folderPath, { recursive: true });
    }catch(e){
        console.log(e);
    }
}
