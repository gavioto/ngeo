(function(o){function r(r){var l=r[0];var c=r[1];var i=r[2];var p,a,f=0,s=[];for(;f<l.length;f++){a=l[f];if(n[a]){s.push(n[a][0])}n[a]=0}for(p in c){if(Object.prototype.hasOwnProperty.call(c,p)){o[p]=c[p]}}if(u)u(r);while(s.length){s.shift()()}t.push.apply(t,i||[]);return e()}function e(){var o;for(var r=0;r<t.length;r++){var e=t[r];var l=true;for(var i=1;i<e.length;i++){var p=e[i];if(n[p]!==0)l=false}if(l){t.splice(r--,1);o=c(c.s=e[0])}}return o}var l={};var n={36:0};var t=[];function c(r){if(l[r]){return l[r].exports}var e=l[r]={i:r,l:false,exports:{}};o[r].call(e.exports,e,e.exports,c);e.l=true;return e.exports}c.m=o;c.c=l;c.d=function(o,r,e){if(!c.o(o,r)){Object.defineProperty(o,r,{configurable:false,enumerable:true,get:e})}};c.r=function(o){Object.defineProperty(o,"__esModule",{value:true})};c.n=function(o){var r=o&&o.__esModule?function r(){return o["default"]}:function r(){return o};c.d(r,"a",r);return r};c.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)};c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[];var p=i.push.bind(i);i.push=r;i=i.slice();for(var a=0;a<i.length;a++)r(i[a]);var u=p;t.push([415,0]);return e()})({328:function(o,r,e){"use strict";e.r(r);var l=e(501);var n=angular.module("ngeoColorpicker",[]);n.value("ngeoColorpickerTemplateUrl",function(o,r){var e=r["ngeoColorpickerTemplateurl"];return e!==undefined?e:"ngeo/misc/colorpickerComponent"});n.run(["$templateCache",function(o){o.put("ngeo/misc/colorpickerComponent",e(414))}]);n.component_=function(o){return{restrict:"A",scope:{colors:"<?ngeoColorpicker",color:"=?ngeoColorpickerColor"},controller:"NgeoColorpickerController as ctrl",bindToController:true,templateUrl:o}};n.component_.$inject=["ngeoColorpickerTemplateUrl"];n.directive("ngeoColorpicker",n.component_);n.DEFAULT_COLORS=[["#F4EB37","#CDDC39","#62AF44","#009D57","#0BA9CC","#4186F0","#3F5BA9","#7C3592","#A61B4A","#DB4436","#F8971B","#F4B400","#795046"],["#F9F7A6","#E6EEA3","#B7DBAB","#7CCFA9","#93D7E8","#9FC3FF","#A7B5D7","#C6A4CF","#D698AD","#EE9C96","#FAD199","#FFDD5E","#B29189"],["#ffffff","#CCCCCC","#777","#000000"]];n.Controller_=function(o,r,e){this.colors=this.colors||n.DEFAULT_COLORS;this.color};n.Controller_.$inject=["$scope","$element","$attrs"];n.Controller_.prototype.setColor=function(o){this.color=o};n.controller("NgeoColorpickerController",n.Controller_);var t=n;var c={};c.module=angular.module("app",["gettext",t.name]);c.colorpickerComponent={template:'<div ngeo-colorpicker="$ctrl.colors" ngeo-colorpicker-color="mainCtrl.color"></div>',controller:"AppColorpickerController"};c.module.component("appColorpicker",c.colorpickerComponent);c.ColorPickerController=function(){this.colors=[["red","yellow","green","lightgreen","lightblue","orange","purple"],["#ffffff","#f7f7f7","#c3c3c3","#000000"]]};c.module.controller("AppColorpickerController",c.ColorPickerController);c.MainController=function(o){this.color="red"};c.MainController.$inject=["$scope"];c.module.controller("MainController",c.MainController);var i=r["default"]=c},414:function(o,r){o.exports='<table class=ngeo-colorpicker-palette> <tr ng-repeat="colors in ::ctrl.colors"> <td ng-repeat="color in ::colors" ng-click=ctrl.setColor(color) ng-class="{\'ngeo-colorpicker-selected\': color == ctrl.color}"> <div ng-style="::{\'background-color\': color}"></div> </td> </tr> </table> '},415:function(o,r,e){e(55);e(54);o.exports=e(328)},501:function(o,r){}});
//# sourceMappingURL=colorpicker.74a257.js.map