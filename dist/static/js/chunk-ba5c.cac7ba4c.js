(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ba5c"],{"0hwK":function(t,e,i){"use strict";var n=i("lutN");i.n(n).a},RAt8:function(t,e,i){"use strict";i.r(e);var n=i("QbLZ"),o=i.n(n),a=i("P2sY"),r=i.n(a),s=(i("p77/"),i("RPjj"),i("puD4"),i("VH6O")),d=i.n(s),l={minHeight:"200px",previewStyle:"vertical",useCommandShortcut:!0,useDefaultHTMLSanitizer:!0,usageStatistics:!1,hideModeSwitch:!1,toolbarItems:["heading","bold","italic","strike","divider","hr","quote","divider","ul","ol","task","indent","outdent","divider","table","image","link","divider","code","codeblock"]},u={name:"MarddownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return l}},mode:{type:String,default:"markdown"},height:{type:String,required:!1,default:"300px"},language:{type:String,required:!1,default:"en_US"}},data:function(){return{editor:null}},computed:{editorOptions:function(){var t=r()({},l,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}},watch:{value:function(t,e){t!==e&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.destroyEditor(),this.initEditor()},height:function(t){this.editor.height(t)},mode:function(t){this.editor.changeMode(t)}},mounted:function(){this.initEditor()},destroyed:function(){this.destroyEditor()},methods:{initEditor:function(){var t=this;this.editor=new d.a(o()({el:document.getElementById(this.id)},this.editorOptions)),this.value&&this.editor.setValue(this.value),this.editor.on("change",function(){t.$emit("input",t.editor.getValue())})},destroyEditor:function(){this.editor&&(this.editor.off("change"),this.editor.remove())},setValue:function(t){this.editor.setValue(t)},getValue:function(){return this.editor.getValue()},setHtml:function(t){this.editor.setHtml(t)},getHtml:function(){return this.editor.getHtml()}}},c=i("KHd+"),h=Object(c.a)(u,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.id}})},[],!1,null,null,null);h.options.__file="index.vue";var g={name:"MarkdownDemo",components:{MarkdownEditor:h.exports},data:function(){return{content:"\n**This is test**\n* vue\n* element\n* webpack\n",html:"",languageTypeList:{en:"en_US",zh:"zh_CN",es:"es_ES"}}},computed:{language:function(){return this.languageTypeList[this.$store.getters.language]}},methods:{getHtml:function(){this.html=this.$refs.markdownEditor.getHtml(),console.log(this.html)}}},m=(i("0hwK"),Object(c.a)(g,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"components-container"},[t._m(0),t._v(" "),i("div",{staticClass:"editor-container"},[i("el-tag",{staticClass:"tag-title"},[t._v("Basic:")]),t._v(" "),i("markdown-editor",{attrs:{height:"300px"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),i("div",{staticClass:"editor-container"},[i("el-tag",{staticClass:"tag-title"},[t._v("Markdown Mode:")]),t._v(" "),i("markdown-editor",{ref:"markdownEditor",attrs:{options:{hideModeSwitch:!0,previewStyle:"tab"},height:"200px"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),i("div",{staticClass:"editor-container"},[i("el-tag",{staticClass:"tag-title"},[t._v("Customize Toolbar:")]),t._v(" "),i("markdown-editor",{ref:"markdownEditor",attrs:{options:{toolbarItems:["heading","bold","italic"]}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),i("div",{staticClass:"editor-container"},[i("el-tag",{staticClass:"tag-title"},[t._v("I18n:")]),t._v(" "),i("el-alert",{attrs:{closable:!1,title:"You can change the language of the admin system to see the effect",type:"success"}}),t._v(" "),i("markdown-editor",{attrs:{language:t.language,height:"300px"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),i("el-button",{staticStyle:{"margin-top":"80px"},attrs:{type:"primary",icon:"el-icon-document"},on:{click:t.getHtml}},[t._v("Get HTML")]),t._v(" "),i("div",{domProps:{innerHTML:t._s(t.html)}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("code",[this._v("Markdown is based on\n    "),e("a",{attrs:{href:"https://github.com/nhnent/tui.editor",target:"_blank"}},[this._v("tui.editor")]),this._v(" ，Simply encapsulated in Vue.\n    "),e("a",{attrs:{target:"_blank",href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html"}},[this._v("\n      Documentation ")])])}],!1,null,"433b33b4",null));m.options.__file="markdown.vue";e.default=m.exports},lutN:function(t,e,i){}}]);