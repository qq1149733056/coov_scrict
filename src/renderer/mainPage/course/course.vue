<template>
	<el-container>
		<el-aside style="width:230px;position: relative;">
			<el-row>
				<el-col :span="12">
					<el-menu @select="selectData" text-color="#FFFFFF" active-text-color="#000000" style="background: #4e4e4e;text-align: center;width: 230px;height: 690px;">
						<!-- <el-menu-item  :disabled="advmenu[0]" index="0">
						<span >{{languageJson.courselanguage.video}}</span>
						</el-menu-item> -->
						<el-menu-item :disabled="advmenu[1]" index="1">
							<span >{{languageJson.courselanguage.textcourse}}</span>	
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</el-aside>
		<el-container :style="{backgroundImage: 'url(' + imgjson.MapKeybackgroundimg + ')' }">
			<el-main>	
			
			</el-main>
		</el-container>
	</el-container>
</template>

<script>

 
	export default{
		name:"Course",
		data(){
			return{
				advmenu:[false,false,false],
				
			}
		},
		methods:{
			selectData(index) {
			  if (index == '0') {
			    this.advfunui = [true, false, false];
			  } else {
			    this.advfunui = [false, true, false];
			  }
			},
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
		},
		
	}
</script>

<style>
</style>
