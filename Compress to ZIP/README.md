# Compress-to-ZIP
Compress any file or folder to .zip format

## Usage -

Import - 
```
const compress = require("compress-to-zip");

```
compress a single file - 

```
const compress = require("compress-to-zip");
compress.compressSingleFile("./test.txt","./test-compress.zip",(err)=>{
    if(err) return console.log(err.message) // if error show it
    console.log("done!") 
})

```

compress a single folder - 

```
const compress = require("compress-to-zip");
compress.compressSingleFolder("./testfolder","./testfolder-compress.zip",(err)=>{
    if(err) return console.log(err.message) // if error show it
    console.log("done!") 
})

```

compress a multiple (both files and folders) - 

```
const compress = require("compress-to-zip");
compress.compressMultiple({
    filePaths:["./test.txt"],
    folderPaths :["./testfolder"],
    compressPath:"./compressed.zip"
 },(err)=>{
    if(err) return console.log(err.message) // if error show it
    console.log("done!") 
})

```


## Reference 

### 1. compressSingleFile(sourceFilePath , compressFilePath,callbc)
  <br/>Compresses a single file from "sourceFilePath" to "compressFilePath" with a error first callback if failed

### 2. compressSingleFolder(sourceFolderPath , compressFolderPath,callbc)
 <br/>Compresses a single folder from "sourceFolderPath" to "compressFolderPath" with a error first callback if failed
 
### 3. compressMultiple(object,callbc)
  <br/>Compresses multiple files and folders together
  <br/> Object : {
    filePaths:[ ],
    folderPaths :[ ],
    compressPath:""
 }
 callbc : a error first callback if failed
