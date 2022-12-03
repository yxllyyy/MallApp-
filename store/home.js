import {defineStore} from 'pinia'
import { getHomeMutidata } from '../service/home'

export const useHomeStore = defineStore('home', {
	state: () => {
		return {
			banners: [],
			recommends: []
		}
	},
	actions: {
		// 获取首页轮播图和推荐栏的数据
		async fetchHomeMultidata() {
			const res = await getHomeMutidata()
			this.banners = res.data.banner.list || []
			this.recommends = res.data.recommend.list || []
		}
	}
})