import devices from '../../json/device.json'
class shareData {
  constructor() {
	   this.keyMouseData = [];
	   this.controllerData = [];
	   this.pickData = [];
	   this.combinationData = [];
	   this.continuityData = [];
	   this.scriptActionData = [];
	   this.mouseDpi = [];
	   this.resUrl = "";
	   this.tag = 0;
	   this.readData;
	   this.name = "";
  }
  
  
  setWinboxIdentificationCode(addr,IdentificationCode,dataMapKeyBord){
	  for(let i=0;i<addr.length;i++){
	  			   for(let j=0;j<IdentificationCode.length;j++){
	  				  dataMapKeyBord.set(addr[i]+j,IdentificationCode[j]);
	  				   
	  			   }
	  }
  }
  

  
  
  getWinboxMapKey(mapkeyunit,addr,dataMapKeyBord){
	  //506
	  for(let i=0;i<this.getkeyMouseData().length;i++){
		  let arr = this.getkeyMouseData()[i];
	  	for(let j=0;j<arr.length;j++){
			
	  		if(arr[j]!=-2){
	  			let name = mapkeyunit.getName(arr[j]);
	  			let mapKeyAddr =mapkeyunit.
	  			getKeyBoardCodeByName(name)+mapkeyunit.size+addr[i];
	  			dataMapKeyBord.set(mapKeyAddr,devices.mapKeyId[j]+1)
	  			
	  		}
	  	} 
	  	
	  }
	return dataMapKeyBord;
  }
  
  getWinboxMouseMoven(dataMapKeyBord){
	  dataMapKeyBord.set(372,21);
	  dataMapKeyBord.set(49524,21);
	  dataMapKeyBord.set(98676,21);
	  dataMapKeyBord.set(147828,21);
  }
  
  getWinboxMouseDpi(dataMapKeyBord){
	  for(let i=0;i<this.getMouseDpi().length;i++){
	  	dataMapKeyBord.set(506+i,parseInt(this.getMouseDpi()[i],10));
	  	dataMapKeyBord.set(49658+i,parseInt(this.getMouseDpi()[i],10));
	  	dataMapKeyBord.set(98810+i,parseInt(this.getMouseDpi()[i],10));
	  	dataMapKeyBord.set(147962+i,parseInt(this.getMouseDpi()[i],10));
	  }
  }
  
  
  getWinboxgetControllerData(addr,dataMapKeyBord){
  	  for(let i=0;i<this.getControllerData().length;i++){
			let arr = this.getControllerData()[i];
			for(let j=0;j<arr.length;j++){
				if(arr[j]!=-2){
					let mapKeyAddr = arr[j];
					dataMapKeyBord.set(j+addr[i],mapKeyAddr+1)
				}
			}
  	  	
  	  }
  	return dataMapKeyBord;
  }
  
  getWinboxCombination(mapkeyunit,addr,dataMapKeyBord){
	  
	  let arr = this.getcombinationData();
	  for(let i=0;i<arr.length;i++){
	  	let temp = "";
	  	for(let j=0;j<arr[i].length;j++){
	  		if(arr[i][j]!=-2){
	  			temp+="1";
	  		}else{
	  			
	  			temp+="0";
	  		}
	  	}
		 
	  	temp = mapkeyunit.insertStr(temp,12,"00");
		
	  	let data = temp.split("").reverse().join("");
		
	  	let arrgr = mapkeyunit.convert(data,8);
		
	  	for(let n=0;n<arrgr.length;n++){
	  		 let datanumber = parseInt(arrgr[n],2).toString(16);
			 
	  		 let data1 = parseInt(datanumber,16);
	  		dataMapKeyBord.set(addr[i]+n,data1);
			
	  	} 
	  } 
  }
  
