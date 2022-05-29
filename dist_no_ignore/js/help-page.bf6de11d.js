"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[63],{4919:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",[a("el-breadcrumb-item",[t._v("帮助")]),a("el-breadcrumb-item",[t._v("导出工具汇总")])],1),a("el-divider"),a("el-card",{staticClass:"item",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("font-awesome-icon",{staticStyle:{color:"#8a0045","margin-right":"4px"},attrs:{icon:["fas","crown"]}}),t._v("yas ")],1),a("p",[t._v("来自莫娜占卜铺原作者的导出器：Yet Another Scanner，state-of-the-art（速度上）导出器")]),a("div",{staticClass:"footer"},[a("a",{staticClass:"el-button no-deco el-button--primary",attrs:{target:"_blank",href:"https://github.com/wormtql/yas"}},[a("i",{staticClass:"el-icon-connection"}),t._v(" 项目地址 ")])])]),a("el-card",{staticClass:"item",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("font-awesome-icon",{staticStyle:{color:"#8a0045","margin-right":"4px"},attrs:{icon:["fas","crown"]}}),t._v("「天目」-- Amenoma ")],1),a("p",[t._v("fork自Genshin Art Scanner")]),a("div",{staticClass:"footer"},[a("a",{staticClass:"el-button no-deco el-button--primary",attrs:{target:"_blank",href:"https://github.com/daydreaming666/Amenoma"}},[a("i",{staticClass:"el-icon-connection"}),t._v(" 项目地址 ")])])]),a("el-card",{staticClass:"item archived",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v(" Genshin Art Scanner ")]),a("p",[t._v("本地识别，基本实现全自动，无UI模式，速度大致每分钟100-200个")]),a("div",{staticClass:"footer"},[a("a",{staticClass:"el-button no-deco el-button--primary",attrs:{target:"_blank",href:"https://pan.baidu.com/s/1NSePEf3gzSA45aKASkfZVw"}},[a("i",{staticClass:"el-icon-connection"}),t._v(" 百度网盘（提取码：sbqv） ")]),a("a",{staticClass:"el-button no-deco",attrs:{target:"_blank",href:"https://github.com/ProblemFactory/GenshinArtScanner"}},[a("i",{staticClass:"el-icon-connection"}),t._v(" 项目地址 ")]),a("a",{staticClass:"el-button no-deco",attrs:{target:"_blank",href:"https://bbs.nga.cn/read.php?tid=26425531&_ff=650&rand=246"}},[a("i",{staticClass:"el-icon-connection"}),t._v(" 使用说明 ")])])]),a("el-card",{staticClass:"item archived",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("椰羊（cocogoat）")]),a("p",[t._v("本地识别，基本实现全自动，有UI")]),a("div",{staticClass:"footer"},[a("a",{staticClass:"el-button el-button--primary no-deco",attrs:{target:"_blank",href:"https://77.cocogoat.work/v1/ascension/"}},[a("i",{staticClass:"el-icon-connection"}),t._v(" 下载地址 ")]),a("a",{staticClass:"el-button no-deco",attrs:{target:"_blank",href:"https://github.com/YuehaiTeam/cocogoat"}},[a("i",{staticClass:"el-icon-connection"}),t._v(" 项目地址 ")])])]),a("el-card",{staticClass:"item archived",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("蹦蹦炸弹")]),a("p",[t._v("使用百度API进行远程OCR自动识别，缺点是需要注册百度AI账号")]),a("div",{staticClass:"footer"},[a("a",{staticClass:"el-button no-deco",attrs:{target:"_blank",href:"https://github.com/YuehaiTeam/cocogoat"}},[a("i",{staticClass:"el-icon-connection"}),t._v(" 项目地址 ")])])])],1)},r=[];let n=0;var o={name:"ExportToolPage",methods:{getIndex(){return n+=1,n}}},c=o,i=a(1001),l=(0,i.Z)(c,s,r,!1,null,"031e80dc",null),d=l.exports},323:function(t,e,a){a.r(e),a.d(e,{default:function(){return l}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",[a("el-breadcrumb-item",[t._v("帮助")]),a("el-breadcrumb-item",[t._v("FAQ")])],1),a("el-divider"),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{xs:24,sm:18}},[a("h1",[t._v("1. 什么是目标函数？")]),a("p",[t._v("一套圣遗物能够产生一个面板，目标函数就是将面板、武器、角色等各种配置，映射到一个值")]),a("p",[t._v("不同的目标函数是本站的核心特性，角色之间有很大差别，配装也完全不能一概而论，因此，本站提供多种多样的配装目标，也就是目标函数。例如，你可以选择胡桃的E技能最大期望输出，因为胡桃有生命值转化攻击力的特性，也可以选择诺艾尔的Q技能最大输出，因为诺艾尔有防御转化攻击特性")]),a("h1",[t._v("2. 配装结果的最大值到底是啥？")]),a("p",[t._v("目标函数的本质是将武器、角色、面板映射到一个值，通过枚举所有的圣遗物组合，选出的那个最大值，就是最后体现的最大值啦")]),a("p",[t._v("但是，最大值并不是期望输出，因为只是用于比大小，因此很多不影响配装结果的常数并没有算入，例如怪物抗性等，所以，同一个目标函数之间的最大值可以相互比较，不同目标函数之间的最大值不可比较")]),a("h1",[t._v("3. 类似平雷4这样的特殊效果到底有没有计入？")]),a("p",[t._v("某些目标函数计入了，例如“刻晴-斩尽牛杂”，某些无关紧要的角色与函数没有计入")]),a("h1",[t._v("4. 类似匣里龙吟这样的被动到底有没有计入？")]),a("p",[t._v("同上")]),a("h1",[t._v("5. 为什么面板与游戏里的真实面板有出入？")]),a("p",[t._v("因为游戏中所有显示的数值并不是精确值（是四舍五入后的），因此有小偏差是正常现象，若有大偏差，则可能是bug，如果可以，请反馈")])])],1)],1)},r=[],n={name:"FAQPage"},o=n,c=a(1001),i=(0,c.Z)(o,s,r,!1,null,null,null),l=i.exports}}]);