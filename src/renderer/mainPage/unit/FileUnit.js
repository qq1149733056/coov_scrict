const fs = require('fs');
const request = require('request');
class FileUint {
	constructor(that) {
		this.name = "";
		this.Catalog = "";
		this.writeFileName = "";
		this.CopyFile = "";

		this.arrbuff;
		this.that = that;
	}




	isFileCatalog = (resolve,fileName,arrbuff,writeFileName,CopyFile) => {
		
		fs.exists(fileName, (exists)=>{
			if(!exists){
				
				fs.mkdir(fileName,(err)=>{
					if(err){
						console.log(err)
					}else{
					this.writeFile(resolve,arrbuff,writeFileName,CopyFile);
					}
					})
					}else{
					this.writeFile(resolve,arrbuff,writeFileName,CopyFile);
					return;
					}
					})	
			
		 
	}
	
	isfrCatalog = (fileName,uri,resolve,writeFileName,CopyFile) => {
		
		
			fs.exists(fileName, (exists)=>{
				if(!exists){
					
					fs.mkdir(fileName,(err)=>{
						if(err){
							console.log(err)
						}else{
							
						request(uri).pipe(fs.createWriteStream(writeFileName)).
						on('close', ()=>{
							this.writeCopy(resolve,writeFileName,CopyFile);
						});
						
						}
						})
						}else{
							
						request(uri).pipe(fs.createWriteStream(writeFileName)).
						on('close', ()=>{
						
							this.writeCopy(resolve,writeFileName,CopyFile)
						});
						}
						})	
	}
	
	
	writeFile = (resolve,arrbuff,writeFileName,CopyFile) => {
		
		fs.writeFile(writeFileName, Buffer.concat(arrbuff), (error) => {
			if (error) {
				loading.close();
				return console.log(`写入文件失败,原因是${error.message}`);
			} else {
				this.writeCopy(resolve,writeFileName,CopyFile);
			}
		})
	}

	writeCopy = (resolve,writeFileName,CopyFile) => {
		
		fs.copyFile(writeFileName, CopyFile, err => {

			if (err) {
				this.that.dataMapKeyBord.clear();
				
				
				resolve();
				return;
			} else {
				
				this.that.dataMapKeyBord.clear();
				
				resolve();
				return
			}
		})
	}




}

export default FileUint;
