!function(e){function t(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}({1:function(e,t,n){e.exports=n("sHzv")},Allg:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show_user_tools?n("div",{staticClass:"UserTools"},[n("transition",{attrs:{name:"transition"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.is_nav_visible,expression:"is_nav_visible"}],staticClass:"UserNav"},[n("ul",{staticClass:"UserNav-list"},[n("li",{staticClass:"UserNav-item"},[n("a",{attrs:{href:"https://my.faithpromise.org/portal/my_user_account.aspx"}},[e._v("Edit My Profile")])]),e._v(" "),n("li",{staticClass:"UserNav-item"},[n("a",{attrs:{href:"https://my.faithpromise.org/portal/my_groups.aspx"}},[e._v("View My Group")])]),e._v(" "),n("li",{staticClass:"UserNav-item"},[n("a",{attrs:{href:"https://my.faithpromise.org/portal/login.aspx?logout=true"}},[e._v("Logout")])])])])]),e._v(" "),n("div",{staticClass:"UserActions"},[n("div",{staticClass:"UserActions-name",on:{click:e.toggle_nav}},[n("svg",{attrs:{role:"img"}},[n("use",{attrs:{"xlink:href":e.toggle_icon}})]),e._v("\n      "+e._s(e.user_name)+"\n    ")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.items_in_cart,expression:"items_in_cart"}],staticClass:"UserActions-div"}),e._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:e.items_in_cart,expression:"items_in_cart"}],staticClass:"UserActions-cart",attrs:{href:"https://my.faithpromise.org/portal/transaction_summary.aspx"}},[n("svg",{attrs:{role:"img"}},[n("use",{attrs:{"xlink:href":e.baseUrl+"/assets/icons.svg#cart"}})]),e._v(" "),n("span",[e._v(e._s(e.items_in_cart))])])])],1):e._e()},staticRenderFns:[]}},"VU/8":function(e,t){e.exports=function(e,t,n,s,i){var o,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,r=e.default);var c="function"==typeof r?r.options:r;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),s&&(c._scopeId=s);var _;if(i?(_=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=_):n&&(_=n),_){var l=c.functional,u=l?c.render:c.beforeCreate;l?c.render=function(e,t){return _.call(t),u(e,t)}:c.beforeCreate=u?[].concat(u,_):[_]}return{esModule:o,exports:r,options:c}}},lRwf:function(e,t){e.exports=Vue},sHzv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("lRwf"),i=n.n(s),o=n("ukxF"),r=n.n(o);new i.a({el:"#app",components:{ministryPlatform:r.a},data:function(){return{is_nav_open:!1}},computed:{toggle_icon:function(){return this.is_nav_open?"close":"menu"}},watch:{is_nav_open:function(e){document.documentElement.classList[e?"add":"remove"]("nav-open")}},methods:{nav_open:function(){window.scrollTo(0,0),this.is_nav_open=!0},nav_close:function(){window.scrollTo(0,0),this.is_nav_open=!1},nav_toggle:function(){this.is_nav_open?this.nav_close():this.nav_open()}}})},ukxF:function(e,t,n){var s=n("VU/8")(n("yFCo"),n("Allg"),null,null,null);e.exports=s.exports},yFCo:function(e,t,n){"use strict";function s(e){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)}Object.defineProperty(t,"__esModule",{value:!0});var i="."+window.location.hostname.replace(/^my\./i,"");t.default={props:{baseUrl:{required:!0}},data:function(){return{is_logged_in:!1,user_name:"",is_nav_visible:!1,items_in_cart:0}},computed:{toggle_icon:function(){return this.baseUrl+"/assets/icons.svg#chevron-"+(this.is_nav_visible?"up":"down")},show_user_tools:function(){return this.is_logged_in&&this.user_name.length>0}},created:function(){var e=this;s(function(){var t=document.getElementById("cartLink"),n=document.getElementById("userLink"),s=!!n&&!n.innerText.match(/login/i),o=n?n.innerText:"",r=o.split(","),a=r[r.length-1].trim(),c=r.slice(0,-1).join(",").trim(),_=(a+" "+c).trim();if(t){var l=parseInt(t.innerText.replace(/\D/g,""));Cookies.set("fp_items_in_cart",l,{domain:i})}Cookies.set("fp_is_logged_in",s?"true":"false",{domain:i}),Cookies.set("fp_user_name",s?_:"",{domain:i}),e.refresh()})},methods:{toggle_nav:function(){this.is_nav_visible=!this.is_nav_visible},refresh:function(){var e=Cookies.get("fp_items_in_cart"),t=Cookies.get("fp_user_name");this.is_logged_in="true"===Cookies.get("fp_is_logged_in"),this.user_name=t||"",this.items_in_cart=e?parseInt(e):0}}}}});