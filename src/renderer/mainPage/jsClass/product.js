import winboxApex from '../jsClass/productEntityClass/winboxApex';
import winboxPro from '../jsClass/productEntityClass/winboxPro';
import oneHundredPlus from '../jsClass/productEntityClass/n100Plus';
import tOneHundred from '../jsClass/productEntityClass/t100';
import tOneHundredS from '../jsClass/productEntityClass/t100S';
class Product {
  constructor() {
    this.winboxApexName = 'WinBoxP1APEX';
    this.winboxApexFName = 'WinBoxP1APEXF';
    this.winboxProName = 'WinBoxP1Pro';
    this.winboxProFName = 'WinBoxP1ProF';
    this.onePlus = 'N100Plus';
    this.tone = 'T100';
    this.toneS = 'T100S';
	this.productCoov;
  }
	static getInstance() {
	       if (!Product.instance) {
	           Product.instance = new Product();
	           return Product.instance;
	       }
	       return Product.instance;
	   }
	
	getProductCoov(){
		return this.productCoov;
	}
	
  getEntity(name) {
	  if (name == this.winboxApexName) {
		  this.productCoov= winboxApex.getInstance();
	  } else if (name == this.winboxApexFName) {
		  this.productCoov= winboxApex.getInstance();
	  } else if (name == this.winboxProName) {
		  this.productCoov= winboxPro.getInstance();
	  } else if (name == this.onePlus) {
		  this.productCoov= oneHundredPlus.getInstance();
	  } else if (name == this.tone) {
		  this.productCoov= tOneHundred.getInstance();
	  } else if (name == this.toneS) {
		  this.productCoov= tOneHundredS.getInstance();
	  }
		  return this.productCoov;
  }
}
export default Product;

