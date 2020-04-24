import WinBoxSeries from '../WinBox.js'
class oneHundredPlus extends WinBoxSeries{
	constructor() {
	    super();
		this.name = "N100Plus"
		this.Dpi,
		this.MouseBord,
		this.ControllerArr,
		this.Troub,
		this.Combination = [[],[],[],0,[]];
	}
	
	static getInstance=()=> {
	       if (!oneHundredPlus.instance) {
	           oneHundredPlus.instance = new oneHundredPlus();
	           return oneHundredPlus.instance;
	       }
	       return oneHundredPlus.instance;
	   }
	
}

export default oneHundredPlus;
