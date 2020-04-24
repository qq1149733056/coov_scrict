class scriptDataInit {
	constructor(that) {
		this.thatis = that;
	}

	Init() {
		let that = this.thatis;				
		let tag = 0;
		if (that.textName == "T100S") {
			tag = 2;
		} else {
			tag = 1;
		}

		that.vaxios.get(that.vscrpitjson.baseUrl + that.vscrpitjson.scriptshare.getAllScriptshare)
			.then(function(response) {
				let arr = response.data.return;
				
				if (tag == 1) {
					that.dataArr = arr;

				} else {
					for (let i = 0; i < arr.length; i++) {
						if (arr[i].type == 2) {
							that.dataArr.push(arr[i]);
						}
					}
					
				}
			})
			.catch(function(error) {
				console.log(error)
			});
	}
}
export default scriptDataInit
