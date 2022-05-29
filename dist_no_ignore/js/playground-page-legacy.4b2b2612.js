"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[607],{1426:function(t,e,a){a.r(e),a.d(e,{default:function(){return z}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-dialog",{attrs:{visible:t.showSelectBuffDialog,title:"选择BUFF",width:t.deviceIsPC?"60%":"90%"},on:{"update:visible":function(e){t.showSelectBuffDialog=e}}},[a("select-buff",{on:{select:t.handleSelectBuff}})],1),a("el-dialog",{attrs:{title:"选择圣遗物",width:t.deviceIsPC?"80%":"90%",visible:t.showSelectArtifactDialog},on:{"update:visible":function(e){t.showSelectArtifactDialog=e}}},[a("select-artifact",{attrs:{position:t.selectArtifactSlot},on:{select:t.handleSelectArtifact}})],1),a("el-col",{staticClass:"left mona-scroll-hidden",style:t.deviceIsPC?{paddingRight:"16px"}:{},attrs:{sm:24,md:6}},[a("div",{staticClass:"config-character"},[a("img",{staticClass:"character-splash",attrs:{src:t.characterSplash,alt:"角色"}}),a("div",{staticClass:"select-character"},[a("p",{staticClass:"common-title"},[t._v("角色")]),a("div",{staticStyle:{display:"flex",gap:"12px"}},[a("select-character",{staticStyle:{flex:"1"},model:{value:t.characterName,callback:function(e){t.characterName=e},expression:"characterName"}}),a("select-character-level",{staticStyle:{flex:"1"},model:{value:t.characterLevel,callback:function(e){t.characterLevel=e},expression:"characterLevel"}})],1),a("div",{staticClass:"config-character-skill"},[a("h3",{staticClass:"common-title2"},[t._v("技能")]),a("div",{staticClass:"skill-div"},[a("el-input-number",{staticStyle:{flex:"1",display:"block",width:"unset"},attrs:{size:"mini","controls-position":"right",min:1,max:15},model:{value:t.characterSkill1,callback:function(e){t.characterSkill1=e},expression:"characterSkill1"}}),a("el-input-number",{staticStyle:{flex:"1",display:"block",width:"unset"},attrs:{size:"mini","controls-position":"right",min:1,max:15},model:{value:t.characterSkill2,callback:function(e){t.characterSkill2=e},expression:"characterSkill2"}}),a("el-input-number",{staticStyle:{flex:"1",display:"block",width:"unset"},attrs:{size:"mini","controls-position":"right",min:1,max:15},model:{value:t.characterSkill3,callback:function(e){t.characterSkill3=e},expression:"characterSkill3"}})],1)]),a("div",{staticClass:"config-character-constellation"},[a("h3",{staticClass:"common-title2"},[t._v("命之座")]),a("el-input-number",{attrs:{size:"mini","controls-position":"right",min:0,max:6},model:{value:t.characterConstellation,callback:function(e){t.characterConstellation=e},expression:"characterConstellation"}})],1),t.characterNeedConfig?a("div",{staticClass:"character-extra-config"},[a("item-config",{attrs:{"item-name":t.characterName,configs:t.characterConfigConfig},model:{value:t.characterConfig,callback:function(e){t.characterConfig=e},expression:"characterConfig"}})],1):t._e()])]),a("el-divider"),a("div",{staticClass:"config-weapon"},[a("div",{staticClass:"select-weapon"},[a("p",{staticClass:"common-title"},[t._v("武器")]),a("div",{staticStyle:{display:"flex",gap:"12px","margin-bottom":"8px"}},[a("select-weapon",{staticStyle:{flex:"1"},attrs:{type:t.characterWeaponType},model:{value:t.weaponName,callback:function(e){t.weaponName=e},expression:"weaponName"}}),a("select-weapon-level",{staticStyle:{flex:"1"},model:{value:t.weaponLevel,callback:function(e){t.weaponLevel=e},expression:"weaponLevel"}})],1),a("weapon-display",{attrs:{"weapon-name":t.weaponName}}),a("div",{staticClass:"config-weapon-refine"},[a("h3",{staticClass:"common-title2"},[t._v("精炼")]),a("el-input-number",{attrs:{size:"mini","controls-position":"right",min:1,max:5},model:{value:t.weaponRefine,callback:function(e){t.weaponRefine=e},expression:"weaponRefine"}})],1),t.weaponNeedConfig?a("div",{staticClass:"weapon-extra-config"},[a("item-config",{attrs:{"item-name":t.weaponName,configs:t.weaponConfigConfig},model:{value:t.weaponConfig,callback:function(e){t.weaponConfig=e},expression:"weaponConfig"}})],1):t._e()],1)]),a("el-divider"),a("div",{staticClass:"config-buff"},[a("p",{staticClass:"common-title"},[t._v("BUFF")]),a("div",{staticClass:"buff-tool",staticStyle:{"margin-bottom":"12px"}},[a("my-button-1",{attrs:{icon:"el-icon-plus",title:"添加BUFF"},on:{click:t.handleClickAddBuff}})],1),t.buffs.length>0?a("div",{staticClass:"buffs"},t._l(t.buffs,(function(e){return a("buff-item",{key:e.id,attrs:{buff:e,"buff-config":e.config},on:{"update:buffConfig":function(a){return t.$set(e,"config",a)},"update:buff-config":function(a){return t.$set(e,"config",a)},delete:function(a){return t.handleClickDeleteBuff(e.id)},toggle:function(a){return t.handleClickToggleBuff(e.id)}}})})),1):a("div",[a("el-empty",{attrs:{description:"无BUFF"}})],1)]),a("el-divider"),a("div",{staticClass:"config-artifact"},[a("p",{staticClass:"common-title"},[t._v("圣遗物")]),a("div",{staticClass:"artifacts"},t._l(t.artifactIds,(function(e,i){return a("div",{key:i,staticClass:"artifact-item-or-button"},[t.artifactItems[i]?a("artifact-display",{staticClass:"artifact-display",attrs:{item:t.artifactItems[i],selectable:"",buttons:!0,"delete-button":!0},on:{delete:function(e){return t.handleRemoveArtifact(i)},toggle:function(a){return t.handleToggleArtifact(e)},click:function(e){return t.handleGotoSelectArtifact(i)}}}):a("add-button",{staticClass:"add-button",on:{click:function(e){return t.handleGotoSelectArtifact(i)}}})],1)})),0)])],1),a("el-col",{staticClass:"right mona-scroll-hidden",attrs:{sm:24,md:18}},[a("div",{staticClass:"editor-container"},[a("mona-monaco-editor",{ref:"editor"})],1),a("div",{staticClass:"bottom"},[a("div",{staticClass:"tool-bar"},[a("my-button1",{attrs:{icon:"el-icon-caret-right",title:"运行"},on:{click:function(e){return t.handleClickRun()}}}),a("my-button1",{attrs:{icon:"el-icon-delete-solid",title:"清除输出"},on:{click:t.handleClickClearOutput}})],1),a("div",{staticClass:"output mona-scroll-hidden"},t._l(t.outputs,(function(e){return a("p",{staticClass:"output-row"},[t._v(t._s(e))])})),0)])])],1)},c=[],n=a(6969),r=(a(3948),a(4916),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"root",staticClass:"root"})}),o=[],s=a(5930),l=a(2371);const f="monaDSL";s.languages.register({id:f}),s.languages.setMonarchTokensProvider(f,{tokenizer:{root:[[/prop|dmg/,"keyword"],[/\d+(\.\d+)?/,"number"],[/transformative|electro_charged|swirl_cryo|swirl_pyro|swirl_hydro|swirl_electro|overload|shatter|superconduct|super_conduct|expect|expectation|critical|crit|non_critical|non_crit|recharge|em|atk|def|hp|crit0/,"prop"],[/print|min|max|type/,"global"]]}}),s.editor.defineTheme("myTheme",{base:"vs-dark",inherit:!0,rules:[{token:"keyword",foreground:"FFA500"},{token:"number",foreground:"7A9EC2"},{token:"prop",foreground:"9E7BB0"},{token:"global",foreground:"A5C261"}],colors:{"editor.foreground":"#CCCCCC"}});let u=null;var h={name:"MonaMonacoEditor",methods:{getValue(){const t=u.getValue();return t}},mounted(){const t=this.$refs["root"];u=s.editor.create(t,{value:"dmg a = Amber.transformative\noverload = a.overload\ne = a.electro_charged\nresult = overload * 10 + e * 8\nprint(result)",language:f,theme:"myTheme"})}},d=h,p=a(1001),m=(0,p.Z)(d,r,o,!1,null,"6e6a1f3f",null),g=m.exports,C=a(7547),v=a(3828),b=a(3583),w=a(5623),k=a(9893),S=a(9740),y=a(9552),x=a(5779),I=a(6571),A=a(2579),B=a(8498),N=a(7843),_=a(8722),L=a(5529),D=a(2961),F=a(9849),Z=a(6294),$=a(1809),O=a(6436),P=a(9024),R={name:"MonaPlaygroundPage",components:{MonaMonacoEditor:g,ItemConfig:C.Z,SelectCharacter:v.Z,SelectWeapon:b.Z,SelectCharacterLevel:w.Z,SelectWeaponLevel:k.Z,WeaponDisplay:S.Z,MyButton1:y.Z,BuffItem:x.Z,SelectBuff:I.Z,ArtifactDisplay:A.Z,AddButton:B.Z,SelectArtifact:N.Z},data(){return{characterName:"Amber",characterLevel:"90",characterConfig:"NoConfig",characterSkill1:8,characterSkill2:8,characterSkill3:8,characterConstellation:0,weaponName:"PolarStar",weaponLevel:"90",weaponRefine:1,weaponConfig:{PolarStar:{stack:1}},buffs:[],artifactIds:[-1,-1,-1,-1,-1],artifactSingleConfig:null,selectArtifactSlot:"any",showSelectBuffDialog:!1,showSelectArtifactDialog:!1,deviceIsPC:_.B,outputs:[]}},methods:{appendOutput(t){this.outputs.push(t)},handleClickRun(){let t=this.runInputInterface,e=this.artifactWasmFormat,a=this.$refs["editor"].getValue().trim(),i=this.$mona.DSLInterface.run(a,t,e);if(i.is_error){this.appendOutput("[error]");for(const t of i.error_msg.split("\n"))this.appendOutput(t)}else{this.appendOutput("[success]");for(const t of i.output.split("\n"))this.appendOutput(t)}},handleClickClearOutput(){this.outputs=[]},handleSelectArtifact(t){const e={flower:0,feather:1,sand:2,cup:3,head:4},a=e[this.selectArtifactSlot];this.$set(this.artifactIds,a,t),this.showSelectArtifactDialog=!1},handleGotoSelectArtifact(t){const e=["flower","feather","sand","cup","head"],a=e[t];this.showSelectArtifactDialog=!0,this.selectArtifactSlot=a},handleRemoveArtifact(t){this.$set(this.artifactIds,t,-1)},handleToggleArtifact(t){this.$store.commit("artifacts/toggleById",{id:t})},handleClickAddBuff(){this.showSelectBuffDialog=!0},handleClickDeleteBuff(t){const e=this.buffs.findIndex((e=>e.id===t));this.$delete(this.buffs,e)},handleClickToggleBuff(t){const e=this.buffs.findIndex((e=>e.id===t)),a=this.buffs[e].lock;this.$set(this.buffs[e],"lock",!a)},handleSelectBuff(t){this.showSelectBuffDialog=!1,this.addBuff(t)},addBuff(t){const e=L.JK[t];let a,i={};for(let c of e.config)i[c.name]=c.default;a=0===e.config.length?"NoConfig":{[t]:i},this.buffs.push({name:t,config:a,id:Math.floor(1e9*Math.random()),lock:!1})}},computed:(0,n.Z)((0,n.Z)({},(0,Z.mapGetters)({artifactsById:"artifacts/artifactsById",allArtifactsFlat:"artifacts/allFlat"})),{},{characterInterface(){let t={name:this.characterName,level:this.characterLevelNumber,ascend:this.characterAscend,constellation:this.characterConstellation,skill1:this.characterSkill1-1,skill2:this.characterSkill2-1,skill3:this.characterSkill3-1,params:this.characterConfig};return t},weaponInterface(){return{name:this.weaponName,level:this.weaponLevelNumber,ascend:this.weaponAscend,refine:this.weaponRefine,params:this.weaponConfig}},buffsUnlocked(){return this.buffs.filter((t=>!t.lock))},buffsInterface(){let t=[];for(let e of this.buffsUnlocked)t.push({name:e.name,config:e.config});return t},artifactConfigForCalculator(){let t=(0,F.s)();if(this.artifactNeedConfig4){let e=this.artifactConfig4ItemName;t[e]=this.artifactSingleConfig[e]}return t},runInputInterface(){return{character:this.characterInterface,weapon:this.weaponInterface,buffs:this.buffsInterface,artifact_config:this.artifactConfigForCalculator,enemy:null}},characterSplash(){const t=l.O[this.characterName];return t.splash},characterLevelNumber(){return parseInt(this.characterLevel)},characterAscend(){return this.characterLevel.includes("+")},characterWeaponType(){const t=l.O[this.characterName];return t?t.weapon:"Bow"},weaponNeedConfig(){return!!D.G[this.weaponName].configs},weaponConfigConfig(){return D.G[this.weaponName].configs},weaponLevelNumber(){return parseInt(this.weaponLevel)},weaponAscend(){return this.weaponLevel.includes("+")},artifactItems(){let t=[];for(let e of this.artifactIds)this.artifactsById[e]?t.push(this.artifactsById[e]):t.push(null);return t},artifactWasmFormat(){let t=[];for(let e of this.artifactIds)if(-1!==e){const a=this.$store.getters["artifacts/artifactsById"][e];if(a&&!a.omit){const e=(0,O.Lz)(a);t.push(e)}}return t},artifactNeedConfig4(){for(let t in this.artifactSetCount){const e=this.artifactSetCount[t];if(e>=4){const e=$.oN[t];if(e.config4&&e.config4.length>0)return t}}return null},artifactSetCount(){let t={};for(let e of this.artifactItems){if(!e)continue;const a=e.setName;Object.prototype.hasOwnProperty.call(t,a)||(t[a]=0),t[a]+=1}return t},artifactConfig4ItemName(){const t=(0,O.aA)(this.artifactNeedConfig4);return`config_${(0,P.D1)(t)}`}})},T=R,M=(0,p.Z)(T,i,c,!1,null,"1e163d50",null),z=M.exports}}]);