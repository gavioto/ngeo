(function(e){function r(r){var t=r[0];var l=r[1];var u=r[2];var i,s,p=0,c=[];for(;p<t.length;p++){s=t[p];if(n[s]){c.push(n[s][0])}n[s]=0}for(i in l){if(Object.prototype.hasOwnProperty.call(l,i)){e[i]=l[i]}}if(f)f(r);while(c.length){c.shift()()}o.push.apply(o,u||[]);return a()}function a(){var e;for(var r=0;r<o.length;r++){var a=o[r];var t=true;for(var u=1;u<a.length;u++){var i=a[u];if(n[i]!==0)t=false}if(t){o.splice(r--,1);e=l(l.s=a[0])}}return e}var t={};var n={2:0};var o=[];function l(r){if(t[r]){return t[r].exports}var a=t[r]={i:r,l:false,exports:{}};e[r].call(a.exports,a,a.exports,l);a.l=true;return a.exports}l.m=e;l.c=t;l.d=function(e,r,a){if(!l.o(e,r)){Object.defineProperty(e,r,{configurable:false,enumerable:true,get:a})}};l.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};l.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};l.d(r,"a",r);return r};l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};l.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[];var i=u.push.bind(u);u.push=r;u=u.slice();for(var s=0;s<u.length;s++)r(u[s]);var f=i;o.push([403,0]);return a()})({402:function(e,r,a){"use strict";a.r(r);var t=a(539);var n=a.n(t);var o=a(212);var l=a(299);var u=a(315);var i=a(58);var s=a(36);var f=a(46);var p=a(30);var c=a(52);var v=a(35);var m=a(12);var d=a(31);var h=a(67);var w={};w.module=angular.module("gmfapp",["gettext",o["a"].name,l["a"].name,u["a"].module.name]);w.module.value("ngeoWfsPermalinkOptions",{url:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",wfsTypes:[{featureType:"fuel",label:"display_name"},{featureType:"osm_scale",label:"display_name"}],defaultFeatureNS:"http://mapserver.gis.umn.edu/mapserver",defaultFeaturePrefix:"feature"});w.module.constant("defaultTheme","Demo");w.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js");w.MainController=function(){this.map=new s["a"]({layers:[new p["a"]({source:new c["a"]})],view:new f["a"]({projection:i["a"],resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})});var e=new d["a"]({color:[255,170,0,.6]});var r=new v["a"]({color:[255,170,0,1],width:2});this.featureStyle=new m["c"]({fill:e,image:new h["a"]({fill:e,radius:5,stroke:r}),stroke:r})};w.module.controller("MainController",w.MainController);r["default"]=w},403:function(e,r,a){a(73);a(72);e.exports=a(402)},539:function(e,r){}});
//# sourceMappingURL=wfspermalink.3b438d.js.map