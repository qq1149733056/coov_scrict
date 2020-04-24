//winbox系列数据结构
class WinBoxSeries{
	
	constructor() {
	    this.IdentificationCode = [33,7,24,32];  //识别码 没四组都要设置	
	    this.Group = [0,49152,98304,147456];	//每一组数据起始位置
	    this.ControllerAddr = [354,49506,98658,147810];	//手柄按键交换地址
	    this.Troub=[522,49674,98826,147978];		//连击地址
		this.DataSize = 262144;								//data文件长度大小
	}
	
	//这是键盘地址
	 getKeyBoardCodeByName=(keyName)=>
	{	
	
		if (keyName == "A")
		{
			return 400;			//400
		}
		else if( keyName == "B")
		{
			return 401;
		}
		
		else if( keyName == "C")
		{
			return 402;
		}
		else if( keyName == "D")
		{
			return 403;
		}
		else if( keyName == "E")
		{
			return 404;
		}
		else if( keyName == "F")
		{
			return 405;
		}
		else if( keyName == "G")
		{
			return 406;
		}
		else if( keyName == "H")
		{
			return 407;
		}
		else if (keyName == "I")
		{
			return 408;
		}
		else if (keyName == "J")
		{
			return 409;
		}
		else if( keyName == "K")
		{
			return 410;
		}
		else if( keyName == "L")
		{
			return 411;
		}
		else if (keyName == "M")
		{
			return 412;
		}
		else if( keyName == "N")
		{
			return 413;
		}
		else if( keyName == "O")
		{
			return 414;
		}
		else if( keyName == "P")
		{
			return 415;
		}
		else if (keyName == "Q")
		{
			return 416;
		}
		else if (keyName == "R")
		{
			return 417;
		}
		else if( keyName == "S")
		{
			return 418;
		}
		else if( keyName == "T")
		{
			return 419;
		}
		else if( keyName == "U")
		{
			return 420;
		}
		else if( keyName == "V")
		{
			return 421;
		}
		else if( keyName == "W")
		{
			return 422;
		}
		else if( keyName == "X")
		{
			return 423;
		}
		else if( keyName == "Y")
		{
			return 424;
		}
		else if( keyName == "Z")
		{
			return 425;
		}
	
		else if( keyName == "1")
		{
			return 426;
		}
		else if( keyName == "2")
		{
			return 427;
		}
		else if( keyName == "3")
		{
			return 428;
		}
		else if (keyName == "4")
		{
			return 429;
		}
		else if( keyName == "5")
		{
			return 430;
		}
		else if( keyName == "6")
		{
			return 431;
		}
		else if( keyName == "7")
		{
			return 432;
		}
		else if( keyName == "8")
		{
			return 433;
		}
		else if( keyName == "9")
		{
			return 434;
		}
		else if (keyName == "0")
		{
			return 435;
		}
	
		else if( keyName == "Enter")
		{
			return 436;
		}
		else if( keyName == "Esc")
		{
			return 437;
		}
		else if( keyName == "Delete")
		{
			return 438;
		}
		else if( keyName == "Tab")
		{
			return 439;
		}
		else if( keyName == "Space")
		{
			return 440;
		}
		else if (keyName == "-")
		{
			return 441;
		}
		else if (keyName == "=")
		{
			return 442;
		}
		else if (keyName == "[")
		{
			return 443;
		}
		else if (keyName == "]")
		{
			return 444;
		}
		else if (keyName == "\\")
		{
			return 445;
		}
		else if (keyName == "50")
		{
			return 446;
		}
		else if (keyName == ";")
		{
			return 447;
		}
		else if (keyName == "'")
		{
			return 448;
		}
		else if (keyName == "`")
		{
			return 449;
		}
		else if (keyName == ",")
		{
			return 450;
		}
		else if (keyName == ".")
		{
			return 451;
		}
		else if (keyName == "/")
		{
			return 452;
		}
		else if (keyName == "Caps_Lock")
		{
			return 453;
		}
		else if (keyName == "F1")
		{
			return 454;
		}
		else if (keyName == "F2")
		{
			return 455;
		}
		else if (keyName == "F3")
		{
			return 456;
		}
		else if (keyName == "F4")
		{
			return 457;
		}
		else if (keyName == "F5")
		{
			return 458;
		}
		else if (keyName == "F6")
		{
			return 459;
		}
		else if (keyName == "F7")
		{
			return 460;
		}
		else if (keyName == "F8")
		{
			return 461;
		}
		else if (keyName == "F9")
		{
			return 462;
		}
		else if (keyName == "F10")
		{
			return 463;
		}
		else if (keyName == "F11")
		{
			return 464;
		}
		else if (keyName == "F12")
		{
			return 465;
		}
		else if (keyName == "Print")
		{
			return 466;
		}
		else if (keyName == "ScrollLock")
		{
			return 467;
		}
		else if (keyName == "Pause")
		{
			return 468;
		}
		else if (keyName == "Insert")
		{
			return 469;
		}
		else if (keyName == "Home")
		{
			return 470;
		}
		else if (keyName == "PageUp")
		{
			return 471;
		}
		else if (keyName == "76")
		{
			return 472;
		}
		else if (keyName == "End")
		{
			return 473;
		}
		else if (keyName == "PageDown")
		{
			return 474;
		}
		else if (keyName == "Right")
		{
			return 475;
		}
		else if (keyName == "Left")
		{
			return 476;
		}
		else if (keyName == "Down")
		{
			return 477;
		}
		else if (keyName == "Up")
		{
			return 478;
		}
		else if (keyName == "NumLock")
		{
			return 479;
		}
		else if (keyName == "Num_/")
		{
			return 480;
		}
		else if (keyName == "Num_*")
		{
			return 481;
		}
		else if (keyName == "Num_-")
		{
			return 482;
		}
		else if (keyName == "Num_+")
		{
			return 483;
		}
		else if (keyName == "Num_Enter")
		{
			return 484;
		}
		else if (keyName == "Num_1")
		{
			return 485;
		}
		else if (keyName == "Num_2")
		{
			return 486;
		}
		else if (keyName == "Num_3")
		{
			return 487;
		}
		else if (keyName == "Num_4")
		{
			return 488;
		}
		else if (keyName == "Num_5")
		{
			return 489;
		}
		else if (keyName == "Num_6")
		{
			return 490;
		}
		else if (keyName == "Num_7")
		{
			return 491;
		}
		else if (keyName == "Num_8")
		{
			return 492;
		}
		else if (keyName == "Num_9")
		{
			return 493;
		}
		else if (keyName == "Num_keyName")
		{
			return 494;
		}
		else if (keyName == "Num_.")
		{
			return 495;
		}
	
		// 键盘功能键
		else if (keyName == "Ctrl_L")
		{
			return 498;
		}
		else if (keyName == "Shift_L")
		{
			return 499;
		}
		else if (keyName == "Alt_L")
		{
			return 500;
		}
		else if (keyName == "Win_L")
		{
			return 501;
		}
		else if (keyName == "Ctrl_R")
		{
			return 502;
		}
		else if (keyName == "Shift_R")
		{
			return 503;
		}
		else if (keyName == "Alt_R")
		{
			return 504;
		}
		else if (keyName == "Win_R")
		{
			return 505;
		}
		
		//鼠标
		else if( keyName == "鼠标左键")
		{
			return 384;
		}
		else if( keyName == "鼠标右键")
		{
			return 385;
		}
		else if( keyName == "鼠标滚轮")
		{
			return 386;
		}
		else if( keyName == "鼠标侧键1")
		{
			return 387;
		}
		else if( keyName == "鼠标侧键2")
		{
			return 388;
		}
		else
		{
			return -255;
		}
	}
	
