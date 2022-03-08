(function(){"use strict";var t={1854:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("Banner")],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-2 col-xs-offset-2"},[n("div",{staticClass:"list-group"},[n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:{name:"guanyu"}}},[t._v("About")]),n("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),n("div",{staticClass:"col-xs-6"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-body"},[n("router-view")],1)])])])])},r=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-offset-2 col-xs-8"},[n("div",{staticClass:"page-header"},[n("h2",[t._v("Vue Router Demo")]),n("button",{on:{click:t.back}},[t._v("后退")]),n("button",{on:{click:t.forward}},[t._v("前进")]),n("button",{on:{click:t.test}},[t._v("测试一下go")])])])},a=[],s={name:"Banner",methods:{back:function(){this.$router.back()},forward:function(){this.$router.forward()},test:function(){this.$router.go(-2)}}},u=s,c=n(1001),f=(0,c.Z)(u,l,a,!1,null,null,null),v=f.exports,p={name:"App",components:{Banner:v}},m=p,h=(0,c.Z)(m,o,r,!1,null,null,null),d=h.exports,_=n(8345),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("我是About的内容")])},w=[],b={name:"About",mounted:function(){console.log("%%",this.$route)},beforeRouteEnter:function(t,e,n){console.log("beforeRouteEnter",t,e),t.meta.isAuth?"atguigu"===localStorage.getItem("school")?n():alert("学校名字不对,无权限查看"):n()},beforeRouteLeave:function(t,e,n){console.log("APP---beforeRouteLeave"),n()}},y=b,x=(0,c.Z)(y,g,w,!1,null,null,null),k=x.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Home组件内容")]),n("div",[n("ul",{staticClass:"nav nav-tabs"},[n("li",[n("router-link",{staticClass:"list-group-item ",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),n("li",[n("router-link",{staticClass:"list-group-item ",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),n("keep-alive",{attrs:{include:"News"}},[n("router-view")],1)],1)])},C=[],E={nameL:"Home"},Z=E,O=(0,c.Z)(Z,$,C,!1,null,null,null),q=O.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{style:{opacity:t.opacity}},[t._v("欢迎学习vue")]),t._m(0),t._m(1),t._m(2)])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news001 "),n("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news002 "),n("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("news003 "),n("input",{attrs:{type:"text"}})])}],L={name:"News",data:function(){return{opacity:1}},activated:function(){var t=this;console.log("new组件激活了"),this.timer=setInterval((function(){t.opacity-=.01,t.opacity<=0&&(t.opacity=1)}),50)},deactivated:function(){console.log("new组件失活了"),clearInterval()}},R=L,S=(0,c.Z)(R,A,j,!1,null,null,null),P=S.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.messageList,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"xiangqing",query:{id:e.id,title:e.title}}}},[t._v(" "+t._s(e.title)+" ")]),t._v("   "),n("button",{on:{click:function(n){return t.pushShow(e)}}},[t._v("push查看")]),n("button",{on:{click:function(n){return t.replaceShow(e)}}},[t._v("replace查看")])],1)})),0),n("hr"),n("router-view")],1)},D=[],H=(n(4916),n(5306),{name:"Message",data:function(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},beforeDestroy:function(){},methods:{pushShow:function(t){this.$router.push({name:"xiangqing",query:{id:t.id,title:t.title}})},replaceShow:function(t){this.$router.replace({name:"xiangqing",query:{id:t.id,title:t.title}})}}}),I=H,N=(0,c.Z)(I,B,D,!1,null,null,null),T=N.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("消息编号: "+t._s(t.id))]),n("li",[t._v("消息标题: "+t._s(t.title))])])},z=[],F={name:"Detail",props:["id","title"],computed:{},mounted:function(){console.log(this.$route)}},V=F,G=(0,c.Z)(V,M,z,!1,null,null,null),J=G.exports,K=new _.Z({mode:"history",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"关于"}},{name:"zhuye",path:"/home",component:q,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:P,meta:{isAuth:!0,title:"新闻"}},{name:"xiaoxi",path:"message",component:T,meta:{isAuth:!0,title:"消息"},children:[{name:"xiangqing",path:"detail",meta:{title:"详情"},component:J,props:function(t){return{id:t.query.id,title:t.query.title}}}]}]}]});K.afterEach((function(t,e){document.title=t.meta.title||"硅谷系统",console.log("后置路由守卫",t,e)}));var Q=K;i.Z.config.productionTip=!1,i.Z.use(_.Z),new i.Z({el:"#root",render:function(t){return t(d)},router:Q})}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var l=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],r=t[c][2];for(var a=!0,s=0;s<i.length;s++)(!1&r||l>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(a=!1,r<l&&(l=r));if(a){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,o,r]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={826:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,l=i[0],a=i[1],s=i[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var c=s(n)}for(e&&e(i);u<l.length;u++)r=l[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},i=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1854)}));i=n.O(i)})();
//# sourceMappingURL=index-legacy.08337143.js.map