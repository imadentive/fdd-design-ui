(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{525:function(t,a,s){"use strict";s.d(a,"a",(function(){return e}));s(63);function e(t,a,s){return a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t}},526:function(t,a,s){"use strict";s.d(a,"a",(function(){return r}));s(90),s(26),s(35),s(178),s(88),s(89),s(177),s(179),s(63);var e=s(525);function n(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),s.push.apply(s,e)}return s}function r(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?n(Object(s),!0).forEach((function(a){Object(e.a)(t,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))}))}return t}},545:function(t,a,s){},583:function(t,a,s){"use strict";s(545)},614:function(t,a,s){"use strict";s.r(a);var e,n=s(526),r=(s(284),s(182),s(52),s(51),s(183),{name:"component-doc",components:{"render-demo-0":(e={data:function(){return{value:new Date}}},Object(n.a)({render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("el-calendar",{model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)},staticRenderFns:[]},e)),"render-demo-1":Object(n.a)({render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("el-calendar",{scopedSlots:t._u([{key:"dateCell",fn:function(a){a.date;var e=a.data;return[s("p",{class:e.isSelected?"is-selected":""},[t._v("\n      "+t._s(e.day.split("-").slice(1).join("-"))+" "+t._s(e.isSelected?"✔️":"")+"\n    ")])]}}])})],1)},staticRenderFns:[]},{}),"render-demo-2":Object(n.a)({render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("el-calendar",{attrs:{range:["2019-03-04","2019-03-24"]}})],1)},staticRenderFns:[]},{})}}),p=(s(583),s(50)),c=Object(p.a)(r,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"calendar-日历"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#calendar-日历"}},[t._v("#")]),t._v(" Calendar 日历")]),t._v(" "),s("p",[t._v("显示日期")]),t._v(" "),s("h2",{attrs:{id:"基本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本"}},[t._v("#")]),t._v(" 基本")]),t._v(" "),s("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[s("template",{slot:"demo"},[[s("render-demo-0")]],2),t._v(" "),s("div",{attrs:{slot:"description"},slot:"description"},[s("p",[t._v("设置 "),s("code",[t._v("value")]),t._v(" 来指定当前显示的月份。如果 "),s("code",[t._v("value")]),t._v(" 未指定，则显示当月。"),s("code",[t._v("value")]),t._v(" 支持 "),s("code",[t._v("v-model")]),t._v(" 双向绑定。")])]),t._v(" "),s("template",{slot:"source"},[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-calendar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-calendar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),s("h2",{attrs:{id:"自定义内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义内容"}},[t._v("#")]),t._v(" 自定义内容")]),t._v(" "),s("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[s("template",{slot:"demo"},[[s("render-demo-1")]],2),t._v(" "),s("div",{attrs:{slot:"description"},slot:"description"},[s("p",[t._v("通过设置名为 "),s("code",[t._v("dateCell")]),t._v(" 的 "),s("code",[t._v("scoped-slot")]),t._v(" 来自定义日历单元格中显示的内容。在 "),s("code",[t._v("scoped-slot")]),t._v(" 可以获取到 date（当前单元格的日期）, data（包括 type，isSelected，day 属性）。详情解释参考下方的 API 文档。")])]),t._v(" "),s("template",{slot:"source"},[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-calendar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法--\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dateCell"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot-scope")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{date, data}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("data.isSelected ? "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("is-selected"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" : "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-calendar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".is-selected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #1989FA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),s("h2",{attrs:{id:"自定义范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义范围"}},[t._v("#")]),t._v(" 自定义范围")]),t._v(" "),s("demo-block",{attrs:{options:JSON.parse(decodeURI("%7B%7D"))}},[s("template",{slot:"demo"},[[s("render-demo-2")]],2),t._v(" "),s("div",{attrs:{slot:"description"},slot:"description"},[s("p",[t._v("设置 "),s("code",[t._v("range")]),t._v(" 属性指定日历的显示范围。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。")])]),t._v(" "),s("template",{slot:"source"},[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-calendar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":range")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("2019-03-04"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("2019-03-24"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-calendar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],2),s("h2",{attrs:{id:"attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value / v-model")]),t._v(" "),s("td",[t._v("绑定值")]),t._v(" "),s("td",[t._v("Date/string/number")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("—")])]),t._v(" "),s("tr",[s("td",[t._v("range")]),t._v(" "),s("td",[t._v("时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("—")])]),t._v(" "),s("tr",[s("td",[t._v("first-day-of-week")]),t._v(" "),s("td",[t._v("周起始日")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("1 到 7")]),t._v(" "),s("td",[t._v("1")])])])]),t._v(" "),s("h2",{attrs:{id:"datecell-scoped-slot-参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datecell-scoped-slot-参数"}},[t._v("#")]),t._v(" dateCell scoped slot 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("date")]),t._v(" "),s("td",[t._v("单元格代表的日期")]),t._v(" "),s("td",[t._v("Date")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("—")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("{ type, isSelected, day}，"),s("code",[t._v("type")]),t._v(" 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；"),s("code",[t._v("isSelected")]),t._v(" 标明该日期是否被选中；"),s("code",[t._v("day")]),t._v(" 是格式化的日期，格式为 yyyy-MM-dd")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("—")])])])])],1)}),[],!1,null,null,null);a.default=c.exports}}]);