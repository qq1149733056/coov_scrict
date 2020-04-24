<template>
	<el-container>
		<el-aside style="width:230px;position: relative;">
			<el-row>
				<el-col :span="12">
					<el-menu menu-trigger="click"  @select="selectFun" text-color="#FFFFFF" active-text-color="#000000" style="background: #4e4e4e;text-align: center;width: 230px;height: 690px;">
						<el-menu-item :disabled="advmenu[0]" index="0">
						<span >{{languageJson.advancedFunctions.combination}}</span>
						
						</el-menu-item>
						<el-menu-item :disabled="advmenu[1]" index="1">
							<span >{{languageJson.advancedFunctions.continuity}}</span>
						
						</el-menu-item>
						    <el-menu-item :disabled="advmenu[2]"  index="2">
							<span >{{languageJson.advancedFunctions.scriptAction}}</span>
						
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</el-aside>
		<el-container :style="{backgroundImage: 'url(' + imgjson.MapKeybackgroundimg + ')' }">
			<el-main>
					<div  v-show="advfunui[0]">
						<Combination v-bind:tabGroup="tabGroup" v-bind:languageJson="languageJson" v-bind:imgjson="imgjson">
							
						</Combination>
					</div>
					<div  v-show="advfunui[1]">
						<Continuity v-bind:tabGroup="tabGroup" v-bind:languageJson="languageJson" v-bind:imgjson="imgjson">
							
						</Continuity>
					</div>
					<div v-show="advfunui[2]">
						<ScriptAction v-bind:tabGroup="tabGroup" v-bind:languageJson="languageJson" v-bind:imgjson="imgjson">	
						
						</ScriptAction>
					</div>
			</el-main>
		</el-container>
	</el-container>
</template>


<script>
	import Combination from '../advancedFunctions/combination/combination';
	import Continuity from '../advancedFunctions/continuity/continuityV';
	import ScriptAction from '../advancedFunctions/scriptAction/scriptAction';
	export default {
	  name: 'AdvancedFunctions', // advancedFunctions 高级功能
	  data() {
	    return {
	      advmenu: [false, false, false],
	      advfunui: [false, false, true],
	    };
	  },
	  methods: {
	    selectFun(index) {
	      if (index == '0') {
	        this.advfunui = [true, false, false];
	      } else if (index == '1') {
	        this.advfunui = [false, true, false];
	      } else {
	        this.advfunui = [false, false, true];
	      }
	    },
	
	  },
		watch: {
		  textName(val) {
		    if (val == "T100S") {
				 this.advmenu= [false, true, true];
				 this.advfunui= [true, false, false];
		    } else if (val == "WinBoxP1APEXF") {
				this.advmenu= [false, true, true];
				this.advfunui= [true, false, false];
		    }else if(val =="N100Plus"){
				this.advmenu= [false, true, true];
				this.advfunui= [true, false, false];
			}else if(val =="WinBoxP1"){
				this.advmenu= [false, true, true];
				this.advfunui= [true, false, false];
			}else if(val == "WinBoxP1ProF"){
				this.advmenu= [false, true, true];
				this.advfunui= [true, false, false];
			}else if(val =="T100"){
				this.advmenu= [false, true, true];
				this.advfunui= [true, false, false];
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
	    textName: {
	      type: String,
	      default: '',
	    },
	    tabGroup: {
	      type: Number,
	      default: 0,
	    },
	  },
	  components: {
	    [Combination.name]: Combination,
	    [Continuity.name]: Continuity,
	    [ScriptAction.name]: ScriptAction,
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
