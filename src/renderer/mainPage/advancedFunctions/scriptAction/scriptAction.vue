<template>
	<div id="scriptAction">
		<div style="background: white;padding: 22px 20px;">
			<h4 style="text-align: center;padding-bottom: 15px;">{{languageJson.advancedFunctions.scriptAction}}</h4>
			<div style="display: flex;margin-bottom:25px;width: 100%;">
				<div>
					<el-dropdown @command="selectController" placement="bottom" style="height: 30px;width: 100%;">
						<el-button plain  style="width: 230px;margin-top: 5px;">
							{{languageJson.advancedFunctions.selectPeripheral}}-{{controller}}<i style="float: right;" class="el-icon-arrow-down el-icon--right"></i>
						</el-button>
						<el-dropdown-menu style="width: 200px;text-align: center;" slot="dropdown">
							<el-dropdown-item command="Ps4">Ps4</el-dropdown-item>
							<el-dropdown-item command="Switch">Switch</el-dropdown-item>
							<el-dropdown-item command="XboxOne">XboxOne</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
				<div style="margin-left: 30px;">
					<el-dropdown @command="selectPlay" placement="bottom" style="width: 100%;">
						<el-button plain  style="width: 230px;padding: 5px 5px 5px 5px;height: 40px;margin-top: 5px;">
							<span v-show="playTag">选择触发按键</span>
							<i style="float: right;" class="el-icon-arrow-down el-icon--right">	
							</i>
							<img class="key_img"  :src="playimg" />
						</el-button>
					<el-dropdown-menu style="width: 200px;text-align: center;height: 180px;overflow-y: auto;" slot="dropdown">
							<el-dropdown-item @click="selectPlayIndex(index)" v-for="(value,index) in imgsrc" :command="index">
								<img  class="key_img" :src="value" />
							</el-dropdown-item>
					</el-dropdown-menu>		
					</el-dropdown>
				</div>
				<div style="margin-left: 58px;">
					<div style="margin-top: 15px;">
						<span>开启循环:</span>
					<el-switch
					v-model="whileSwitch"
					 style="margin-bottom: 5px;"
					  active-color="#409EFF"
					  inactive-color="#909399">
					</el-switch>
					</div>
				</div>
			</div>
			<el-table :data="tableSubData" border stripe :cell-style="cellStyle" :header-cell-style="headStyle" height="500" style=""
			 class="eltable" style="width:100%;">
				<el-table-column  width="68">
					<template v-slot:header>
							<el-button plain type="danger" style="width: 100%;border: white;background:#F56C6C ;color: white;margin-top: 5px;">
								步骤
							</el-button>
					</template>
					<template slot-scope="scope">
						<el-button :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" style="width: 100%;border: white;">
							{{scope.$index}}
						</el-button>
					</template>
				</el-table-column>
				<el-table-column v-for="value in MAXBUTTON"  width="90">
					<template v-slot:header>
						<el-button plain type="danger" style="width: 100%;border: white;background:#F56C6C ;color: white;">
							1
						</el-button>
					</template>
					<template slot-scope="scope">
						<div style="text-align: center;display: flex;">
							<el-dropdown @visible-change="recordindex(scope.$index,value-1)"  @command="selectKey" placement="bottom" style="width: 120px;">
								<el-button :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" style="width: 100%;border: white;">
									<span v-show="tableSubData[scope.$index].tag[value-1]">{{languageJson.advancedFunctions.pleaseChoose}}</span>
									<img :src="tableSubData[scope.$index].scriptData[value-1]" class="key_img"  />
									<i style="float: right;" class="el-icon-caret-bottom">
									</i>
								</el-button>
								<el-dropdown-menu style="text-align: center;width: 120px;height:184px;overflow-y: scroll;" slot="dropdown">
									<el-dropdown-item v-for="value in imgsrc" :command="value">
										<img :command="value" class="key_img" :src="value" />
									 </el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
							
						</div>
					</template>
				</el-table-column>
				
				
				
				<el-table-column width="150">
					<template v-slot:header>
						<el-button plain type="danger" style="width: 100%;border: white;background:#F56C6C ;color: white;">
							每一步的时间
						</el-button>
					</template>
					<template slot-scope="scope">
						<div style="text-align: center;">
						<el-input-number v-model="tableSubData[scope.$index].time[0]" style=" background:#f8f8f8;" size="mini"  :min="1" :max="10">	
						</el-input-number>
						</div>
					</template>
				</el-table-column>
				<el-table-column width="80">
					<template v-slot:header>
						<el-button plain type="danger" style="width: 100%;border: white;background:#F56C6C ;color: white;">
							步骤添加
						</el-button>
					</template>
					<template slot-scope="scope">
						<div style="text-align: center;">
							<el-button @click="addDataLen" size="small" type="primary" style="text-align: center;" icon="el-icon-plus" circle></el-button>
						</div>
					</template>
				</el-table-column>
				<el-table-column width="80">
					<template v-slot:header>
						<el-button plain type="danger" style="width: 100%;border: white;background:#F56C6C ;color: white;">
							步骤删除
						</el-button>
					</template>
					<template slot-scope="scope">
						<div style="text-align: center;">
							<el-button @click="deleteScript" size="small" type="danger" style="text-align: center;" icon="el-icon-close" circle></el-button>
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
	import scriptdata from '../scriptAction/scriptdataJs.js';
	import scriptunit from '../scriptAction/scriptUnit.js';
	const imglength = deviceid.scriptActionId.length;
	const imgjsonInit = [];
	const imgjsonSwitch = [];
	const imgjsonXbox = [];
	const imgjsonInitController = [];
	const imgjsonSwitChcontroller = [];
	const imgjsonXboxController = [];
	let continuityArr;
	let continuityArrSwitch;
	let continuityArrXbox;
	const continuityKeyLength = 4;
	const MINLENDATA = 1;
	const MAXLENDATA = 156;
	const MAXGROUPLEN = 4;
	export default {
	  name: 'ScriptAction',
	  data() {
	    return {
	      whileSwitch: false,
	      MAXBUTTON: 4,
	      num: 1,
	      tableData: [],
	      arr: [],
	      tableSubData: [],
	      imgsrc: imgjsonInit,
	      controller: 'Ps4',
	      imgcontinuityArr: [],
	      playimg: '',
	      playTag: true,
	      indexkey: 0,
	      indexgroup: 0,
	      vShareData: shareData.getInstance(),
	      scriptArr: [],
	      playIndex: 0,
	      menuIndex: 0,
	      groupArr: [],
	      vscriptunit: new scriptunit(this),
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
	      console.log(val);
	    },
	    getStoreItem() {
	      if (this.$store.state.flg != 1) {
	        // this.tableData = [];
	        // for (let i = 0; i < deviceid.continuityId.length; i++) {
	        // 	this.tableData[i] = [];
	        // 	this.tableData[i][0] = new scriptdata();
	
	        // }
	        // this.tableSubData = this.tableData[0];
	        for (let i = 0; i < MAXGROUPLEN; i++) {
	          this.groupArr[i] = [];
	          for (let j = 0; j < imglength; j++) {
	            this.groupArr[i][j] = [];
	            this.groupArr[i][j][0] = new scriptdata();
	          }
	        }
	        for (let i = 0; i < imglength; i++) {
	          const index = deviceid.continuityId[i];
	          imgjsonInit.push(imgsrcs.ps4img[index]);
	          imgjsonSwitch.push(imgsrcs.switchimg[index]);
	          imgjsonXbox.push(imgsrcs.xboximg[index]);
	          imgjsonInitController.push(imgsrcs.ps4img[index]);
	          imgjsonSwitChcontroller.push(imgsrcs.switchimg[index]);
	          imgjsonXboxController.push(imgsrcs.xboximg[index]);
	          this.tableData[i] = [];
	          this.tableData[i][0] = new scriptdata();
	        }
	        this.tableData = this.groupArr[this.tabGroup];
	        this.tableSubData = this.tableData[0];
	      }
	    },
	    languageJson(val) {
	
	
	    },
	    tabGroup(val) {
	      this.vscriptunit.tabGroupFun(this.playIndex);
	     
	    },
	  },
	  methods: {
	    cleanData(index) {
	
	    },
	    deleteScript() {
	      if (this.tableSubData.length == MINLENDATA) {
	
	      } else {
	        this.tableSubData.pop();
	      }
	    },
	    addDataLen() {
	      if (this.tableSubData.length > MAXLENDATA) {
	        return;
	      }
	      this.tableData[this.playIndex].push(new scriptdata());
	
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
	    },
	    selectPlay(index) {
				 this.playimg = this.imgsrc[index];
				 this.playTag = false;
				 this.playIndex = index;
				 this.tableSubData = this.tableData[index];
	    },

	    selectKey(command) {
	      this.$set(this.tableSubData[this.indexkey].tag, [this.indexgroup], false);
	      this.$set(
        this.tableSubData[this.indexkey].scriptData,
	        [this.indexgroup], command,
      );
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
	    for (let i = 0; i < MAXGROUPLEN; i++) {
	      this.groupArr[i] = [];
	      for (let j = 0; j < imglength; j++) {
	        this.groupArr[i][j] = [];
	        this.groupArr[i][j][0] = new scriptdata();
	      }
	    }
	    for (let i = 0; i < imglength; i++) {
	      const index = deviceid.continuityId[i];
	      imgjsonInit.push(imgsrcs.ps4img[index]);
	      imgjsonSwitch.push(imgsrcs.switchimg[index]);
	      imgjsonXbox.push(imgsrcs.xboximg[index]);
	      imgjsonInitController.push(imgsrcs.ps4img[index]);
	      imgjsonSwitChcontroller.push(imgsrcs.switchimg[index]);
	      imgjsonXboxController.push(imgsrcs.xboximg[index]);
	      this.tableData[i] = [];
	      this.tableData[i][0] = new scriptdata();
	    }
	    continuityArr = new Array(imglength).fill(new Array(continuityKeyLength).fill(imgjsonInit));
	    continuityArrSwitch = new Array(imglength).fill(new Array(continuityKeyLength).fill(imgjsonSwitch));
	    continuityArrXbox = new Array(imglength).fill(new Array(continuityKeyLength).fill(imgjsonXbox));
	    this.imgcontinuityArr = continuityArr;
	    this.tableData = this.groupArr[this.tabGroup];
	    this.tableSubData = this.tableData[0];
	  },
	  mounted() {
			this.vShareData.setscriptActionData(this.groupArr)
	  },

	};
</script>

<style>
	#scriptAction {
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
