class continuityJs {
  constructor(that) {
    this.that = that;
  }
  continuityInit(imglength, continuityKeyLength) {
    const temptext = [];
    const temparr = [];
    const temptextTag = [];
    const temparrindex = [];
    for (let i = 0; i < imglength; i++) {
      temparr[i] = [];
      temptext[i] = [];
      temptextTag[i] = [];
	  temparrindex[i] = [];
      for (let j = 0; j < continuityKeyLength; j++) {
        temparr[i][j] = '';
        temptext[i][j] = this.that.languageJson.advancedFunctions.pleaseChoose;
        temptextTag[i][j] = true;
        temparrindex[i][j] = -1;
      }
    }
    this.that.arr = temparr;
    this.that.pleaseText = temptext;
    this.that.textTag = temptextTag;
    this.that.arrIndex = temparrindex;
  }
  resetArrImgSrc() {
	   for (let i = 0; i < this.that.arrIndex.length; i++) {
		   for (let j = 0; j < this.that.arrIndex[i].length; j++) {
			   if (this.that.arrIndex[i][j] != -1 &&
			   this.that.groupArr[this.that.tabGroup][i][j] != -2) {
				  const index = this.that.arrIndex[i][j];
				  const src = this.that.imgsrc[index];
				  this.that.arr[i][j] = src;
			   }
		   }
	   }
  }

  tabGroupFun() {
   		  const tempArr = [];
		  const tempTag = [];
   		  for (let i = 0; i < this.that.groupArr[this.that.tabGroup].length; i++) {
			   tempArr[i] = [];
			   tempTag[i] = [];
   		   for (let j = 0; j < this.that.groupArr[this.that.tabGroup][i].length; j++) {
			   tempArr[i][j] = '';
        if (this.that.groupArr[this.that.tabGroup][i][j] != -2) {
          const index = this.that.groupArr[this.that.tabGroup][i][j];
          const src = this.that.imgsrc[index];
          tempArr[i][j] = src;
          tempTag[i][j] = false;
        } else {
          tempArr[i][j] = '';
          tempTag[i][j] = true;
        }
   		  	 }
   		  }

   		  this.that.arr = tempArr;
		  this.that.textTag = tempTag;
  }

  InitGroupArr(MAXGROUPLEN, imglength, continuityKeyLength) {
   		  for (let i = 0; i < MAXGROUPLEN; i++) {
   		  	this.that.groupArr[i] = [];
   		  	for (let j = 0; j < imglength; j++) {
   		  		this.that.groupArr[i][j] = [];
        for (let n = 0; n < continuityKeyLength; n++) {
          this.that.groupArr[i][j][n] = -2;
        }
      }
   		  }
  }
}
export default continuityJs;
