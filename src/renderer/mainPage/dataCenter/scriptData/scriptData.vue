<template>
	<div id="script_id" >
		<div style="background: white;padding: 22px 20px;">
			<el-row style="margin-bottom: 10px;">
				<el-col :offset="6" :span="12">
					<h4 style="text-align: center;">脚本中心</h4>
				</el-col>
				<el-col :span="2">
				</el-col>
			</el-row>
			<div style="margin-bottom: 10px;">
				{{languageJson.dataManager.current_product}}:{{textName}}
			</div>
			<div style="width: 100%;height: 570px;overflow-y: auto;">
				<el-collapse accordion>
					<el-collapse-item style="margin-top: 5px;" v-for="value in scData">
						<template slot="title">
							<div style="font-size: 14px;color: white;background: #F56C6C;display: flex;width: 100%;justify-content : space-between;">
								<div style="white-space:nowrap;width: 300px;overflow: hidden;margin-left: 15px;">
									<p>
										{{value.scriptName_ch}}
									</p>		
								</div>
								<div>{{languageJson.dataManager.release_time}}:{{times(value.shareTime)}}</div>
								<div style="margin-right: 15px;">
									<el-button @click="downloadData(value.url)" size="small" round type="primary">更新</el-button>
								</div>
							</div>
						</template>
						<div>
							<p style="font-size: 18px;">
								{{value.details_ch}}
							</p>
						</div>
						
					</el-collapse-item>
				</el-collapse>
			</div>
		</div>
	</div>
</template>

<script>
	import scrpitjson from '../ScriptApi.json'
	import scriptInit from './scriptDataInit.js'
	import encryption from '../../jsClass/encryption/encryptionUnit.js'
	import shareData from '../../jsClass/shareData.js'
	const axios = require('axios');
	const fs = require('fs');
	const request = require('request');
	const moment = require('moment');
	
	export default {
		name: "ScriptData",
		data() {
			return {
				scriptTag: "/scriptshare_files/",
				vscriptInit:new scriptInit(this),
				vaxios:axios,
				vscrpitjson:scrpitjson,
				vshareData:shareData.getInstance()
			}
		},
		watch:{
			devpath(val){
				
			},
			textName(val){
				
				if(val=="default"){
					
				}else{
					//this.vscriptInit.Init();	
				}
			}
		},
		methods:{
			times(value){
				return moment(value).format('YYYY-MM-DD HH:mm:ss');
			},
			 downloadData(url){
				let that = this;
				
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.7)'
				});
				
				function download(uri, filename, callback) {
					fs.exists("data", function(exists){
						if(!exists){
							fs.mkdir("data",function(err){
								if(err){
				
								}else{
									
								request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
								}
							})
						}else{
								request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
						}
					})	
				
				} 
				if (this.devpath == "erro") {
					that.$notify.error({
						title: that.languageJson.dataManager.error,
						message: that.languageJson.dataManager.no_device,
					});
				
					loading.close();
				
				} else {
					download(scrpitjson.databaseUrl + that.scriptTag + url, "data" + "/data.bin",
					 function() {
						fs.copyFile("data" + "/data.bin", that.devpath + "/data.bin", err => {		
							if (err) {
								loading.close();
								that.$notify({
									title: that.languageJson.dataManager.error,
									message: that.languageJson.dataManager.error,
									type: 'success'
								});	
								}
								that.$store.dispatch('increments');
								that.vshareData.setreadData(encryption.decryptData(that.devpath + "/data.bin"));
								that.$store.dispatch('getReadflgs');
								 loading.close();
								 that.$notify({
								 	title: that.languageJson.dataManager.success,
								 	message: that.languageJson.dataManager.updateScr,
								 	type: 'success'
								 });
							})
					});
				
				}
						
			 }
		},
		mounted() {
				
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

			scData:{
				type:Array,
				default:null,
			}
		},

	}
</script>

<style>
	#script_id {
		margin: 0px 10% 0px 10%;
		background: white;

	}
</style>
