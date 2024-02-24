const path = require('path');
const getFiles=require('./../file_manager/get_files');
const zip=require('./zip')
const unzip=require('./unzip')

module.exports=async function zipManager({action,folderPath}){
    if(!['zip','unzip'].includes(action)){
        throw Error('unrecognized action:'+action)
    }
    if(!folderPath){
        throw Error('folderPath required');
    }

    // await unZip('./data/Ratatouille - Food Frenzy (Europe) (En,Fr,De,Es,It,El).zip')
    // await zip({filePath:'./data/Ratatouille - Food Frenzy (Europe) (En,Fr,De,Es,It,El).nds'})
    // await unZip('./data/Ratatouille - Food Frenzy (Europe) (En,Fr,De,Es,It,El).zip')
    // await zip({filePath:'./data/Ratatouille - Food Frenzy (Europe) (En,Fr,De,Es,It,El).nds'})
    
    if(action=='zip'){
        const files = await getFiles(folderPath);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if(path.parse(file).ext.toLocaleLowerCase()!='.zip'){
                await zip({filePath:file,deleteSourceAfter:true})
            }
        }    
    }


    if(action==='unzip'){
        const files = await getFiles(folderPath);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if(path.parse(file).ext.toLocaleLowerCase()=='.zip'){
                await unzip({filePath:file,deleteZipAfter:true})
            }
        }    
    }
}