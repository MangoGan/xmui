webpackJsonp([2],{NHnr:function(n,e,t){"use strict";function o(n){t("ech5")}function a(n){t("jF3a")}Object.defineProperty(e,"__esModule",{value:!0});var i=t("qRXP"),l={name:"app"},r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"aside"}},[t("router-view")],1),n._v(" "),t("div",{attrs:{id:"demo-wrap"}})])},c=[],d={render:r,staticRenderFns:c},s=d,u=t("/Xao"),p=o,f=u(l,s,!1,p,null,null),m=f.exports,_=t("zO6J");i.a.use(_.a);var b=new _.a({routes:[{path:"/",name:"home",component:function(n){t.e(0).then(function(){var e=[t("26dS")];n.apply(null,e)}.bind(this)).catch(t.oe)}}]}),h=t("4YfN"),g=t.n(h),v={name:"XMButton",props:{type:{type:String,default:"default"},long:Boolean,loading:{type:Boolean,default:!1},bgColor:{type:String,default:""},borderColor:{type:String,default:""},icon:{type:String,default:""},color:{type:String,default:""},disabled:Boolean,plain:Boolean,round:Boolean},methods:{handleClick:function(n){this.disabled||this.$emit("click",n)}},computed:{iconClass:function(){if(""!==this.icon)return"xm__hasIconBtn"}}},y=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("button",{staticClass:"xm__btn",class:["xm__btn--"+n.type,{"is-plain":n.plain,"is-round":n.round,"is-long":n.long},n.iconClass],style:{backgroundColor:n.bgColor,color:n.color,"border-color":n.borderColor},attrs:{disabled:n.disabled},on:{click:n.handleClick}},[n.icon?t("i",{class:n.icon}):n._e(),n._v(" "),n.loading&&!n.icon?t("i",{staticClass:"xm__icon--loading"}):n._e(),n._v(" "),n._t("default")],2)},w=[],C={render:y,staticRenderFns:w},B=C,k=t("/Xao"),x=a,S=k(v,B,!1,x,"data-v-5057a300",null),F=S.exports,X=F,j=[X],N=function n(e){n.installed||j.map(function(n){return e.component(n.name,n)})};"undefined"!=typeof window&&window.Vue&&N(window.Vue);var R=g()({install:N},j),$=R;i.a.use($),i.a.config.productionTip=!1,new i.a({el:"#app",router:b,template:"<App/>",components:{App:m}})},ech5:function(n,e){},jF3a:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.a7e1e40674cdc139020a.js.map