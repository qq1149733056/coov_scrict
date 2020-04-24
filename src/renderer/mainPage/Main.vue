<template>
	<el-container id="pc_main">
		<div style="position: absolute;right: 5px;top: 200px;">
			<ul class="language" style="list-style-type:none">
				<li>
					<el-button @click="openVideo" type="primary">video</el-button>
				</li>
			</ul>
		</div>
		<div style="position: absolute;right: 5px;top: 400px;">
			<ul class="language" style="list-style-type:none">
				<li>
					<el-button type="info" @click="slecterLanguage('ch')">中文</el-button>
				</li>
				<li>
					<el-button type="info" @click="slecterLanguage('en')">English</el-button>
				</li>
				<li>
					<el-button type="info" @click="slecterLanguage('jn')">日本語</el-button>
				</li>

			</ul>
		</div>
		<el-header style="height:0px;">

		</el-header>
		<div class="hread_fun">
			<el-row :gutter="10" style="text-align: center;margin-top: 20px;height: 50px;">
				<el-col :offset="6">
					<el-row>
						<el-col :span="4">
							<div class="funcursor" @click="selectFun(0)">
								<img v-show="!maptag" :src="imgsrc.clickicon[0]" />
								<img v-show="maptag" :src="imgsrc.iconimg[0]" />
								<h4 id="title_map" class="title_h4">
									{{languageJson.mapKey.mapKeyMouse}}
								</h4>
							</div>
						</el-col>
						<el-col :span="4">
							<div class="funcursor" @click="selectFun(1)">
								<img v-show="!funtag" :src="imgsrc.clickicon[1]" />
								<img v-show="funtag" :src="imgsrc.iconimg[1]" />
								<h4 id="title_functions" class="title_h4">
									{{languageJson.mapKey.advancedFunctions}}
								</h4>
							</div>

						</el-col>
						<el-col :span="4">
							<div class="funcursor" @click="selectFun(2)">
								<img v-show="!datatag" :src="imgsrc.clickicon[2]" />
								<img v-show="datatag" :src="imgsrc.iconimg[2]" />
								<h4 id="title_scriptCenter" class="title_h4">
									{{languageJson.mapKey.scriptCenter}}
								</h4>
							</div>
						</el-col>
						<!-- <el-col :span="3">
							<div class="funcursor" @click="selectFun(3)">
								<img :src="imgsrc.iconimg[3]" />
								<h4 class="title_h4">
									{{languageJson.mapKey.tutorialCenter}}
								</h4>
							</div>
						</el-col> -->
					</el-row>
				</el-col>
			</el-row>
		</div>
		<div style="width: 100%;background: #2f2f2f;height: 60px;">
			<el-row>
				<el-col :span="14">
					<div style="display: flex;width: 100%;margin-left: 20px;">
						<a>
							<div style="display: flex;">
								<!-- <div style="padding-top: 20px;">
									<i id="return_page" style="margin-right: 5px;color: gray;" class="el-icon-d-arrow-left"></i>
								</div>
								<div style="margin-left:5px;color: gainsboro;padding-top: 20px;">
									{{languageJson.mapKey.returnPage}}
								</div> -->
							</div>
						</a>
						<div style="padding-left: 10%;padding-top: 10px;">
							<el-row>
								<el-button @click="saveData" size="medium" style="width: 150px;" round type="primary">
									{{languageJson.mapKey.saveSettings}}
								</el-button>
								<!-- <el-button @click="createDecipheriv" size="medium" style="width: 150px;" round type="primary">
									{{languageJson.mapKey.readFile}}
								</el-button> -->
								<el-button @click="resumeFactory" size="medium" style="width: 150px;" round type="primary">
									{{languageJson.mapKey.resumeFactory}}
								</el-button>
								<el-button @click="readNetWork" size="medium" style="width: 150px;" round type="primary">
									刷新网络
								</el-button>
							</el-row>
						</div>
					</div>
				</el-col>
				<el-col :span="10">
					<div style="display: flex;float: right;margin-right: 20px;">
						<h4 style="margin-top: 20px;color: gainsboro;">
							{{languageJson.mapKey.fourConfigurations}}
						</h4>
						<el-button-group class="my_button_group" style="margin-top: 15px;margin-left: 25px;">
							<!-- <el-button @click="createCipheriv" size="mini">测试数据加密</el-button>
							<el-button @click="createDecipheriv" size="mini">测试数据解密</el-button> -->

							<el-button :type="obutton" @click="tabDataArr(0)" size="mini">1</el-button>
							<el-button :type="tbutton" @click="tabDataArr(1)" size="mini">2</el-button>
							<el-button :type="sbutton" @click="tabDataArr(2)" size="mini">3</el-button>
							<el-button :type="fbutton" @click="tabDataArr(3)" size="mini">4</el-button>
						</el-button-group>
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 		<div>
			{{textName}}
		</div> -->
		<div v-show="maptag">
			<component v-bind:tabGroup="tabGroup" v-bind:textName="textName" v-bind:languageJson="languageJson" v-bind:imgjson="imgsrc"
			 v-bind:is="is_device"></component>
		</div>
		<div v-show="funtag">
			<AdvancedFunctions v-bind:tabGroup="tabGroup" v-bind:textName="textName" v-bind:languageJson="languageJson"
			 v-bind:imgjson="imgsrc"></AdvancedFunctions>
		</div>
		<div v-show="datatag">
			<DataManager v-bind:devpath="devpath" v-bind:tabGroup="tabGroup" v-bind:textName="textName" v-bind:languageJson="languageJson"
			 v-bind:imgjson="imgsrc" ref="dataManager"></DataManager>
		</div>
 
		<div v-show="coursetag">
			<Course v-bind:devpath="devpath" v-bind:tabGroup="tabGroup" v-bind:textName="textName" v-bind:languageJson="languageJson"
			 v-bind:imgjson="imgsrc">
			</Course>
		</div>
	</el-container>
