<template>
	<div id="xmlj">
		<div style="display: flex;width: 100%;">
			
			<div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
			<div>
				<el-button @click="jsonOr">转化</el-button>
			</div>
			<div style="margin-left: 50px;" >
				<el-dropdown @command="handleCommand">
				    <el-button type="primary">
				     {{modl}}<i class="el-icon-arrow-down el-icon--right"></i>
				    </el-button>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item command="1">1</el-dropdown-item>
				    <el-dropdown-item command="2">2</el-dropdown-item>

				  </el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>

<script>
	const fs = require('fs');
	const fxp = require("fast-xml-parser");
	var os = require('os');
	export default{
		name:"xmlJson",
		data(){
			return{
				 input: '',
				 modl:"1",
				 tag:true,
			}
		},
		methods:{
			 handleCommand(command) {
			       if(command=="1"){
					    this.tag =true;
						
				   }else{
					    this.tag =false;
				   }
				   this.modl = command;
			      },
			jsonOr(){
				let str = fs.readFileSync('xml/taginfo_scan.xml',"utf8");
				let xml2json = fxp.parse(str);
			
				let hread = xml2json.scan.section[2].subsection[4].block.content.hexoutput;
					console.log(hread)
				 let name = this.input.split("|");
				 let arrbuff = [];
				 let arr = xml2json.scan.section[3].subsection[3].block;
				 let jsonarr = [];
				 let temphread1 = "";

				if(this.tag){
					hread = hread.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');
					 hread = hread.replace(/[\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]]/)
					 hread = hread.replace(/\s/g, "");
				}else{
					
				temphread1 = hread[1].replace(/[\'\"\\\/\b\f\n\r\t]/g, '');
				 temphread1 = temphread1.replace(/[\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]]/)
				 hread = temphread1.replace(/\s/g, "");
				 
					
				}
				
				
				let hreadarr = hread.split(":");
				
				let tempstr =  hreadarr[1].substring(2, hreadarr[1].length - 2)+
				hreadarr[2].substring(2, hreadarr[2].length)
				
				 let fWrite = fs.createWriteStream('txtfile/'+name[0]+".amiibo");
				 
				 fWrite.write(name[0]+"|"+name[1]+ '\n');
				 fWrite.write(tempstr+ '\n');
				for(let i=0;i<arr.length;i+=4){
					let temp = "";
					for(let j=0;j<4;j++){
						temp+=arr[i+j].data+" ";
						if(i==arr.length-4){
							temp=arr[i].data+" 00 00 00 00 00 00 00 00 00 00"+'\n';
						}
					}
					temp+='\n'
					jsonarr.push(temp.replace(/[\r\n]/g, ""))
					fWrite.write(temp);
				}
				let jsonObj = {
					
				}
				jsonObj.chname = name[0];
				jsonObj.enname = name[1];
				jsonObj.data = jsonarr;
				jsonObj.hread = tempstr;
				fs.writeFile('json/'+name[0]+".json",JSON.stringify(jsonObj) , (error) => {
				  if (error) return console.log(`写入文件失败,原因是${error.message}`);
				  console.log('写入成功');
				});
				this.$message('ok');
				
			}
		}
	}
</script>

<style>
	#xmlj{
		height: 800px;
		width: 100%;
		
	}
</style>
