(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{432:function(t,e,o){var content=o(435);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("4019da57",content,!0,{sourceMap:!1})},433:function(t,e,o){"use strict";var r={props:{form:Object,onSubmit:Function,onReset:{type:Function,default:function(){}},config:Object}},n=o(28),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-card",{staticClass:"mb-5",attrs:{"bg-variant":"light"}},[o("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)},reset:t.onReset}},[o("b-row",[o("b-col",[o("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"2","label-size":"sm",description:"Final Memo Recipient",label:"TO:","label-for":"memo-to"}},[o("b-form-input",{attrs:{id:"memo-to"},model:{value:t.form.to,callback:function(e){t.$set(t.form,"to",e)},expression:"form.to"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Priority:","label-align-sm":"right"}},[o("b-form-radio-group",{staticClass:"pt-2",attrs:{options:["Normal","Moderate","Very Urgent"]},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}})],1)],1)],1),t._v(" "),o("b-row",[o("b-col",[o("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"2","label-size":"sm",description:"CC:",label:"RECIPIENTS:","label-for":"memo-recipients"}},[o("b-form-input",{attrs:{id:"memo-recipients"},model:{value:t.form.recipients,callback:function(e){t.$set(t.form,"recipients",e)},expression:"form.recipients"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Accessibility:","label-align-sm":"right"}},[o("b-form-radio-group",{staticClass:"pt-2",attrs:{options:["Public","Private"]},model:{value:t.form.accesibility,callback:function(e){t.$set(t.form,"accesibility",e)},expression:"form.accesibility"}})],1)],1)],1),t._v(" "),o("b-row",[o("b-col",[o("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"2","label-size":"sm",label:"SUBJECT:","label-for":"memo-subject"}},[o("b-form-input",{attrs:{id:"memo-subject"},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Commenting:","label-align-sm":"right"}},[o("b-form-radio-group",{staticClass:"pt-2",attrs:{options:["Required","Not Required"]},model:{value:t.form.commenting,callback:function(e){t.$set(t.form,"commenting",e)},expression:"form.commenting"}})],1)],1)],1),t._v(" "),o("b-row",{staticClass:"mb-2"},[o("b-col",{attrs:{sm:"12"}},[o("label",{attrs:{for:"textarea-memo"}},[t._v("Memo Body:")]),t._v(" "),o("trumbowyg",{staticClass:"form-control",attrs:{config:t.config,name:"content"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1),t._v(" "),o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),t._t("default")],2)],1)}),[],!1,null,null,null);e.a=component.exports},434:function(t,e,o){"use strict";var r=o(432);o.n(r).a},435:function(t,e,o){(t.exports=o(40)(!1)).push([t.i,".fa-btn[data-v-6628d8de]{margin-top:-4px}.fa-btn>.fa-bars[data-v-6628d8de]{font-size:1.275em}",""])},440:function(t,e,o){"use strict";o.r(e);o(5),o(3),o(2),o(1),o(4),o(20),o(30);var r=o(0),n=o(433),c=o(57);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var m={data:function(){return{searchQuery:"",newMemo:!1,showMemoSubs:!1,form:{to:"",recipients:"",subject:"",priority:null,accesibility:null,commenting:null,content:null},config:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({results:{get:function(t){return t.$store.getters["memorandums/getMemos"]},set:function(t){return t}},searched:{get:function(t){return t.$store.getters["memorandums/getSearchStatus"]},set:function(t){return t}},selectedState:{get:function(t){return t.$store.getters["memorandums/getSelectedState"]},set:function(t){return t}},isDetailView:{get:function(t){return t.$store.getters["memorandums/getMemoDetailView"]},set:function(t){return t}}},Object(c.b)({memoStates:"memorandums/getMemoStates"})),watch:{results:function(t,e){this.results=t},selectedState:function(t,e){this.selectedState=t},isDetailView:function(t,e){this.isDetailView=t}},methods:{startNewMemo:function(){this.newMemo=!0,this.$store.dispatch("memorandums/setSelectedState","NEW MEMORANDUM")},truncate:function(t,e){return t.replace(/(<([^>]+)>)/gi,"").split(/\s+/).slice(0,e).join(" ")+" ..."},getMemorandums:function(t,data){var e=this;this.newMemo=!1,this.$store.dispatch("memorandums/setMemos",data).then((function(){e.results=e.$store.getters["memorandums/getMemos"],e.selectedState=e.$store.getters["memorandums/getSelectedState"]}))},memoSearch:function(){var t=this;this.newMemo=!1,this.$store.dispatch("memorandums/setSelectedState","SEARCH ..."),this.$store.dispatch("memorandums/setSearchResults",this.searchQuery).then((function(){t.results=t.$store.getters["memorandums/getSearchResults"]}))},toggleMemoSubs:function(){this.showMemoSubs=!this.showMemoSubs},onSubmit:function(t){t.preventDefault(),console.log(this.form),this.$store.dispatch("memorandums/createMemorandum",this.form)},onReset:function(t){t.preventDefault(),this.form.to="",this.form.recipients="",this.form.subject="",this.form.priority=null,this.form.accesibility=null,this.form.commenting=null,this.form.content=null}},mounted:function(){},components:{Create:n.a}},f=(o(434),o(28)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-fluid"},[t.isDetailView?t._e():o("div",[o("div",{staticClass:"d-flex justify-content-between align-content-center pt-2"},[o("h3",[t._v("\n                MEMORANDUMS \n                "),o("button",{staticClass:"text-dark btn fa-btn",attrs:{type:"button"},on:{click:t.toggleMemoSubs}},[o("font-awesome-icon",{attrs:{icon:"bars"}})],1)]),t._v(" "),t.showMemoSubs?o("b-nav-form",[o("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),t._v(" "),o("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"},on:{click:function(e){return e.preventDefault(),t.memoSearch(e)}}},[t._v("Search")])],1):t._e()],1),t._v(" "),t.showMemoSubs?o("hr"):t._e(),t._v(" "),t.showMemoSubs?o("section",{staticClass:"d-flex justify-content-between"},[t._l(t.memoStates,(function(e){return o("b-button",{key:e.title,attrs:{variant:e.color},on:{click:function(o){return t.getMemorandums(o,{memo_state:e.title})}}},[t._v("\n                "+t._s(e.title)+"\n                "),o("b-badge",{attrs:{variant:"light"}},[t._v(t._s(e.count))])],1)})),t._v(" "),o("b-button",{attrs:{variant:"outline-success"},on:{click:t.startNewMemo}},[t._v("+ NEW")])],2):t._e(),t._v(" "),o("hr"),t._v(" "),""!=t.selectedState?o("h4",[t._v(t._s(t.selectedState)+" ...")]):o("h4",[t._v("NEW MEMO")]),t._v(" "),o("hr")]),t._v(" "),o("section",{attrs:{id:"dynamic-wrapper"}},[t.newMemo?o("Create",{attrs:{form:t.form,onSubmit:t.onSubmit,onReset:t.onReset,config:t.config}},[o("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):o("nuxt-child",{attrs:{results:t.results,truncate:t.truncate,showMemoSubs:t.showMemoSubs,getMemorandums:t.getMemorandums}})],1)])}),[],!1,null,"6628d8de",null);e.default=component.exports}}]);