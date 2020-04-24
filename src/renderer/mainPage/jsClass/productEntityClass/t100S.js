import TSeries from '../TSeries.js'
//T100s产品
class tOneHundredS extends TSeries{
 constructor() {
		super();
	    this.name = 'T100S';
		this.ControllerArr,
		this.Troub,
		this.Combination = [[],0,[]];
  }
	 static getInstance=()=> {
	        if (!tOneHundredS.instance){
	            tOneHundredS.instance = new tOneHundredS();
	            return tOneHundredS.instance;
	        }
	        return tOneHundredS.instance;
	    }
}

export default tOneHundredS;
