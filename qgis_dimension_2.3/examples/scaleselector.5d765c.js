!function(e){function n(n){for(var o,u,l=n[0],i=n[1],c=n[2],s=0,f=[];s<l.length;s++)u=l[s],t[u]&&f.push(t[u][0]),t[u]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(p&&p(n);f.length;)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,n=0;n<a.length;n++){for(var r=a[n],o=!0,l=1;l<r.length;l++){var i=r[l];0!==t[i]&&(o=!1)}o&&(a.splice(n--,1),e=u(u.s=r[0]))}return e}var o={},t={5:0},a=[];function u(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=o,u.d=function(e,n,r){u.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var p=i;a.push([341,0]),r()}({340:function(e,n,r){"use strict";r.r(n);r(474);var o=r(90),t=r(43),a=r(53),u=r(36),l=r(57),i=r(17),c={};c.module=angular.module("app",["gettext",i.a.name,o.a.name]),c.MainController=function(e){this.map=new t.a({layers:[new u.a({source:new l.b})],view:new a.a({center:[-10635142.37,4813698.29],zoom:1,maxZoom:4})}),this.scales=[2e8,1e8,5e7,25e6,12e6],this.options={dropup:!0}},c.MainController.$inject=["$scope"],c.module.controller("MainController",c.MainController),n.default=c},341:function(e,n,r){r(40),r(39),e.exports=r(340)},474:function(e,n){}});
//# sourceMappingURL=scaleselector.5d765c.js.map