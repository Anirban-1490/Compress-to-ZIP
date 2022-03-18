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
compress.compressSingleFile("./test.txt","./test-compress.zip")

```

compress a single folder - 

```
const compress = require("compress-to-zip");
compress.compressSingleFolder("./testfolder","./testfolder-compress.zip")

```

compress a multiple (both files and folders) - 

```
const compress = require("compress-to-zip");
compress.compressMultiple({
    filePaths:["./test.txt"],
    folderPaths :["./testfolder"],
    compressPath:"./compressed.zip"
 })

```


## Reference 

### 1. compressSingleFile(sourceFilePath , compressFilePath)
  <br/>Compresses a single file from "sourceFilePath" to "compressFilePath"

### 2. compressSingleFolder(sourceFolderPath , compressFolderPath)
 <br/>Compresses a single folder from "sourceFolderPath" to "compressFolderPath"
 
### 3. compressMultiple(object)
  <br/>Compresses multiple files and folders together
  <br/> Object : {
    filePaths:[ ],
    folderPaths :[ ],
    compressPath:""
 }
