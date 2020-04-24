<template>
	<el-container>
		<el-aside style="width:230px;position: relative;">
			<el-row>
				<el-col :span="12">
					<el-menu @select="selectMap" text-color="#FFFFFF" active-text-color="#000000" :default-active="menuActive" style="background: #4e4e4e;text-align: center;width: 230px;height: 690px;">
						<el-menu-item :disabled="tagkeymouseMapping" index="1">
							<span>{{languageJson.mapKey.keymouseMapping}}</span>
							</el-tooltip>
						</el-menu-item>
						<el-menu-item :disabled="taghandlemapping" index="2">
							<span>{{languageJson.mapKey.handlemapping}}</span>
						</el-menu-item>
						<el-menu-item :disabled="tagpatchMapping" index="3">
							<span>{{languageJson.mapKey.patchMapping}}</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</el-aside>
		<el-container :style="{backgroundImage: 'url(' + imgjson.MapKeybackgroundimg + ')' }">
			<el-main>
				<div v-show="ikeyMouseMap">
					<keyMouseMap v-bind:tabGroup="tabGroup" v-bind:languageJson="languageJson" v-bind:imgjson="imgjson"></keyMouseMap>
				</div>
				<div v-show="icontrollerMap">
					<controllerMap v-bind:tabGroup="tabGroup" v-bind:languageJson="languageJson" v-bind:imgjson="imgjson"></controllerMap>
				</div>
				<div v-show="ipickMap">
					<pickMap v-bind:tabGroup="tabGroup" v-bind:languageJson="languageJson" v-bind:imgjson="imgjson">
					</pickMap>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import keyMouseMap from '../mapKey/keyMouseMap/keyMouseMap';
	import controllerMap from '../mapKey/controllerMap/controllerMap';
	import pickMap from '../mapKey/pickMap/pickMap';
	export default {
		name: 'mapKey',
		data() {
			return {
				ikeyMouseMap: true,
				icontrollerMap: false,
				ipickMap: false,
				menuActive: '1',
				tagkeymouseMapping: false,
				taghandlemapping: false,
				tagpatchMapping: false,

			};
		},
		components: {
			[keyMouseMap.name]: keyMouseMap,
			[controllerMap.name]: controllerMap,
			[pickMap.name]: pickMap,
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
					this.ikeyMouseMap = false;
					this.icontrollerMap = false;
					this.ipickMap = true;
				}
			},
		},
		watch: {
			textName(val) {  //依据设备来显示功能
				if (val == 'T100S') {
					this.ikeyMouseMap = false;
					this.icontrollerMap = true;
					this.ipickMap = false;
					this.menuActive = '2';
					this.tagkeymouseMapping = true;
					this.taghandlemapping = false;
					this.tagpatchMapping = true;
				} else if (val == 'WinBoxP1APEXF') {
					this.ikeyMouseMap = true;
					this.icontrollerMap = false;
					this.ipickMap = false;
					this.menuActive = '1';
					this.tagkeymouseMapping = false;
					this.taghandlemapping = false;
					this.tagpatchMapping = true;
				} else if (val == "N100Plus") {
					this.ikeyMouseMap = false;
					this.icontrollerMap = true;
					this.ipickMap = false;
					this.menuActive = '2';
					this.tagkeymouseMapping = true;
					this.taghandlemapping = false;
					this.tagpatchMapping = true;
				} else if (val == 'WinBoxP1') {
					this.ikeyMouseMap = true;
					this.icontrollerMap = false;
					this.ipickMap = false;
					this.menuActive = '1';
					this.tagkeymouseMapping = false;
					this.taghandlemapping = false;
					this.tagpatchMapping = true;
				} else if (val == "WinBoxP1ProF") {
					this.ikeyMouseMap = true;
					this.icontrollerMap = false;
					this.ipickMap = false;
					this.menuActive = '1';
					this.tagkeymouseMapping = false;
					this.taghandlemapping = false;
					this.tagpatchMapping = true;
				} else if (val == "T100") {
					this.ikeyMouseMap = false;
					this.icontrollerMap = true;
					this.ipickMap = false;
					this.menuActive = '2';
					this.tagkeymouseMapping = true;
					this.taghandlemapping = false;
					this.tagpatchMapping = true;
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
