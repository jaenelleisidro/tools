const {zipManager} = require('./helper_utils/zip_manager');
const {orgnanizeAlphabetical}=require('./helper_utils/file_manager');




const [nodePath,jsPath,manager,action,folderPath]=process.argv;

async function start(){
    if(manager==='zipmanager'){
        zipManager({action,folderPath})
    }else if(manager==='filemanager'){
        orgnanizeAlphabetical(folderPath);
    }else if(manager==='prepare_roms'){
        console.log('prepare_roms')
        await zipManager({action:'unzip',folderPath});
        await orgnanizeAlphabetical(folderPath);
    }
}

start();