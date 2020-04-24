class combinationJs {
  constructor(that) {
	    this.that = that;
		
  }
  
  InitReadData=(map)=>{
	 let arr1 = [];
	 let arr2 = [];
	 let arr3 = [];
	 let arr4 = [];
	 let name = this.that.vShareData.name;
	 if(name=="T100S"){ 
		  map.forEach((value,key)=>{//121
	   		this.setGroupData(arr1,map,key,value,530,531);
	  		this.setGroupData(arr2,map,key,value,33298,33299)
	  		this.setGroupData(arr3,map,key,value,66066,66067)
	  		this.setGroupData(arr4,map,key,value,98834,98835)
	  })
	 }else{
		map.forEach((value,key)=>{//121
		 	this.setGroupData(arr1,map,key,value,522,523);
			this.setGroupData(arr2,map,key,value,49674,49675)
			this.setGroupData(arr3,map,key,value,98826,98827)
			this.setGroupData(arr4,map,key,value,147978,147979)
				
		}) 
	 }
	 
	if(name=="T100S"){
	  this.readArrData(arr1,0);
	  this.readArrData(arr2,1);
	  this.readArrData(arr3,2);
	  this.readArrData(arr4,3);
	}else{
	  this.readArrWiboxData(arr1,0);
	  this.readArrWiboxData(arr2,1);
	  this.readArrWiboxData(arr3,2);
	  this.readArrWiboxData(arr4,3);	
	}
	
	 this.tabGroupFun();
	
  } 
  
  readArrData=(arr,gr)=>{
	  for(let i=0;i<arr.length-2;i++){
	  		  if(arr[i]=="1"){ 
	  			  this.that.value[i] = true;
				  this.that.groupArr[gr][i] = 1;
	  		  }else{
				  this.that.value[i] = false;
				  this.that.groupArr[gr][i] = -2;
			  }
	  } 
	 
  }
  
  
  readArrWiboxData=(arr,gr)=>{
	  let winboxD = this.that.vdeviceid.winboxCom;
	  
  	  for(let i=0;i<winboxD.length;i++){
		  let index = winboxD[i];
		  
  	  		  if(arr[index]=="1"){ 
  	  			  this.that.value[i] = true;
  				  this.that.groupArr[gr][i] = 1;
  	  		  }else{
  				  this.that.value[i] = false;
  				  this.that.groupArr[gr][i] = -2;
  			  }
  	  } 
  	 
  }
  
  setGroupData=(arr,map,key,value,start,end)=>{	
  	  if(key>=start&&key<=end){
			let data = value.toString(2)
			.split("")
			.reverse()
			.join("")
			.padEnd(8,'0');
			for(let tmp of data){
				arr.push(tmp);
			} 	 
  	  }
	  
  }
  tabGroupFun() {
		  const tempArr = [];
		  for (let i = 0; i < this.that.groupArr[this.that.tabGroup].length; i++) {
		  	 const data = this.that.groupArr[this.that.tabGroup][i];
		  	 if (data == -2) {
		  		 tempArr[i] = false;
		  	 } else {
		  		 tempArr[i] = true;
		  	 }
		  }
		  this.that.value = tempArr;
  }

  InitGroupArr(MAXGROUPLEN, imglength) {
		  for (let i = 0; i < MAXGROUPLEN; i++) {
		  	this.that.groupArr[i] = [];
		  	for (let j = 0; j < imglength; j++) {
		  		this.that.groupArr[i][j] = -2;
		  	}
		  }
  }
  
   
  
}
export default combinationJs;
