webpackJsonp([1],{"3T6A":function(t,e){},"5KwD":function(t,e){},"9Awa":function(t,e){},A1IV:function(t,e){},EQVE:function(t,e){},H0nx:function(t,e){},Kjo5:function(t,e,s){"use strict";var i=s("L4OO"),n=s.n(i),a=s("vlZG");var r=function(t){s("QafW")},l=s("VU/8")(n.a,a.a,!1,r,null,null);e.default=l.exports},L4OO:function(t,e){},"M0d/":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};s.d(i,"bgIndex",function(){return ft}),s.d(i,"bgArray",function(){return gt}),s.d(i,"singer",function(){return mt});s("briU");var n=s("/5sW"),a=s("iDdd"),r=s.n(a),l=s("yPb9"),o=s.n(l),c=s("4YfN"),u=s.n(c),h=s("9rMa"),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("p",{staticClass:"name"},[this._v("Pander ")]),this._v(" "),e("i",{staticClass:"icon-xiongmao"}),this._v(" "),e("p",{staticClass:"name"},[this._v(" Music")])])}]};var f=s("VU/8")({name:"Header"},d,!1,function(t){s("hQCG")},null,null).exports,g=s("e6V+"),m={computed:u()({},Object(h.b)(["bgIndex","bgArray"])),watch:{bgIndex:function(t){this.bgArray[this.bgIndex]}},components:{MHeader:f,Tap:g.default}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"app",attrs:{id:"app"}},[e("m-header"),this._v(" "),e("tap"),this._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var p=s("VU/8")(m,v,!1,function(t){s("r0Is")},"data-v-43a73c38",null).exports,_=s("/ocq"),y=s("rVsN"),b=s.n(y),C=s("aA9S"),x=s.n(C),S=s("6yg2"),I=s.n(S);function w(t,e,s){return t+=(t.indexOf("?")>0?"&":"?")+function(t){var e="";for(var s in t){var i="undefined"!==t[s]?t[s]:"";e+="&"+s+"="+encodeURIComponent(i)}return e?e.substring(1):""}(e),new b.a(function(e,i){return I()(t,s,function(t,s){t?i(t):e(s)})})}var T={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},k={param:"jsonpCallback"},$=s("BMa3"),E=s.n($);var L=s("kfHR"),H=s.n(L),D=s("Hu4l"),R=s.n(D);var U={name:"lelvelScroll",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3},click:{type:Boolean,default:!0}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var t=this;setTimeout(function(){t.reSetOuterWidth(),t._initDots(),t.initSlider(),t.autoPlay&&t._play()},20)},activated:function(){this.autoPlay&&this._play()},deactivated:function(){clearTimeout(this.timer)},beforeDestroy:function(){clearTimeout(this.timer)},methods:u()({reSetOuterWidth:function(){this.children=this.$refs.levelBody.children;var t=0,e=this.$refs.levelOuter.clientWidth;H()(this.children).forEach(function(s,i){var n,a,r,l;s.style.width=e+"px",-1==(a="level-item",r=(n=s).className,l="/("+a+")/",r.search(l))&&n.classList.add("level-item"),t+=e}),this.loop&&(t+=2*e),this.$refs.levelBody.style.width=t+"px"},initSlider:function(){var t=this;this.levelScroll=new R.a(this.$refs.levelOuter,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400,click:this.click}),this.levelScroll.on("scrollEnd",function(){var e=t.levelScroll.getCurrentPage().pageX-1;console.log("aaa"),t.currentPageIndex=e,t.autoPlay&&t._play()}),this.levelScroll.on("beforeScrollStart",function(){t.autoPlay&&clearTimeout(t.timer)})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this,e=this.currentPageIndex+2;this.SET_BGINDEX(this.currentPageIndex),this.timer=setTimeout(function(){t.levelScroll.goToPage(e,0,400)},this.interval)},goPicurl:function(t){alert(888),clearTimeout(this.timer);var e=t+1;this.currentPageIndex=t,this.levelScroll.goToPage(e,0,400),this.autoPlay&&this._play()}},Object(h.c)(["SET_BGINDEX"])),computed:u()({},Object(h.b)(["bgIndex"]))},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"levelOuter",staticClass:"level-outer"},[s("div",{ref:"levelBody",staticClass:"level-body"},[t._t("default")],2),t._v(" "),s("div",{staticClass:"dots"},t._l(t.dots,function(e,i){return s("span",{staticClass:"dot",class:{active:t.currentPageIndex===i},on:{click:function(e){t.goPicurl(i)}}})}))])},staticRenderFns:[]};var N=s("VU/8")(U,P,!1,function(t){s("5KwD")},"data-v-29da5aaa",null).exports,A={props:{probeType:{type:Number,default:1},data:{type:Array,default:null},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){if(this.$refs.wrapper&&(this.scroll=new R.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.listenScroll)){var t=this;this.scroll.on("scroll",function(e){t.$emit("scroll",e)})}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}}},F={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper"},[this._t("default")],2)},staticRenderFns:[]};var V=s("VU/8")(A,F,!1,function(t){s("SjoL")},"data-v-57457348",null).exports,j={data:function(){return{carouselSong:[],discList:[]}},created:function(){this._getRecommend(),this._getDiscList()},methods:{_getRecommend:function(){var t=this;w("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",x()({},T,{platform:"h5",uin:0,needNewCode:1}),k).then(function(e){console.log(e),0===e.code&&(t.carouselSong=e.data.slider)})},_getDiscList:function(){var t,e=this;(t=x()({},T,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"}),E.a.get("/api/getDiscList",{params:t}).then(function(t){return b.a.resolve(t.data)})).then(function(t){console.log(t),0===t.code&&(e.discList=t.data.list)})},loadImage:function(){this.checkloaded||(this.checkloaded=!0,this.$refs.scroll.refresh())}},components:{LevelSroll:N,scroll:V}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommend"},[s("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.discList}},[s("div",[t.carouselSong.length?s("div",[s("levelSroll",t._l(t.carouselSong,function(e){return s("div",[s("a",{attrs:{href:e.linkUrl}},[s("img",{attrs:{src:e.picUrl,alt:""},on:{load:t.loadImage}})])])})),t._v(" "),s("div",{staticClass:"hotList"},[s("h1",{staticClass:"list-title"},[t._v("热门歌曲列表")]),t._v(" "),s("ul",t._l(t.discList,function(e){return s("li",{staticClass:"item"},[s("div",{staticClass:"icon"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60",alt:""}})]),t._v(" "),s("div",{staticClass:"text"},[s("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),t._v(" "),s("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])}))])],1):t._e()])])],1)},staticRenderFns:[]};var Y=s("VU/8")(j,O,!1,function(t){s("H0nx")},"data-v-dd7279ae",null).exports,M={props:{data:{type:Array,default:[]}},created:function(){this.listHeight=[],this.listenScroll=!0,this.probeType=3},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},methods:{selectItem:function(t){alert(888),this.$emit("select",t)},_caculateHeight:function(){var t=this,e=this.$refs.singerList;this.listHeight=[];var s=0;this.listHeight.push(s),e.forEach(function(e,i){s+=e.clientHeight,t.listHeight.push(s)})},gotoBig:function(t){this.currentIndex=t,this._scrollTo(t)},_scrollTo:function(t){this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.singerList[t],0)},scroll:function(t){this.scrollY=t.y}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},watch:{data:function(){var t=this;setTimeout(function(){t._caculateHeight()},20)},scrollY:function(t){if(t>0)this.currentIndex=0;else for(var e=this.listHeight,s=0;s<e.length-1;s++)if(-t>=e[s]&&-t<e[s+1])return this.currentIndex=s,void(this.diff=e[s+1]+t)},diff:function(t){var e=t>0&&t<20?t-20:0;console.log(e),this.tHeight!==e&&(this.tHeight=e,this.$refs.fixed.style.transform="translate3d(0,"+e+"px,0)")}},components:{Scroll:V}},q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("scroll",{ref:"listview",staticClass:"listview",attrs:{"listen-scroll":t.listenScroll,"probe-type":t.probeType,data:t.data},on:{scroll:t.scroll}},[s("ul",{staticClass:"singerList"},t._l(t.data,function(e){return s("li",{ref:"singerList",refInFor:!0},[s("p",{staticClass:"singerTitle"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.items,function(e){return s("div",{staticClass:"singerD",on:{click:function(s){t.selectItem(e)}}},[s("p",{staticClass:"singerImg"},[s("img",{attrs:{src:e.avatar,alt:""}})]),t._v(" "),s("p",{staticClass:"singerName"},[t._v(t._s(e.name))])])})],2)})),t._v(" "),s("div",{staticClass:"list-shortcut"},[s("ul",t._l(t.shortcutList,function(e,i){return s("li",{class:t.currentIndex===i?"currentIndex":"",attrs:{"data-index":i},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.gotoBig(i)}}},[t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t")])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.fixTitle,expression:"fixTitle"}],ref:"fixed",staticClass:"fixTitle"},[s("p",[t._v(t._s(t.fixTitle))])])])},staticRenderFns:[]};var B=s("VU/8")(M,q,!1,function(t){s("yFiM")},"data-v-412a1c2f",null).exports;var G=s("AA3o"),Q=s.n(G),z=function t(e){var s=e.id,i=e.name;Q()(this,t),this.id=s,this.name=i,this.avatar="http://y.gtimg.cn/music/photo_new/T001R300x300M000"+s+".jpg?max_age=2592000"},W={created:function(){this._getSinger()},data:function(){return{singers:[]}},methods:u()({selectSinger:function(t){alert("好安勿燥"),this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSinger:function(){var t=this;w("https://szc.y.qq.com/v8/fcg-bin/v8.fcg?",x()({},T,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0}),k).then(function(e){t.singers=t._orderSingerlist(e.data.list)})},_orderSingerlist:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,s){s<10&&e.hot.items.push(new z({id:t.Fsinger_mid,name:t.Fsinger_name}));var i=t.Findex;e[i]||(e[i]={title:i,items:[]}),e[i].items.push(new z({id:t.Fsinger_mid,name:t.Fsinger_name}))});var s=[],i=[];for(var n in e)"hot"===n?s.push(e[n]):-1!==n.toLocaleLowerCase().search(/[a-z]/)&&i.push(e[n]);return i.sort(function(t,e){return t.title.toLocaleLowerCase().charCodeAt(0)-e.title.toLocaleLowerCase().charCodeAt(0)}),s.concat(i)}},Object(h.c)({setSinger:"SET_SINGER"})),components:{listView:B}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"singer"},[e("list-view",{attrs:{data:this.singers},on:{select:this.selectSinger}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var K=s("VU/8")(W,X,!1,function(t){s("ZDox")},"data-v-1adc1336",null).exports,Z=s("Kjo5"),J=s("YOyO"),tt={props:{songs:{type:Array,default:[]}},methods:{getDesc:function(t){return t.name+"."+t.album}}},et={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"songList"},[s("ul",t._l(t.songs,function(e){return s("li",{staticClass:"item"},[s("div",{staticClass:"content"},[s("h2",{staticClass:"songName"},[s("i",{staticClass:"icon-yinle"}),t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")]),t._v(" "),s("p",{staticClass:"songDesc"},[s("i",{staticClass:"icon-morengeshoutu"}),t._v(" \n\t\t\t\t\t"+t._s(t.getDesc(e))+"\n\t\t\t\t")])])])}))])},staticRenderFns:[]};var st=s("VU/8")(tt,et,!1,function(t){s("mwRg")},"data-v-5432779b",null).exports,it={props:{title:{type:String,default:""},headImg:{type:String,default:""},songs:{type:Array,default:null}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.mitranslateY=40-this.imageHeight,this.$refs.scroll.$el.style.top=this.imageHeight+30+"px"},data:function(){return{scrollY:0}},methods:{back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y}},watch:{scrollY:function(t){var e=Math.max(this.mitranslateY,t);console.log(e);var s=0,i=1;this.$refs.layer.style.transform="translate3d(0,"+e+"px,0)";var n=Math.abs(t/this.imageHeight);t>0&&(i=1+n,s=10),t<this.mitranslateY?(s=10,this.$refs.bgImage.style.height="40px",this.$refs.bgImage.style.paddingTop=0):(this.$refs.bgImage.style.height=0,this.$refs.bgImage.style.paddingTop="70%"),this.$refs.bgImage.style.zIndex=""+s,this.$refs.bgImage.style.transform="scale("+i+")"}},computed:{bgStyle:function(){return"background-image:url("+this.headImg+")"}},components:{SongList:st,Scroll:V}},nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"musicList"},[e("div",{staticClass:"back",on:{click:this.back}},[e("i",{staticClass:"icon-fanhui"}),this._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:this._s(this.title)}})]),this._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:this.bgStyle},[e("div",{ref:"filter",staticClass:"filter"})]),this._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),this._v(" "),e("scroll",{ref:"scroll",staticClass:"list",attrs:{data:this.songs,"listen-scroll":this.listenScroll,"probe-type":this.probeType},on:{scroll:this.scroll}},[e("song-list",{attrs:{songs:this.songs}})],1)],1)},staticRenderFns:[]};var at=s("VU/8")(it,nt,!1,function(t){s("9Awa")},"data-v-10c091dc",null).exports,rt=function t(e){var s=e.id,i=e.mid,n=e.singer,a=e.name,r=e.album,l=e.duration,o=e.image,c=e.url;Q()(this,t),this.id=s,this.mid=i,this.singer=n,this.name=a,this.album=r,this.duration=l,this.image=o,this.url=c};var lt={computed:u()({title:function(){return this.singer.name},headImg:function(){return this.singer.avatar}},Object(h.b)(["singer"])),created:function(){this._getDetail()},data:function(){return{songs:[]}},methods:{_getDetail:function(){var t,e=this;this.singer.id||this.$router.push("/singer"),(t=this.singer.id,w("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",x()({},T,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t}),k)).then(function(t){0===t.code&&(e.songs=e._handelSongs(t.data.list),console.log(e.songs))})},_handelSongs:function(t){var e=[];return t.forEach(function(t){var s,i,n;e.push((s=t.musicData,new rt({id:s.songid,mid:s.songmid,singer:(i=s.singer,n=[],i.forEach(function(t){n.push(t.name)}),n.join("/")),name:s.songname,album:s.albumname,duration:s.interval,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+s.albummid+".jpg?max_age=2592000"})))}),e}},components:{MusicList:at}},ot={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{title:this.title,headImg:this.headImg,songs:this.songs}})],1)},staticRenderFns:[]};var ct=s("VU/8")(lt,ot,!1,function(t){s("M0d/")},"data-v-0ae23d26",null).exports;n.a.use(_.a);var ut,ht=new _.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",name:"Recommend",component:Y},{path:"/singer",name:"Singer",component:K,children:[{path:":id",component:ct}]},{path:"/rank",name:"Rank",component:Z.default},{path:"/search",name:"Search",component:J.default}]}),dt=s("mUbh"),ft=function(t){return t.bgIndex},gt=function(t){return t.bgArray},mt=function(t){return t.singer},vt={bgIndex:-1,bgArray:["blue","red","yellow","pink","black"],singer:{}},pt=s("a3Yh"),_t=s.n(pt),yt=(ut={},_t()(ut,"SET_BGINDEX",function(t,e){t.bgIndex=e}),_t()(ut,"SET_SINGER",function(t,e){t.singer=e}),ut);s("6LYt");n.a.use(h.a);var bt=new h.a.Store({actions:dt,getters:i,state:vt,mutations:yt,strict:!1,plugins:[]});s("EQVE");r.a.attach(document.body),n.a.use(o.a,{loading:s("tewn")}),n.a.config.productionTip=!1,new n.a({el:"#app",router:ht,store:bt,render:function(t){return t(p)}})},QafW:function(t,e){},SjoL:function(t,e){},U0jH:function(t,e){},YOyO:function(t,e,s){"use strict";var i=s("A1IV"),n=s.n(i),a=s("YsvQ");var r=function(t){s("3T6A")},l=s("VU/8")(n.a,a.a,!1,r,null,null);e.default=l.exports},YsvQ:function(t,e,s){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"singer"},[this._v("\n\t我是搜索\n")])},staticRenderFns:[]};e.a=i},ZDox:function(t,e){},axkE:function(t,e){},"e6V+":function(t,e,s){"use strict";var i=s("U0jH"),n=s.n(i),a=s("wN7D");var r=function(t){s("axkE")},l=s("VU/8")(n.a,a.a,!1,r,"data-v-7fd78493",null);e.default=l.exports},hQCG:function(t,e){},mUbh:function(t,e){},mwRg:function(t,e){},r0Is:function(t,e){},tewn:function(t,e,s){t.exports=s.p+"static/img/default.2b977a7.jpg"},vlZG:function(t,e,s){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"singer"},[this._v("\n\t我是排行榜\n")])},staticRenderFns:[]};e.a=i},wN7D:function(t,e,s){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tap"},[e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[e("i",{staticClass:"icon-tuijian"}),this._v(" "),e("span",{staticClass:"tab-link"},[this._v("A")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[e("i",{staticClass:"icon-morengeshoutu"}),this._v(" "),e("span",{staticClass:"tab-link"})]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[e("i",{staticClass:"icon-paihang"}),this._v(" "),e("span",{staticClass:"tab-link"})]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[e("i",{staticClass:"icon-icon-search-cancel"}),this._v(" "),e("span",{staticClass:"tab-link"})])],1)},staticRenderFns:[]};e.a=i},yFiM:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.730a1be76f97485ef4a3.js.map