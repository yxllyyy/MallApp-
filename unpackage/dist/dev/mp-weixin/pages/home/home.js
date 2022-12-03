"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Math) {
  (HomeBanner + HomeRecommend + HomeProfile + TabControl)();
}
const HomeBanner = () => "./cpns/home-banner2.js";
const HomeRecommend = () => "./cpns/home-recommend.js";
const HomeProfile = () => "./cpns/home-profile.js";
const TabControl = () => "../../components/tab-control/tab-control.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    const { banners, recommends } = common_vendor.storeToRefs(homeStore);
    common_vendor.onLoad(() => {
      homeStore.fetchHomeMultidata();
    });
    function handleBannerItemClick(link) {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + link
      });
    }
    function handleTabItemClick(index) {
      console.log(index);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleBannerItemClick),
        b: common_vendor.p({
          banners: common_vendor.unref(banners)
        }),
        c: common_vendor.p({
          recommends: common_vendor.unref(recommends)
        }),
        d: common_vendor.o(handleTabItemClick),
        e: common_vendor.p({
          titles: ["\u6D41\u884C", "\u65B0\u6B3E", "\u7CBE\u9009"]
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/\u4F55\u4E9A\u7537/Desktop/\u65B0\u5EFA\u6587\u4EF6\u5939 (2)/\u7CFB\u7EDF\u8BFE\u7EC3\u4E60/12-uniapp\u548Ctero/MallApp/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