</template>

<script>
	import {
		ipcRenderer
	} from 'electron';
	import init from '../mainPage/mainInit.js';
	import mapKey from '../mainPage/mapKey/mapKey';
	import AdvancedFunctions from '../mainPage/advancedFunctions/advancedFunctions';
	import winboxApexMap from '../mainPage/product/winboxApex/winboxApexMap';
	import winboxPickMap from '../mainPage/product/winboxPick/winboxPickMap';
	import imgsrcs from '../json/imgsrc.json';
	import languages from '../json/language.json';
	import productAddr from '../json/productAddr.json';
	import DataManager from '../mainPage/dataCenter/DataManager';
	import Course from '../mainPage/course/course'
	import shareData from '../mainPage/jsClass/shareData.js'
	import mapkeyCode from '../mainPage/jsClass/mapKeyCode.js';
	import encryption from '../mainPage/jsClass/encryption/encryptionUnit.js'
	import fileUnit from './unit/FileUnit.js';
	const fs = require('fs');
	const exec = require('child_process').exec;
	const path = require('path');
	const readline = require('readline');
	const usb = require('usb');
	const crypto = require('crypto');
	const util = require('util');
	const maininit = new init();
	const axios = require('axios');
	const request = require('request');


	export default {
		name: 'mainPage',
		data() {
			return {
				vfileUnit: {},
				filedvpath: "",
				active: 0,
				vcrypto: crypto,
				checked: true,
				imgsrc: imgsrcs,
				languageJson: languages.initText,
				is_device: 'mapKey',
				maptag: true,
				funtag: false,
				datatag: false,
				coursetag: false,
				tabGroup: 0,
				vShareData: shareData.getInstance(),
				mapkeyunit: Object,
				dataMapKeyBord: new Map(),
				WmapKeyAddr: [0, 49152, 98304, 147456],
				// WControllerAddr:[354,49506,98658,147810],
				// combinationAddr:[522,49674,98826,147978],//400  46  
				// vesAddr:[0,49152,98304,147456],                        // [0,49152,98304,147456],
				// T100Addr:[0,32768,65536,98304],															//[0+255,49152+255,81920+255,114688+255],		
				// t100sAddr:[0+255,32768+255,65536+255,98304+255],
				// t100Troub:[530,32768+530,65536+530,98304+530],
				// t100contr:[640,32768+255+385,65536+255+385,98304+255+385],
				// t100map:[354,33122,65890,98658],
				// t100size:644,
				productTag: 1,
				obutton: "primary",
				tbutton: "",
				sbutton: "",
				fbutton: "",
			};
		},
		components: {
			[mapKey.name]: mapKey, //映射功能
			[winboxApexMap.name]: winboxApexMap,
			[winboxPickMap.name]: winboxPickMap,
			[AdvancedFunctions.name]: AdvancedFunctions, //高级功能页面
			[DataManager.name]: DataManager, //脚本管理页面
			[Course.name]: Course
		},
		methods: {
			readNetWork() {
				let loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				this.$refs.dataManager.readNetData(loading);
			},
			saveData() { //保存全局数据
				this.dataMapKeyBord.clear();
				let tag = 0;
				if (this.textName == 'T100S') {
					//设置识别码
					this.vShareData.setWinboxIdentificationCode(productAddr.Tseries.Group,
						productAddr.Tseries.IdentificationCode,
						this.dataMapKeyBord);
					this.vShareData.getT100ContinuityData(this.mapkeyunit,
						productAddr.Tseries.Combination,
						this.dataMapKeyBord, this.t100size);

					this.vShareData.getWinboxgetControllerData(
						productAddr.Tseries.Controller,
						this.dataMapKeyBord);

					this.vShareData.getT100Combination(this.mapkeyunit,
						productAddr.Tseries.Troub,
						this.dataMapKeyBord);
					tag = 1;

				} else if (this.textName == 'WinBoxP1APEXF') {
					//设置识别码
					this.vShareData.setWinboxIdentificationCode(productAddr.WinboxSeries.Group,
						productAddr.WinboxSeries.IdentificationCode,
						this.dataMapKeyBord);
					//winbox产品系列 键鼠
					this.vShareData.getWinboxMapKey(this.mapkeyunit,
						this.WmapKeyAddr,
						this.dataMapKeyBord);
					//手柄按键换位
					this.vShareData.getWinboxgetControllerData(
						productAddr.WinboxSeries.ControllerAddr,
						this.dataMapKeyBord);
					console.log(this.dataMapKeyBord)
					//连发
					this.vShareData.getWinboxCombination(this.mapkeyunit,
						productAddr.WinboxSeries.Troub,
						this.dataMapKeyBord);
					//dpi
					this.vShareData.getWinboxMouseDpi(this.dataMapKeyBord);
					//鼠标移动
					this.vShareData.getWinboxMouseMoven(this.dataMapKeyBord);
					console.log(this.dataMapKeyBord)
					tag = 2;
				} else if (this.textName == "N100Plus") {
					this.vShareData.setWinboxIdentificationCode(productAddr.WinboxSeries.Group,
						productAddr.WinboxSeries.IdentificationCode,
						this.dataMapKeyBord);
					//winbox产品系列 键鼠
					this.vShareData.getWinboxMapKey(this.mapkeyunit,
						this.WmapKeyAddr,
						this.dataMapKeyBord);
					//手柄按键换位
					this.vShareData.getWinboxgetControllerData(
						productAddr.WinboxSeries.ControllerAddr,
						this.dataMapKeyBord);
					console.log(this.dataMapKeyBord)
					//连发
					this.vShareData.getWinboxCombination(this.mapkeyunit,
						productAddr.WinboxSeries.Troub,
						this.dataMapKeyBord);

					console.log(this.dataMapKeyBord)
					tag = 2;
				} else if (this.textName == 'WinBoxP1') {
					this.vShareData.setWinboxIdentificationCode(productAddr.WinboxSeries.Group,
						productAddr.WinboxSeries.IdentificationCode,
						this.dataMapKeyBord);
					this.vShareData.getWinboxMapKey(this.mapkeyunit,
						this.WmapKeyAddr,
						this.dataMapKeyBord);
					//手柄按键换位
					this.vShareData.getWinboxgetControllerData(
						productAddr.WinboxSeries.ControllerAddr,
						this.dataMapKeyBord);
					console.log(this.dataMapKeyBord)
					//连发
					this.vShareData.getWinboxCombination(this.mapkeyunit,
						productAddr.WinboxSeries.Troub,
						this.dataMapKeyBord);
					//dpi
					this.vShareData.getWinboxMouseDpi(this.dataMapKeyBord);
					//鼠标移动
					this.vShareData.getWinboxMouseMoven(this.dataMapKeyBord);

					console.log(this.dataMapKeyBord)
					tag = 2;
				} else if (this.textName == "WinBoxP1ProF") {
					this.vShareData.setWinboxIdentificationCode(productAddr.WinboxSeries.Group,
						productAddr.WinboxSeries.IdentificationCode,
						this.dataMapKeyBord);
					this.vShareData.getWinboxMapKey(this.mapkeyunit,
						this.WmapKeyAddr,
						this.dataMapKeyBord);
					//手柄按键换位
					this.vShareData.getWinboxgetControllerData(
						productAddr.WinboxSeries.ControllerAddr,
						this.dataMapKeyBord);
					console.log(this.dataMapKeyBord)
					//连发
					this.vShareData.getWinboxCombination(this.mapkeyunit,
						productAddr.WinboxSeries.Troub,
						this.dataMapKeyBord);
					//dpi
					this.vShareData.getWinboxMouseDpi(this.dataMapKeyBord);
					//鼠标移动
					this.vShareData.getWinboxMouseMoven(this.dataMapKeyBord);
					console.log(this.dataMapKeyBord)
					tag = 2;
				} else if (this.textName == "T100") {
					this.vShareData.setWinboxIdentificationCode(productAddr.WinboxSeries.Group,
						productAddr.WinboxSeries.IdentificationCode,
						this.dataMapKeyBord);
					this.vShareData.getWinboxMapKey(this.mapkeyunit,
						this.WmapKeyAddr,
						this.dataMapKeyBord);
					//手柄按键换位
					this.vShareData.getWinboxgetControllerData(
						productAddr.WinboxSeries.ControllerAddr,
						this.dataMapKeyBord);
					console.log(this.dataMapKeyBord)
					//连发
					this.vShareData.getWinboxCombination(this.mapkeyunit,
						productAddr.WinboxSeries.Troub,
						this.dataMapKeyBord);

					console.log(this.dataMapKeyBord)
					tag = 2;
				}
				let that = this;

				this.$options.methods.createCipheriv(tag, that, 1)


			},
			tabDataArr(group) { //切换数据组数
				console.log(group);
				console.log("productInfo" + this.productInfo.name);
				if (group == 0) {
					this.obutton = "primary";
					this.tbutton = "";
					this.sbutton = "";
					this.fbutton = "";

				} else if (group == 1) {
					this.obutton = "";
					this.tbutton = "primary";
					this.sbutton = "";
					this.fbutton = "";
				} else if (group == 2) {
					this.obutton = "";
					this.tbutton = "";
					this.sbutton = "primary";
					this.fbutton = "";
				} else {
					this.obutton = "";
					this.tbutton = "";
					this.sbutton = "";
					this.fbutton = "primary";
				}
				this.tabGroup = group;
			},
			openVideo() { //打开教程官网
				const shell = require('electron').shell;
				shell.openExternal("http://www.mycoov.com/zh/Video/");


			},
			quitApp() { //退出程序
				ipcRenderer.send('close');
			},

			createDecipheriv() { //读取加密数据

				let loading = this.$loading({
					lock: true,
				});
				fs.exists(this.devpath + "/data.bin", (exists) => {
					if (!exists) {
						console.log("asd")
						loading.close();
						return;
					} else {
						this.$store.dispatch('increments');
						this.vShareData.setreadData(encryption.decryptData(this.devpath + "/data.bin"));
						this.$store.dispatch('getReadflgs');

						loading.close();
					}
				})
			},
			createCipheriv(tag, that, saveTag) { //处理并加密数据
				let loading = that.$loading({
					lock: true,
				});
				let outbuf;
				if (tag == 1) {
					outbuf = Buffer.alloc(131072).fill(0);
				} else {
					outbuf = Buffer.alloc(131072 * 2).fill(0);
				}

				that.vShareData.getreadData().forEach(function(value, key, map) {
					outbuf[key] = value

				});

				that.dataMapKeyBord.forEach(function(value, key, map) {
					outbuf[key] = value

				});
				let arrbuff = encryption.encryptionData(outbuf);
				let Catalog = "Data";
				let writeFileName = "Data/data.bin"
				let CopyFile = that.devpath + "/data.bin";


				let p = new Promise((resolve, reject) => {
					that.vfileUnit.isFileCatalog(resolve, Catalog, arrbuff, writeFileName, CopyFile);
				});
				p.then(() => {
					loading.close();
					that.$notify({
						title: '提示',
						type: "success",
						message: '已成功',
						position: 'top-right'
					});
					console.log('promise异步操作完成了');
				})

			},

			resumeFactoryFrData(that, tag) { //还原设置

				let loading = that.$loading({
					lock: true,
				});
				let outbuf;
				if (tag == 1) {
					outbuf = Buffer.alloc(131072).fill(0);
					that.vShareData.setWinboxIdentificationCode(productAddr.Tseries.Group,
						productAddr.Tseries.IdentificationCode,
						that.dataMapKeyBord);
				} else {
					outbuf = Buffer.alloc(131072 * 2).fill(0);
					that.vShareData.setWinboxIdentificationCode(productAddr.WinboxSeries.Group,
						productAddr.WinboxSeries.IdentificationCode,
						that.dataMapKeyBord);
				}

				that.dataMapKeyBord.forEach(function(value, key, map) {
					outbuf[key] = value

				});
				let arrbuff = encryption.encryptionData(outbuf);
				let baseapi = "http://www.coovbbs.com:18096/kuwei/firmwareshare_files/" +
					that.vShareData.getResUrl();
				let Catalog = "Data";
				let writeFileName = "Data/data.bin"
				let CopyFile = that.devpath + "/data.bin";
				let p1 = new Promise((resolve, reject) => {
					that.vfileUnit.isFileCatalog(resolve, Catalog, arrbuff, writeFileName, CopyFile);
				});
				Catalog = "firmware";
				writeFileName = "firmware/firmware.bin"
				CopyFile = that.devpath + "/firmware.bin";
				let p2 = new Promise((resolve, reject) => {
					that.vfileUnit.isfrCatalog(Catalog, baseapi, resolve,
						writeFileName, CopyFile);
				});
				let p = Promise.all([p1, p2]);
				p.then(() => {
					loading.close();
					that.$notify({
						title: '提示',
						type: "success",
						message: '已成功,设备会自动断开',
						position: 'top-right'
					});
					console.log("全部执行完毕");
				})
			},

			slecterLanguage(tag) { //切换语言
				if (tag == 'ch') {
					this.languageJson = languages.chineseText;
				} else if (tag == 'en') {
					this.languageJson = languages.englishText;
				} else if (tag == 'jn') {
					this.languageJson = languages.JapanText;
				} else {
					console.log('langauge Erro');
				}
			},
			resumeFactory() { //还原数据
				this.$store.dispatch('increments');
				this.dataMapKeyBord.clear();
				let tag = 0;
				if (this.textName == 'T100S') {
					tag = 1;
				} else if (this.textName == 'WinBoxP1APEXF') {
					tag = 2;
				} else if (this.textName == "N100Plus") {
					tag = 2;
				} else if (this.textName == 'WinBoxP1') {
					tag = 2;
				} else if (this.textName == "WinBoxP1ProF") {
					tag = 2;
				} else if (this.textName == "T100") {
					tag = 2;
				} else {
					return "0";
				}
				let that = this;
				this.$options.methods.resumeFactoryFrData(that, tag)

			},
			selectFun(tag) { //切换功能模块
				// 		title_map
				// 		title_functions
				// 		title_scriptCenter
				if (tag == 0) {
					this.maptag = true;
					this.funtag = false;
					this.datatag = false;
					this.coursetag = false;
					document.getElementById("title_map").style.color = "white";
					document.getElementById("title_functions").style.color = "gray";
					document.getElementById("title_scriptCenter").style.color = "gray";

				} else if (tag == 1) {
					this.funtag = true;
					this.maptag = false;
					this.datatag = false;
					this.coursetag = false;
					document.getElementById("title_map").style.color = "gray";
					document.getElementById("title_functions").style.color = "white";
					document.getElementById("title_scriptCenter").style.color = "gray";
				} else if (tag == 2) {
					this.datatag = true;
					this.funtag = false;
					this.maptag = false;
					this.coursetag = false;
					document.getElementById("title_map").style.color = "gray";
					document.getElementById("title_functions").style.color = "gray";
					document.getElementById("title_scriptCenter").style.color = "white";
				} else if (tag == 3) {
					this.datatag = false;
					this.funtag = false;
					this.maptag = false;
					this.coursetag = true;
				}
			},

		},
		watch: {
			devpath(val) {
				if (val != "erro") {
					let loading = this.$loading({
						lock: true,
					});
					fs.exists(this.devpath + "/data.bin", (exists) => {
						if (!exists) {
							loading.close();
							return;
						} else {
							this.$store.dispatch('increments');
							this.vShareData.setreadData(encryption.decryptData(this.devpath + "/data.bin"));
							this.$store.dispatch('getReadflgs');
							loading.close();
						}
					})
					// this.$store.dispatch('increments');
					// let loading = this.$loading({
					// 	lock: true, 
					// });
					// this.vShareData.setreadData(encryption.decryptData(this.devpath + "/data.bin"));
					// this.$store.dispatch('getReadflgs');

					// loading.close();
				}
			}
		},
		beforeMount() { //预先载入语言json
			this.languageJson = languages.initText;

		},
		mounted() { //挂载完毕后初始化数据
			this.mapkeyunit = new mapkeyCode(this.languageJson);
			this.vfileUnit = new fileUnit(this);
			// this.vfileUnit.DataCatalog = "Data";
			// this.vfileUnit.DatawriteFileName = "Data/data.bin"

			this.vfileUnit.FrCatalog = "firmware";
			this.vfileUnit.FrwriteFileName = "firmware/firmware.bin";

			console.log(this.devpath)
		},
		props: {
			textName: {
				type: String,
				default: '',
			},
			devpath: {
				type: String,
				default: '',
			},
			productInfo: {
				type: Object,
				default: null,
			}
		},

	};
</script>

<style>
	#title_map {
		color: white;
	}

	.el-header {
		background: url(../../../static/img/brcolor/TOP_img.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;

	}

	.hread_fun {
		background: url(../../../static/img/brcolor/TOP_img.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		padding-bottom: 10px;
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

	.funcursor {
		cursor: pointer;
	}
</style>
