<template>
	<el-container>
		<el-aside style="width:230px;position: relative;">
			<el-row>
				<el-col :span="12">
					<el-menu  @select="selectMap" text-color="#FFFFFF" active-text-color="#000000" :default-active="menuActive" style="background: #4e4e4e;text-align: center;width: 230px;height: 690px;">
						<el-menu-item  index="1">
							<span >{{languageJson.mapKey.keymouseMapping}}</span>
						</el-menu-item>
						<el-menu-item  index="2">
							<span >{{languageJson.mapKey.handlemapping}}</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</el-aside>
		<el-container :style="{backgroundImage: 'url(' + imgjson.MapKeybackgroundimg + ')' }">
			<el-main>
					<div  v-show="ikeyMouseMap">
						<keyMouseMap v-bind:languageJson="languageJson" v-bind:imgjson="imgjson"></keyMouseMap>
					</div>
					<div  v-show="icontrollerMap">
						<controllerMap v-bind:languageJson="languageJson" v-bind:imgjson="imgjson"></controllerMap>
					</div>
					
					
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import keyMouseMap from '../../mapKey/keyMouseMap/keyMouseMap';
	import controllerMap from '../../mapKey/controllerMap/controllerMap';

	export default {
	  name: 'winboxApexMap',
	  data() {
	    return {
	      ikeyMouseMap: true,
	      icontrollerMap: false,
	      ipickMap: false,
	      menuActive: '1',

	    };
	  },
	  components: {
	    [keyMouseMap.name]: keyMouseMap,
	    [controllerMap.name]: controllerMap,
	
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
	  },
	  methods: {
	    selectMap(index) {
	      if (index == '1') {
	        this.ikeyMouseMap = true;
	        this.icontrollerMap = false;
	        this.ipickMap = false;
	      } else if (index == '2') {
	        this.ikeyMouseMap = false;
	        this.icontrollerMap = true;
	        this.ipickMap = false;
	      } else {
	        console.log('page_erro');
	      }
	    },
	  },
	  mounted() {

	  },

	};
</script>

<style>
	.el-menu-item:hover {
		background-color: #E6A23C !important;

	}
	
</style>
