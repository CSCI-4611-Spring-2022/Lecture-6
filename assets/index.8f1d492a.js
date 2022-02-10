var f=Object.defineProperty;var g=(s,e,t)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var r=(s,e,t)=>(g(s,typeof e!="symbol"?e+"":e,t),t);import{W as k,S as v,P as M,C as V,V as L,O as A,a as u,b as x,M as b,c as z,d as h,e as P,G as R,A as D,D as C,f as S,B as W,g as p,h as l,i as j,j as E}from"./vendor.da02b838.js";const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};G();class H{constructor(e=1.333){r(this,"aspectRatio");r(this,"fov");r(this,"znear");r(this,"zfar");r(this,"renderer");r(this,"scene");r(this,"camera");r(this,"clock");this.aspectRatio=e,this.fov=60,this.znear=1,this.zfar=1e3,this.renderer=new k,this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.resize(),window.addEventListener("resize",()=>{this.resize()},!1),window.addEventListener("mousedown",t=>{this.onMouseDown(t)}),window.addEventListener("mouseup",t=>{this.onMouseUp(t)}),window.addEventListener("mousemove",t=>{this.onMouseMove(t)}),window.addEventListener("keydown",t=>{this.onKeyDown(t)}),window.addEventListener("keyup",t=>{this.onKeyUp(t)}),this.scene=new v,this.camera=new M(this.fov,this.aspectRatio,this.znear,this.zfar),this.clock=new V}start(){this.createScene(),this.mainLoop()}mainLoop(){this.update(this.clock.getDelta()),this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(()=>this.mainLoop())}resize(){this.renderer.setSize(window.innerWidth,window.innerHeight);var e=new L;this.renderer.getViewport(e);var t=window.innerWidth/window.innerHeight;this.aspectRatio>t?this.renderer.setViewport(0,(window.innerHeight-window.innerWidth/this.aspectRatio)/2,window.innerWidth,window.innerWidth/this.aspectRatio):this.renderer.setViewport((window.innerWidth-window.innerHeight*this.aspectRatio)/2,0,window.innerHeight*this.aspectRatio,window.innerHeight)}onMouseDown(e){}onMouseUp(e){}onMouseMove(e){}onKeyDown(e){}onKeyUp(e){}}class K extends A{constructor(e,t){super();r(this,"radius");r(this,"velocity");r(this,"initialPosition");this.radius=t,this.velocity=new u,this.initialPosition=e;var n=new x(this.radius),i=new b;i.color=new z(.335,.775,.891),this.add(new h(n,i)),this.reset()}reset(){this.position.copy(this.initialPosition)}update(e){}}class U extends H{constructor(){super(1920/1080);r(this,"inputVector");r(this,"projectile");r(this,"arrow");this.inputVector=new P,this.projectile=new K(new u,.5),this.arrow=new R}createScene(){this.camera.position.set(0,1.6,0),this.camera.lookAt(0,1.6,1),this.camera.up.set(0,1,0);var e=new D("white",.3);this.scene.add(e);var t=new C("white",.6);t.position.set(0,2,1),this.scene.add(t);var n=new S;n.side=W,n.color.set("skyblue");var i=new h(new p(1e3,1e3,1e3),n);this.scene.add(i);var o=new l;o.color.set("green");var a=new h(new p(1e3,1,1e3),o);a.position.set(0,-.5,0),this.scene.add(a),this.projectile.position.y=0,this.projectile.position.z=2,this.scene.add(this.projectile);var d=new l;d.color.set("blue");var y=new j(.05,.05,2),c=new h(y,d);c.position.set(0,1,0),this.arrow.add(c);var m=new E(.1,.25),w=new h(m,d);w.position.set(0,1,0),c.add(w),this.arrow.position.set(0,.5,2),this.arrow.rotateX(90*Math.PI/180),this.scene.add(this.arrow)}update(e){this.arrow.rotateZ(90*Math.PI/180*e*-this.inputVector.x)}onKeyDown(e){e.key=="w"||e.key=="ArrowUp"?this.inputVector.y=1:e.key=="s"||e.key=="ArrowDown"?this.inputVector.y=-1:e.key=="a"||e.key=="ArrowLeft"?this.inputVector.x=-1:(e.key=="d"||e.key=="ArrowRight")&&(this.inputVector.x=1)}onKeyUp(e){(e.key=="w"||e.key=="ArrowUp")&&this.inputVector.y==1?this.inputVector.y=0:(e.key=="s"||e.key=="ArrowDown")&&this.inputVector.y==-1?this.inputVector.y=0:(e.key=="a"||e.key=="ArrowLeft")&&this.inputVector.x==-1?this.inputVector.x=0:(e.key=="d"||e.key=="ArrowRight")&&this.inputVector.x==1&&(this.inputVector.x=0)}}var O=new U;O.start();