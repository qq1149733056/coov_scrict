import winboxAepx from '../../jsClass/productEntityClass/winboxApex.js'
import T100 from '../../jsClass/productEntityClass/t100S.js'
class controllerJs {
  constructor(vthis) {
	    this.that = vthis;
		this.nums1 = 0;
		this.nums2 = 0;
		this.nums3 = 0;
		this.nums4 = 0;
  }
	

 InitReadData=(map)=>{ // 2020413 为写完 数据长度有变法
	 let name = this.that.vShareData.name;
	
	 if(name=="T100S"){
		 map.forEach((value,key)=>{//121
		  		this.setGroupData(map,key,value,354,372,0)
		 		this.setGroupData(map,key,value,33122,33140,1)
		 		this.setGroupData(map,key,value,65890,65908,2)
		 		this.setGroupData(map,key,value,98658,98676,3)
		 		//this.setGroupData(map,key,value,354,372,0)
		 })
	 }else{ 
		  map.forEach((value,key)=>{//121
 	   			this.setGroupData(map,key,value,354,372,0)
 	  			this.setGroupData(map,key,value,49506,49524,1)
 	  			this.setGroupData(map,key,value,98658,98676,2)
 	  			this.setGroupData(map,key,value,147810,147828,3)
				//this.setGroupData(map,key,value,354,372,0)
 	  }) 
	 }
 	  this.tabGroupFun();
 	
 }  
	
	setGroupData=(map,key,value,start,end,group)=>{
		
		  if(key>=start&&key<end&&value!=0){
			  
			 let num = key-start;
			 let src = this.that.imgsrcontroller[value-1];
			 this.that.$set(this.that.arr, num, src);
			 this.that.arrIndex[num] = value-1;
			 this.that.groupArr[group][num] = value-1;
			
		  }
	}
	getIndex=(arr,val)=>{
		  let index = 0;
		  for(let i=0;i<arr.length;i++){
			  if(arr[i]==val){
				  index = i;
			  }
		  }
		  return index;
	}
	
  resetArrImgSrc() {
    for (let i = 0; i < this.that.arrIndex.length; i++) {
      if (this.that.arrIndex[i] != -1 &&
			this.that.groupArr[this.that.tabGroup][i] != -2) {
        const index = this.that.arrIndex[i];
		const src = this.that.imgsrcontroller[index];
        this.that.arr[i] = src;
      }
    }
  }
  
  filterArr(arr, string, index) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == string) {
        return i;
      }
    }
    return index;
  }
  
  
  tabGroupFun() {
		  const tempArr = [];
		  for (let i = 0; i < this.that.groupArr[this.that.tabGroup].length; i++) {
		  	 const data = this.that.groupArr[this.that.tabGroup][i];
		  	 if (data == -2) {
		  		 tempArr[i] = '';
		  	 } else {
		  		 tempArr[i] = this.that.imgsrcontroller[data];
		  	 }
		  }
		  this.that.arr = tempArr;
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
export default controllerJs;
