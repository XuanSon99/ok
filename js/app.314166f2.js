(function(t){function n(n){for(var o,i,c=n[0],s=n[1],u=n[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);h&&h(n);while(f.length)f.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],o=!0,i=1;i<e.length;i++){var s=e[i];0!==a[s]&&(o=!1)}o&&(r.splice(n--,1),t=c(c.s=e[0]))}return t}var o={},a={app:0},r=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-631a896f":"4ce2c945"}[t]+".js"}function c(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var n=[],e=a[t];if(0!==e)if(e)n.push(e[2]);else{var o=new Promise((function(n,o){e=a[t]=[n,o]}));n.push(e[2]=o);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var u=new Error;r=function(n){s.onerror=s.onload=null,clearTimeout(l);var e=a[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,e[1](u)}a[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(n)},c.m=t,c.c=o,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)c.d(e,o,function(n){return t[n]}.bind(null,o));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var h=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"49f8":function(t,n,e){var o={"./en.json":"edd4","./vi.json":"aced"};function a(t){var n=r(t);return e(n)}function r(t){if(!e.o(o,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return o[t]}a.keys=function(){return Object.keys(o)},a.resolve=r,t.exports=a,a.id="49f8"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("99af");var o=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{"data-app":""}},[t.$route.meta.header?e("Header"):t._e(),t.$route.meta.hide?t._e():e("div",{staticClass:"mheader"},[t.$route.meta.back?e("v-btn",{attrs:{icon:""},on:{click:function(n){return t.$router.back()}}},[e("v-icon",[t._v("mdi-arrow-left")])],1):t._e(),e("span",[t._v(t._s(t.$route.name))])],1),e("router-view"),e("Footer")],1)},r=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[e("v-bottom-navigation",{attrs:{fixed:"",grow:""},model:{value:t.mbar,callback:function(n){t.mbar=n},expression:"mbar"}},[e("v-btn",{attrs:{to:"/","active-class":""}},[e("span",[t._v("Trang chủ")]),e("img",{attrs:{src:"/img/icon/tc.png",alt:""}})]),e("v-btn",{attrs:{to:"/","active-class":""}},[e("span",[t._v("Thị trường")]),e("img",{attrs:{src:"/img/icon/tt.png",alt:""}})]),e("v-btn",{attrs:{to:"/","active-class":""}},[e("span",[t._v("Giao dịch")]),e("img",{attrs:{src:"/img/icon/gd.png",alt:""}})]),e("v-btn",{attrs:{to:"/","active-class":""}},[e("span",[t._v("Futures")]),e("img",{attrs:{src:"/img/icon/futures.png",alt:""}})]),e("v-btn",{attrs:{to:"/","active-class":""}},[e("span",[t._v("Tài sản")]),e("img",{attrs:{src:"/img/icon/ts.png",alt:""}})])],1)],1)])},c=[],s=e("5530"),u=(e("ac1f"),e("5319"),e("d3b7"),e("25f0"),e("b680"),e("2f62")),l={data:function(){return{dialog:!1,mbar:0,current_password:"",password:"",re_password:"",show1:"",show2:"",show3:"",interval:"",number:["086","096","097","098","039","038","037","036","035","034","032","033","091","094","088","083","084","079","077","052","056"],message:[]}},computed:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["account","notifications","noti_count"])),{},{items:function(){var t=[{text:"Giao dịch mua",icon:"mdi-alpha-b-circle",url:"/buy/usdt"},{text:"Giao dịch bán",icon:"mdi-sack ",url:"/sell/usdt"}];return this.account?t.push({text:"Lịch sử giao dịch",icon:"mdi-clipboard-text-clock",url:"/history"},{text:"Thông tin tài khoản",icon:"mdi-account",url:"/profile"},{text:"Chương trình giới thiệu",icon:"mdi-bookmark-multiple",url:"/referral"}):t.push({text:"Đăng nhập",icon:"mdi-account-circle ",url:"/login"},{text:"Đăng ký",icon:"mdi-account",url:"/register"}),t},mobile:function(){return this.$vuetify.breakpoint.width<1025}}),mounted:function(){},methods:{changePassword:function(){var t=this;this.current_password&&this.password?this.password==this.re_password?this.password.length<6?this.$toast.error("Mật khẩu tối thiểu 6 ký tự"):this.CallAPI("post","change-password",{current_password:this.current_password,password:this.password},(function(n){t.$toast.success("Đổi mật khẩu thành công"),t.dialog=!1,t.current_password="",t.password="",t.re_password=""}),(function(n){t.$toast.error("Mật khẩu cũ không chính xác")})):this.$toast.error("Xác nhận mật khẩu không chính xác"):this.$toast.error("Vui lòng nhập đủ mật khẩu")},logout:function(){localStorage.clear(),this.$store.dispatch("setAccount",""),this.$router.push("/")},getNotification:function(){var t=this;this.CallAPI("get","notifications",{},(function(n){t.$store.dispatch("setNotifications",n.data)}))},getAmountNoti:function(){var t=this;this.account&&this.CallAPI("get","count-noti",{},(function(n){(t.noti_count<n.data||!t.notifications[0])&&t.getNotification(),t.$store.dispatch("setNotiCount",n.data)}))},readNoti:function(t,n){var e=this;t.url&&this.$router.push(t.url),t.is_readed||this.CallAPI("put","read-noti",{id:t.id},(function(t){e.getAmountNoti(),e.notifications[n].is_readed=1}))},readAll:function(){var t=this;this.CallAPI("get","read-all",{},(function(n){t.getAmountNoti()}))},formatDate:function(t){var n=new Date(t);return n.toLocaleString()},formatMoney:function(t){return t?String(parseFloat(t).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0},addMessage:function(){var t=this.random(0,5),n=this.number[Math.floor(Math.random()*this.number.length)]+"***"+this.random(100,999),e=this.formatMoney(1e3*this.random(1,20)),o="Người dùng ".concat(n," vừa bán thành công ").concat(e," USDT");1==t&&(o="Người dùng ".concat(n," vừa bán thành công ").concat(e," BUSD")),2==t&&(o="Người dùng ".concat(n," vừa bán thành công ").concat(e," USDT")),3==t&&(o="Người dùng ".concat(n," vừa bán thành công ").concat(e," BUSD")),4!=t&&5!=t||(o="Người dùng ".concat(n," đã xác minh danh tính thành công")),this.message.push(o)},random:function(t,n){return Math.floor(Math.random()*(n-t+1)+t)}},watch:{account:function(){this.account.phone?this.getAmountNoti():this.notifications=[]}},beforeDestroy:function(){clearInterval(this.interval)}},h=l,f=e("2877"),d=Object(f["a"])(h,i,c,!1,null,null,null),m=d.exports,g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.mobile?t._e():e("footer",[e("v-container",[e("v-divider",{staticClass:"mb-3"}),e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{cols:"12",md:"4"}},[t._v(" © 2024 chootc.com. All rights reserved ")]),e("v-col",{attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"d-flex justify-center"},[e("a",{staticClass:"px-5",attrs:{href:"https://chootc.gitbook.io/exchange/huong-dan-giao-dich/mua-tien-dien-tu",target:"_blank"}},[t._v("Hướng dẫn")]),e("a",{staticClass:"px-5",attrs:{href:"https://chootc.gitbook.io/exchange/dieu-khoan-su-dung",target:"_blank"}},[t._v("Điều khoản sử dụng")])])]),e("v-col",{attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"d-flex justify-end"},[e("v-btn",{attrs:{icon:"",size:"35",variant:"text",href:"https://t.me/QuocPham_OTC",target:"_blank","aria-label":"Telegram"}},[e("v-icon",{attrs:{size:"22"}},[t._v("fa-brands fa-telegram")])],1)],1)])],1),e("div",{staticClass:"chat"},[e("v-btn",{staticClass:"elevation-0",attrs:{fab:"",color:"primary",href:"https://t.me/QuocPham_OTC",target:"_blank"}},[e("v-icon",{attrs:{size:"30"}},[t._v("mdi-facebook-messenger")])],1)],1)],1)],1)},p=[],v={computed:{mobile:function(){return this.$vuetify.breakpoint.width<1025}}},b=v,_=Object(f["a"])(b,g,p,!1,null,null,null),k=_.exports,w={components:{Header:m,Footer:k}},y=w,x=(e("034f"),Object(f["a"])(y,a,r,!1,null,null,null)),P=x.exports,N=(e("3ca3"),e("ddb0"),e("b0c0"),e("8c4f")),O=e("58ca");o["default"].use(N["a"]),o["default"].use(O["a"]);var A=[{name:"Giao dịch",path:"*",component:function(){return e.e("chunk-631a896f").then(e.bind(null,"4af0"))},meta:{header:!0,hide:!0}}],S=new N["a"]({mode:"history",base:"/",routes:A,scrollBehavior:function(){return{x:0,y:0,behavior:"smooth"}}});S.beforeEach((function(t,n,e){"Lịch sử giao dịch"!=t.name||localStorage.getItem("access_token")||e({name:"Login"}),"Error"!=t.name||localStorage.getItem("access_token")||e({name:"Login"}),"Thông tin cá nhân"!=t.name||localStorage.getItem("access_token")||e({name:"Login"}),"Thông báo"!=t.name||localStorage.getItem("access_token")||e({name:"Login"}),"Chương trình giới thiệu"!=t.name||localStorage.getItem("access_token")||e({name:"Login"}),"Account"!=t.name||localStorage.getItem("access_token")||e({name:"Login"}),e()}));var C=S;o["default"].use(u["a"]);var L=new u["a"].Store({state:{account:"",notifications:[],noti_count:0},mutations:{setAccount:function(t,n){t.account=n},setNotifications:function(t,n){t.notifications=n},setNotiCount:function(t,n){t.noti_count=n}},actions:{setAccount:function(t,n){var e=t.commit;e("setAccount",n)},setNotifications:function(t,n){var e=t.commit;e("setNotifications",n)},setNotiCount:function(t,n){var e=t.commit;e("setNotiCount",n)}},getters:{account:function(t){return t.account},notifications:function(t){return t.notifications},noti_count:function(t){return t.noti_count}}}),E=e("bc3a"),T=e.n(E),j=(e("159b"),e("466d"),e("a925"));function $(){var t=e("49f8"),n={};return t.keys().forEach((function(e){var o=e.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var a=o[1];n[a]=t(e)}})),n}o["default"].use(j["a"]);var I=new j["a"]({locale:Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://exchange.chootc.com",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"vi",fallbackLocale:Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://exchange.chootc.com",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"vi",messages:$()}),M=e("ce5b"),U=e.n(M);e("bf40"),e("5363");o["default"].use(U.a);var B={theme:{dark:!1,themes:{light:{primary:"#19aac7"}}},options:{customProperties:!0},icons:{iconfont:"mdi"}},D=new U.a(B),R=(e("becf"),e("6c42")),V=(e("da96"),e("6672"),e("f176"),e("a139")),F=e.n(V);o["default"].use(F.a),o["default"].config.productionTip=!1,o["default"].config.silent=!0,o["default"].use(R["a"],{transition:"Vue-Toastification__bounce",maxToasts:20,newestOnTop:!0,position:"top-right"}),o["default"].prototype.image=function(t){return"https://exchange.chootc.com/storage/"+t},o["default"].prototype.CallAPI=function(t,n,e,o,a){var r={headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}},i="https://exchange.chootc.com",c="".concat(i,"/api/").concat(n);switch(t){case"post":T.a.post(c,e,r).then((function(t){o(t)})).catch((function(t){try{a(t)}catch(t){}}));break;case"get":T.a.get(c,r).then((function(t){o(t)})).catch((function(t){try{a(t)}catch(t){}}));break;case"put":T.a.put(c,e,r).then((function(t){o(t)})).catch((function(t){try{a(t)}catch(t){}}));break;case"delete":T.a.delete(c,r).then((function(t){o(t)})).catch((function(t){try{a(t)}catch(t){}}));break}},new o["default"]({vuetify:D,router:C,store:L,i18n:I,render:function(t){return t(P)}}).$mount("#app")},6672:function(t,n,e){},"85ec":function(t,n,e){},aced:function(t){t.exports=JSON.parse('{"news":"Tin Tức","search":"Tìm kiếm","readmore":"Đọc Thêm","contact":{"title":"Liên hệ","text":"Đăng ký nhận tin nhắn","signup":"Đăng ký"},"LastestPosts":"Bài viết mới nhất","RelatedPosts":"Bài viết liên quan","notresult":"Không tìm thấy kết quả nào"}')},edd4:function(t){t.exports=JSON.parse('{"header":{"home":"Home","solution":"Solution","partnership":"Partnership","portfolio":"Portfolio","ourteam":"Our Team","news":"News","mediakit":"Media Kit"},"news":"News","search":"Search","readmore":"Read More","contact":{"title":"Contact","text":"Sign up receive message","signup":"Sign Up"},"LastestPosts":"Lastest Posts","RelatedPosts":"Related Posts","notresult":"No result was found"}')},f176:function(t,n,e){}});