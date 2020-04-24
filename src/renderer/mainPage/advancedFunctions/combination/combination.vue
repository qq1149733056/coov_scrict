<template>
	<div id="Combinations">
		<div style="background: white;padding: 22px 20px;">
			<h4 style="text-align: center;padding-bottom: 15px;">{{languageJson.advancedFunctions.combination}}</h4>
			<el-table :data="tableData" border stripe :cell-style="cellStyle" :header-cell-style="headStyle" height="570" style=""
			 class="eltable" style="width:100%;">
				<el-table-column prop="id">
					<el-table-column>
						<template v-slot:header>
							{{languageJson.advancedFunctions.combinationNumber}}
						</template>
						<template slot-scope="scope">
							<el-button :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" style="width: 100%;border: white;">
								<img class="key_img" :src="imgsrc[scope.$index]" />
							</el-button>
						</template>
					</el-table-column>
					<template v-slot:header>
						<el-dropdown @command="selectHost" placement="bottom" style="width: 100%;height: 30px;">
							<el-button plain type="danger" style="width: 100%;
						border: white;background:#F56C6C ;color: white;height: 30px;">
								{{languageJson.mapKey.selectHost}}-{{host}}
								<i style="float: right;" class="el-icon-arrow-down el-icon--right"></i>
							</el-button>
							<el-dropdown-menu style="width: 280px;text-align: center;" slot="dropdown">
								<el-dropdown-item command="Ps4">Ps4</el-dropdown-item>
								<el-dropdown-item command="Switch">Switch</el-dropdown-item>
								<el-dropdown-item command="XboxOne">XboxOne</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</template>

				</el-table-column>
				<el-table-column prop="id">
					<el-table-column>
						<template v-slot:header>
							<el-dropdown @command="selectNumber" placement="bottom" style="width: 100%;height: 30px;">
								<el-button plain style=";width: 100%;border: white;color: black;height: 30px;">
									{{comboNumber}}
									<i style="float: right;" class="el-icon-arrow-down el-icon--right"></i>
								</el-button>
								<el-dropdown-menu style="width: 280px;text-align: center;height: 200px;overflow-y: auto;" slot="dropdown">
									<el-dropdown-item v-for="value in comboNumberArr" :command="value">{{value}}</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</template>
						<template slot-scope="scope">
							<div style="text-align: center;">
								<el-switch @change="openCom(scope.$index)" v-model="value[scope.$index]" active-color="#409EFF" inactive-color="#909399">
								</el-switch>
							</div>
						</template>
					</el-table-column>
					<template v-slot:header>
						<el-button plain type="danger" style="width: 100%;border: white;background:#F56C6C ;color: white;">
							{{languageJson.advancedFunctions.combinationOn}}
						</el-button>
					</template>

				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	import imgsrcs from '../../../json/imgsrc.json';
	import deviceid from '../../../json/device.json';
	import shareData from '../../jsClass/shareData.js';
	import combinationjs from '../combination/combinationJs';
	const imglength = deviceid.comboid.length;
	const imgjsonInit = [];
	const imgjsonSwitch = [];
	const imgjsonXbox = [];
	const imgjsonInitController = [];
	const imgjsonSwitChcontroller = [];
	const imgjsonXboxController = [];
	const MAXGROUPLEN = 4;
	export default {
		name: 'Combination',
		data() {
			return {
				tableData: new Array(imglength).fill(''),
				arr: new Array(imglength).fill(''),
				keyIndex: 0,
				imgsrc: imgjsonInit,
				imgsrcontroller: imgjsonInitController,
				host: 'Ps4',
				controller: 'Ps4',
				value: new Array(imglength).fill(false),
				comboNumberArr: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
				comboNumber: 4,
				vShareData: shareData.getInstance(),
				vCombinationjs: new combinationjs(this),
				groupArr: [],
				vdeviceid:deviceid,
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
			getStoreread() {
				return this.$store.state.readflg;
			}
		},
		watch: {
			getStoreItem() {
				if (this.$store.state.flg != 1) {
					this.vCombinationjs.InitGroupArr(MAXGROUPLEN, imglength);
					this.vCombinationjs.tabGroupFun();
				}
			},
			tabGroup(val) {
				this.vCombinationjs.tabGroupFun();
				
			},
			getStoreread() {
				if (this.$store.state.readflg != 1) {
					let mapData = this.vShareData.getreadData();
					this.vCombinationjs.InitReadData(mapData);

				}
			},
		},
		methods: {
			openCom(index) {
				let tag = this.value[index];
				if (tag) {
					this.groupArr[this.tabGroup][index] = 1;
				} else {
					this.groupArr[this.tabGroup][index] = -2;
				}
				
			},
			selectHost(host) {
				if (host == 'Ps4') {
					this.imgsrc = imgjsonInit;
				} else if (host == 'Switch') {
					this.imgsrc = imgjsonSwitch;
				} else {
					this.imgsrc = imgjsonXbox;
				}
				this.host = host;
			},

			selectNumber(number) {
				this.comboNumber = number;
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
			for (let i = 0; i < deviceid.comboid.length; i++) {
				const index = deviceid.comboid[i];
				imgjsonInit.push(imgsrcs.ps4img[index]);
				imgjsonSwitch.push(imgsrcs.switchimg[index]);
				imgjsonXbox.push(imgsrcs.xboximg[index]);
				imgjsonInitController.push(imgsrcs.ps4img[index]);
				imgjsonSwitChcontroller.push(imgsrcs.switchimg[index]);
				imgjsonXboxController.push(imgsrcs.xboximg[index]);
			}
			this.vCombinationjs.InitGroupArr(MAXGROUPLEN, imglength);
		},
		mounted() {
			this.vShareData.setcombinationData(this.groupArr);
		}
	};
</script>

<style>
	#Combinations {
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

	.cell button {
		padding: 6px 2px 2px 2px;
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
