<template>
	<div id="keyMouseMaps">
		<div style="background: white;padding: 22px 20px;">
				<el-row style="margin-bottom: 10px;">
				  <el-col  :offset="6" :span="12">
					  <h4 style="text-align: center;"> {{languageJson.mapKey.keymouseMapping}}</h4>
					  </el-col>
				  <el-col :span="2"> 
					
				  </el-col>
				</el-row>
				<el-row style="margin-bottom: 10px;">
				  <el-col :span="10">
					  <div class="grid-content bg-purple">
						 {{languageJson.mapKey.mouseMoven}}
					  </div>
					  </el-col>
				  <el-col :span="5">
					  <div >
						  <el-input-number @change="handleDpi" :step="100" size="small"  v-model="dpi"  :min="400" :max="8000" label="描述文字"></el-input-number>
					  </div>
					  </el-col>
				<el-col :span="1">
					  	 <el-button type="text" style="margin-top: 2px;" size="mini">DPI</el-button>
					  	</el-col>
				</el-row>
			
			<el-table :data="tableData" border stripe :cell-style="cellStyle" :header-cell-style="headStyle" height="570" class="eltable"
			 style="width:100%;">
				<el-table-column   prop="id">
					<template v-slot:header>
						<el-dropdown @command="selectController" placement="bottom" style="height: 30px;;width: 100%;">
							<el-button plain type="danger" style="width: 100%;border: white;background:#F56C6C ;color: white;">
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
							<el-button   :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" style="width: 100%;border: white;" >							
								<img class="key_img"  :src="imgsrc[scope.$index]" />
							</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="id">
					<template  v-slot:header>
							
							<el-button plain type="danger" style="padding-bottom: 5px;height: 40px;width: 100%;border: white;background:#F56C6C ;color: white;">
									{{languageJson.mapKey.keymouseMapping}}
							</el-button>
					</template>
					<template slot-scope="scope">
						<el-dropdown @command="handleCommand" @visible-change="changeIndex(scope.$index)" placement="bottom" style="width: 100%;">
							<el-button :style="scope.$index%2===0?'background:#f8f8f8;':'background:#ffffff;'" style="width: 100%;border: white;">
								{{arr[scope.$index]}}<i style="float: right;" class="el-icon-arrow-down el-icon--right"></i>
							</el-button>
							<el-dropdown-menu style="text-align: center;width: 280px;height:184px;overflow-y: scroll;" slot="dropdown">
								<el-dropdown-item v-for="(value,index) in languageJson.mapKey.keyboard" :command="index">{{value}}</el-dropdown-item>
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
	import keyMouseMapJs from '../keyMouseMap/keyMouseMapJs.js';
	import deviceid from '../../../json/device.json';
	import shareData from '../../../mainPage/jsClass/shareData.js';
	const 	MAXGROUPLEN = 4;
	const 	imglength = imgsrcs.initimg.length;
	export default {
	  name: 'keyMouseMap',
	  data() {
	    return {
	      tableData: new Array(imglength).fill(''),
	      arr: new Array(imglength).fill(''),
	      keyIndex: 0,
	      imgsrc: imgsrcs.initimg,
	      keyMouseMapUnit: new keyMouseMapJs(this),
	      controller: 'Ps4',
	      groupArr: [],
		  vShareData: shareData.getInstance(),
		  dpi:0,
		  dpiArr:[],
		  vdeviceid:deviceid,
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
			
	        this.keyMouseMapUnit.InitGroupArr(MAXGROUPLEN, imglength);
	      }
	    },
		getStoreread() {
		  if (this.$store.state.readflg != 1) {
				let mapData = this.vShareData.getreadData();
				this.keyMouseMapUnit.InitReadData(mapData);
		  }
		},
	    tabGroup(val) {
	      this.keyMouseMapUnit.tabGroupFun();
	      
	    },

	  },
	  beforeMount() {
	    this.keyMouseMapUnit.InitGroupArr(MAXGROUPLEN, imglength);
		
	  },
	  mounted() {
		 
			this.vShareData.setkeyMouseData(this.groupArr);
			this.vShareData.setMouseDpi(this.dpiArr);
			
			
	  },
	
	  methods: {
	    selectController(controller) {
	      if (controller == 'Ps4') {
	        this.imgsrc = imgsrcs.ps4img;
	      } else if (controller == 'Switch') {
	        this.imgsrc = imgsrcs.switchimg;
	      } else {
	        this.imgsrc = imgsrcs.xboximg;
	      }
	      this.controller = controller;
	    },
	    changeIndex(index) {
	      this.keyIndex = index;
	    },
		handleDpi(value){
			this.vShareData.setMouseDpi(this.keyMouseMapUnit.convert(value.toString(16)));	
			//console.log(this.vShareData.getMouseDpi())
		 },
	    handleCommand(index) {
	      const src = this.languageJson.mapKey.keyboard[index];
	      const filterIndex = this.keyMouseMapUnit.filterArr(this.arr, src, this.keyIndex);
			
		  if (filterIndex == this.keyIndex) {
			  
	        this.arr[this.keyIndex] = src;
	        this.$set(this.arr, [this.keyIndex], src);
	        this.groupArr[this.tabGroup][this.keyIndex] = index; // 记录每一组数据的位置
	      } else {
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
	#keyMouseMaps {
		margin: 0px 10% 0px 10%;
		background: white;

	}

	@media screen and (min-width: 1000px) and (max-width: 2800px) {
		
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
