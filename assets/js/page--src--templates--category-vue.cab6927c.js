(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1yae":function(t,s,e){"use strict";var o=e("oLjJ"),a={props:["post"]},n=e("KHd+"),i=Object(n.a)(a,(function(){var t=this,s=t._self._c;return s("span",[t._v("ป้ายบันทึก:\n  "),t._l(t.post.tags,(function(e,o){return[o>0?[t._v(", ")]:t._e(),s("g-link",{key:e.id,attrs:{to:e.path}},[t._v(t._s(e.title))])]}))],2)}),[],!1,null,null,null).exports,r={props:["post"]},p=Object(n.a)(r,(function(){var t=this._self._c;return t("span",[this._v("ใช้เวลา: "),t("strong",[this._v(this._s(this.post.timeToRead)+" นาที")])])}),[],!1,null,null,null).exports,l={components:{PostHeaderTitle:o.a,PostHeaderTags:i,PostHeaderTimeToRead:p},props:["post"]},c={components:{PostHeader:Object(n.a)(l,(function(){var t=this._self._c;return t("header",[t("h2",[t("g-link",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{to:this.post.path},domProps:{innerHTML:this._s(this.post.title)}})],1),t("p",[t("PostHeaderTitle",{attrs:{post:this.post}}),this._v("\n    •\n    "),t("PostHeaderTags",{attrs:{post:this.post}})],1),t("p",[t("PostHeaderTimeToRead",{attrs:{post:this.post}})],1)])}),[],!1,null,null,null).exports},props:["post"]},u=Object(n.a)(c,(function(){var t=this._self._c;return t("article",[t("PostHeader",{attrs:{post:this.post}}),t("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.excerpt)}}),t("br"),t("g-link",{staticClass:"btn",attrs:{to:this.post.path}},[this._v("อ่านต่อ ...")]),t("hr")],1)}),[],!1,null,null,null);s.a=u.exports},nldV:function(t,s,e){"use strict";e.r(s);var o={components:{PostSummary:e("1yae").a}},a=e("KHd+"),n=null,i=Object(a.a)(o,(function(){var t=this._self._c;return t("Layout",[t("h1",{staticClass:"category-title text-center space-bottom"},[this._v("\n    # "+this._s(this.$page.category.title)+"\n  ")]),t("div",{staticClass:"posts"},this._l(this.$page.category.belongsTo.edges,(function(s){return t("PostSummary",{key:s.node.id,attrs:{post:s.node}})})),1)])}),[],!1,null,null,null);"function"==typeof n&&n(i);s.default=i.exports},oLjJ:function(t,s,e){"use strict";var o={props:["post"]},a=e("KHd+"),n=Object(a.a)(o,(function(){var t=this._self._c;return t("span",[this._v("วันที่ "+this._s(this.post.date)+" "),t("g-link",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{to:this.post.category.path},domProps:{innerHTML:this._s(this.post.category.title)}})],1)}),[],!1,null,null,null);s.a=n.exports}}]);