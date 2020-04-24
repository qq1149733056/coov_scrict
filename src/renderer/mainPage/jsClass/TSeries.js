//T系列数据结构
class Tseries{
	constructor() {
	    this.IdentificationCode = [1,6,25,32];    //识别码
	    this.Group = [0,32768,65536,98304];		  //每组间隔数据起始
	    this.Controller = [354,33122,65890,98658]; //手柄键位互换
	    this.Troub = [530,33298,66066,98834];	//连发
	    this.Combination = [640,33408,66176,98944];	//组合
		this.DataSize = 131072; 					//data文件长度
	}
	
	
}
export default Tseries;