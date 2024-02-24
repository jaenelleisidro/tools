const path=require('path')
const getFiles=require('./get_files');
const createDirectories=require('./create_directories');
const moveFile=require('./move_file');
const isDirectory=require('./is_directory')

module.exports=async function orgnanizeAlphabetical(fodlerPath) {
  const files=await getFiles(fodlerPath,{isRecursive:false});
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const isDir=await isDirectory(file);
    if(isDir){continue;}
    let letter=path.basename(file).charAt(0).toLowerCase();

    if('abcdefghijklmnopqrstuvwxyz'.indexOf(letter)==-1){
      letter='0-9'
    }
    
    const letterPath=path.join(path.dirname(file),letter);
    await createDirectories({folderPath:letterPath});
    await moveFile(file,path.join(letterPath,path.basename(file)))
  }

}