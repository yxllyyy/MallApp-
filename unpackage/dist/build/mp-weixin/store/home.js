"use strict";const e=require("../common/vendor.js"),t=require("../service/home.js"),s=["pop","new","sell"];function o(){let e={};return s.forEach((t=>{e[t]={page:0,list:[]}})),e}const a=e.defineStore("home",{state:()=>({banners:[],recommends:[],currentType:"pop",goodsList:o()}),actions:{setCurrentType(e){this.currentType=e},async fetchHomeMultidata(){var e;const s=await t.getHomeMutidata();this.banners=(null==(e=s.data.banner)?void 0:e.list)||[],this.recommends=s.data.recommend.list||[]},async fetchHomeData(e,s){console.log(e,s);const o=await t.getHomeData(e,s);this.goodsList[e].list.push(...o.data.list),this.goodsList[e].page=s}}});exports.types=s,exports.useHomeStore=a;