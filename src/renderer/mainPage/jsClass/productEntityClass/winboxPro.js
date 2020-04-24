import WinBoxSeries from '../WinBox.js'

class winboxPro extends WinBoxSeries{
	constructor() {
	    super();
		this.name = 'WinBoxP1Pro';
		this.Dpi,
		this.MouseBord,
		this.ControllerArr,
		this.Troub,
		this.Combination = [[],[],[],0,[]];
	}
	static getInstance=()=> {
	       if (!winboxPro.instance) {
	           winboxPro.instance = new winboxPro();
	           return winboxPro.instance;
	       }
	       return winboxPro.instance;
	   }
}

export default winboxPro;
