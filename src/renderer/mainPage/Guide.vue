<template>
		<div >
			
			<el-dialog 
			title="引导" 
			:visible.sync="dialogTag" 
			width="90%"
			style="background:url(static/img/brcolor/timg.jpg);margin:50px 2px 2px 2px;"
			 center
			 :modal="false"
			 :before-close="closeDialog"
			 :modal-append-to-body="false"
			 >
			 
			 <div style="margin-bottom: 10px;text-align: center;">
				 <!-- <el-button type="primary">中文</el-button>
				  <el-button type="primary">English</el-button>
				   <el-button type="primary">日本語</el-button> -->
				   <el-button :disabled="disbt" type="danger"  @click="prantClick" >无法检测设备请点击</el-button><span style="font-size: 20px;"> ({{numa}})</span>
			 </div>
					<div style="background: gainsboro;justify-content: space-around;
					width: 100%;
					display: flex;
					border:solid 1px lightsteelblue;
					height: 400px;overflow-y: auto;flex-wrap: wrap;padding-top:5px;">
						
						<div   v-for="(value,index) in imgsrc">
						<el-card style="width: 260px;margin:5px 5px 5px 5px;"  :body-style="{ padding: '5px' ,}">
							<img :src="value" class="image">
							<div style="padding: 14px;text-align: center;">
								<span>{{productName[index]}}</span>
								<div class="bottom clearfix">
									<el-button @click="open1(productName[index])" type="warning" class="button">点击查看引导</el-button>
								</div>
							</div>
						</el-card>
					</div>
					</div>
			</el-dialog>
		</div>
</template>

<script>

	import mainPage from '../mainPage/Main';
	import imgsrcs from '../json/imgsrc.json';
	import { ipcRenderer	} from 'electron';
	
	
	export default {
	  name: 'Guide',
	  data() {
	    return {
	      text: 'T100',
	      imgsrc: imgsrcs.product,
		  productName:["N100Plus","T100s","WinboxApex","WinboxPro"],
		  numa:6,
		  disbt:true,
	    };
	  },
	  mounted() {
	  	let setIntervalId = setInterval(()=>{
			this.numa--;
			if(this.numa==0){
				this.disbt = false;
				clearInterval(setIntervalId);
				 
			}
		},1000);
		
	  },
	  props: {
	    dialogTag: {
	      type: Boolean,
	      default: true,
	    },
		fatherMethod: {
		        type: Function,
		        default: null
		      }
	  },
	  
	  methods: {
		 prantClick(){
			this.fatherMethod();
		 },
	    closeDialog(done) {
				  this.$confirm('确认关闭？')
				          .then((_) => {
				            done();
	          ipcRenderer.send('close');
				          })
				          .catch((_) => {});
	    },
		open1(name){
			const h = this.$createElement;
			let sucess = "";
			if(name==this.productName[0]){
				sucess = "按住设备红色按钮，接入电脑后松开"
			}else if(name==this.productName[1]){
				sucess = "按住设备S按钮，接入电脑后松开"
			}else if(name==this.productName[2]){
				sucess = "按住设备H2按钮，接入电脑后松开"
			}else if(name==this.productName[3]){
				sucess = "按住设备H3按钮，接入电脑后松开"
			}
			  this.$notify({
			          title: '连接',
			           dangerouslyUseHTMLString: true,
			          message: '<strong> <i >'+sucess+'</i> </strong>',
					  offset:80
			        });
		}
	  },
		
	};
</script>

<style>
	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}


	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}


</style>
