(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{550:function(e,a,l){},596:function(e,a,l){"use strict";var t=l(1),n=l(48),o=l(597),r=l(263),s=l(2),c=1..toFixed,i=Math.floor,d=function(e,a,l){return 0===a?l:a%2==1?d(e,a-1,l*e):d(e*e,a/2,l)};t({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}))},{toFixed:function(e){var a,l,t,s,c=o(this),u=n(e),b=[0,0,0,0,0,0],h="",v="0",f=function(e,a){for(var l=-1,t=a;++l<6;)t+=e*b[l],b[l]=t%1e7,t=i(t/1e7)},p=function(e){for(var a=6,l=0;--a>=0;)l+=b[a],b[a]=i(l/e),l=l%e*1e7},m=function(){for(var e=6,a="";--e>=0;)if(""!==a||0===e||0!==b[e]){var l=String(b[e]);a=""===a?l:a+r.call("0",7-l.length)+l}return a};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(l=(a=function(e){for(var a=0,l=e;l>=4096;)a+=12,l/=4096;for(;l>=2;)a+=1,l/=2;return a}(c*d(2,69,1))-69)<0?c*d(2,-a,1):c/d(2,a,1),l*=4503599627370496,(a=52-a)>0){for(f(0,l),t=u;t>=7;)f(1e7,0),t-=7;for(f(d(10,t,1),0),t=a-1;t>=23;)p(1<<23),t-=23;p(1<<t),f(1,1),p(2),v=m()}else f(0,l),f(1<<-a,0),v=m()+r.call("0",u);return v=u>0?h+((s=v.length)<=u?"0."+r.call("0",u-s)+v:v.slice(0,s-u)+"."+v.slice(s-u)):h+v}})},597:function(e,a,l){var t=l(40);e.exports=function(e){if("number"!=typeof e&&"Number"!=t(e))throw TypeError("Incorrect invocation");return+e}},598:function(e,a,l){var t=l(1),n=l(599);t({global:!0,forced:parseFloat!=n},{parseFloat:n})},599:function(e,a,l){var t=l(3),n=l(156).trim,o=l(157),r=t.parseFloat,s=1/r(o+"-0")!=-1/0;e.exports=s?function(e){var a=n(String(e)),l=r(a);return 0===l&&"-"==a.charAt(0)?-0:l}:r},600:function(e,a,l){"use strict";l(550)},610:function(e,a,l){"use strict";l.r(a);l(38),l(56),l(106),l(596),l(598),l(45),l(515),l(258),l(39);var t=l(516),n=l(549),o={name:"com-add-NGS",data:function(){return{options:[{value:"",label:"无"},{value:"A",label:"ステータス",children:[]},{value:"A+",label:"ステータス(特殊)",children:[]},{value:"A++",label:"フレイズ・センテンス系",children:[]},{value:"B",label:"カタリスト・特殊系",children:[]},{value:"C",label:"レセプター系",children:[]},{value:"D",label:"ソール系",children:[]},{value:"D+",label:"フィーバー系",children:[]},{value:"E",label:"レジスト系",children:[]},{value:"E+",label:"状態異常付与",children:[]},{value:"E++",label:"倍率特効",children:[]},{value:"E+++",label:"ブースト系",children:[]},{value:"AB",label:"S级特殊能力（武器）",children:[]},{value:"AB+",label:"S级特殊能力（防具）",children:[]}],value:["","","","","","","",""],property:[]}},mounted:function(){this.reloadP()},methods:{reloadP:function(){var e=this.options,a=Object(t.a)().sAbilityList;Object(t.a)().abilityList.forEach((function(a){switch(a.gid){case"A":e[1].children.push({value:a.name,label:a.name});break;case"A+":e[2].children.push({value:a.name,label:a.name});break;case"A++":e[3].children.push({value:a.name,label:a.name});break;case"B":e[4].children.push({value:a.name,label:a.name});break;case"C":e[5].children.push({value:a.name,label:a.name});break;case"D":e[6].children.push({value:a.name,label:a.name});break;case"D+":e[7].children.push({value:a.name,label:a.name});break;case"E":e[8].children.push({value:a.name,label:a.name});break;case"E+":e[9].children.push({value:a.name,label:a.name});break;case"E++":e[10].children.push({value:a.name,label:a.name});break;case"E+++":e[11].children.push({value:a.name,label:a.name})}})),a.forEach((function(a){switch(a.gid){case"AB":e[12].children.push({value:a.name,label:a.name});break;case"AB+":e[13].children.push({value:a.name,label:a.name})}}))},handleChange:function(e){this.value},setProperty:function(){var e=this,a=this.value,l=Object(n.a)(),t=[{label:"威力+",data:0,symbol:"%"},{label:"打击威力+",data:0,symbol:"%"},{label:"射击威力+",data:0,symbol:"%"},{label:"法击威力+",data:0,symbol:"%"},{label:"滞空状態で威力+",data:0,symbol:"%"},{label:"HP+",data:0,symbol:""},{label:"PP+",data:0,symbol:""},{label:"PP+",data:0,symbol:"%"},{label:"PP消費軽減+",data:0,symbol:"%"},{label:"威力下限補正＋",data:0,symbol:"%"},{label:"ダメージ耐性+",data:0,symbol:"%"},{label:"バーン耐性+",data:0,symbol:"%"},{label:"フリーズ耐性+",data:0,symbol:"%"},{label:"ショック耐性+",data:0,symbol:"%"},{label:"ミラージュ耐性+",data:0,symbol:"%"},{label:"パニック耐性+",data:0,symbol:"%"},{label:"ポイズン耐性+",data:0,symbol:"%"},{label:"全ダウン耐性+",data:0,symbol:"%"},{label:"累加",data:"",symbol:""}];a.forEach((function(a){""!==a&&(l.ability.forEach((function(l){l.oldAB.split("|").forEach((function(n){if(console.log("对象",a[1]),console.log("目标",n),n===a[1]){console.log(l);for(var o=0;o<l.type.length;o++)t=e.switchNgs(l.value[o],l.type[o],t)}}))})),l.unitAbilitySop.forEach((function(l){l.oldAB.split("|").forEach((function(n){if(n===a[1])for(var o=0;o<l.type.length;o++)t=e.switchNgs(l.value[o],l.type[o],t)}))})),l.abilitySop.forEach((function(l){l.oldAB.split("|").forEach((function(n){if(n===a[1])for(var o=0;o<l.type.length;o++)t=e.switchNgs(l.value[o],l.type[o],t)}))})))})),this.property=t},switchNgs:function(e,a,l){switch(console.log(e,a),a){case"A":l[0].data=parseFloat((100*l[0].data+1e4)*(100*e+1e4)/1e6-100).toFixed(4);break;case"A-":l[9].data=parseFloat((100*l[0].data+1e4)*(100*e+1e4)/1e6-100).toFixed(4);break;case"A+":l[4].data+=e;break;case"A++":l[18].data+=e;break;case"AA":l[1].data=parseFloat((100*l[0].data+1e4)*(100*e+1e4)/1e6-100).toFixed(4);break;case"AB":l[2].data=parseFloat((100*l[0].data+1e4)*(100*e+1e4)/1e6-100).toFixed(4);break;case"AC":l[3].data=parseFloat((100*l[0].data+1e4)*(100*e+1e4)/1e6-100).toFixed(4);break;case"B":l[5].data+=e;break;case"C":l[6].data+=e;break;case"C++":l[7].data+=e;break;case"C+":l[8].data=parseFloat(100*(1-(1-.01*l[8].data)*(1-.01*e))).toFixed(4);break;case"D":l[10].data+=e;break;case"DA":l[11].data+=e;break;case"DB":l[12].data+=e;break;case"DC":l[13].data+=e;break;case"DD":l[14].data+=e;break;case"DE":l[15].data+=e;break;case"DF":l[16].data+=e;break;case"DG":l[17].data+=e}return l},fuzzyMatch:function(e,a){for(var l=-1,t=!1,n=0,o=a.split("");n<o.length&&!(e.indexOf(o[n])<0);n++)for(var r=e.matchAll(o[n]),s=r.next();!s.done;){if(s.value.index>l){l=s.value.index,n===o.length-1&&(t=!0);break}s=r.next()}return t}}},r=(l(600),l(5)),s=Object(r.a)(o,(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:6}},[l("el-cascader",{attrs:{options:e.options,"show-all-levels":!1,placeholder:"能力1",filterable:""},on:{change:e.handleChange},model:{value:e.value[0],callback:function(a){e.$set(e.value,0,a)},expression:"value[0]"}}),e._v(" "),l("el-cascader",{attrs:{options:e.options,"show-all-levels":!1,placeholder:"能力2",filterable:""},on:{change:e.handleChange},model:{value:e.value[1],callback:function(a){e.$set(e.value,1,a)},expression:"value[1]"}}),e._v(" "),l("el-cascader",{attrs:{options:e.options,"show-all-levels":!1,placeholder:"能力3",filterable:""},on:{change:e.handleChange},model:{value:e.value[2],callback:function(a){e.$set(e.value,2,a)},expression:"value[2]"}}),e._v(" "),l("el-cascader",{attrs:{options:e.options,"show-all-levels":!1,placeholder:"能力4",filterable:""},on:{change:e.handleChange},model:{value:e.value[3],callback:function(a){e.$set(e.value,3,a)},expression:"value[3]"}}),e._v(" "),l("el-cascader",{attrs:{options:e.options,"show-all-levels":!1,placeholder:"能力5",filterable:""},on:{change:e.handleChange},model:{value:e.value[4],callback:function(a){e.$set(e.value,4,a)},expression:"value[4]"}}),e._v(" "),l("el-cascader",{attrs:{options:e.options,"show-all-levels":!1,placeholder:"能力6",filterable:""},on:{change:e.handleChange},model:{value:e.value[5],callback:function(a){e.$set(e.value,5,a)},expression:"value[5]"}}),e._v(" "),l("el-cascader",{attrs:{options:e.options,"show-all-levels":!1,placeholder:"能力7",filterable:""},on:{change:e.handleChange},model:{value:e.value[6],callback:function(a){e.$set(e.value,6,a)},expression:"value[6]"}}),e._v(" "),l("el-cascader",{attrs:{options:e.options,"show-all-levels":!1,placeholder:"能力8",filterable:""},on:{change:e.handleChange},model:{value:e.value[7],callback:function(a){e.$set(e.value,7,a)},expression:"value[7]"}}),e._v(" "),l("el-button",{staticStyle:{background:"#d77494",width:"100%",height:"50px"},attrs:{type:"danger"},on:{click:e.setProperty}},[e._v("确定")])],1),e._v(" "),l("el-col",{attrs:{span:14}},[l("el-card",{staticClass:"box-card"},e._l(e.property,(function(a){return l("div",[0!==a.data&&""!==a.data&&"累加"!==a.label?l("div",[e._v(e._s(a.label+a.data+a.symbol))]):"累加"===a.label?l("div",[e._v(e._s(a.data))]):e._e()])})),0)],1)],1),e._v(" "),e._m(0)],1)}),[function(){var e=this.$createElement,a=this._self._c||e;return a("ul",{staticStyle:{"font-size":"16px"}},[a("li",[this._v("大部分SOP未验证，按"),a("a",{staticStyle:{color:"#d77494"},attrs:{href:"/views/ngs/ngsop"}},[this._v("对照表")]),this._v("进行计算，对照表中不存在的SOP自行计算")]),this._v(" "),a("li",[this._v("伤害上升，减耗系按乘算")])])}],!1,null,"7c1e840d",null);a.default=s.exports}}]);