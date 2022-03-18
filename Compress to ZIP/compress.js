const zlib = require("zip-lib");
const fs = require("fs")
const path =  require("path")

//compress single file  

const compressSingleFile = async (sourceFilePath , compressFilePath,callbc) =>{

    try {
       if(!fs.existsSync(sourceFilePath)) throw new Error("no such file or directory found on path " + path.resolve(sourceFilePath))

       if(!compressFilePath.includes(".zip")) throw new Error(".zip extension is missing on " + path.resolve(compressFilePath))

      await zlib.archiveFile(sourceFilePath,compressFilePath)
      if(callbc) return callbc()
        
    } catch (error) {
      if(callbc)  return callbc(error);
    }
}


//try something like below ----- 

// compressSingleFile("./test.txt","./test-compress.zip",(err)=>{
//     if(err){
//       return  console.log(err.message);
//     }
//     console.log("done successfully");
// })




const compressSingleFolder = async (sourceFolderPath , compressFolderPath,callbc) =>{

    try {

        if(!fs.existsSync(sourceFolderPath)) throw new Error("no such file or directory found on path " + path.resolve(sourceFolderPath))

       if(!compressFolderPath.includes(".zip")) throw new Error(".zip extension is missing on " + path.resolve(compressFolderPath))

      await zlib.archiveFolder(sourceFolderPath,compressFolderPath)
      if(callbc) return callbc()
        
    } catch (error) {
        return callbc(error);
    }
}

//try something like below ----- 
//compressSingleFolder("./testfolder","./testfolder-compress.zip")


const compressMultiple = async ({filePaths,folderPaths,compressPath},callbc) =>{

    try {
     
        const zip = new zlib.Zip();
        if(filePaths.length!==0){
            filePaths.forEach(async file=>{
               
                try {
                    if(!fs.existsSync(file)) throw new Error("no such file or directory found on path " + path.resolve(file))
                    await zip.addFile(file);
                } catch (error) {
                    return callbc(error);
                }
            })
        }

        if(folderPaths.length!==0){
            folderPaths.forEach(async dir=>{
                try {
                    if(!fs.existsSync(dir)) throw new Error("no such file or directory found on path " + path.resolve(dir))
                    await zip.addFolder(dir);
                } catch (error) {
                    return callbc(error);
                }
                
            })
        }

        if(!compressPath.includes(".zip")) throw new Error(".zip extension is missing on " + path.resolve(compressPath))

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
// },(err)=>{
//     if(err) return console.log(err.message);
//     console.log("done");
// })


module.exports = {compressSingleFile,compressSingleFolder,compressMultiple}
