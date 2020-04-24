class dataManangerJs{
	constructor(that) {
	    this.that = that;
	}
	getcode(proName){
		if(proName == "WinBoxP1APEX") {
		    return 1;
		}
		else if(proName == "WinBoxP1APEXF") {
		    return 1;
		}
		else if(proName == "WinBoxP1Pro") {
		    return 3;
		}
		else if(proName == "WinBoxP1ProF") {
		    return 4;
		}
		else if(proName == "N100Plus") {
		    return 5;
		}
		else if(proName == "T100") {
		    return 6;
		}else if(proName == "Box Xbox One"){
		    return 9;
		}else if(proName == "T100S"){
		    return 10;
		}else if(proName == "N100S"){
		    return 255;
		}else if(proName == "DK40"){
			 return 11;
		}
		else {
		    return 255;
		}
	}
	
	getDataArr(){
		let that = this.that;
		return [that.vaxios.get(that.vscrpitjson.baseUrl + 
		that.vscrpitjson.scriptshare.getAllScriptshare),
		that.vaxios.get(that.vscrpitjson.baseUrl + 
		that.vscrpitjson.firmwareshare.getAllFirmwareshare)]
		
	}
	
	getDataCode(proName){
		if(proName=="T100S"||proName=="Dk40"){
			return 2
		}else {
			return 1
		}
	}
	
	InitData(loading){
		let that = this.that;
		let fithat = this;
		let tag = this.getDataCode(that.textName);
		this.that.vaxios.all(this.getDataArr()).then(
		this.that.vaxios.spread((scriptData,FirmwareData) => {
				
			   let scriptDataarr = scriptData.data.return;
			   let temparr = [];
			   	if (tag == 1) {
					
			   		
					let scd = [];
					for (let i = 0; i < scriptDataarr.length; i++) {
						if (scriptDataarr[i].type == this.getcode(that.textName)) {
							scd.push(scriptDataarr[i]);
						}
						console.log(scriptDataarr[i].type)
					}
					that.scData = scd;
			   	} else {
			   		for (let i = 0; i < scriptDataarr.length; i++) {
			   			if (scriptDataarr[i].type == 10) {
			   				temparr.push(scriptDataarr[i]);
			   			}
			   		}
			   				that.scData = temparr;
			   		
			   	}
				
			 let  FirmwareDataarr = FirmwareData.data.return;
			 let  code = fithat.getcode(that.textName)
			 let temparr2 = [];		 	
			 for (let i = 0; i < FirmwareDataarr.length; i++) {
			 	if (FirmwareDataarr[i].type == code) {
			 		temparr2.push(FirmwareDataarr[i]);
						if(FirmwareDataarr[i].useProduct=="195"){
							that.vshareData.resurl = FirmwareDataarr[i].url;
							
						}
			 		}
			 	
			 	}
				that.frData = temparr2;
				
				loading.close();
		    })
		).catch(erro=>{
			console.log(erro)
			loading.close();
			that.$notify({
				title: '提示',
				message: '没有网络连接或服务器异常,请点击刷新网络获取重新获取数据',
				position: 'top-right'
			}); 
		})
	}
}

export default dataManangerJs