	//这是键盘地址
	 getKeyBoardCode=(keyName)=>
	{	
	
		if (keyName == 400)
		{
			return "A";			//400
		}
		else if( keyName == 401)
		{
			return "B";
		}
		
		else if( keyName == 402)
		{
			return "C";
		}
		else if( keyName == 403)
		{
			return "D";
		}
		else if( keyName == 404)
		{
			return "E";
		}
		else if( keyName == 405)
		{
			return "F";
		}
		else if( keyName ==406 )
		{
			return "G";
		}
		else if( keyName ==407 )
		{
			return "H";
		}
		else if (keyName == 408)
		{
			return "I";
		}
		else if (keyName == 409)
		{
			return "J";
		}
		else if( keyName == 410)
		{
			return "K";
		}
		else if( keyName == 411)
		{
			return "L";
		}
		else if (keyName == 412)
		{
			return "M";
		}
		else if( keyName == 413)
		{
			return "N";
		}
		else if( keyName == 414)
		{
			return "O";
		}
		else if( keyName == 415)
		{
			return "P";
		}
		else if (keyName == 416)
		{
			return "Q";
		}
		else if (keyName == 417)
		{
			return "R";
		}
		else if( keyName == 418)
		{
			return "S";
		}
		else if( keyName == 419)
		{
			return "T";
		}
		else if( keyName == 420)
		{
			return "U";
		}
		else if( keyName == 421)
		{
			return "V";
		}
		else if( keyName == 422)
		{
			return "W";
		}
		else if( keyName == 423)
		{
			return "X";
		}
		else if( keyName == 424)
		{
			return "Y";
		}
		else if( keyName == 425)
		{
			return "Z";
		}
	
		else if( keyName == 426)
		{
			return "1";
		}
		else if( keyName == 427)
		{
			return "2";
		}
		else if( keyName == 428)
		{
			return "3";
		}
		else if (keyName == 429)
		{
			return "4";
		}
		else if( keyName == 430)
		{
			return "5";
		}
		else if( keyName == 431)
		{
			return "6";
		}
		else if( keyName == 432)
		{
			return "7";
		}
		else if( keyName == 433)
		{
			return "8";
		}
		else if( keyName == 434)
		{
			return "9";
		}
		else if (keyName == 435)
		{
			return "0";
		}
	
		else if( keyName == 436)
		{
			return "Enter";
		}
		else if( keyName == 437)
		{
			return "Esc";
		}
		else if( keyName == 438)
		{
			return "Delete";
		}
		else if( keyName == 439)
		{
			return "Tab";
		}
		else if( keyName == 440)
		{
			return "Space";
		}
		else if (keyName == 441)
		{
			return "-";
		}
		else if (keyName == 442)
		{
			return "=";
		}
		else if (keyName == 443)
		{
			return "[";
		}
		else if (keyName == 444)
		{
			return "]";
		}
		else if (keyName == 445)
		{
			return "\\";
		}
		else if (keyName == 446)
		{
			return "50";
		}
		else if (keyName == 447)
		{
			return ";";
		}
		else if (keyName == 448)
		{
			return "'";
		}
		else if (keyName == 449)
		{
			return "`";
		}
		else if (keyName == 450)
		{
			return ",";
		}
		else if (keyName == 451)
		{
			return ".";
		}
		else if (keyName == 452)
		{
			return "/";
		}
		else if (keyName == 453)
		{
			return "Caps_Lock";
		}
		else if (keyName == 454)
		{
			return "F1";
		}
		else if (keyName == 455)
		{
			return "F2";
		}
		else if (keyName == 456)
		{
			return "F3";
		}
		else if (keyName == 457)
		{
			return "F4";
		}
		else if (keyName == 458)
		{
			return "F5";
		}
		else if (keyName == 459)
		{
			return "F6";
		}
		else if (keyName == 460)
		{
			return "F7";
		}
		else if (keyName == 461)
		{
			return "F8";
		}
		else if (keyName == 462)
		{
			return "F9";
		}
		else if (keyName == 463)
		{
			return "F10";
		}
		else if (keyName ==464 )
		{
			return "F11";
		}
		else if (keyName == 465)
		{
			return "F12";
		}
		else if (keyName == 466)
		{
			return "Print";
		}
		else if (keyName == 467)
		{
			return "ScrollLock";
		}
		else if (keyName == 468)
		{
			return "Pause";
		}
		else if (keyName == 469)
		{
			return "Insert";
		}
		else if (keyName == 470)
		{
			return "Home";
		}
		else if (keyName == 471)
		{
			return "PageUp";
		}
		else if (keyName == 472)
		{
			return "76";
		}
		else if (keyName == 473)
		{
			return "End";
		}
		else if (keyName == 474)
		{
			return "PageDown";
		}
		else if (keyName == 475)
		{
			return "Right";
		}
		else if (keyName == 476)
		{
			return "Left";
		}
		else if (keyName == 477)
		{
			return "Down";
		}
		else if (keyName == 478)
		{
			return "Up";
		}
		else if (keyName == 479)
		{
			return "NumLock";
		}
		else if (keyName == 480)
		{
			return "Num_/";
		}
		else if (keyName == 481)
		{
			return "Num_*";
		}
		else if (keyName == 482)
		{
			return "Num_-";
		}
		else if (keyName == 483)
		{
			return "Num_+";
		}
		else if (keyName == 484)
		{
			return "Num_Enter";
		}
		else if (keyName == 485)
		{
			return "Num_1";
		}
		else if (keyName == 486)
		{
			return "Num_2";
		}
		else if (keyName == 487)
		{
			return "Num_3";
		}
		else if (keyName == 488)
		{
			return "Num_4";
		}
		else if (keyName == 489)
		{
			return "Num_5";
		}
		else if (keyName == 490)
		{
			return "Num_6";
		}
		else if (keyName == 491)
		{
			return "Num_7";
		}
		else if (keyName == 492)
		{
			return "Num_8";
		}
		else if (keyName == 493)
		{
			return "Num_9";
		}
		else if (keyName == 494)
		{
			return "Num_keyName";
		}
		else if (keyName == 495)
		{
			return "Num_.";
		}
	
		// 键盘功能键
		else if (keyName == 498)
		{
			return "Ctrl_L";
		}
		else if (keyName == 499)
		{
			return "Shift_L";
		}
		else if (keyName ==500 )
		{
			return "Alt_L";
		}
		else if (keyName == 501)
		{
			return "Win_L";
		}
		else if (keyName == 502)
		{
			return "Ctrl_R";
		}
		else if (keyName == 503)
		{
			return "Shift_R";
		}
		else if (keyName == 504)
		{
			return "Alt_R";
		}
		else if (keyName == 505)
		{
			return "Win_R";
		}
		
		//鼠标
		else if( keyName == 384)
		{
			return "鼠标左键";
		}
		else if( keyName ==385 )
		{
			return "鼠标右键";
		}
		else if( keyName ==386 )
		{
			return "鼠标滚轮";
		}
		else if( keyName ==387 )
		{
			return "鼠标侧键1";
		}
		else if( keyName ==388 )
		{
			return "鼠标侧键2";
		}
		else
		{
			return -255;
		}
	}


	
}
export default WinBoxSeries;