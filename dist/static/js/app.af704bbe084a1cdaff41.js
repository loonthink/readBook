webpackJsonp([1],{"3T6A":function(t,e){},"7qeo":function(t,e){},A1IV:function(t,e){},AJYB:function(t,e){},EQVE:function(t,e){},H0nx:function(t,e){},Kjo5:function(t,e,n){"use strict";var a=n("L4OO"),i=n.n(a),s=n("vlZG");var r=function(t){n("QafW")},o=n("VU/8")(i.a,s.a,!1,r,null,null);e.default=o.exports},L4OO:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};n.d(a,"bgIndex",function(){return nt}),n.d(a,"bgArray",function(){return at});n("briU");var i=n("/5sW"),s=n("iDdd"),r=n.n(s),o=n("yPb9"),c=n.n(o),l=n("4YfN"),u=n.n(l),d=n("9rMa"),h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("p",{staticClass:"name"},[this._v("Pander ")]),this._v(" "),e("i",{staticClass:"icon-xiongmao"}),this._v(" "),e("p",{staticClass:"name"},[this._v(" Music")])])}]};var f=n("VU/8")({name:"Header"},h,!1,function(t){n("hQCG")},null,null).exports,v=n("e6V+"),m={computed:u()({},Object(d.b)(["bgIndex","bgArray"])),watch:{bgIndex:function(t){this.bgArray[this.bgIndex]}},components:{MHeader:f,Tap:v.default}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"app",attrs:{id:"app"}},[e("m-header"),this._v(" "),e("tap"),this._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var g=n("VU/8")(m,p,!1,function(t){n("r0Is")},"data-v-43a73c38",null).exports,_=n("/ocq"),C=n("rVsN"),y=n.n(C),b=n("aA9S"),x=n.n(b),w=n("6yg2"),S=n.n(w);function I(t,e,n){return t+=(t.indexOf("?")>0?"&":"?")+function(t){var e="";for(var n in t){var a="undefined"!==t[n]?t[n]:"";e+="&"+n+"="+encodeURIComponent(a)}return e?e.substring(1):""}(e),new y.a(function(e,a){return S()(t,n,function(t,n){t?a(t):e(n)})})}var E={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},k={param:"jsonpCallback"},L=n("BMa3"),P=n.n(L);var T=n("kfHR"),U=n.n(T),A=n("Hu4l"),O=n.n(A);var V={name:"lelvelScroll",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var t=this;setTimeout(function(){t.reSetOuterWidth(),t._initDots(),t.initSlider(),t.autoPlay&&t._play()},20)},activated:function(){this.autoPlay&&this._play()},deactivated:function(){clearTimeout(this.timer)},beforeDestroy:function(){clearTimeout(this.timer)},methods:u()({reSetOuterWidth:function(){this.children=this.$refs.levelBody.children;var t=0,e=this.$refs.levelOuter.clientWidth;U()(this.children).forEach(function(n,a){var i,s,r,o;n.style.width=e+"px",-1==(s="level-item",r=(i=n).className,o="/("+s+")/",r.search(o))&&i.classList.add("level-item"),t+=e}),this.loop&&(t+=2*e),this.$refs.levelBody.style.width=t+"px"},initSlider:function(){var t=this;this.levelScroll=new O.a(this.$refs.levelOuter,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400}),this.levelScroll.on("scrollEnd",function(){var e=t.levelScroll.getCurrentPage().pageX-1;console.log("aaa"),t.currentPageIndex=e,t.autoPlay&&t._play()}),this.levelScroll.on("beforeScrollStart",function(){t.autoPlay&&clearTimeout(t.timer)})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this,e=this.currentPageIndex+2;this.SET_BGINDEX(this.currentPageIndex),this.timer=setTimeout(function(){t.levelScroll.goToPage(e,0,400)},this.interval)},goPicurl:function(t){clearTimeout(this.timer);var e=t+1;this.currentPageIndex=t,this.levelScroll.goToPage(e,0,400),this.autoPlay&&this._play()}},Object(d.c)(["SET_BGINDEX"])),computed:u()({},Object(d.b)(["bgIndex"]))},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"levelOuter",staticClass:"level-outer"},[n("div",{ref:"levelBody",staticClass:"level-body"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots"},t._l(t.dots,function(e,a){return n("span",{staticClass:"dot",class:{active:t.currentPageIndex===a},on:{click:function(e){t.goPicurl(a)}}})}))])},staticRenderFns:[]};var N=n("VU/8")(V,$,!1,function(t){n("aK4x")},"data-v-34a62057",null).exports,R={props:{data:{type:Array,default:null},refreshDelay:{type:Number,default:20}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()})},methods:{_initScroll:function(){this.$refs.wrapper&&(this.scroll=new O.a(this.$refs.wrapper,{}))},refresh:function(){this.scroll&&this.scroll.refresh()}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}}},D={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper",staticClass:"scroll"},[this._t("default")],2)},staticRenderFns:[]};var F=n("VU/8")(R,D,!1,function(t){n("Oypr")},"data-v-cfa08498",null).exports,j={data:function(){return{carouselSong:[],discList:[]}},created:function(){this._getRecommend(),this._getDiscList()},methods:{_getRecommend:function(){var t=this;I("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",x()({},E,{platform:"h5",uin:0,needNewCode:1}),k).then(function(e){console.log(e),0===e.code&&(t.carouselSong=e.data.slider)})},_getDiscList:function(){var t,e=this;(t=x()({},E,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"}),P.a.get("/api/getDiscList",{params:t}).then(function(t){return y.a.resolve(t.data)})).then(function(t){console.log(t),0===t.code&&(e.discList=t.data.list)})},loadImage:function(){this.checkloaded||(this.checkloaded=!0,this.$refs.scroll.refresh())}},components:{LevelSroll:N,scroll:F}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.discList}},[n("div",[t.carouselSong.length?n("div",[n("levelSroll",t._l(t.carouselSong,function(e){return n("div",[n("a",{attrs:{href:e.linkUrl}},[n("img",{attrs:{src:e.picUrl,alt:""},on:{load:t.loadImage}})])])})),t._v(" "),n("div",{staticClass:"hotList"},[n("h1",{staticClass:"list-title"},[t._v("热门歌曲列表")]),t._v(" "),n("ul",t._l(t.discList,function(e){return n("li",{staticClass:"item"},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60",alt:""}})]),t._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),t._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])}))])],1):t._e()])])],1)},staticRenderFns:[]};var H=n("VU/8")(j,q,!1,function(t){n("H0nx")},"data-v-dd7279ae",null).exports,B={props:{data:null,type:Array},components:{Scroll:F}},Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll",{staticClass:"listview",attrs:{data:t.data}},[n("ul",{staticClass:"singerList"},t._l(t.data,function(e){return n("li",[n("p",{staticClass:"singerTitle"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.items,function(e){return n("div",{staticClass:"singerD"},[n("p",{staticClass:"singerImg"},[n("img",{attrs:{src:e.avatar,alt:""}})]),t._v(" "),n("p",{staticClass:"singerName"},[t._v(t._s(e.name))])])})],2)})),t._v(" "),n("div",{staticClass:"list-shortcut"})])},staticRenderFns:[]};var M=n("VU/8")(B,Y,!1,function(t){n("7qeo")},"data-v-0710f73b",null).exports;var Q=n("AA3o"),G=n.n(Q),W=function t(e){var n=e.id,a=e.name;G()(this,t),this.id=n,this.name=a,this.avatar="http://y.gtimg.cn/music/photo_new/T001R300x300M000"+n+".jpg?max_age=2592000"},z={created:function(){this._getSinger()},data:function(){return{singers:[]}},methods:{_getSinger:function(){var t=this;I("https://szc.y.qq.com/v8/fcg-bin/v8.fcg?",x()({},E,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0}),k).then(function(e){t.singers=t._orderSingerlist(e.data.list)})},_orderSingerlist:function(t){console.log(t);var e={hot:{title:"热门",items:[]}};t.forEach(function(t,n){n<10&&e.hot.items.push(new W({id:t.Fsinger_mid,name:t.Fsinger_name}));var a=t.Findex;e[a]||(e[a]={title:a,items:[]}),e[a].items.push(new W({id:t.Fsinger_mid,name:t.Fsinger_name}))});var n=[],a=[];for(var i in e)"hot"===i?n.push(e[i]):-1!==i.toLocaleLowerCase().search(/[a-z]/)&&a.push(e[i]);return a.sort(function(t,e){return t.title.toLocaleLowerCase().charCodeAt(0)-e.title.toLocaleLowerCase().charCodeAt(0)}),n.concat(a)}},components:{listView:M}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"singer"},[e("list-view",{attrs:{data:this.singers}})],1)},staticRenderFns:[]};var K=n("VU/8")(z,X,!1,function(t){n("AJYB")},"data-v-5810e4fb",null).exports,J=n("Kjo5"),Z=n("YOyO");i.a.use(_.a);var tt=new _.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",name:"Recommend",component:H},{path:"/singer",name:"Singer",component:K},{path:"/rank",name:"Rank",component:J.default},{path:"/search",name:"Search",component:Z.default}]}),et=n("mUbh"),nt=function(t){return t.bgIndex},at=function(t){return t.bgArray},it={bgIndex:-1,bgArray:["blue","red","yellow","pink","black"]},st=n("a3Yh"),rt=n.n(st)()({},"SET_BGINDEX",function(t,e){t.bgIndex=e});n("6LYt");i.a.use(d.a);var ot=new d.a.Store({actions:et,getters:a,state:it,mutations:rt,strict:!1,plugins:[]});n("EQVE");r.a.attach(document.body),i.a.use(c.a,{loading:n("tewn")}),i.a.config.productionTip=!1,new i.a({el:"#app",router:tt,store:ot,render:function(t){return t(g)}})},Oypr:function(t,e){},QafW:function(t,e){},U0jH:function(t,e){},YOyO:function(t,e,n){"use strict";var a=n("A1IV"),i=n.n(a),s=n("YsvQ");var r=function(t){n("3T6A")},o=n("VU/8")(i.a,s.a,!1,r,null,null);e.default=o.exports},YsvQ:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"singer"},[this._v("\n\t我是搜索\n")])},staticRenderFns:[]};e.a=a},aK4x:function(t,e){},axkE:function(t,e){},"e6V+":function(t,e,n){"use strict";var a=n("U0jH"),i=n.n(a),s=n("wN7D");var r=function(t){n("axkE")},o=n("VU/8")(i.a,s.a,!1,r,"data-v-7fd78493",null);e.default=o.exports},hQCG:function(t,e){},mUbh:function(t,e){},r0Is:function(t,e){},tewn:function(t,e,n){t.exports=n.p+"static/img/default.2b977a7.jpg"},vlZG:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"singer"},[this._v("\n\t我是排行榜\n")])},staticRenderFns:[]};e.a=a},wN7D:function(t,e,n){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tap"},[e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[e("i",{staticClass:"icon-tuijian"}),this._v(" "),e("span",{staticClass:"tab-link"},[this._v("A")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[e("i",{staticClass:"icon-morengeshoutu"}),this._v(" "),e("span",{staticClass:"tab-link"})]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[e("i",{staticClass:"icon-paihang"}),this._v(" "),e("span",{staticClass:"tab-link"})]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[e("i",{staticClass:"icon-icon-search-cancel"}),this._v(" "),e("span",{staticClass:"tab-link"})])],1)},staticRenderFns:[]};e.a=a}},["NHnr"]);
//# sourceMappingURL=app.af704bbe084a1cdaff41.js.map