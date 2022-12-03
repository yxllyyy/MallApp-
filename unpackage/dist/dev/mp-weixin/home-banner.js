"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  __name: "home-banner",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  emits: ["bannerItemClick"],
  setup(__props, { emit }) {
    function handleItemClick(item) {
      emit("bannerItemClick", item.link);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.o(($event) => handleItemClick(item)),
            c: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/\u4F55\u4E9A\u7537/Desktop/\u65B0\u5EFA\u6587\u4EF6\u5939 (2)/\u7CFB\u7EDF\u8BFE\u7EC3\u4E60/12-uniapp\u548Ctero/MallApp/pages/home/cpns/home-banner.vue"]]);
exports.Component = Component;
