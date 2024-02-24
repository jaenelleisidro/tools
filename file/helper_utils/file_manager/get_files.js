const { promisify } = require('util');
const { resolve } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

module.exports=async function getFiles(dir,{isRecursive=true}={}) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    if(isRecursive){
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    }
    return res;

  }));
  return files.reduce((a, f) => a.concat(f), []);
}