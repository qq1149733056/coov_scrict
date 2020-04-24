<template>
	<el-container id="pc_main">
		
		<el-header style="height: 45px;color: white;padding-top: 8px;">
			
			<el-row style="height: 30px;">
				<el-col style="padding-bottom: 10px;" id="header_dragt" :span="22">
					<div style="display: flex;">
						<img />
						<h4 style="margin-top: 5px;margin-left: 15px;">CoovManager</h4>
					</div>
				</el-col>
				<el-col style="padding-bottom: 10px;" :span="2">
					<div style="margin-top:5px;height: 20px;">
						<i @click="quitApp" style="float: right;" class="el-icon-close icon_main"></i>
						<i @click="minisheize" style="float: right;margin-right: 20px;" class="el-icon-minus icon_main"></i>
					</div>
				</el-col>
				
			</el-row>
		</el-header>
			
		 <Guide :fatherMethod="democlick" v-bind:dialogTag="guidedialogTag" v-show="guideTag"></Guide>
		<mainPage v-bind:productInfo="prouctInfo"  v-bind:devpath="devicePath" 
		v-bind:textName="text" v-show="mainPageTag"></mainPage> 
		<!-- <GuidePage v-show="guideSelect"></GuidePage> -->
	</el-container>
</template>

<script>
	import {ipcRenderer} from 'electron';
	import mainPage from '../mainPage/Main';
	import Guide from '../mainPage/Guide';
	import GuidePage from '../mainPage/guide/GuidePage';
	import init from '../mainPage/mainInit.js';
	import productEntity from '../mainPage/jsClass/product.js';
	import productJson from '../json/productJson.json';
	import shareData from '../mainPage/jsClass/shareData.js'
	const usb = require('usb');
	const fs = require('fs');
	const crypto = require('crypto');
	const guideinit = new init();
	const productEn =productEntity.getInstance();
	//const serialPort = require('serialport');
	const HID = require('node-hid');
	const devices =HID.devices();
	const diskinfo = require('node-disk-info');
	export default {
	  name: 'pcMain',
	  data() {
	    return {
	      guideTag: true,
	      mainPageTag: false,
		  guideSelect:true,
	      guidedialogTag: true,
	      text:'default',
		  devicePath:"erro",
		  prouctInfo:{massage:"111"},
		  vdevices:devices,
		   vShareData: shareData.getInstance(),
		   vdiskinfo:diskinfo,
	    };
	  },
	  components: {
	    [mainPage.name]: mainPage,
	    [Guide.name]: Guide,
		[GuidePage.name]:GuidePage,
		
	  },
	  methods: {
	    handleClose(done) {
	      this.$confirm('确认关闭？')
	        .then((_) => {
	          done();
	        })
	        .catch((_) => {});
	    },
	    quitApp() {
	       ipcRenderer.send('close');
	

	    },
		minisheize(){
			ipcRenderer.send('minisize');
		},
		democlick(){
			 guideinit.showLetter(this);
		}
	  },
	  mounted() {
		 // let devXbox = new HID.HID(this.vdevices[0].path);
		 // devXbox.on('data', function(data) {
			//  console.log(data)
		 // } )
		  
		  
		  
	    const that = this;
	    const arr = guideinit.showLetter(that);
	    usb.on('attach', (device) => { 
			setTimeout(function(){
				 guideinit.showLetter(that);
			},2000) 
	    
			
	    }); 
		usb.on('detach', function(device) { 
			
			that.devicePath="erro";
			that.text="default";
			  that.$notify.info({
			          title: '设备已断开',
			          message: 'device Off||设备断开',
					  duration:2000
			        });
			
			
		});
	  },
	  computed: {
	    getStoreItem() { 
	      return this.$store.state.guide;
	    },
	  },
	  watch: {
		text(val){
			if(val=="default"){
				let that =this;
				setTimeout(function(){
					that.guideTag = true;
					that.mainPageTag = false;
					that.guidedialogTag = true;
					//productEn.getEntity(this.text);	
				},3000)
			}
		},
	    getStoreItem() {  
	      //productEn.getEntity(this.text);
		  this.vShareData.name = this.text;
		  this.prouctInfo = productEn.getEntity(this.text);
	      this.guideTag = false;
	      this.mainPageTag = true;
	      this.guidedialogTag = false;
		  console.log(this.text);
		  console.log(this.devicePath);
		  console.log(this.prouctInfo.name);
	    },
	  },


	};
</script>

<style>
	.el-header {
		background: url(../../../static/img/brcolor/TOP_img.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		
	}

	#header_dragt {
		-webkit-app-region: drag;
	}

	.title_h4 {
		color: gray;
	}

	.icon_main:hover {
		background: skyblue;
	}

	#pc_main {
		overflow: hidden;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
	}

	.language li {
		margin-top: 10px;
	}

	.language li button {
		width: 80px;
	}

	#return_page:hover {
		background: skyblue;
	}
</style>
