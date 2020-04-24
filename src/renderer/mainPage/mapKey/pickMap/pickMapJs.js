class pickMapJs {
  constructor(vthis) {
	    this.that = vthis;
  }
  filterArr(arr, string, index) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == string) {
        return i;
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
export default pickMapJs;
