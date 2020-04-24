import WinBoxSeries from '../WinBox.js'
class WinboxApex extends WinBoxSeries{
  constructor() {
		super();
	    this.name = 'WinBoxP1APEXF';
		// this.IdentificationCode = [33,7,24,32];
		// this.Group = [0,49152,98304,147456];
		// this.WControllerAddr = [354,49506,98658,147810];
		// this.CombinationAddr=[522,49674,98826,147978];
		this.Dpi,
		this.MouseBord,
		this.ControllerArr,
		this.Troub,
		this.Combination = [[],[],[],0,[]];
		
  }
	 static getInstance=()=> {
	        if (!WinboxApex.instance) {
	            WinboxApex.instance = new WinboxApex();
	            return WinboxApex.instance;
	        }
	        return WinboxApex.instance;
	    }
		

}

export default WinboxApex;
