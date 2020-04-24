import winboxAepx from '../../jsClass/productEntityClass/winboxApex.js'
class keyMouseMapJs {
  constructor(that) {
	    this.that = that;
		this.winbox = winboxAepx.getInstance();
  }
  
  InitReadData=(map)=>{
	  console.log(map)
	
	  map.forEach((value,key)=>{//121
			this.setGroupData(map,key,value,384,505,0);
			this.setGroupData(map,key,value,49536,49657,1);
			this.setGroupData(map,key,value,98688,98809,2);
			this.setGroupData(map,key,value,147840,147961,3);
			//this.setGroupData(map,key,value,384,505,0);
	  })
	  this.tabGroupFun();
  }
  
  setGroupData=(map,key,value,start,end,group)=>{
	  if(key>=start&&key<=end&&value!=0){
		if(key>=49536&&key<=49657){
					key = key - 49152;
				}else if(key>=98688&&key<=98809){
					key = key - 98304;
				}else if(key>=147840&&key<=147961){
					key = key - 147456;
				}  
				
	  			let string =  this.winbox.getKeyBoardCode(key);
	  			let index = this.getIndex(this.that.vdeviceid.mapKeyId,value-1);
	  			let src = this.getIndex(this.that.languageJson.mapKey.keyboard,string)
	  			this.that.arr[index] = string;
	  			this.that.$set(this.that.arr, index, string);
				this.that.groupArr[group][index] = src;
				//console.log(this.that.groupArr)
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

	
  getIndex=(arr,val)=>{
	  let index = 0;
	  for(let i=0;i<arr.length;i++){
		  if(arr[i]==val){
			  index = i;
			  
		  }
	  }
	  return index;
  }
	
  tabGroupFun() {
	  let tempArr = [];
	  
	  for (let i = 0; i < this.that.groupArr[this.that.tabGroup].length; i++) {
		 let data = this.that.groupArr[this.that.tabGroup][i];
	  	 if (data == -2) {
	  		 tempArr[i] = '';
	  	 } else {
	  		 tempArr[i] = this.that.languageJson.mapKey.keyboard[data];
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
  convert(value){
  	  let arr = [];
  	   if(value.length%2!=0){
  		  value = "0"+value
  	   }
  	   for(let i=0;i<value.length/2;i++){
  		   let index = i*2;
  		   arr.push(value.substring(index,index+2));
  		   
  	   }
  	  
  	  return  arr.reverse();
  }
}
export default keyMouseMapJs;
