webpackJsonp([1],{"1Pme":function(t,e){},"3T6A":function(t,e){},"4d5l":function(t,e){},"5KwD":function(t,e){},"8XKK":function(t,e){},"9fZO":function(t,e){},A1IV:function(t,e){},EQVE:function(t,e){},FMdL:function(t,e){},GxAE:function(t,e){},Kjo5:function(t,e,i){"use strict";var s=i("L4OO"),n=i.n(s),a=i("vlZG");var r=function(t){i("QafW")},o=i("VU/8")(n.a,a.a,!1,r,null,null);e.default=o.exports},L4OO:function(t,e){},"M0d/":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={};i.d(s,"selectPlay",function(){return It});var n={};i.d(n,"bgIndex",function(){return Tt}),i.d(n,"bgArray",function(){return Et}),i.d(n,"singer",function(){return Lt}),i.d(n,"playlist",function(){return kt}),i.d(n,"currentIndex",function(){return $t}),i.d(n,"fullScreen",function(){return Nt}),i.d(n,"currentSong",function(){return Pt});i("briU");var a=i("/5sW"),r=i("iDdd"),o=i.n(r),l=i("yPb9"),c=i.n(l),u=i("4YfN"),d=i.n(u),h=i("9rMa"),f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("p",{staticClass:"name"},[this._v("Pander ")]),this._v(" "),e("i",{staticClass:"icon-xiongmao"}),this._v(" "),e("p",{staticClass:"name"},[this._v(" Music")])])}]};var m=i("VU/8")({name:"Header"},f,!1,function(t){i("hQCG")},null,null).exports,g=i("e6V+"),v=i("rVsN"),p=i.n(v),_=i("a3Yh"),y=i.n(_),C=i("aA9S"),b=i.n(C),S={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},x={param:"jsonpCallback"},w=i("BMa3"),I=i.n(w),T=i("6yg2"),E=i.n(T);function L(t,e,i){return t+=(t.indexOf("?")>0?"&":"?")+function(t){var e="";for(var i in t){var s=void 0!==t[i]?t[i]:"";e+="&"+i+"="+encodeURIComponent(s)}return e?e.substring(1):""}(e),new p.a(function(e,s){return E()(t,i,function(t,i){t?s(t):e(i)})})}var k={data:function(){return{currentSongUrl:""}},methods:d()({enter:function(){},showMini:function(t){this.setFullScreen(t)},getSong:function(){var t,e,i,s=this;(t=this.currentSong,i=b()({},(e={g_tk:5381,loginUin:0,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq"},y()(e,"inCharset","utf8"),y()(e,"needNewCode",0),y()(e,"cid",205361747),y()(e,"uin",0),y()(e,"songmid",t.songmid),y()(e,"filename","C400"+t.mid+".m4a"),y()(e,"guid",8369714236),e)),I.a.get("/api/getSong",{params:i}).then(function(t){return p.a.resolve(t.data)})).then(function(t){s.currentSongUrl=s._getCurrentSong(t.data.items[0]),console.log(s.currentSongUrl)})},_getCurrentSong:function(t){var e=encodeURIComponent(t.filename);return console.log(e),"http://dl.stream.qqmusic.qq.com/"+e+"?vkey="+encodeURIComponent(t.vkey)+"&guid=8369714236&uin=0&fromtag=66"}},Object(h.d)({setFullScreen:"SET_FULL_SCREEN"})),computed:d()({},Object(h.c)(["playlist","currentSong","fullScreen"]))},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.playlist.length>0,expression:"playlist.length > 0"}],staticClass:"player"},[i("transition",{attrs:{name:"normal"},on:{enter:t.enter}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal-player"},[i("div",{staticClass:"background"},[i("img",{attrs:{src:t.currentSong.image,alt:""}})]),t._v(" "),i("div",{staticClass:"top"},[i("div",{staticClass:"back",on:{click:function(e){t.showMini(!1)}}},[i("i",{staticClass:"icon-xiangxia"})]),t._v(" "),i("h1",{staticClass:"songName",domProps:{innerHTML:t._s(t.currentSong.name)}}),t._v(" "),i("h2",{staticClass:"singerName",domProps:{innerHTML:t._s(t.currentSong.singer)}})]),t._v(" "),i("div",{staticClass:"middle"},[i("div",{staticClass:"middle-l"},[i("div",{staticClass:"cd-wrapper"},[i("div",{staticClass:"cd"},[i("img",{staticClass:"image",attrs:{src:t.currentSong.image,alt:""}})])])])]),t._v(" "),i("div",{staticClass:"bottom"},[i("div",[i("i",{staticClass:"icon-suijibofang"})]),t._v(" "),i("div",[i("i",{staticClass:"icon-shangyishou"})]),t._v(" "),i("div",[i("i",{staticClass:"icon-bofang"})]),t._v(" "),i("div",[i("i",{staticClass:"icon-xiayishou"})]),t._v(" "),i("div",[i("i",{staticClass:"icon-shoucang"})])])])]),t._v(" "),i("transition",{attrs:{name:"mini"},on:{enter:t.enter}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"mini-player",on:{click:function(e){t.showMini(!0)}}},[i("div",{staticClass:"miniImg"},[i("img",{staticClass:"image",attrs:{src:t.currentSong.image,alt:""}})]),t._v(" "),i("div",[i("i",{staticClass:"icon-shangyishou"})]),t._v(" "),i("div",[i("i",{staticClass:"icon-bofang"})]),t._v(" "),i("div",[i("i",{staticClass:"icon-xiayishou"})])])])],1)},staticRenderFns:[]};var N=i("VU/8")(k,$,!1,function(t){i("GxAE")},"data-v-9b046c92",null).exports,P={computed:d()({},Object(h.c)(["bgIndex","bgArray"])),watch:{bgIndex:function(t){this.bgArray[this.bgIndex]}},components:{MHeader:m,Tap:g.default,Player:N}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"app",attrs:{id:"app"}},[e("m-header"),this._v(" "),e("tap"),this._v(" "),e("keep-alive",[e("router-view")],1),this._v(" "),e("player")],1)},staticRenderFns:[]};var R=i("VU/8")(P,U,!1,function(t){i("FMdL")},"data-v-6dbeb72e",null).exports,H=i("/ocq");var F=i("kfHR"),A=i.n(F),Y=i("Hu4l"),q=i.n(Y);var D={name:"lelvelScroll",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3},click:{type:Boolean,default:!0}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var t=this;setTimeout(function(){t.reSetOuterWidth(),t._initDots(),t.initSlider(),t.autoPlay&&t._play()},20)},activated:function(){this.autoPlay&&this._play()},deactivated:function(){clearTimeout(this.timer)},beforeDestroy:function(){clearTimeout(this.timer)},methods:d()({reSetOuterWidth:function(){this.children=this.$refs.levelBody.children;var t=0,e=this.$refs.levelOuter.clientWidth;A()(this.children).forEach(function(i,s){var n,a,r,o;i.style.width=e+"px",-1==(a="level-item",r=(n=i).className,o="/("+a+")/",r.search(o))&&n.classList.add("level-item"),t+=e}),this.loop&&(t+=2*e),this.$refs.levelBody.style.width=t+"px"},initSlider:function(){var t=this;this.levelScroll=new q.a(this.$refs.levelOuter,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400,click:this.click}),this.levelScroll.on("scrollEnd",function(){var e=t.levelScroll.getCurrentPage().pageX-1;console.log("aaa"),t.currentPageIndex=e,t.autoPlay&&t._play()}),this.levelScroll.on("beforeScrollStart",function(){t.autoPlay&&clearTimeout(t.timer)})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this,e=this.currentPageIndex+2;this.SET_BGINDEX(this.currentPageIndex),this.timer=setTimeout(function(){t.levelScroll.goToPage(e,0,400)},this.interval)},goPicurl:function(t){alert(888),clearTimeout(this.timer);var e=t+1;this.currentPageIndex=t,this.levelScroll.goToPage(e,0,400),this.autoPlay&&this._play()}},Object(h.d)(["SET_BGINDEX"])),computed:d()({},Object(h.c)(["bgIndex"]))},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"levelOuter",staticClass:"level-outer"},[i("div",{ref:"levelBody",staticClass:"level-body"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"dots"},t._l(t.dots,function(e,s){return i("span",{staticClass:"dot",class:{active:t.currentPageIndex===s},on:{click:function(e){t.goPicurl(s)}}})}))])},staticRenderFns:[]};var O=i("VU/8")(D,M,!1,function(t){i("5KwD")},"data-v-29da5aaa",null).exports,j={props:{name:{type:String,default:"three"}}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("div",{directives:[{name:"show",rawName:"v-show",value:"three"===this.name,expression:"name==='three'"}],staticClass:"three"},[this._m(0),this._v(" "),this._m(1),this._v(" "),this._m(2)]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"ripple"===this.name,expression:"name==='ripple'"}],staticClass:"ripple"},[e("div"),this._v(" "),e("div"),this._v(" "),e("div")]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"triangle"==this.name,expression:"name=='triangle'"}],staticClass:"triangle"},[e("div"),this._v(" "),e("div"),this._v(" "),e("div")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p")])}]};var B=i("VU/8")(j,V,!1,function(t){i("8XKK")},"data-v-1590b25a",null).exports,G={props:{probeType:{type:Number,default:1},data:{type:Array,default:null},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){if(this.$refs.wrapper&&(this.scroll=new q.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.listenScroll)){var t=this;this.scroll.on("scroll",function(e){t.$emit("scroll",e)})}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}}},K={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper"},[this._t("default")],2)},staticRenderFns:[]};var Q=i("VU/8")(G,K,!1,function(t){i("1Pme")},"data-v-55d1b7b6",null).exports,z={data:function(){return{carouselSong:[],discList:[]}},created:function(){var t=this;setTimeout(function(){t._getDiscList()},20),this._getRecommend()},methods:{_getRecommend:function(){var t=this;L("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",b()({},S,{platform:"h5",uin:0,needNewCode:1}),x).then(function(e){console.log(e),0===e.code&&(t.carouselSong=e.data.slider)})},_getDiscList:function(){var t,e=this;(t=b()({},S,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"}),I.a.get("/api/getDiscList",{params:t}).then(function(t){return p.a.resolve(t.data)})).then(function(t){console.log(t),0===t.code&&(e.discList=t.data.list)})},loadImage:function(){this.checkloaded||(this.checkloaded=!0,this.$refs.scroll.refresh())}},components:{LevelSroll:O,scroll:Q,Loading:B}},X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[i("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.discList}},[i("div",[t.carouselSong.length?i("div",[i("levelSroll",t._l(t.carouselSong,function(e){return i("div",[i("a",{attrs:{href:e.linkUrl}},[i("img",{attrs:{src:e.picUrl,alt:""},on:{load:t.loadImage}})])])})),t._v(" "),i("div",{staticClass:"hotList"},[i("h1",{staticClass:"list-title"},[t._v("热门歌曲列表")]),t._v(" "),i("ul",t._l(t.discList,function(e){return i("li",{staticClass:"item"},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60",alt:""}})]),t._v(" "),i("div",{staticClass:"text"},[i("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),t._v(" "),i("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])}))])],1):t._e()])])],1)},staticRenderFns:[]};var W=i("VU/8")(z,X,!1,function(t){i("TYYz")},"data-v-04577c24",null).exports,Z={props:{data:{type:Array,default:[]}},created:function(){this.listHeight=[],this.listenScroll=!0,this.probeType=3},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},methods:{selectItem:function(t){this.$emit("select",t)},_caculateHeight:function(){var t=this,e=this.$refs.singerList;this.listHeight=[];var i=0;this.listHeight.push(i),e.forEach(function(e,s){i+=e.clientHeight,t.listHeight.push(i)})},gotoBig:function(t){this.currentIndex=t,this._scrollTo(t)},_scrollTo:function(t){this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.singerList[t],0)},scroll:function(t){this.scrollY=t.y}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},watch:{data:function(){var t=this;setTimeout(function(){t._caculateHeight()},20)},scrollY:function(t){if(t>0)this.currentIndex=0;else for(var e=this.listHeight,i=0;i<e.length-1;i++)if(-t>=e[i]&&-t<e[i+1])return this.currentIndex=i,void(this.diff=e[i+1]+t)},diff:function(t){var e=t>0&&t<20?t-20:0;console.log(e),this.tHeight!==e&&(this.tHeight=e,this.$refs.fixed.style.transform="translate3d(0,"+e+"px,0)")}},components:{Scroll:Q}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll",{ref:"listview",staticClass:"listview",attrs:{"listen-scroll":t.listenScroll,"probe-type":t.probeType,data:t.data},on:{scroll:t.scroll}},[i("ul",{staticClass:"singerList"},t._l(t.data,function(e){return i("li",{ref:"singerList",refInFor:!0},[i("p",{staticClass:"singerTitle"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.items,function(e){return i("div",{staticClass:"singerD",on:{click:function(i){t.selectItem(e)}}},[i("p",{staticClass:"singerImg"},[i("img",{attrs:{src:e.avatar,alt:""}})]),t._v(" "),i("p",{staticClass:"singerName"},[t._v(t._s(e.name))])])})],2)})),t._v(" "),i("div",{staticClass:"list-shortcut"},[i("ul",t._l(t.shortcutList,function(e,s){return i("li",{class:t.currentIndex===s?"currentIndex":"",attrs:{"data-index":s},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.gotoBig(s)}}},[t._v("\n\t\t\t\t"+t._s(e)+"\n\t\t\t")])}))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.fixTitle,expression:"fixTitle"}],ref:"fixed",staticClass:"fixTitle"},[i("p",[t._v(t._s(t.fixTitle))])])])},staticRenderFns:[]};var tt=i("VU/8")(Z,J,!1,function(t){i("9fZO")},"data-v-74a4b4c6",null).exports;var et=i("AA3o"),it=i.n(et),st=function t(e){var i=e.id,s=e.name;it()(this,t),this.id=i,this.name=s,this.avatar="http://y.gtimg.cn/music/photo_new/T001R300x300M000"+i+".jpg?max_age=2592000"},nt={created:function(){var t=this;setTimeout(function(){t._getSinger()},20)},data:function(){return{singers:[]}},methods:d()({selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSinger:function(){var t=this;L("https://szc.y.qq.com/v8/fcg-bin/v8.fcg?",b()({},S,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0}),x).then(function(e){t.singers=t._orderSingerlist(e.data.list)})},_orderSingerlist:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,i){i<10&&e.hot.items.push(new st({id:t.Fsinger_mid,name:t.Fsinger_name}));var s=t.Findex;e[s]||(e[s]={title:s,items:[]}),e[s].items.push(new st({id:t.Fsinger_mid,name:t.Fsinger_name}))});var i=[],s=[];for(var n in e)"hot"===n?i.push(e[n]):-1!==n.toLocaleLowerCase().search(/[a-z]/)&&s.push(e[n]);return s.sort(function(t,e){return t.title.toLocaleLowerCase().charCodeAt(0)-e.title.toLocaleLowerCase().charCodeAt(0)}),i.concat(s)}},Object(h.d)({setSinger:"SET_SINGER"})),components:{listView:tt,Loading:B}},at={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"singer"},[e("list-view",{attrs:{data:this.singers},on:{select:this.selectSinger}}),this._v(" "),e("loading",{directives:[{name:"show",rawName:"v-show",value:!this.singers.length>0,expression:"!singers.length>0"}],attrs:{name:"ripple"}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var rt=i("VU/8")(nt,at,!1,function(t){i("gqMs")},"data-v-de6a2f72",null).exports,ot=i("Kjo5"),lt=i("YOyO"),ct={props:{songs:{type:Array,default:[]}},methods:{getDesc:function(t){return t.name+"."+t.album},selectItem:function(t,e){this.$emit("select",t,e)}}},ut={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"songList"},[i("ul",t._l(t.songs,function(e,s){return i("li",{staticClass:"item",on:{click:function(i){t.selectItem(e,s)}}},[i("div",{staticClass:"content"},[i("h2",{staticClass:"songName"},[i("i",{staticClass:"icon-yinle"}),t._v("\n\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t")]),t._v(" "),i("p",{staticClass:"songDesc"},[i("i",{staticClass:"icon-morengeshoutu"}),t._v(" \n\t\t\t\t\t"+t._s(t.getDesc(e))+"\n\t\t\t\t")])])])}))])},staticRenderFns:[]};var dt=i("VU/8")(ct,ut,!1,function(t){i("P46K")},"data-v-19d5f5a2",null).exports,ht={props:{title:{type:String,default:""},headImg:{type:String,default:""},songs:{type:Array,default:null}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.mitranslateY=40-this.imageHeight,this.$refs.scroll.$el.style.top=this.imageHeight+30+"px"},data:function(){return{scrollY:0}},methods:d()({back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},selectSong:function(t,e){console.log(this.songs,e),this.selectPlay({list:this.songs,index:e})}},Object(h.b)(["selectPlay"])),watch:{scrollY:function(t){var e=Math.max(this.mitranslateY,t);console.log(e);var i=0,s=1;this.$refs.layer.style.transform="translate3d(0,"+e+"px,0)";var n=Math.abs(t/this.imageHeight);t>0&&(s=1+n,i=10),t<this.mitranslateY?(i=10,this.$refs.bgImage.style.height="40px",this.$refs.bgImage.style.paddingTop=0):(this.$refs.bgImage.style.height=0,this.$refs.bgImage.style.paddingTop="70%"),this.$refs.bgImage.style.zIndex=""+i,this.$refs.bgImage.style.transform="scale("+s+")"}},computed:{bgStyle:function(){return"background-image:url("+this.headImg+")"}},components:{SongList:dt,Scroll:Q}},ft={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"musicList"},[e("div",{staticClass:"back",on:{click:this.back}},[e("i",{staticClass:"icon-fanhui"}),this._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:this._s(this.title)}})]),this._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:this.bgStyle},[e("div",{ref:"filter",staticClass:"filter"})]),this._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),this._v(" "),e("scroll",{ref:"scroll",staticClass:"list",attrs:{data:this.songs,"listen-scroll":this.listenScroll,"probe-type":this.probeType},on:{scroll:this.scroll}},[e("song-list",{attrs:{songs:this.songs},on:{select:this.selectSong}})],1)],1)},staticRenderFns:[]};var mt=i("VU/8")(ht,ft,!1,function(t){i("4d5l")},"data-v-586e1344",null).exports,gt=function t(e){var i=e.id,s=e.mid,n=e.singer,a=e.name,r=e.album,o=e.duration,l=e.image,c=e.url,u=e.songmid;it()(this,t),this.id=i,this.mid=s,this.singer=n,this.name=a,this.album=r,this.duration=o,this.image=l,this.url=c,this.songmid=u};var vt={computed:d()({title:function(){return this.singer.name},headImg:function(){return this.singer.avatar}},Object(h.c)(["singer"])),created:function(){this._getDetail()},data:function(){return{songs:[]}},methods:{_getDetail:function(){var t,e=this;this.singer.id||this.$router.push("/singer"),(t=this.singer.id,L("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",b()({},S,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t}),x)).then(function(t){0===t.code&&(e.songs=e._handelSongs(t.data.list),console.log(e.songs))})},_handelSongs:function(t){var e=[];return t.forEach(function(t){var i,s,n;e.push((i=t.musicData,new gt({id:i.songid,mid:i.songmid,singer:(s=i.singer,n=[],s.forEach(function(t){n.push(t.name)}),n.join("/")),name:i.songname,album:i.albumname,duration:i.interval,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+i.albummid+".jpg?max_age=2592000",url:i.songid+".m4a",songmid:i.songmid})))}),e}},components:{MusicList:mt}},pt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{title:this.title,headImg:this.headImg,songs:this.songs}})],1)},staticRenderFns:[]};var _t=i("VU/8")(vt,pt,!1,function(t){i("M0d/")},"data-v-0ae23d26",null).exports;a.a.use(H.a);var yt,Ct=new H.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",name:"Recommend",component:W},{path:"/singer",name:"Singer",component:rt,children:[{path:":id",component:_t}]},{path:"/rank",name:"Rank",component:ot.default},{path:"/search",name:"Search",component:lt.default}]}),bt="SET_SEQUENCE_LIST",St="SET_CURRENT_INDEX",xt="SET_FULL_SCREEN",wt="SET_PLAYING_STATE",It=function(t,e){var i=t.commit,s=(t.state,e.list),n=e.index;i(bt,s),i("SET_PLAYLIST",s),i(St,n),i(xt,!0),i(wt,!0)},Tt=function(t){return t.bgIndex},Et=function(t){return t.bgArray},Lt=function(t){return t.singer},kt=function(t){return t.playlist},$t=function(t){return t.currentIndex},Nt=function(t){return t.fullScreen},Pt=function(t){return t.playlist[t.currentIndex]||{}},Ut={bgIndex:-1,bgArray:["blue","red","yellow","pink","black"],singer:{},playing:!1,fullScreen:!1,playlist:[],sequenceList:[],mode:"",currentIndex:-1,disc:{}},Rt=(yt={},y()(yt,"SET_BGINDEX",function(t,e){t.bgIndex=e}),y()(yt,"SET_SINGER",function(t,e){t.singer=e}),y()(yt,bt,function(t,e){t.sequenceList=e}),y()(yt,"SET_PLAYLIST",function(t,e){t.playlist=e}),y()(yt,St,function(t,e){t.currentIndex=e}),y()(yt,xt,function(t,e){t.fullScreen=e}),y()(yt,wt,function(t,e){t.playingState=e}),yt);i("6LYt");a.a.use(h.a);var Ht=new h.a.Store({actions:s,getters:n,state:Ut,mutations:Rt,strict:!1,plugins:[]});i("EQVE");o.a.attach(document.body),a.a.use(c.a,{loading:i("tewn")}),a.a.config.productionTip=!1,new a.a({el:"#app",router:Ct,store:Ht,render:function(t){return t(R)}})},P46K:function(t,e){},QafW:function(t,e){},TYYz:function(t,e){},U0jH:function(t,e){},YOyO:function(t,e,i){"use strict";var s=i("A1IV"),n=i.n(s),a=i("YsvQ");var r=function(t){i("3T6A")},o=i("VU/8")(n.a,a.a,!1,r,null,null);e.default=o.exports},YsvQ:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"singer"},[this._v("\n\t我是搜索\n")])},staticRenderFns:[]};e.a=s},axkE:function(t,e){},"e6V+":function(t,e,i){"use strict";var s=i("U0jH"),n=i.n(s),a=i("wN7D");var r=function(t){i("axkE")},o=i("VU/8")(n.a,a.a,!1,r,"data-v-7fd78493",null);e.default=o.exports},gqMs:function(t,e){},hQCG:function(t,e){},tewn:function(t,e,i){t.exports=i.p+"static/img/default.2b977a7.jpg"},vlZG:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"singer"},[this._v("\n\t我是排行榜\n")])},staticRenderFns:[]};e.a=s},wN7D:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tap"},[e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[e("i",{staticClass:"icon-tuijian"}),this._v(" "),e("span",{staticClass:"tab-link"},[this._v("A")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[e("i",{staticClass:"icon-morengeshoutu"}),this._v(" "),e("span",{staticClass:"tab-link"})]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[e("i",{staticClass:"icon-paihang"}),this._v(" "),e("span",{staticClass:"tab-link"})]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[e("i",{staticClass:"icon-icon-search-cancel"}),this._v(" "),e("span",{staticClass:"tab-link"})])],1)},staticRenderFns:[]};e.a=s}},["NHnr"]);
//# sourceMappingURL=app.2332791fc7255da5a30b.js.map