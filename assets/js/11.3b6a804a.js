(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Pd8g:function(t,e,n){"use strict";n.r(e);var i={props:{title:{type:String,required:!0},repo:{type:String,required:!0},pathname:{type:String,required:!0},url:{type:String},src:{type:String,default:"https://utteranc.es/utterances.html"},issueTerm:{type:String,default:"pathname"},label:{type:String,default:null},theme:{type:String,default:"github-light"},description:{type:String,default:null},origin:{type:String,default:window.location.origin}},data:()=>({session:localStorage.getItem("utterances-session")||"",containerHeight:0}),computed:{utterancesOrigin(){const t=this.src.match(/^(https?:\/\/[^\/]+).*/);return t?t[1]:null},iframeSrc(){const t=this.url||window.location.origin+window.location.pathname,e=this.origin||window.location.origin,n=["title","repo","theme","label","session","description","pathname"].filter(t=>!!this[t]).map(t=>`${t}=${encodeURIComponent(this[t])}`);return n.push("issue-term="+encodeURIComponent(this.issueTerm)),n.push("url="+encodeURIComponent(t)),n.push("origin="+encodeURIComponent(e)),"https://utteranc.es/utterances.html?"+n.join("&")}},created(){window.addEventListener("message",this.handleEvent);const{search:t,pathname:e,hash:n}=window.location,i=t.substr(1).match(/(?:^|&)utterances=([^&]+)(?:$|&)/);i&&(this.session=decodeURIComponent(i[1]),localStorage.setItem("utterances-session",this.session),this.$router.replace(e+t.replace("utterances="+i[1],"")+n))},destroyed(){removeEventListener("message",this.handleEvent)},methods:{handleEvent(t){if(t.origin!==this.utterancesOrigin)return;const e=t.data;e&&"resize"===e.type&&e.height&&(this.containerHeight=e.height)}}},s=(n("cuKE"),n("KHd+")),r=Object(s.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"utterances",style:{height:this.containerHeight+"px"}},[t("iframe",{staticClass:"utterances-frame",attrs:{title:"Comments",scrolling:"no",src:this.iframeSrc}})])}),[],!1,null,null,null);e.default=r.exports},Ypaj:function(t,e,n){},cuKE:function(t,e,n){"use strict";n("Ypaj")}}]);