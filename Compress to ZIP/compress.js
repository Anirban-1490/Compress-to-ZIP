const zlib = require("zip-lib");

//compress single file  

const compressSingleFile = async (sourceFilePath , compressFilePath,callbc = function(err=null){}) =>{

    try {
      await zlib.archiveFile(sourceFilePath,compressFilePath)
      if(callbc) return callbc()
        
    } catch (error) {
        return callbc(error);
    }
}


//try something like below ----- 

compressSingleFile("./tet.txt","./test-compress.zip",(err)=>{
    if(err){
      return  console.log(err.message);
    }
    console.log("done successfully");
})



const compressSingleFolder = async (sourceFolderPath , compressFolderPath,callbc = function(err=null){}) =>{

    try {
      await zlib.archiveFolder(sourceFolderPath,compressFolderPath)
      if(callbc) return callbc()
        
    } catch (error) {
        return callbc(error);
    }
}

//try something like below ----- 
//compressSingleFolder("./testfolder","./testfolder-compress.zip")


const compressMultiple = async ({filePaths,folderPaths,compressPath},callbc = function(err=null){}) =>{

    try {
     
        const zip = new zlib.Zip();
        if(filePaths.length!==0){
            filePaths.forEach(async path=>{
                await zip.addFile(path);
            })
        }

        if(folderPaths.length!==0){
            folderPaths.forEach(async path=>{
                await zip.addFolder(path);
            })
        }

        await zip.archive(compressPath)
        if(callbc) return callbc()
       
    } catch (error) {
        return callbc(error);
    }
}


//try something like below ----- 

// compressMultiple({
//     filePaths:["./test.txt"],
//     folderPaths :["./testfolder"],
//     compressPath:"./compressed.zip"
// })


module.exports = {compressSingleFile,compressSingleFolder,compressMultiple}
