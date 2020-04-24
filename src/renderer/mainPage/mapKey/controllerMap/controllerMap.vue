<template>
	<div id="controllerMaps">
		<div style="background: white;padding: 22px 20px;">
			<h4 style="text-align: center;padding-bottom: 15px;">{{languageJson.mapKey.handlemapping}}</h4>
			<el-table :data="tableData" border stripe :cell-style="cellStyle" :header-cell-style="headStyle" height="570" class="eltable"
			 style="width:100%;">
				<el-table-column   prop="id">
						
					<template v-slot:header>
						<el-dropdown @command="selectHost" placement="bottom" style="width: 100%;height: 30px;">
						<el-button plain type="danger" style="height: 30px;width: 100%;border: white;background:#F56C6C ;color: white;">
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
					
					<template slot-scope="scope">
							<el-button   :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" style="width: 100%;border: white;" >							
								<img class="key_img"  :src="imgsrc[scope.$index]" />
							</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="id">
					<template  v-slot:header>
						<el-dropdown @command="selectController" placement="bottom" style="width: 100%;
						height: 30px;">
							<el-button plain type="danger" style="width: 100%;
							border: white;background:#F56C6C ;color: white;height: 30px;">
								{{languageJson.mapKey.selectPeripheral}}-{{controller}}<i style="float: right;" class="el-icon-arrow-down el-icon--right"></i>
							</el-button>
							<el-dropdown-menu style="width: 280px;text-align: center;" slot="dropdown">
								<el-dropdown-item command="Ps4">Ps4</el-dropdown-item>
								<el-dropdown-item command="Switch">Switch</el-dropdown-item>
								<el-dropdown-item command="XboxOne">XboxOne</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</template>
					<template slot-scope="scope">
						<el-dropdown @command="handleCommand" @visible-change="changeIndex(scope.$index)" placement="bottom" style="width: 100%;">
							<el-button :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" 
							style="width: 100%;border: white;">
							<img class="key_img"  :src="arr[scope.$index]" />	<i style="float: right;" class="el-icon-arrow-down el-icon--right"></i>
							</el-button>
							<el-dropdown-menu style="text-align: center;width: 280px;height:184px;overflow-y: scroll;" slot="dropdown">
								<el-dropdown-item  v-for="(value,index) in imgsrcontroller" :command="index">	
								<img  class="key_img"  :src="value" />
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	import imgsrcs from '../../../json/imgsrc.json';
	import deviceid from '../../../json/device.json';
	import controlljs from '../controllerMap/controllerJs.js';
	import shareData from '../../../mainPage/jsClass/shareData.js';
	const 	imglength = deviceid.controllerMapId.length;
	const 	imgjsonInit = [];
	const 	imgjsonSwitch = [];
	const 	imgjsonXbox = [];
	const 	imgjsonInitController = [];
	const 	imgjsonSwitChcontroller = [];
	const 	imgjsonXboxController = [];
	const 	MAXGROUPLEN = 4;
	export default {
	  name: 'controllerMap',
	  data() {
	    return {
	      tableData: new Array(imglength).fill(''),
	      arr: new Array(imglength).fill(''),
	      arrIndex: new Array(imglength).fill(-1),
	      keyIndex: 0,
	      imgsrc: imgjsonInit,
	      imgsrcontroller: imgjsonInitController,
	      host: 'Ps4',
		  vdeviceid:deviceid,
	      controller: 'Ps4',
	      vcontrolljs: new controlljs(this),
	      groupArr: [],
		  vShareData: shareData.getInstance(),
	    };
	  },
	  computed: {
		      getStoreItem() {
		        return this.$store.state.flg;
		      },
			  getStoreread(){
			  	return this.$store.state.readflg;
			  }
		    },
	  watch: {
	    getStoreItem() {
	      if (this.$store.state.flg != 1) {
	        for (let i = 0; i < this.arr.length; i++) {
	          this.$set(this.arr, [i], '');
	        }
	        this.vcontrolljs.InitGroupArr(MAXGROUPLEN, imglength);
	      }
	    },
		getStoreread() {
		  if (this.$store.state.readflg != 1) {
				let mapData = this.vShareData.getreadData();
				this.vcontrolljs.InitReadData(mapData)
				
		  }
		},
	    tabGroup(val) {
	      this.vcontrolljs.tabGroupFun();
	      console.log('controllerMap');
	    },
	  },

	  mounted() {
			this.vShareData.setControllerData(this.groupArr)
			
	  },
	  methods: {
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
	    selectController(controller) {
	      if (controller == 'Ps4') {
	        this.imgsrcontroller = imgjsonInitController;
	      } else if (controller == 'Switch') {
	        this.imgsrcontroller = imgjsonSwitChcontroller;
	      } else {
	        this.imgsrcontroller = imgjsonXboxController;
	      }
	      this.controller = controller;
	      this.vcontrolljs.resetArrImgSrc(controller);
	    },
	    changeIndex(index) {
	      this.keyIndex = index;
	    },
	    handleCommand(index) {
			
		const src = this.imgsrcontroller[index];
		const filterIndex = this.vcontrolljs.filterArr(this.arr, src, this.keyIndex);
		if(filterIndex==this.keyIndex){
	      this.$set(this.arr, [this.keyIndex], src);
	      this.arrIndex[this.keyIndex] = index;
	      this.groupArr[this.tabGroup][this.keyIndex] = index;
		}else{
			this.arr[filterIndex] = '';
			this.$set(this.arr, [this.keyIndex], '');
			this.groupArr[this.tabGroup][filterIndex] = -2;
			this.arr[this.keyIndex] = src;
			this.$set(this.arr, [this.keyIndex], src);
			this.groupArr[this.tabGroup][this.keyIndex] = index;
		}

		
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
	      }
	    },
	  },
	  beforeMount() {
	    for (let i = 0; i < deviceid.controllerMapId.length; i++) {
	      const index = deviceid.controllerMapId[i];
	      imgjsonInit.push(imgsrcs.ps4img[index]);
	      imgjsonSwitch.push(imgsrcs.switchimg[index]);
	      imgjsonXbox.push(imgsrcs.xboximg[index]);
	      imgjsonInitController.push(imgsrcs.ps4img[index]);
	      imgjsonSwitChcontroller.push(imgsrcs.switchimg[index]);
	      imgjsonXboxController.push(imgsrcs.xboximg[index]);
	    }
	    this.vcontrolljs.InitGroupArr(MAXGROUPLEN, imglength);
	
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
	    tabGroup: {
	      type: Number,
	      default: 0,
	    },
	  },

	};
</script>

<style>
	#controllerMaps {
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
	.key_img{
		width: 30px;
		
	}
	.cell button{
		padding: 6px 2px 2px 2px;
	}
</style>
