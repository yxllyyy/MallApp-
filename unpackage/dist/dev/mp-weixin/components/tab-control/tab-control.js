"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "tab-control",
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  emits: ["tabItemClick"],
  setup(__props, { emit }) {
    const currentIndex = common_vendor.ref(0);
    function handleItemClick(index) {
      currentIndex.value = index;
      emit("tabItemClick", index);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.titles, (title, index, i0) => {
          return {
            a: common_vendor.t(title),
            b: common_vendor.n(currentIndex.value === index ? "active" : ""),
            c: common_vendor.o(($event) => handleItemClick(index)),
            d: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/\u4F55\u4E9A\u7537/Desktop/\u65B0\u5EFA\u6587\u4EF6\u5939 (2)/\u7CFB\u7EDF\u8BFE\u7EC3\u4E60/12-uniapp\u548Ctero/MallApp/components/tab-control/tab-control.vue"]]);
wx.createComponent(Component);
