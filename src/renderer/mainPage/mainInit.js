import productJson from '../json/productJson.json';
class mainInit {
  constructor() {
    this.arr = [];
    this.setArr = function (arr) {
      this.arr = arr;
    };
    this.upath = '';
    this.fs = require('fs');
    this.exec = require('child_process').exec;
    this.path = require('path');
    this.readline = require('readline');
  }
  showLetter(vthis) {  
	  let devArr = []; 
	  const that = this;  
	 vthis.vdiskinfo.getDiskInfo() 
	     .then(disks => {
			 for(let dev of disks){
				 // for(let i=0;i<productJson.productArr.length;i++){
					// console.log(dev._volumeName.replace(/\s/g,"").toUpperCase())
					// if(dev._volumeName.replace(/\s/g,"").toUpperCase()===productJson.productArr[i].toUpperCase()){
						
					// 	devArr.push(dev._mounted);
					// 	//console.log(dev)
					// }  
				 // }
				devArr.push(dev._mounted); 
				 
			 }
			for (let i = 0; i < devArr.length; i++) {
				
			  let name = devArr[i] + '\\info.txt';
			
			  if (that.fs.existsSync(name)) {
					  var devpath =  devArr[i];
					  let temp = that.fs.readFileSync(name, 'utf8');
			    let temparr = temp.split('\n');
			    for (let j = 0; j < 5; j++) {
			      if (j > 2) {
							  temparr.pop();
						  } else {
							  temparr[j] = temparr[j].replace(/\s*/g, '');
						  }
			    }
					 let strarr = temparr[0].split(':');
					 for (let n = 0; n < productJson.productArr.length; n++) {
						 if (strarr[1] == productJson.productArr[n]) {
						 	console.log(strarr[1]);
						 	vthis.text = strarr[1];
							vthis.devicePath = devpath;
						 	vthis.$store.dispatch('guideincrement');
							console.log(vthis.devicePath)
						 }
					 }
			  }
			}
	     })
	     .catch(reason => {
	         console.error(reason);
	     });
		 
   //  const that = this;
   //  that.arr = [];
   //  that.exec('wmic LOGICALDISK get name', (err, stdout, stderr) => {
   //    if (err || stderr) {
   //      console.log(`root path open failed${err}${stderr}`);
   //      return;
   //    }
   //    let str = stdout.replace(/\s*/g, '');
   //    str = str.substring(4, str.length);
   //    let arr = str.split(':');
   //    arr.pop();
   //    for (let i = 0; i < arr.length; i++) {
   //      let name = `${arr[i]}:` + '\\info.txt';
   //      if (that.fs.existsSync(name)) {
		 //  var devpath =  `${arr[i]}:`;
		 //  let temp = that.fs.readFileSync(name, 'utf8');
   //        let temparr = temp.split('\n');
   //        for (let j = 0; j < 5; j++) {
   //          if (j > 2) {
			// 	  temparr.pop();
			//   } else {
			// 	  temparr[j] = temparr[j].replace(/\s*/g, '');
			//   }
   //        }
		 // let strarr = temparr[0].split(':');
		 // for (let n = 0; n < productJson.productArr.length; n++) {
			//  if (strarr[1] == productJson.productArr[n]) {
			//  	console.log(strarr[1]);
			//  	vthis.text = strarr[1];
			// 	vthis.devicePath = devpath;
			// 	that.fs.stat(vthis.devicePath, (err, stats)=>{
			// 		console.log(stats)
			// 	});
			//  	vthis.$store.dispatch('guideincrement');
			// 	console.log(vthis.devicePath)
				
				
			//  }
		 // }
   //      }
   //    }
   //  });
  }
}

export default mainInit;
