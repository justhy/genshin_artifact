"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[67],{1608:function(t,s,a){a.r(s),a.d(s,{default:function(){return x}});var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-root"},[e("el-breadcrumb",[e("el-breadcrumb-item",[t._v("主页")])],1),e("el-divider"),e("p",{staticClass:"title"},[e("span",{staticClass:"mona"},[t._v(t._s(t.webTitle))]),t._v(" V"+t._s(t.version)+" ")]),e("el-row",{attrs:{gutter:16}},[e("el-col",{staticClass:"mb16",attrs:{sm:6,xs:24}},[e("use-case-item",{attrs:{text:"伤害计算器/单人配装",icon:"calculator",url:"/calculate"}})],1),e("el-col",{staticClass:"mb16",attrs:{sm:6,xs:24}},[e("use-case-item",{attrs:{text:"队伍配装",icon:"bell",url:"/team-optimization"}})],1),e("el-col",{staticClass:"mb16",attrs:{sm:6,xs:24}},[e("use-case-item",{attrs:{text:"圣遗物潜力",icon:"thumbs-up",url:"/potential"}})],1),e("el-col",{staticClass:"mb16",attrs:{sm:6,xs:24}},[e("use-case-item",{attrs:{text:"导出工具",icon:"chart-pie"}})],1)],1),e("el-card",{staticClass:"mb16",attrs:{shadow:"never"}},[e("p",{staticClass:"big-card-title"},[t._v("开源地址")]),e("el-row",{attrs:{gutter:16}},[e("el-col",{attrs:{xs:24,sm:12}},[e("div",{staticClass:"source-code-item",on:{click:function(s){return t.newPage(t.links.frontendProject)}}},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","github"]}}),e("p",{staticClass:"item-title"},[t._v("Mona")])],1)]),e("el-col",{attrs:{xs:24,sm:12}},[e("div",{staticClass:"source-code-item",on:{click:function(s){return t.newPage(t.links.yasProject)}}},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","github"]}}),e("p",{staticClass:"item-title"},[t._v("YAS")])],1)])],1)],1),e("el-row",{attrs:{gutter:16}},[e("el-col",{attrs:{xs:24,sm:12}},[e("el-card",{staticClass:"mb16",attrs:{shadow:"never"}},[e("p",{staticClass:"card-title"},[t._v("反馈")]),e("el-button",{staticClass:"data-source",on:{click:function(s){return t.newPage(t.links.issue)}}},[t._v(" github Issue "),e("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),e("el-button",{staticClass:"data-source",on:{click:function(s){return t.newPage("https://qm.qq.com/cgi-bin/qm/qr?k=yQaJgPzRmBgEXXk1uiqNbq7CIrq-0biW&jump_from=webapi")}}},[t._v(" QQ群(801106595) "),e("font-awesome-icon",{attrs:{icon:"comment"}})],1),e("div",[e("p",{staticStyle:{"font-size":"12px"}},[t._v("站内反馈")]),e("el-input",{scopedSlots:t._u([{key:"append",fn:function(){return[e("el-button",{on:{click:t.handleClickSubmitFeedback}},[t._v("提交")])]},proxy:!0}]),model:{value:t.feedback,callback:function(s){t.feedback=s},expression:"feedback"}})],1)],1)],1),e("el-col",{attrs:{xs:24,sm:12}},[e("el-card",{staticClass:"mb16",attrs:{shadow:"never"}},[e("p",{staticClass:"card-title"},[t._v("数据来源")]),e("el-button",{staticClass:"data-source",on:{click:function(s){return t.newPage(t.links.wiki)}}},[t._v(" bilibili原神wiki "),e("font-awesome-icon",{attrs:{icon:"database"}})],1),e("el-button",{staticClass:"data-source",on:{click:function(s){return t.newPage(t.links.wiki2)}}},[t._v(" Genshin Impact Wiki | Fandom "),e("font-awesome-icon",{attrs:{icon:"database"}})],1),e("el-button",{staticClass:"data-source",on:{click:function(s){return t.newPage(t.links.wiki3)}}},[t._v(" 旅行者创作平台-观测枢-原神wiki "),e("font-awesome-icon",{attrs:{icon:"database"}})],1)],1)],1)],1),e("el-row",{attrs:{gutter:16}},[e("el-col",{attrs:{xs:24,sm:12}},[e("el-card",{staticClass:"mb16",attrs:{shadow:"never"}},[e("p",{staticClass:"card-title"},[t._v("圣遗物导出工具")]),e("el-button",{staticClass:"data-source",attrs:{type:"primary"},on:{click:function(s){return t.newPage(t.links.yasDownloadGithub)}}},[t._v(" YAS下载地址 "),e("i",{staticClass:"el-icon-aim"})]),e("el-button",{staticClass:"data-source",on:{click:function(s){return t.$router.push("/help/export-tools")}}},[t._v(" 导出工具大全 "),e("i",{staticClass:"el-icon-aim"})])],1)],1),e("el-col",{attrs:{xs:24,sm:12}},[e("el-card",{staticClass:"mb16",attrs:{shadow:"never"}},[e("p",{staticClass:"card-title"},[t._v("开发者文档")]),e("a",{staticClass:"el-button no-deco",attrs:{href:t.links.doc,target:"_blank"}},[t._v(" 文档 "),e("i",{staticClass:"el-icon-connection"})])])],1)],1),e("el-card",{staticStyle:{"margin-bottom":"16px"},attrs:{shadow:"never"}},[e("p",{staticClass:"card-title"},[t._v("请莫娜吃饭")]),e("el-alert",{attrs:{closable:!1,title:"才...才不是因为交不起服务器费呢。"}}),e("div",{staticClass:"pay"},[e("span",[t._v("微信支付：")]),e("img",{attrs:{src:a(5471)}})]),e("div",{staticClass:"pay"},[e("span",[t._v("支付宝：")]),e("img",{attrs:{src:a(4436)}})])],1)],1)},i=[],c=(a(4916),a(5306),{doc:"https://wormtql.gitbook.io/mona-uranai/",frontendProject:"https://github.com/wormtql/genshin_artifact",panelProject:"https://github.com/wormtql/genshin_panel",yasProject:"https://github.com/wormtql/yas",yasDownloadGithub:"https://github.com/wormtql/yas/releases",issue:"https://github.com/wormtql/genshin_artifact/issues",wiki:"https://wiki.biligame.com/ys/%E9%A6%96%E9%A1%B5",wiki2:"https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki",wiki3:"https://bbs.mihoyo.com/ys/obc/?bbs_presentation_style=no_header"}),n=a(2347),o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"migrate"},[t._m(0),a("p",[t._v(t._s('域名 "'+t.host+'" 已不再使用，将在近期停用，请尽快转移至新的域名'))]),a("a",{staticClass:"el-button el-button--danger",attrs:{href:t.url,target:"_blank"}},[a("i",{staticClass:"el-icon-link"}),t._v(" "+t._s(t.url)+" ")])])},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h1",{staticStyle:{margin:"0"}},[a("i",{staticClass:"el-icon-info"}),t._v("重要通知")])}],r={name:"MigrateNotification",data(){return{url:"https://www.mona-uranai.com",host:location.hostname}}},u=r,m=a(1001),b=(0,m.Z)(u,o,l,!1,null,"4405fcca",null),d=b.exports,h=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"root",on:{click:t.handleClick}},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas",t.icon]}}),a("font-awesome-icon",{staticClass:"icon2",attrs:{icon:["fas",t.icon]}}),a("p",{staticClass:"text"},[t._v(t._s(t.text))])],1)},p=[],f={name:"UseCaseItem",props:["text","icon","url"],methods:{handleClick(){console.log(this.url),this.url&&this.$router.replace(this.url)}}},k=f,w=(0,m.Z)(k,h,p,!1,null,"9fc9641c",null),_=w.exports,g={name:"IntroPage",components:{MigrateNotification:d,UseCaseItem:_},data(){return{feedback:""}},created:function(){this.links=c,this.version="5.6.0",this.webTitle="莫娜占卜铺",this.needMigrate=!1,this.buildDate="2022/5/29",this.host=location.hostname},methods:{navigateTo(t){this.$router.replace(t)},newPage(t){window.open(t,"_blank")},handleClickSubmitFeedback(){""!==this.feedback&&((0,n.L5)(this.feedback),this.$message.success("已发送"))}}},C=g,v=(0,m.Z)(C,e,i,!1,null,"572cf4e4",null),x=v.exports},4436:function(t,s,a){t.exports=a.p+"img/alipay.1be52507.png"},5471:function(t,s,a){t.exports=a.p+"img/wechat.3c92b4b8.png"}}]);