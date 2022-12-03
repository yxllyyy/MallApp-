"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
common_vendor.defineStore("home", {
  state: () => {
    return {
      banners: []
    };
  },
  actions: {
    async fetchHomeMultidata() {
      const res = await service_home.getHomeMutidata();
      console.log(res);
    }
  }
});
