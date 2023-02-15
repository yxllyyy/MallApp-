"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/category/category.js";
  "./pages/cart/cart.js";
  "./pages/profile/profile.js";
  "./pages/detail/detail.js";
  "./pages/home/cpns/home-banner.js";
  "./pages/webview/webview.js";
  "./components/grid-view-item/grid-view-item.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/\u4F55\u4E9A\u7537/Desktop/\u65B0\u5EFA\u6587\u4EF6\u5939 (2)/\u7CFB\u7EDF\u8BFE\u7EC3\u4E60/12-uniapp\u548Ctero/MallApp/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
