<template>
	<div id="continuity">
		<div style="background: white;padding: 22px 20px;">
			<h4 style="text-align: center;padding-bottom: 15px;">	{{languageJson.advancedFunctions.continuity}}</h4>
			<el-table :data="tableData" border stripe :cell-style="cellStyle" :header-cell-style="headStyle" height="570" class="eltable"
			 style="width:100%;">
				<el-table-column prop="id" width="240">
					<template v-slot:header>
						<el-dropdown @command="selectController" placement="bottom" style="height: 30px;width: 100%;">
							<el-button plain type="danger" style="width: 100%;border: white;background:#F56C6C ;color: white;margin-top: 5px;">
								{{languageJson.advancedFunctions.selectPeripheral}}-{{controller}}<i style="float: right;" class="el-icon-arrow-down el-icon--right"></i>
							</el-button>
							<el-dropdown-menu style="width: 200px;text-align: center;" slot="dropdown">
								<el-dropdown-item command="Ps4">Ps4</el-dropdown-item>
								<el-dropdown-item command="Switch">Switch</el-dropdown-item>
								<el-dropdown-item command="XboxOne">XboxOne</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</template>
					<template slot-scope="scope">
						<el-button :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" style="width: 100%;border: white;">
							<img class="key_img" :src="imgsrc[scope.$index]" />
						</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="id" width="360">
					<template v-slot:header>
						<el-button plain type="danger" style="width: 100%;border: white;background:#F56C6C ;color: white;">
							{{languageJson.advancedFunctions.continuityKey}}
						</el-button>
					</template>
					<template slot-scope="scope">
						<div style="text-align: center;display: flex;">
							<el-dropdown @visible-change="recordindex(scope.$index,0)" @command="selectKey" placement="bottom" style="width: 120px;">
								<el-button :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" style="width: 100%;border: white;">
									<span v-show="textTag[scope.$index][0]">{{pleaseText[scope.$index][0]}}</span>
									<img class="key_img" :src="arr[scope.$index][0]" />
									<i style="float: right;" class="el-icon-caret-bottom">
									</i>
								</el-button>
								<el-dropdown-menu style="text-align: center;width: 120px;height:184px;overflow-y: scroll;" slot="dropdown">
									<el-dropdown-item v-for="(value,index) in imgsrc" :command="index">
										<img :command="value" class="key_img" :src="value" />
									</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
							<el-button :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" style="margin-left: 10px;border: white;">
								<span><i style="float: right;color: red;" class="el-icon-plus"></i></span>
							</el-button>
							<el-dropdown @visible-change="recordindex(scope.$index,1)" @command="selectKey" placement="bottom" style="width: 120px;">
								<el-button :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" style="width: 100%;border: white;">
									<span v-show="textTag[scope.$index][1]">{{pleaseText[scope.$index][1]}}</span>
									<img class="key_img" :src="arr[scope.$index][1]" />
									<i style="float: right;" class="el-icon-caret-bottom"></i>
								</el-button>
								<el-dropdown-menu style="text-align: center;width: 120px;height:184px;overflow-y: scroll;" slot="dropdown">
									<el-dropdown-item v-for="(value,index) in imgsrc" :command="index">
										<img :command="value" class="key_img" :src="value" />
									</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
							<el-button :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" style="margin-left: 10px;border: white;">
								<span><i style="float: right;color:red" class="el-icon-plus"></i></span>
							</el-button>
							<el-dropdown @visible-change="recordindex(scope.$index,2)" @command="selectKey" placement="bottom" style="width:120px;">
								<el-button :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" style="width: 100%;border: white;">
									<span v-show="textTag[scope.$index][2]">{{pleaseText[scope.$index][2]}}</span>
									<img class="key_img" :src="arr[scope.$index][2]" />
									<i style="float: right;" class="el-icon-caret-bottom"></i>
								</el-button>
								<el-dropdown-menu style="text-align: center;width:120px;height:184px;overflow-y: scroll;" slot="dropdown">
									<el-dropdown-item v-for="(value,index) in imgsrc" :command="index">
										<img :command="value" class="key_img" :src="value" />
									</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
					</template>
				</el-table-column>
				<el-table-column width="120">
					<template v-slot:header>
						<el-button plain type="danger" style="width: 100%;border: white;background:#F56C6C ;color: white;">
							{{languageJson.advancedFunctions.cleanData}}
						</el-button>
					</template>
					<template slot-scope="scope">
						<div style="text-align: center;">
							<el-button @click="cleanData(scope.$index)" size="small" round type="primary">{{languageJson.advancedFunctions.cleanData}}</el-button>
						</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	import imgsrcs from '../../../json/imgsrc.json';
	import deviceid from '../../../json/device.json';
	import continuityJs from '../continuity/continuityJs.js';
	import shareData from '../../jsClass/shareData.js';
	const imglength = deviceid.continuityId.length;
	const imgjsonInit = [];
	const imgjsonSwitch = [];
	const imgjsonXbox = [];
	const imgjsonInitController = [];
	const imgjsonSwitChcontroller = [];
	const imgjsonXboxController = [];
	let continuityArr;
	let continuityArrSwitch;
	let continuityArrXbox;
	const continuityKeyLength = 3;
	const MAXGROUPLEN = 4;
	export default {
		name: 'Continuity',
		data() {
			return {
				tableData: new Array(imglength).fill(''),
				arr: [],
				imgsrc: imgjsonInit,
				controller: 'Ps4',
				imgcontinuityArr: [],
				pleaseText: [],
				indexkey: 0,
				indexgroup: 0,
				textTag: [],
				lengthTag: new Array(imglength).fill(0),
				vcontinuity: new continuityJs(this),
				vShareData: shareData.getInstance(),
				arrIndex: [],
				groupArr: [],
			};
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
		},
		computed: {
			getStoreItem() {
				return this.$store.state.flg;
			},
		},
		watch: {
			textName(val) {

			},
			getStoreItem() {
				if (this.$store.state.flg != 1) {
					this.vcontinuity.continuityInit(imglength, continuityKeyLength);
					this.vcontinuity.InitGroupArr(MAXGROUPLEN, imglength, continuityKeyLength);
				}
			},
			languageJson(val) {
				const temptext = [];
				for (let i = 0; i < imglength; i++) {
					temptext[i] = [];
					for (let j = 0; j < continuityKeyLength; j++) {
						temptext[i][j] = this.languageJson.advancedFunctions.pleaseChoose;
					}
				}
				this.pleaseText = temptext;
			},
			tabGroup(val) {
				this.vcontinuity.tabGroupFun();
				
			},
		},
		methods: {
			cleanData(index) {
				const clean = ['', '', ''];
				const textclean = [true, true, true];
				const cleanArrIndex = [-1, -1, -1];
				this.$set(this.arr, index, clean);
				this.$set(this.textTag, index, textclean);
				this.lengthTag[index] = 0;
				this.arrIndex[index] = cleanArrIndex;
				this.groupArr[this.tabGroup][index] = [-2, -2, -2];

			},
			selectController(controller) {
				if (controller == 'Ps4') {
					this.imgcontinuityArr = continuityArr;
					this.imgsrc = imgjsonInit;
				} else if (controller == 'Switch') {
					this.imgcontinuityArr = continuityArrSwitch;
					this.imgsrc = imgjsonSwitch;
				} else {
					this.imgcontinuityArr = continuityArrXbox;
					this.imgsrc = imgjsonXbox;
				}
				this.controller = controller;
				this.vcontinuity.resetArrImgSrc();
			},
			selectKey(command) {
				let counterTag = 0;
				const index = this.indexkey;
				const group = this.indexgroup;
				const src = this.imgsrc[command];
				for (let i = 0; i < this.lengthTag.length; i++) {
					if (this.lengthTag[i] == 1) {
						counterTag += 1;
					}
				}
				if (counterTag >= 10) {
					this.$message({
						message: this.languageJson.advancedFunctions.maxten,
						duration: 4000,
					});
				} else {
					
					let tempcommand;
					for(let i=0;i<this.groupArr[this.tabGroup][index].length;i++){
						tempcommand =	this.groupArr[this.tabGroup][index][i];
						if(tempcommand==command){
							return;
						}
					}
					this.arrIndex[index][group] = command;
					this.$set(this.arr[index], group, src);
					this.$set(this.textTag[index], group, false);
					this.lengthTag[index] = 1;
					this.groupArr[this.tabGroup][index][group] = command;

				}
			},
			recordindex(index, group) {
				this.indexkey = index;
				this.indexgroup = group;
			},
			cellStyle(row, column, rowIndex, columnIndex) {
				if (row.rowIndex % 2 != 0) {
					return 'background:#ffffff;';
				}
				return 'background:#f8f8f8;';
			},
			headStyle(row, rowIndex) {
				if (row.rowIndex == 0) {
					return 'background:#F56C6C;height:10px;padding:0';
				} else if (row.rowIndex == 1) {
					return 'background:#ffffff;padding:0;text-align: center;';
				}
			},
		},
		beforeMount() {
			for (let i = 0; i < deviceid.continuityId.length; i++) {
				const index = deviceid.continuityId[i];
				imgjsonInit.push(imgsrcs.ps4img[index]);
				imgjsonSwitch.push(imgsrcs.switchimg[index]);
				imgjsonXbox.push(imgsrcs.xboximg[index]);
				imgjsonInitController.push(imgsrcs.ps4img[index]);
				imgjsonSwitChcontroller.push(imgsrcs.switchimg[index]);
				imgjsonXboxController.push(imgsrcs.xboximg[index]);
			}
			continuityArr = new Array(imglength).fill(new Array(continuityKeyLength).fill(imgjsonInit));
			continuityArrSwitch = new Array(imglength).fill(new Array(continuityKeyLength).fill(imgjsonSwitch));
			continuityArrXbox = new Array(imglength).fill(new Array(continuityKeyLength).fill(imgjsonXbox));
			this.imgcontinuityArr = continuityArr;
			this.vcontinuity.continuityInit(imglength, continuityKeyLength);
			this.vcontinuity.InitGroupArr(MAXGROUPLEN, imglength, continuityKeyLength);
		},
		mounted() {
			this.vShareData.setcontinuityData(this.groupArr);
		},

	};
</script>

<style>
	#continuity {
		margin: 0px 10% 0px 10%;
		background: white;

	}

	@media screen and (min-width: 1000px) and (max-width: 2800px) {
		#keyMouseMaps {}
	}

	.el-table__body tr td {
		padding: 1px 0;
		border: solid 1px #dadada;
	}

	.key_img {
		width: 30px;

	}



	::-webkit-scrollbar {
		width: 12px;
		height: 50px;
	}

	::-webkit-scrollbar-track-piece {
		background-color: transparent;
		-webkit-border-radius: 6px;
	}

	::-webkit-scrollbar-thumb:vertical {
		height: 50px;
		background-color: #BDBDBD;
		-webkit-border-radius: 6px;
	}

	::-webkit-scrollbar-thumb:horizontal {
		width: 12px;
		background-color: #BDBDBD;
		-webkit-border-radius: 6px;
	}

	::-webkit-scrollbar-thumb:vertical:hover,
	::-webkit-scrollbar-thumb:horizontal:hover {
		background-color: #808080;
	}
</style>
