import WinBoxSeries from '../WinBox.js'
class tOneHundred extends WinBoxSeries{
	constructor() {
		super();
		this.name = "T100"
	    this.Dpi,
	    this.MouseBord,
	    this.ControllerArr,
	    this.Troub,
	    this.Combination = [[],[],[],0,[]];
	}
	
	static getInstance=()=> {
	       if (!tOneHundred.instance) {
	           tOneHundred.instance = new tOneHundred();
	           return tOneHundred.instance;
	       }
	       return tOneHundred.instance;
	   }
}

export default tOneHundred;