  getT100Combination(mapkeyunit,addr,dataMapKeyBord){
  	  
  	  let arr = this.getcombinationData();
  	  for(let i=0;i<arr.length;i++){
  	  	let temp = "";
  	  	for(let j=0;j<arr[i].length;j++){
  	  		if(arr[i][j]!=-2){
  	  			temp+="1";
  	  		}else{
  	  			
  	  			temp+="0";
  	  		}
  	  	}
  		
  	  	temp = mapkeyunit.insertStr(temp,14,"00");
  		
  	  	let data = temp.split("").reverse().join("");
  		
  	  	let arrgr = mapkeyunit.convert(data,8);
  		
  	  	for(let n=0;n<arrgr.length;n++){
  	  		 let datanumber = parseInt(arrgr[n],2).toString(16);
  			 
  	  		 let data1 = parseInt(datanumber,16);
		
  	  		dataMapKeyBord.set(addr[i]+n,data1);
  			
  	  	}
  	  }
  }
  
  
  getT100ContinuityData(mapkeyunit,addr,dataMapKeyBord,size){ //想优化的 反正能跑就算了
	  //18,252,1,0,0,0,0,0,0,0,0,0,120,110
	  //let data = [0,252,1,0,0,0,0,0,0,0,0,0,0,0];

	  let arr = this.getcontinuityData();
	  let grouparr = [];
	  for(let i=0;i<arr.length;i++){
	  	let gr = arr[i];
	  	
	  	for(let j=0;j<gr.length;j++){
	  		let	con = {
	  			group:0,
	  			time:1,
	  			sig:252,
	  			id:0,
	  			buttonid:[],
	  			lt:0,
	  			rt:0
	  		}
	  		
	  	let dataarr = gr[j];
	  	let zero = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	  	let id = 0;
	  		for(let n=0;n<dataarr.length;n++){
	  			if(dataarr[n]!=-2&&dataarr[n]<12){
	  				zero[dataarr[n]] = 1;
	  			}else if(dataarr[n]!=-2&&dataarr[n]>=12){
	  				if(dataarr[n]==12){
	  					
	  					con.lt = 120;
	  				}else{
	  					
	  					con.rt = 125;
	  				}
	  			
	  			}
	  		}
	  	for(let k=0;k<zero.join("").length/8;k++){
	  	
	  		let index = k*8;
	  		let temp = zero.join("").substring(index,index+8);
	  		temp = parseInt(temp.split("").reverse().join(""),2);
	  		con.buttonid.push(temp);
	  		if(temp!=0){
	  			
	  			if(j>=13){
	  				id = j+4;
	  			}else{
	  				id = j;
	  			}
	  			con.id= id+1;
	  			
	  		}
	  			
	  	}
	  	if(con.id!=0){
	  		con.group = i+1;
	  		grouparr.push(con);
	  		
	  	}
	  	} 
	  	
	  } 
		
		//console.log(grouparr)
		
		for(let i=0;i<grouparr.length;i++){
			let conData = [0,252,1,0,0,0,0,0,0,0,0,0,0,0]
			conData[0] = grouparr[i].id;
			conData[1] = grouparr[i].sig;
			conData[12] = grouparr[i].lt;
			conData[13] = grouparr[i].rt;
			for(let j=0;j<grouparr[i].buttonid.length;j++){
				conData[6+j] = grouparr[i].buttonid[j];
			}
			let addrlen = 0;
				if(grouparr[i].group==1){
					
					 addrlen = addr[0] + (i*644);
					for(let n=0;n<conData.length;n++){
						dataMapKeyBord.set(addrlen+n,conData[n])
					}
				}else if(grouparr[i].group==2){
					addrlen = addr[1] + (i*644);
					for(let n=0;n<conData.length;n++){
						dataMapKeyBord.set(addrlen+n,conData[n])
					}
				}else if(grouparr[i].group==3){
					addrlen = addr[2] + (i*644);
					for(let n=0;n<conData.length;n++){
						dataMapKeyBord.set(addrlen+n,conData[n])
					}
				}else if(grouparr[i].group==4){
					addrlen = addr[3] + (i*644);
					for(let n=0;n<conData.length;n++){
						dataMapKeyBord.set(addrlen+n,conData[n])
					}
				}
			
			
		}
  }
  
  
  static getInstance() {
	       if (!shareData.instance) {
	           shareData.instance = new shareData();
	           return shareData.instance;
	       }
	       return shareData.instance;
	   }
	   
	
	getResUrl(){
		return this.resurl;
	}
	
	setResUrl(url){
		this.resUrl = url;
	}
		
  setMouseDpi(data){
	   this.mouseDpi = data;
  }
  
  getMouseDpi(data){
  	  return this.mouseDpi;
  }
  setkeyMouseData(data) {
    this.keyMouseData = data;
  }
  getkeyMouseData() {
    return this.keyMouseData;
  }
  setControllerData(data) {
    this.controllerData = data;
  }
  getControllerData() {
    return this.controllerData;
  }
  setpickData(data) {
    this.pickData = data;
  }
  getpickData() {
    return this.pickData;
  }
  setcombinationData(data) {
    this.combinationData = data;
  }
  getcombinationData() {
    return this.combinationData;
  }
  setcontinuityData(data) {
    this.continuityData = data;
  }
  getcontinuityData() {
    return this.continuityData;
  }
  setscriptActionData(data) {
    this.scriptActionData = data;
  }
  getscriptActionData() {
    return this.scriptActionData;
  }
  getreadData(){
	  return this.readData; 
  }
  setreadData(data){
	  this.readData = data;
  }
 
}
export default shareData;
