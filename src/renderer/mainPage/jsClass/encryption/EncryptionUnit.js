import {IV,KEY} from './Inscription.js';
const crypto = require('crypto');
const fs = require('fs');
const OFFSET = 512;
class encryption{

   static encryptionData=(outbuff)=>{
		  let key = Buffer.concat([Buffer.from(KEY[0], 'hex').reverse(),
		  Buffer.from(KEY[1], 'hex').reverse(),
		  Buffer.from(KEY[2], 'hex').reverse(),
		  Buffer.from(KEY[3], 'hex').reverse(),
		]);
		  let DATABUFF = [];	
		for (let i = 0; i < outbuff.length; i += OFFSET) {
		  let iv1 = parseInt(IV[0], 16) + i;
		  let iv2 = parseInt(IV[1], 16) + i;
		  let iv3 = parseInt(IV[2], 16) + i;
		  let iv4 = parseInt(IV[3], 16) + i;
		  let iv = Buffer.concat([Buffer.from(iv1.toString(16), 'hex').reverse(),
		  Buffer.from(iv2.toString(16), 'hex').reverse(),
		  Buffer.from(iv3.toString(16), 'hex').reverse(),
		  Buffer.from(iv4.toString(16), 'hex').reverse(),
		  ]);
		  let decipher = crypto.createCipheriv('aes-128-cbc', key, iv);
		  decipher.setAutoPadding(false);
		  let data = decipher.update(outbuff.subarray(i, i + OFFSET));
		
		  DATABUFF.push(data);
		}
		return DATABUFF;
	}
	
	static decryptData=(filename)=>{
		
		
		const data = fs.readFileSync(filename);
		let dataMap = new Map();
		let key = Buffer.concat([Buffer.from(KEY[0], 'hex').reverse(),
		  Buffer.from(KEY[1], 'hex').reverse(),
		  Buffer.from(KEY[2], 'hex').reverse(),
		  Buffer.from(KEY[3], 'hex').reverse(),
		]);
		//let arrbuff = [];	
		for (let i = 0; i < data.length; i += OFFSET) {
		  let iv1 = parseInt(IV[0], 16) + i;
		  let iv2 = parseInt(IV[1], 16) + i;
		  let iv3 = parseInt(IV[2], 16) + i;
		  let iv4 = parseInt(IV[3], 16) + i;
		  let iv = Buffer.concat([Buffer.from(iv1.toString(16), 'hex').reverse(),
		  Buffer.from(iv2.toString(16), 'hex').reverse(),
		  Buffer.from(iv3.toString(16), 'hex').reverse(),
		  Buffer.from(iv4.toString(16), 'hex').reverse(),
		  ]);
		  let decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
		  decipher.setAutoPadding(false);
		  let temp = decipher.update(data.subarray(i, i + OFFSET));
		  for(let j=0;j<temp.length;j++){
			  dataMap.set(j+i,temp[j]);
			  //console.log(j+OFFSET)
		  }	
			
		  //arrbuff.push(temp);
		}
		//console.log(dataMap)				
		return dataMap;			
		
	}
	
}

export default encryption;