(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{436:function(t,e,n){"use strict";n.r(e);n(11);var r={props:{creator:String,subject:String,brief:String,created:String,status:String,id:Number}},c=n(28),o=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:"/memo/"+t.id,tag:"a"}},[n("div",{staticClass:"result row"},[n("div",{staticClass:"col-2 font-weight-bold"},[t._v("\n            "+t._s(t.creator)+"\n        ")]),t._v(" "),n("div",{staticClass:"col-10 d-flex justify-content-between"},[n("span",[n("span",{staticClass:"subject font-weight-bold"},[t._v(t._s(t.subject))]),t._v(" - \n                "),n("span",{staticClass:"brief text-muted"},[t._v(t._s(t.brief))])]),t._v(" "),n("span",{staticClass:"justify-content-between"},[n("b-badge",{staticClass:"mr-1",attrs:{variant:"info"}},[t._v(t._s(t.status))]),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.created)))])],1)])]),t._v(" "),n("hr",{staticClass:"mt-1"})])}),[],!1,null,null,null).exports,l={props:{showMemoSubs:Boolean,truncate:Function,results:Array,getMemorandums:Function},mounted:function(){this.$store.dispatch("memorandums/setMemoDetailView",!1),this.getMemorandums(event,{memo_state:"INCOMING"})},components:{SingleMemorandum:o}},d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},t._l(t.results,(function(e){return n("single-memorandum",{key:e.created,attrs:{creator:e.sender.get_full_name,subject:t.truncate(e.subject),brief:t.truncate(e.message),created:e.created,id:e.id,status:e.memo_state}})})),1)}),[],!1,null,null,null);e.default=d.exports}}]);