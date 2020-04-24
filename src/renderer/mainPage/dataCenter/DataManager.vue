<template>
	<el-container>
		<el-aside style="width:230px;position: relative;">
			<el-row>
				<el-col :span="12">
					<el-menu @select="selectData" text-color="#FFFFFF" active-text-color="#000000" style="background: #4e4e4e;text-align: center;width: 230px;height: 690px;">
						<el-menu-item  :disabled="advmenu[0]" index="0">
						<span >{{languageJson.dataManager.scriptData}}</span>
						</el-menu-item>
						<el-menu-item :disabled="advmenu[1]" index="1">
							<span >{{languageJson.dataManager.firmwareData}}</span>	
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</el-aside>
		<el-container :style="{backgroundImage: 'url(' + imgjson.MapKeybackgroundimg + ')' }">
			<el-main>

					<div  v-show="advfunui[0]">
						<ScriptData  
						v-bind:scData="scData"
						 v-bind:devpath="devpath"  
						 v-bind:tabGroup="tabGroup" 
						 v-bind:textName="textName" 
						 v-bind:languageJson="languageJson" 
						 v-bind:imgjson="imgjson">
							
						</ScriptData>
					</div>
					<div  v-show="advfunui[1]">
						<FirmwareData
						v-bind:frData="frData"
						 v-bind:devpath="devpath" 
						  v-bind:tabGroup="tabGroup"
						   v-bind:textName="textName"
							v-bind:languageJson="languageJson" 
							v-bind:imgjson="imgjson">
						</FirmwareData>
					</div>

			</el-main>
		</el-container>
	</el-container>
</template>


<script>
	import ScriptData from '../dataCenter/scriptData/scriptData'
	import FirmwareData from '../dataCenter/firmwareData/firmwareData'
	import scrpitjson from './ScriptApi'
	import dataManager from './dataManangerJs.js'
	import shareData from '../jsClass/shareData.js'
	const axios = require('axios');
	const fs = require('fs');
	const request = require('request');
	
	export default {
	  name: 'DataManager', // advancedFunctions 高级功能
	  data() {
	    return {
	      advmenu: [false, false],
	      advfunui: [true, false],
		  scriptTag: "/scriptshare_files/",
		  firmwaresharefiles: "/firmwareshare_files/",
		  vaxios:axios,
		  vscrpitjson:scrpitjson,
		  frData:[],
		  scData:[],
		  vdataManager:new dataManager(this),
		  vshareData:shareData.getInstance(),
	    };
	  },
	  watch:{
		  textName(val){
			  let that = this;
			  if(val=="default"){
			  	this.frData = [];
				this.scData = [];
			  }else{
				  let loading = this.$loading({
				           lock: true,
				           text: 'Loading',
				           spinner: 'el-icon-loading',
				           background: 'rgba(0, 0, 0, 0.7)'
				         });
				setTimeout(function(){ 
					that.vdataManager.InitData(loading);
				}, 1000);
				  
			
			  }
		  }
	  },
	  methods: {
	    selectData(index) {
	      if (index == '0') {
	        this.advfunui = [true, false, false];
	      } else {
	        this.advfunui = [false, true, false];
	      }
	    },
		readNetData(loading){
			this.vdataManager.InitData(loading);
		}
	
	  },
	
	  props: {
	    imgjson: {
	      type: Object,
	      default: null,
	
	    },
	    languageJson: {
	      type: Object,
	      default: null,
	    },
	    textName: {
	      type: String,
	      default: '',
	    },
	    tabGroup: {
	      type: Number,
	      default: 0,
	    },
		devpath: {
		  type: String,
		  default: '',
		},
	  },
	  components: {
			[ScriptData.name]:ScriptData,
			[FirmwareData.name]:FirmwareData
	  }, 
	};
	
</script>

<style>
	.el-menu-item.is-active{
		background: #409EFF;
	}
	li.el-menu-item:hover{
	     background-color: #409EFF !important; 
	}
</style>
