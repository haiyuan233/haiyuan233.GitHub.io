(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{548:function(a,t,e){},593:function(a,t,e){"use strict";e(548)},602:function(a,t,e){"use strict";e.r(t);e(38),e(57),e(106),e(45),e(546),e(258),e(39),e(155);var l=e(88),r=e(547),s={name:"com-ability",data:function(){return{value:[],mixValue:[],step:1,input:"",input2:"",options:[{value:"ALL",label:"ALL"},{value:"A",label:"ステータス",children:[{value:"レッサー",label:"レッサー系"},{value:"EV",label:"EV系"}]},{value:"A+",label:"ステータス(特殊)",children:[{value:"マーク",label:"マーク系"},{value:"ディバイン",label:"ディバイン系"},{value:"ファクター",label:"ファクター系"},{value:"レヴリー",label:"レヴリー系"},{value:"グレア",label:"グレア系"},{value:"アルター",label:"アルター系"},{value:"フリクト",label:"フリクト系"},{value:"リガンド",label:"リガンド系"}]},{value:"A++",label:"フレイズ・センテンス系",children:[{value:"フレイズ",label:"フレイズ系"},{value:"センテンス",label:"センテンス系"}]},{value:"B",label:"カタリスト・特殊系",children:[{value:"カタリスト",label:"カタリスト系"}]},{value:"C",label:"レセプター系"},{value:"D",label:"ソール系"},{value:"D+",label:"フィーバー系"},{value:"E",label:"レジスト系"},{value:"E+",label:"状態異常付与"},{value:"E++",label:"倍率特効"},{value:"E+++",label:"ブースト系"}],mixOptions:[{value:"EV",label:"EV系"},{value:"ジソール",label:"○○・ジ・ソール/合成魂"},{value:"アストラル",label:"アストラル・ソール/星界魂"},{value:"エーテル",label:"エーテル・ファクター/以太因子"},{value:"マナ",label:"マナ・レヴリー/马纳梦"},{value:"アブソリュート",label:"アブソリュート・グレア/绝对真理闪"},{value:"ガーディアン",label:"ガーディアン・ソール/守护辉士魂"}],param:[],paramA:[],paramPage:[],keyword:[],keyword2:"EV",total:0,currentPage:1,load:1}},mounted:function(){this.paramA=Object(r.a)().abilityList,this.reloadP(),this.changePage(1)},methods:{carousel:function(a){console.log(a),this.step=a},loadStep:function(a,t){switch(this.step=a,t){case 0:this.$refs.carousel0.setActiveItem(a-1);break;case 1:this.$refs.carousel1.setActiveItem(a-1);break;case 2:this.$refs.carousel2.setActiveItem(a-1);break;case 3:this.$refs.carousel3.setActiveItem(a-1);break;case 4:this.$refs.carousel4.setActiveItem(a-1);break;case 5:this.$refs.carousel5.setActiveItem(a-1);break;case 6:this.$refs.carousel6.setActiveItem(a-1)}console.log(this.$refs.carousel)},handleChange:function(a){this.keyword=a,this.reloadP(),console.log(a)},handleChange2:function(a){this.keyword2=a[0],this.step=1,console.log(a)},reloadP:function(){var a=this;this.load=0;var t=this.input;this.input="";var e=this,l=this.keyword,r=[],s=[],n=this.paramA,i=1,p=0;n.forEach((function(a){15===i?(s.push(r),r=[],i=1):n[n.length-1].code===a.code&&s.push(r),0!==l.length?l[0]===a.gid?2===l.length&&e.fuzzyMatch(a.name,l[1])&&(e.fuzzyMatch(a.name,t)||""===t)?(r.push(e.toForm(a)),p++,i++):1!==l.length||!e.fuzzyMatch(a.name,t)&&""!==t||(r.push(e.toForm(a)),p++,i++):"ALL"!==l[0]||!e.fuzzyMatch(a.name,t)&&""!==t||(r.push(e.toForm(a)),p++,i++):(e.fuzzyMatch(a.name,t)||""===t)&&(r.push(e.toForm(a)),p++,i++)})),console.log(s),this.param=s,this.total=p,this.changePage(1),this.$nextTick((function(){a.load=1}))},toForm:function(a){return void 0!==a.make?{code:a.code,gid:a.gid,name:a.name,effect:a.effect,make:a.make}:{code:a.code,gid:a.gid,name:a.name,effect:a.effect,make:""}},fuzzyMatch:function(a,t){for(var e=-1,l=!1,r=0,s=t.split("");r<s.length&&!(a.indexOf(s[r])<0);r++)for(var n=a.matchAll(s[r]),i=n.next();!i.done;){if(i.value.index>e){e=i.value.index,r===s.length-1&&(l=!0);break}i=n.next()}return l},changePage:function(a){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.paramPage=t.param[a-1];case 1:case"end":return e.stop()}}),e)})))()}}},n=(e(593),e(5)),i=Object(n.a)(s,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("H2",[a._v("特殊能力一览")]),a._v(" "),e("div",{staticClass:"tab-content"},[e("div",{staticClass:"block"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:14}},[e("el-cascader",{attrs:{options:a.options,props:{checkStrictly:!0}},on:{change:a.handleChange},model:{value:a.value,callback:function(t){a.value=t},expression:"value"}})],1),a._v(" "),e("el-col",{attrs:{span:8}},[e("el-input",{attrs:{placeholder:"input ability name"},model:{value:a.input,callback:function(t){a.input=t},expression:"input"}})],1),a._v(" "),e("el-col",{attrs:{span:2}},[e("el-button",{attrs:{icon:"el-icon-search",circle:""},on:{click:a.reloadP}})],1)],1)],1)]),a._v(" "),e("div",{staticClass:"tab-content"},[e("el-table",{staticStyle:{"margin-bottom":"14px"},attrs:{data:a.paramPage,stripe:"",border:""}},[e("el-table-column",{attrs:{property:"name",label:"OP",align:"center",width:"200"}}),a._v(" "),e("el-table-column",{attrs:{property:"effect",label:"效果",align:"center"}})],1),a._v(" "),a.load?e("div",{staticClass:"paginationClass"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":15,total:a.total},on:{"current-change":a.changePage}})],1):a._e()],1),a._v(" "),e("div",{staticStyle:{"margin-top":"50px"}}),a._v(" "),e("H2",[a._v("通常能力合成(施工中)")]),a._v(" "),e("div",{staticStyle:{"margin-top":"50px"}}),a._v(" "),e("H2",[a._v("高级能力合成")]),a._v(" "),e("div",{staticClass:"tab-content2"},[e("div",{staticClass:"block2"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:14}},[e("el-cascader",{attrs:{options:a.mixOptions,props:{checkStrictly:!0}},on:{change:a.handleChange2},model:{value:a.mixValue,callback:function(t){a.mixValue=t},expression:"mixValue"}})],1),a._v(" "),e("el-col",{attrs:{span:8}},[e("el-input",{attrs:{placeholder:"input ability name"},model:{value:a.input2,callback:function(t){a.input2=t},expression:"input2"}})],1),a._v(" "),e("el-col",{attrs:{span:2}},[e("el-button",{attrs:{icon:"el-icon-search",circle:""},on:{click:function(a){}}})],1)],1)],1)]),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"EV"===a.keyword2,expression:"keyword2 === 'EV'"}]},[e("div",{staticStyle:{"margin-top":"50px"}},[e("el-carousel",{ref:"carousel0",attrs:{type:"card",arrow:"never",autoplay:!1,height:"600px","indicator-position":"none"}},[e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(1)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("レッサー・XXXXⅤ的合成")]),a._v("\n            レッサー系存在以下种类\n            "),e("ul",{staticStyle:{color:"#d77494","font-weight":"600"}},[e("li",[a._v("レッサーパワー")]),a._v(" "),e("li",[a._v("レッサーシュート")]),a._v(" "),e("li",[a._v("レッサーテクニック")]),a._v(" "),e("li",[a._v("レッサースタミナ")]),a._v(" "),e("li",[a._v("レッサースピリタⅤ")])]),a._v("\n            以レッサーパワー为例，其他的合成/继承方法相同\n            "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"10px"},data:[{title:"继承",param1num1:"-",param1num2:"80%",param1num3:"100%",param2num1:"-",param2num2:"70%",param2num3:"100%",param3num1:"-",param3num2:"50%",param3num3:"100%",param4num1:"-",param4num2:"40%",param4num3:"100%",param5num1:"-",param5num2:"30%",param5num3:"100%"},{title:"合成",param1num1:"-",param1num2:"-",param1num3:"-",param2num1:"-",param2num2:"70%",param2num3:"70%",param3num1:"-",param3num2:"50%",param3num3:"50%",param4num1:"-",param4num2:"-",param4num3:"30%",param5num1:"-",param5num2:"-",param5num3:"20%"}],"header-row-style":{"font-size":"10px"}}},[e("el-table-column",{attrs:{label:"级别"}},[e("el-table-column",{attrs:{prop:"title",label:"同名能力数",width:"90"}})],1),a._v(" "),e("el-table-column",{attrs:{prop:"param1",label:"Ⅰ"}},[e("el-table-column",{attrs:{prop:"param1num1",label:"1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param1num2",label:"2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param1num3",label:"3"}})],1),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"Ⅱ"}},[e("el-table-column",{attrs:{prop:"param2num1",label:"1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2num2",label:"2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2num3",label:"3"}})],1),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"Ⅲ"}},[e("el-table-column",{attrs:{prop:"param3num1",label:"1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3num2",label:"2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3num3",label:"3"}})],1),a._v(" "),e("el-table-column",{attrs:{prop:"param4",label:"Ⅳ"}},[e("el-table-column",{attrs:{prop:"param4num1",label:"1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param4num2",label:"2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param4num3",label:"3"}})],1),a._v(" "),e("el-table-column",{attrs:{prop:"param5",label:"Ⅴ"}},[e("el-table-column",{attrs:{prop:"param5num1",label:"1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param5num2",label:"2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param5num3",label:"3"}})],1)],1)],1)])]),a._v(" "),e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(2)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("EV系的合成")]),a._v("\n            当素材中存在レッサーパワーⅤ/レッサーシュートⅤ/レッサーテクニックⅤ和"),e("br"),a._v("\n            レッサースタミナⅤ/レッサースピリタⅤ各一种时，50%概率合成"),e("br"),a._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{height:"300","cell-style":{"font-size":"10px"},data:[{param1:"レッサーパワーⅤ",param2:"レッサースタミナⅤ",mix:"EV・パワーHP",success:"50%"},{param1:"レッサーパワーⅤ",param2:"レッサースピリタⅤ",mix:"EV・パワーPP",success:"50%"},{param1:"レッサーシュートⅤ",param2:"レッサースタミナⅤ",mix:"EV・シュートHP",success:"50%"},{param1:"レッサーシュートⅤ",param2:"レッサースピリタⅤ",mix:"EV・シュートPP",success:"50%"},{param1:"レッサーテクニックⅤ",param2:"レッサースタミナⅤ",mix:"EV・テクニックHP",success:"50%"},{param1:"レッサーテクニックⅤ",param2:"レッサースピリタⅤ",mix:"EV・テクニックPP",success:"50%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"mix",label:"合成结果"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])])],1)],1),a._v(" "),e("div",{staticStyle:{"margin-top":"50px"}},[e("el-steps",{attrs:{active:a.step,"align-center":""}},[e("el-step",{attrs:{title:"步骤1",description:"レッサー・XXXXⅤ的合成"},nativeOn:{click:function(t){return a.loadStep(1,0)}}}),a._v(" "),e("el-step",{attrs:{title:"步骤2",description:"EV系的合成"},nativeOn:{click:function(t){return a.loadStep(2,0)}}})],1)],1)]),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"ジソール"===a.keyword2,expression:"keyword2 === 'ジソール'"}]},[e("div",{staticStyle:{"margin-top":"50px"}},[e("el-carousel",{ref:"carousel1",attrs:{type:"card",arrow:"never",autoplay:!1,height:"600px","indicator-position":"none"}},[e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(1)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("○○・ジ・ソール的合成")]),a._v("\n            一共存在"),e("span",{staticStyle:{"font-weight":"600"}},[a._v("アクト・ジ・ソール")]),a._v("、"),e("span",{staticStyle:{"font-weight":"600"}},[a._v("ティル・ジ・ソール")]),a._v("、"),e("span",{staticStyle:{"font-weight":"600"}},[a._v("マギー・ジ・ソール")]),a._v("、"),e("span",{staticStyle:{"font-weight":"600"}},[a._v("アレス・ジ・ソール")]),a._v("四个种类"),e("br"),a._v("\n            EP1～3的BOSSソール系能力 +  EP4～5的行星BOSSソール系能力合成，成功率70%"),e("br"),a._v(" "),e("span",{staticStyle:{"font-weight":"600"}},[a._v("EP1～3的BOSSソール系能力")]),a._v(" "),e("ul",{staticStyle:{color:"#d77494","font-weight":"600"}},[e("li",[a._v("グンネ・ソール")]),a._v(" "),e("li",[a._v("ジグモル・ソール")]),a._v(" "),e("li",[a._v("ヴォル・ソール")]),a._v(" "),e("li",[a._v("クォーツ・ソール")]),a._v(" "),e("li",[a._v("ファング・ソール")]),a._v(" "),e("li",[a._v("ネプト・ソール")]),a._v(" "),e("li",[a._v("スノウ・ソール")]),a._v(" "),e("li",[a._v("エクス・ソール")]),a._v(" "),e("li",[a._v("ヴァーダー・ソール")]),a._v(" "),e("li",[a._v("シュレイダ・ソール")]),a._v(" "),e("li",[a._v("メデューナ・ソール")]),a._v(" "),e("li",[a._v("リンガ・ソール")]),a._v(" "),e("li",[a._v("バル・ソール")])]),a._v(" "),e("span",{staticStyle:{"font-weight":"600"}},[a._v("EP4～5的BOSSソール系能力")]),a._v(" "),e("ul",{staticStyle:{color:"#d77494","font-weight":"600"}},[e("li",[a._v("トウオウ・ソール")]),a._v(" "),e("li",[a._v("フルベガス・ソール")]),a._v(" "),e("li",[a._v("エスカード・ソール")]),a._v(" "),e("li",[a._v("ファーブラ・ソール")]),a._v(" "),e("li",[a._v("イストリア・ソール")])]),a._v("\n            EP1～3的BOSSソール系能力 +  EP6的超界BOSSソール系能力合成，成功率90%"),e("br"),a._v(" "),e("span",{staticStyle:{"font-weight":"600"}},[a._v("EP6的超界BOSSソール系能力")]),a._v(" "),e("ul",{staticStyle:{color:"#d77494","font-weight":"600"}},[e("li",[a._v("イクスアクト・ソール")]),a._v(" "),e("li",[a._v("イクスティル・ソール")]),a._v(" "),e("li",[a._v("イクスマギー・ソール")]),a._v(" "),e("li",[a._v("イクスアレス・ソール")])]),a._v(" "),e("span",{staticStyle:{"font-weight":"600"}},[a._v("继承")]),a._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"10px"},data:[{param1:"○○・ジ・ソール",param2:"○○・ジ・ソール",param3:"-",success:"25%"},{param1:"○○・ジ・ソール",param2:"○○・ジ・ソール",param3:"○○・ジ・ソール",success:"40%"},{param1:"○○・ジ・ソール",param2:"ソールレセプター",param3:"-",success:"50%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])])],1)],1),a._v(" "),e("div",{staticStyle:{"margin-top":"50px"}},[e("el-steps",{attrs:{active:a.step,"align-center":""}},[e("el-step",{attrs:{title:"步骤1",description:"○○・ジ・ソール的合成"},nativeOn:{click:function(t){return a.loadStep(1,6)}}})],1)],1)]),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"アストラル"===a.keyword2,expression:"keyword2 === 'アストラル'"}]},[e("div",{staticStyle:{"margin-top":"50px"}},[e("el-carousel",{ref:"carousel2",attrs:{type:"card",arrow:"never",autoplay:!1,height:"600px","indicator-position":"none"}},[e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(1)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("ソール・カタリスト(魂触媒)的合成")]),a._v("\n            当素材中存在以下五种魂能力(ソール系)时出现，成功率10%\n            "),e("ul",{staticStyle:{color:"#d77494","font-weight":"600"}},[e("li",[a._v("アプレンティス・ソール")]),a._v(" "),e("li",[a._v("エルダー・ソール")]),a._v(" "),e("li",[a._v("ルーサー・ソール")]),a._v(" "),e("li",[a._v("ダブル・ソール")]),a._v(" "),e("li",[a._v("ペルソナ・ソール")])]),a._v("\n            ソール・カタリスト可继承"),e("br"),a._v("\n            但同为カタリスト系的其他几种触媒无法共存\n            "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"10px"},data:[{param1:"ソール・カタリスト",param2:"ソール・カタリスト",param3:"-",success:"10%"},{param1:"ソール・カタリスト",param2:"ソール・カタリスト",param3:"ソール・カタリスト",success:"30%"},{param1:"ソール・カタリスト",param2:"カタリストレセプター",param3:"-",success:"100%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])]),a._v(" "),e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(2)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("アストラル・ソール(星界魂)的合成")]),a._v("\n            当素材中存在四个魂触媒(ソール・カタリスト)和一个深远魂(ダークネス・ソール)\n            时出现，成功率10%"),e("br"),a._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"5px"},data:[{param1:"ソール・カタリスト",param2:"ソール・カタリスト",param3:"ソール・カタリスト",param4:"ソール・カタリスト",param5:"ダークネス・ソール",success:"30%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param4",label:"素材4"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param5",label:"素材5"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1),a._v("\n            アストラル・ソール可通过ソールレセプター(魂保)继承"),e("br"),a._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"5px"},data:[{param1:"アストラル・ソール",param2:"ソールレセプター",param3:"",success:"10%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])])],1)],1),a._v(" "),e("div",{staticStyle:{"margin-top":"50px"}},[e("el-steps",{attrs:{active:a.step,"align-center":""}},[e("el-step",{attrs:{title:"步骤1",description:"ソール・カタリスト(魂触媒)的合成"},nativeOn:{click:function(t){return a.loadStep(1,2)}}}),a._v(" "),e("el-step",{attrs:{title:"步骤2",description:"アストラル・ソール(星界魂)的合成"},nativeOn:{click:function(t){return a.loadStep(2,2)}}})],1)],1)]),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"エーテル"===a.keyword2,expression:"keyword2 === 'エーテル'"}]},[e("div",{staticStyle:{"margin-top":"50px"}},[e("el-carousel",{ref:"carousel3",attrs:{type:"card",arrow:"never",autoplay:!1,height:"600px","indicator-position":"none"}},[e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(1)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("ファクター・カタリスト(因子触媒)的合成")]),a._v("\n            当素材中存在以下三种因子能力(ファクター系)时出现，成功率10%\n            "),e("ul",{staticStyle:{color:"#d77494","font-weight":"600"}},[e("li",[a._v("ヤマト・ファクター")]),a._v(" "),e("li",[a._v("マザー・ファクター")]),a._v(" "),e("li",[a._v("デウス・ファクター")])]),a._v("\n            也可以通过使用道具"),e("span",{staticStyle:{color:"#d77494","font-weight":"600"}},[a._v("特殊能力(ファクターC)")]),a._v("直接100%追加"),e("br"),a._v("\n            ファクター・カタリスト可继承"),e("br"),a._v("\n            但同为カタリスト系的其他几种触媒无法共存\n            "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"10px"},data:[{param1:"ファクター・カタリスト",param2:"ファクター・カタリスト",param3:"-",success:"10%"},{param1:"ファクター・カタリスト",param2:"ファクター・カタリスト",param3:"ファクター・カタリスト",success:"30%"},{param1:"ファクター・カタリスト",param2:"カタリストレセプター",param3:"-",success:"100%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])]),a._v(" "),e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(2)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("エーテル・ソール(以太魂)的合成")]),a._v("\n            当素材中存在以下三种魂能力其中之二时出现，成功率10%\n            "),e("ul",{staticStyle:{color:"#d77494","font-weight":"600"}},[e("li",[a._v("トウオウ・ソール")]),a._v(" "),e("li",[a._v("フルベガス・ソール")]),a._v(" "),e("li",[a._v("エスカード・ソール")])]),a._v("\n            也可以通过使用道具"),e("span",{staticStyle:{color:"#d77494","font-weight":"600"}},[a._v("特殊能力(エーテルS)")]),a._v("直接100%追加"),e("br"),a._v("\n            エーテル・ソール可通过ソールレセプター(魂保)继承"),e("br"),a._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"5px"},data:[{param1:"エーテル・ソール",param2:"ソールレセプター",param3:"",success:"10%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])]),a._v(" "),e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(3)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("エーテル・ファクター(以太因子)的合成")]),a._v("\n            当素材中存在四个因子触媒(ファクター・カタリスト)和一个以太魂(エーテル・ソール)\n            时出现，成功率10%"),e("br"),a._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"5px"},data:[{param1:"ファクター・カタリスト",param2:"ファクター・カタリスト",param3:"ファクター・カタリスト",param4:"ファクター・カタリスト",param5:"エーテル・ソール",success:"30%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param4",label:"素材4"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param5",label:"素材5"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1),a._v("\n            エーテル・ファクター可通过ファクターレセプター(因子保)继承"),e("br"),a._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"5px"},data:[{param1:"エーテル・ファクター",param2:"ファクターレセプター",param3:"",success:"10%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])])],1)],1),a._v(" "),e("div",{staticStyle:{"margin-top":"50px"}},[e("el-steps",{attrs:{active:a.step,"align-center":""}},[e("el-step",{attrs:{title:"步骤1",description:"ファクター・カタリスト(因子触媒)的合成"},nativeOn:{click:function(t){return a.loadStep(1,3)}}}),a._v(" "),e("el-step",{attrs:{title:"步骤2",description:"エーテル・ソール(以太魂)的合成"},nativeOn:{click:function(t){return a.loadStep(2,3)}}}),a._v(" "),e("el-step",{attrs:{title:"步骤2",description:"エーテル・ファクター(以太因子)的合成"},nativeOn:{click:function(t){return a.loadStep(3,3)}}})],1)],1)]),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"マナ"===a.keyword2,expression:"keyword2 === 'マナ'"}]},[e("div",{staticStyle:{"margin-top":"50px"}},[e("el-carousel",{ref:"carousel4",attrs:{type:"card",arrow:"never",autoplay:!1,height:"600px","indicator-position":"none"}},[e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(1)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("レヴリー・カタリスト(梦境触媒)的合成")]),a._v("\n            当素材中存在以下五种梦境能力(レヴリー系)时出现，成功率10%\n            "),e("ul",{staticStyle:{color:"#d77494","font-weight":"600"}},[e("li",[a._v("アプレジナ・レヴリー")]),a._v(" "),e("li",[a._v("エルダー・レヴリー")]),a._v(" "),e("li",[a._v("ルーサー・レヴリー")]),a._v(" "),e("li",[a._v("ダブル・レヴリー")]),a._v(" "),e("li",[a._v("ペルソナ・レヴリー")])]),a._v("\n            也可以通过使用道具"),e("span",{staticStyle:{color:"#d77494","font-weight":"600"}},[a._v("特殊能力(レヴリーC)")]),a._v("直接100%追加"),e("br"),a._v("\n            レヴリー・カタリスト可继承"),e("br"),a._v("\n            但同为カタリスト系的其他几种触媒无法共存\n            "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"10px"},data:[{param1:"レヴリー・カタリスト",param2:"レヴリー・カタリスト",param3:"-",success:"10%"},{param1:"レヴリー・カタリスト",param2:"レヴリー・カタリスト",param3:"ファクター・カタリスト",success:"30%"},{param1:"レヴリー・カタリスト",param2:"カタリストレセプター",param3:"-",success:"100%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])]),a._v(" "),e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(2)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("オメガ・メモリア(欧米茄回忆)的合成")]),a._v("\n            当素材中存在以下三种能力时出现，成功率10%\n            "),e("ul",{staticStyle:{color:"#d77494","font-weight":"600"}},[e("li",[a._v("ファーブラ・ソール")]),a._v(" "),e("li",[a._v("イストリア・ソール")]),a._v(" "),e("li",[a._v("オメガ・レヴリー")])]),a._v("\n            也可以通过使用道具"),e("span",{staticStyle:{color:"#d77494","font-weight":"600"}},[a._v("特殊能力(オメガM)")]),a._v("直接100%追加"),e("br"),a._v("\n            オメガ・メモリア可继承"),e("br"),a._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"10px"},data:[{param1:"オメガ・メモリア",param2:"オメガ・メモリア",param3:"-",success:"50%"},{param1:"オメガ・メモリア",param2:"オメガ・メモリア",param3:"オメガ・メモリア",success:"80%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])]),a._v(" "),e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(3)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("マナ・レヴリー(马纳梦境)的合成")]),a._v("\n            当素材中存在四个梦境触媒(レヴリー・カタリスト)和一个欧米茄回忆(オメガ・メモリア)\n            时出现，成功率10%"),e("br"),a._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"5px"},data:[{param1:"レヴリー・カタリスト",param2:"レヴリー・カタリスト",param3:"レヴリー・カタリスト",param4:"レヴリー・カタリスト",param5:"オメガ・メモリア",success:"30%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param4",label:"素材4"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param5",label:"素材5"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1),a._v("\n            マナ・レヴリー可通过レヴリーレセプター(梦境保)继承"),e("br"),a._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"5px"},data:[{param1:"マナ・レヴリー",param2:"レヴリーレセプター",param3:"",success:"10%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])])],1)],1),a._v(" "),e("div",{staticStyle:{"margin-top":"50px"}},[e("el-steps",{attrs:{active:a.step,"align-center":""}},[e("el-step",{attrs:{title:"步骤1",description:"レヴリー・カタリスト(梦境触媒)的合成"},nativeOn:{click:function(t){return a.loadStep(1,4)}}}),a._v(" "),e("el-step",{attrs:{title:"步骤2",description:"オメガ・メモリア(欧米茄回忆)的合成"},nativeOn:{click:function(t){return a.loadStep(2,4)}}}),a._v(" "),e("el-step",{attrs:{title:"步骤2",description:"マナ・レヴリー(马纳梦境)的合成"},nativeOn:{click:function(t){return a.loadStep(3,4)}}})],1)],1)]),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"アブソリュート"===a.keyword2,expression:"keyword2 === 'アブソリュート'"}]},[e("div",{staticStyle:{"margin-top":"50px"}},[e("el-carousel",{ref:"carousel5",attrs:{type:"card",arrow:"never",autoplay:!1,height:"600px","indicator-position":"none"}},[e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(1)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("グレア・カタリスト(闪触媒)的合成")]),a._v("\n            当素材中存在以下五种闪能力(グレア系)其中四个时出现，成功率10%"),e("br"),a._v(" "),e("span",{staticStyle:{color:"#0099ff","font-weight":"600"}},[a._v("アンジュール")]),a._v("与"),e("span",{staticStyle:{color:"#0099ff","font-weight":"600"}},[a._v("ドゥミヌス")]),a._v("为互相替换的关系\n            "),e("ul",{staticStyle:{color:"#d77494","font-weight":"600"}},[e("li",{staticStyle:{color:"#0099ff"}},[a._v("アンジュール・グレア")]),a._v(" "),e("li",{staticStyle:{color:"#0099ff"}},[a._v("ドゥミヌス・グレア")]),a._v(" "),e("li",[a._v("ベルージュ・グレア")]),a._v(" "),e("li",[a._v("フォードルス・グレア")]),a._v(" "),e("li",[a._v("エクゼクル・グレア")])]),a._v("\n            グレア・カタリスト只可通过触媒保(カタリストレセプター)继承。"),e("br"),a._v("\n            同为カタリスト系的其他几种触媒无法共存\n            "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"10px"},data:[{param1:"グレア・カタリスト",param2:"カタリストレセプター",param3:"-",success:"100%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])]),a._v(" "),e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(2)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("フォトナー・グレア(光子闪)的合成")]),a._v("\n            当素材中存在以下四种闪能力(グレア系)时出现，成功率10%\n            "),e("ul",{staticStyle:{color:"#d77494","font-weight":"600"}},[e("li",[a._v("シバ・グレア")]),a._v(" "),e("li",[a._v("ヴァルナ・グレア")]),a._v(" "),e("li",[a._v("ミトラ・グレア")]),a._v(" "),e("li",[a._v("オリジン・グレア")])]),a._v("\n            フォトナー・グレア可继承"),e("br"),a._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"10px"},data:[{param1:"フォトナー・グレア",param2:"-",success:"30%"},{param1:"フォトナー・グレア",param2:"フォトナー・グレア",success:"50%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])]),a._v(" "),e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(3)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("アブソリュート・グレア的合成")]),a._v("\n            当素材中存在四个闪触媒(グレア・カタリスト)和一个光子闪(フォトナー・グレア)\n            时出现，成功率10%"),e("br"),a._v(" "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"5px"},data:[{param1:"グレア・カタリスト",param2:"グレア・カタリスト",param3:"グレア・カタリスト",param4:"グレア・カタリスト",param5:"フォトナー・グレア",success:"30%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param4",label:"素材4"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param5",label:"素材5"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])])],1)],1),a._v(" "),e("div",{staticStyle:{"margin-top":"50px"}},[e("el-steps",{attrs:{active:a.step,"align-center":""}},[e("el-step",{attrs:{title:"步骤1",description:"グレア・カタリスト(闪触媒)的合成"},nativeOn:{click:function(t){return a.loadStep(1,5)}}}),a._v(" "),e("el-step",{attrs:{title:"步骤2",description:"フォトナー・グレア(光子闪)的合成"},nativeOn:{click:function(t){return a.loadStep(2,5)}}}),a._v(" "),e("el-step",{attrs:{title:"步骤2",description:"アブソリュート・グレア的合成"},nativeOn:{click:function(t){return a.loadStep(3,5)}}})],1)],1)]),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"ガーディアン"===a.keyword2,expression:"keyword2 === 'ガーディアン'"}]},[e("div",{staticStyle:{"margin-top":"50px"}},[e("el-carousel",{ref:"carousel6",attrs:{type:"card",arrow:"never",autoplay:!1,height:"600px","indicator-position":"none"}},[e("el-carousel-item",{nativeOn:{click:function(t){return a.carousel(1)}}},[e("div",{staticClass:"item-box"},[e("h2",[a._v("ガーディアン・ソール的合成")]),a._v("\n            当素材中存在以下四种能力时出现，成功率10%"),e("br"),a._v(" "),e("ul",{staticStyle:{color:"#d77494","font-weight":"600"}},[e("li",[a._v("アストラル・ソール/星界魂")]),a._v(" "),e("li",[a._v("エーテル・ファクター/以太因子")]),a._v(" "),e("li",[a._v("マナ・レヴリー/马纳梦境")]),a._v(" "),e("li",[a._v("アブソリュート・グレア/绝对真理闪")])]),a._v("\n            ガーディアン・ソール可通过魂保(ソールレセプター)继承。"),e("br"),a._v("\n            同为ソール系的能力无法共存\n            "),e("div",{staticStyle:{"margin-top":"15px"}},[e("el-table",{attrs:{"cell-style":{"font-size":"10px"},data:[{param1:"ガーディアン・ソール",param2:"ソールレセプター",param3:"-",success:"100%"}]}},[e("el-table-column",{attrs:{prop:"param1",label:"素材1"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param2",label:"素材2"}}),a._v(" "),e("el-table-column",{attrs:{prop:"param3",label:"素材3"}}),a._v(" "),e("el-table-column",{attrs:{prop:"success",label:"成功率"}})],1)],1)])])],1)],1),a._v(" "),e("div",{staticStyle:{"margin-top":"50px"}},[e("el-steps",{attrs:{active:a.step,"align-center":""}},[e("el-step",{attrs:{title:"步骤1",description:"ガーディアン・ソール的合成"},nativeOn:{click:function(t){return a.loadStep(1,1)}}})],1)],1)])],1)}),[],!1,null,"47ce56a0",null);t.default=i.exports}}]);