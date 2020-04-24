class mapKeyCode{
	constructor(json) {
	    this.json = json;
		this.size = 256+140;   //396
		
	}
	
	getGroupArr(arr){
		let that = this;
		let groupData = [];
		for(let i=0;i<arr.length;i++){
			let groupArr = arr[i];
			that.getDataArr(groupArr,groupData,that);
		}
		return groupData;
	}
	
	getDataArr(groupArr,groupData,that){
		for(let i=0;i<groupArr.length;i++){
			let	con = {
				group:0,
				time:1,
				sig:252,
				id:0,
				buttonid:[],
				lt:0,
				rt:0
			}
			let datAarr = groupArr[i];
			let zero = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			let id = 0;
			for(let n=0;n<datAarr.length;n++){
				if(datAarr[n]!=-2&&datAarr[n]<12){
					zero[datAarr[n]] = 1;
				}else if(datAarr[n]!=-2&&datAarr[n]>=12){
					if(datAarr[n]==12){
						
						con.lt = 120;
					}else{
						
						con.rt = 125;
					}
				
				}
			}
			that.getByte(zero,id,con,groupData);
			
		}
	}
	
	getByte(zero,id,con,groupData){
		for(let k=0;k<zero.join("").length/8;k++){
		
			let index = k*8;
			let temp = zero.join("").substring(index,index+8);
			temp = parseInt(temp.split("").reverse().join(""),2);
			con.buttonid.push(temp);
			if(temp!=0){
				
				if(j>=13){
					id = j+4;
				}else{
					id = j;
				}
				con.id= id+1;
				
			}
				
		}
		if(con.id!=0){
			con.group = i+1;
			groupData.push(con);
			
		}
	}
	
   getName(index){
		return this.json.mapKey.keyboard[index];
	}
	
	
	 insertStr(soure, start, newStr){
	
	   return soure.slice(0, start) + newStr + soure.slice(start);
	}
	
	 convert(soure,gr){
		let arr = [];
		if(soure.length%2!=0){
			soure+="0";
		}
		for(let i=0;i<soure.length/gr;i++){
			let index = i*gr;
			arr.push(soure.substring(index,index+gr)); 
		}
		return arr.reverse();
	}
	
	
	getKeyBoardCodeByName(keyName)
	{	
	
		if (keyName == "A")
		{
			return 4;
		}
		else if( keyName == "B")
		{
			return 5;
		}
		
		else if( keyName == "C")
		{
			return 6; 
		}
		else if( keyName == "D")
		{
			return 7;
		}
		else if( keyName == "E")
		{
			return 8;
		}
		else if( keyName == "F")
		{
			return 9;
		}
		else if( keyName == "G")
		{
			return 10;
		}
		else if( keyName == "H")
		{
			return 11;
		}
		else if (keyName == "I")
		{
			return 12;
		}
		else if (keyName == "J")
		{
			return 13;
		}
		else if( keyName == "K")
		{
			return 14;
		}
		else if( keyName == "L")
		{
			return 15;
		}
		else if (keyName == "M")
		{
			return 16;
		}
		else if( keyName == "N")
		{
			return 17;
		}
		else if( keyName == "O")
		{
			return 18;
		}
		else if( keyName == "P")
		{
			return 19;
		}
		else if (keyName == "Q")
		{
			return 20;
		}
		else if (keyName == "R")
		{
			return 21;
		}
		else if( keyName == "S")
		{
			return 22;
		}
		else if( keyName == "T")
		{
			return 23;
		}
		else if( keyName == "U")
		{
			return 24;
		}
		else if( keyName == "V")
		{
			return 25;
		}
		else if( keyName == "W")
		{
			return 26;
		}
		else if( keyName == "X")
		{
			return 27;
		}
		else if( keyName == "Y")
		{
			return 28;
		}
		else if( keyName == "Z")
		{
			return 29;
		}
	
		else if( keyName == "1")
		{
			return 30;
		}
		else if( keyName == "2")
		{
			return 31;
		}
		else if( keyName == "3")
		{
			return 32;
		}
		else if (keyName == "4")
		{
			return 33;
		}
		else if( keyName == "5")
		{
			return 34;
		}
		else if( keyName == "6")
		{
			return 35;
		}
		else if( keyName == "7")
		{
			return 36;
		}
		else if( keyName == "8")
		{
			return 37;
		}
		else if( keyName == "9")
		{
			return 38;
		}
		else if (keyName == "0")
		{
			return 39;
		}
	
		else if( keyName == "Enter")
		{
			return 40;
		}
		else if( keyName == "Esc")
		{
			return 41;
		}
		else if( keyName == "Delete")
		{
			return 42;
		}
		else if( keyName == "Tab")
		{
			return 43;
		}
		else if( keyName == "Space")
		{
			return 44;
		}
		else if (keyName == "-")
		{
			return 45;
		}
		else if (keyName == "=")
		{
			return 46;
		}
		else if (keyName == "[")
		{
			return 47;
		}
		else if (keyName == "]")
		{
			return 48;
		}
		else if (keyName == "\\")
		{
			return 49;
		}
		else if (keyName == "50")
		{
			return 50;
		}
		else if (keyName == ";")
		{
			return 51;
		}
		else if (keyName == "'")
		{
			return 52;
		}
		else if (keyName == "`")
		{
			return 53;
		}
		else if (keyName == ",")
		{
			return 54;
		}
		else if (keyName == ".")
		{
			return 55;
		}
		else if (keyName == "/")
		{
			return 56;
		}
		else if (keyName == "Caps_Lock")
		{
			return 57;
		}
		else if (keyName == "F1")
		{
			return 58;
		}
		else if (keyName == "F2")
		{
			return 59;
		}
		else if (keyName == "F3")
		{
			return 60;
		}
		else if (keyName == "F4")
		{
			return 61;
		}
		else if (keyName == "F5")
		{
			return 62;
		}
		else if (keyName == "F6")
		{
			return 63;
		}
		else if (keyName == "F7")
		{
			return 64;
		}
		else if (keyName == "F8")
		{
			return 65;
		}
		else if (keyName == "F9")
		{
			return 66;
		}
		else if (keyName == "F10")
		{
			return 67;
		}
		else if (keyName == "F11")
		{
			return 68;
		}
		else if (keyName == "F12")
		{
			return 69;
		}
		else if (keyName == "Print")
		{
			return 70;
		}
		else if (keyName == "ScrollLock")
		{
			return 71;
		}
		else if (keyName == "Pause")
		{
			return 72;
		}
		else if (keyName == "Insert")
		{
			return 73;
		}
		else if (keyName == "Home")
		{
			return 74;
		}
		else if (keyName == "PageUp")
		{
			return 75;
		}
		else if (keyName == "76")
		{
			return 76;
		}
		else if (keyName == "End")
		{
			return 77;
		}
		else if (keyName == "PageDown")
		{
			return 78;
		}
		else if (keyName == "Right")
		{
			return 79;
		}
		else if (keyName == "Left")
		{
			return 80;
		}
		else if (keyName == "Down")
		{
			return 81;
		}
		else if (keyName == "Up")
		{
			return 82;
		}
		else if (keyName == "NumLock")
		{
			return 83;
		}
		else if (keyName == "Num_/")
		{
			return 84;
		}
		else if (keyName == "Num_*")
		{
			return 85;
		}
		else if (keyName == "Num_-")
		{
			return 86;
		}
		else if (keyName == "Num_+")
		{
			return 87;
		}
		else if (keyName == "Num_Enter")
		{
			return 88;
		}
		else if (keyName == "Num_1")
		{
			return 89;
		}
		else if (keyName == "Num_2")
		{
			return 90;
		}
		else if (keyName == "Num_3")
		{
			return 91;
		}
		else if (keyName == "Num_4")
		{
			return 92;
		}
		else if (keyName == "Num_5")
		{
			return 93;
		}
		else if (keyName == "Num_6")
		{
			return 94;
		}
		else if (keyName == "Num_7")
		{
			return 95;
		}
		else if (keyName == "Num_8")
		{
			return 96;
		}
		else if (keyName == "Num_9")
		{
			return 97;
		}
		else if (keyName == "Num_keyName")
		{
			return 98;
		}
		else if (keyName == "Num_.")
		{
			return 99;
		}
	
		// 键盘功能键
		else if (keyName == "Ctrl_L")
		{
			return 102;
		}
		else if (keyName == "Shift_L")
		{
			return 103;
		}
		else if (keyName == "Alt_L")
		{
			return 104;
		}
		else if (keyName == "Win_L")
		{
			return 105;
		}
		else if (keyName == "Ctrl_R")
		{
			return 106;
		}
		else if (keyName == "Shift_R")
		{
			return 107;
		}
		else if (keyName == "Alt_R")
		{
			return 108;
		}
		else if (keyName == "Win_R")
		{
			return 109;
		}
		
		//鼠标
		else if( keyName == "鼠标左键")
		{
			return -12;
		}
		else if( keyName == "鼠标右键")
		{
			return -11;
		}
		else if( keyName == "鼠标滚轮")
		{
			return -10;
		}
		else if( keyName == "鼠标侧键1")
		{
			return -9;
		}
		else if( keyName == "鼠标侧键2")
		{
			return -8;
		}
		else
		{
			return -255;
		}
	}
	
	
}
export default mapKeyCode