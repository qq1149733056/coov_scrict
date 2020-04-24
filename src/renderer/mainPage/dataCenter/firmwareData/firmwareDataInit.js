class firmwareDataInit{
	
	constructor(that) {
	    this.thatis = that;
	}
	getcode(proName){
		if(proName == "WinBoxP1APEX") {
		    return 1;
		}
		else if(proName == "WinBoxP1APEXF") {
		    return 2;
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
		}
		else {
		    return 255;
		}
	}
	Init() {
		let that = this.thatis;
		let fithat = this;
		
		let tag = 0;
		if (that.textName == "T100S") {
			tag = 2;
		} else {
			tag = 1;
		}
	
		that.vaxios.get(that.vscrpitjson.baseUrl + that.vscrpitjson.firmwareshare.getAllFirmwareshare)
			.then(function(response) {
				let arr = response.data.return;
				let  code = fithat.getcode(that.textName)
			
				for (let i = 0; i < arr.length; i++) {
					if (arr[i].type == code) {
						that.dataArr.push(arr[i]);
						
						}
					
					}
				
			})
			.catch(function(error) {
				console.log(error)
			});
	}
}

export default firmwareDataInit