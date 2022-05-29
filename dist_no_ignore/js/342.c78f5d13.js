"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[342],{9552:function(e,t,a){a.d(t,{Z:function(){return i}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"button-root",on:{click:function(t){return e.$emit("click")}}},[a("i",{class:[e.icon]})])},l=[],r={name:"MyButton1",props:{icon:{default:"el-icon-delete"}}},o=r,s=a(1001),u=(0,s.Z)(o,n,l,!1,null,"a232d95c",null),i=u.exports},7547:function(e,t,a){a.d(t,{Z:function(){return S}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"config-root",style:e.styleRoot},e._l(e.configs,(function(t){return a("ConfigItem",{key:t.name,staticClass:"config",attrs:{params:t,type:t.type,value:e.value2[t.name]},on:{input:function(a){return e.handleInput(t.name,a)}}})})),1)},l=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"config-title"},[e._v(e._s(e.params.title))]),"float"===e.type?[a("el-slider",{attrs:{value:e.value,min:e.params.min,max:e.params.max,step:.1,"show-input":!0,"show-input-controls":!1,"input-size":"mini"},on:{input:e.handleChangeValue}})]:e._e(),"int"===e.type?[a("el-slider",{attrs:{value:e.value,min:e.params.min,max:e.params.max,step:1},on:{input:e.handleChangeValue}})]:e._e(),"intInput"===e.type?[a("el-input-number",{attrs:{size:"mini",value:e.value,min:e.params.min,max:e.params.max},on:{input:e.handleChangeValue}})]:e._e(),"bool"===e.type?[a("el-switch",{attrs:{value:e.value,"active-text":"是"},on:{input:e.handleChangeValue}})]:e._e(),"floatPercentageInput"===e.type?[a("el-input",{attrs:{value:e.value,size:"mini"},on:{input:e.handleInputValue}},[a("template",{slot:"append"},[e._v("%")])],2)]:e._e(),"floatInput"===e.type?[a("el-input",{attrs:{value:e.value,size:"mini"},on:{input:e.handleInputValue}})]:e._e(),"element4"===e.type?[a("select-element-type",{attrs:{value:e.value,elements:["Pyro","Cryo","Electro","Hydro"]},on:{input:e.handleChangeValue}})]:e._e(),"element8"===e.type?[a("select-element-type",{attrs:{value:e.value,elements:["Pyro","Cryo","Electro","Hydro","Anemo","Geo","Dendro","Physical"]},on:{input:e.handleChangeValue}})]:e._e(),"skill4"===e.type?[a("select-skill-type",{attrs:{value:e.value},on:{input:e.handleChangeValue}})]:e._e(),"option"===e.type?[a("el-radio-group",{attrs:{value:e.value,size:"small"},on:{input:e.handleChangeValue}},e._l(e.params.options,(function(t,n){return a("el-radio-button",{key:n,attrs:{label:n}},[e._v(e._s(t))])})),1)]:e._e()],2)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-radio-group",{attrs:{value:e.value,size:"small"},on:{input:function(t){return e.$emit("input",t)}}},[e.eleMap.has("Pyro")?a("el-radio-button",{attrs:{label:"Pyro"}},[e._v("火")]):e._e(),e.eleMap.has("Electro")?a("el-radio-button",{attrs:{label:"Electro"}},[e._v("雷")]):e._e(),e.eleMap.has("Hydro")?a("el-radio-button",{attrs:{label:"Hydro"}},[e._v("水")]):e._e(),e.eleMap.has("Anemo")?a("el-radio-button",{attrs:{label:"Anemo"}},[e._v("风")]):e._e(),e.eleMap.has("Geo")?a("el-radio-button",{attrs:{label:"Geo"}},[e._v("岩")]):e._e(),e.eleMap.has("Cryo")?a("el-radio-button",{attrs:{label:"Cryo"}},[e._v("冰")]):e._e(),e.eleMap.has("Dendro")?a("el-radio-button",{attrs:{label:"Dendro"}},[e._v("草")]):e._e(),e.eleMap.has("Physical")?a("el-radio-button",{attrs:{label:"Physical"}},[e._v("物理")]):e._e()],1)},u=[],i=(a(3948),{name:"SelectElementType",props:{value:{type:String,required:!0},elements:{default:()=>["Pyro","Electro","Hydro","Anemo","Geo","Cryo","Dendro","Physical"]}},computed:{eleMap(){let e=new Set;for(let t of this.elements)e.add(t);return e}}}),p=i,c=a(1001),m=(0,c.Z)(p,s,u,!1,null,null,null),h=m.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-radio-group",{attrs:{value:e.value,size:"small"},on:{input:function(t){return e.$emit("input",t)}}},[a("el-radio-button",{attrs:{label:"NormalAttack"}},[e._v("普通攻击")]),a("el-radio-button",{attrs:{label:"ChargedAttack"}},[e._v("重击")]),a("el-radio-button",{attrs:{label:"ElementalSkill"}},[e._v("元素战技")]),a("el-radio-button",{attrs:{label:"ElementalBurst"}},[e._v("元素爆发")])],1)},v=[],f={name:"SelectSkillType",props:{value:{type:String,required:!0}}},y=f,_=(0,c.Z)(y,d,v,!1,null,null,null),b=_.exports,g={name:"ConfigItem",components:{SelectSkillType:b,SelectElementType:h},props:{value:{},type:{},params:{}},methods:{handleInputValue(e){let t=0;""===e?t=0:(t=parseFloat(e),isNaN(t)&&(t=0)),this.handleChangeValue(t)},handleChangeValue(e){this.$emit("input",e)}}},C=g,k=(0,c.Z)(C,r,o,!1,null,"078c787e",null),E=k.exports,$={name:"ItemConfig",components:{ConfigItem:E},props:{value:{},itemName:{},configs:{type:Array},bg:{default:"rgb(239, 246, 253)"},needItemName:{default:!0}},computed:{styleRoot(){return{backgroundColor:this.bg}},value2(){return this.needItemName?this.value[this.itemName]:this.value}},methods:{handleInput(e,t){if(this.needItemName){let a=Object.assign({},this.value[this.itemName]);a[e]=t,this.$emit("input",{[this.itemName]:a})}else{let a=Object.assign({},this.value);a[e]=t,this.$emit("input",a)}}}},x=$,I=(0,c.Z)(x,n,l,!1,null,"c7a16bb0",null),S=I.exports},3828:function(e,t,a){a.d(t,{Z:function(){return c}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{attrs:{value:e.value,placeholder:"角色",size:"small"},on:{input:function(t){return e.$emit("input",t)}}},e._l(e.characterByElement,(function(t,n){return a("el-option-group",{key:n,attrs:{label:e.element2Chs(n)}},e._l(t,(function(t){return a("el-option",{key:t.name,attrs:{label:t.chs,value:t.name}},[a("div",{staticClass:"option-item flex-row"},[a("img",{attrs:{src:t.avatar}}),a("span",{style:{color:e.getColor(t.star)}},[e._v(e._s(t.chs))])])])})),1)})),1)},l=[],r=a(2371),o=a(4774),s={name:"SelectCharacter",props:["value"],data(){return{characterByElement:r.S}},methods:{element2Chs(e){switch(e){case"Pyro":return"火";case"Cryo":return"冰";case"Dendro":return"草";case"Electro":return"雷";case"Anemo":return"风";case"Geo":return"岩";case"Hydro":return"水"}},getColor(e){return o.Z[e-1]}}},u=s,i=a(1001),p=(0,i.Z)(u,n,l,!1,null,"4aedf1fa",null),c=p.exports},3583:function(e,t,a){a.d(t,{Z:function(){return c}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{attrs:{value:e.value,placeholder:"武器",size:"small"},on:{input:function(t){return e.$emit("input",t)}}},e._l(e.weaponList,(function(t){return a("el-option",{key:t.name,attrs:{value:t.name,label:t.chs}},[a("div",{staticClass:"option-item"},[a("img",{attrs:{src:t.url}}),a("span",{style:{color:e.getColor(t.star)}},[e._v(e._s(t.chs))])])])})),1)},l=[],r=a(2961),o=a(4774),s={name:"SelectWeapon",props:{type:{default:"Bow"},value:{}},computed:{weaponList(){var e;return null!==(e=r.k[this.type])&&void 0!==e?e:[]}},methods:{getColor(e){return o.Z[e-1]}},watch:{type:function(e,t){const a=r.k[e][0],n=a.name;this.$emit("input",n)}}},u=s,i=a(1001),p=(0,i.Z)(u,n,l,!1,null,"246286f5",null),c=p.exports}}]);