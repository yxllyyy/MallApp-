<template>
	<view class="content">
		<!-- 轮播图组件 -->
		<home-banner :banners="banners" @handleItemClick="handleBannerItemClick"></home-banner>
		<!-- 推荐栏组件 -->
		<home-recommend :recommends="recommends"></home-recommend>
		<!-- 热门栏组件 -->
		<home-profile></home-profile>
		<!-- 选项卡组件 -->
		<tab-control :titles="['流行', '新款', '精选']" @tabItemClick="handleTabItemClick"></tab-control>
		<!-- 九宫格组件 -->
		<uni-grid :column="2" :highlight="true" borderColor="#ff8198" :showBorder="false" :square="false">
			<template v-for="(itemInfo, index) in goodsList[currentType]?.list" :key="itemInfo.iid">
				<uni-grid-item :index="index">
					<grid-view-item :itemInfo="itemInfo" @itemClick="handleGridItemClick"></grid-view-item>
				</uni-grid-item>
			</template>
		</uni-grid>
	</view>
</template>

<script setup>
	import { onLoad, onReachBottom } from '@dcloudio/uni-app'
	import { storeToRefs } from 'pinia'
	import { useHomeStore, types } from '@/store/home.js'
	import HomeBanner from './cpns/home-banner.vue'
	import HomeRecommend from './cpns/home-recommend.vue'
	import HomeProfile from './cpns/home-profile.vue'
	import TabControl from '@/components/tab-control/tab-control.vue'
	import GridViewItem from '@/components/grid-view-item/grid-view-item.vue'
	
	const homeStore = useHomeStore()
	const { banners, recommends, goodsList, currentType } = storeToRefs(homeStore)
	onLoad(() => {
		homeStore.fetchHomeMultidata()
		// 获取流行第一页的商品
		homeStore.fetchHomeData('pop', 1)
		// 获取新款第一页的商品
		homeStore.fetchHomeData('new', 1)
		//获取新款第一页的商品
		homeStore.fetchHomeData('sell', 1)
	})
	
	onReachBottom(() => {
		homeStore.fetchHomeData(currentType.value, goodsList?.value[currentType?.value]?.page + 1)
	})
	
	function handleBannerItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}
	
	function handleTabItemClick(index) {
		homeStore.setCurrentType(types[index])
	}
	
	// 处理grid-view-item的点击事件(跳转到详情事件)
	function handleGridItemClick(itemInfo) {
		uni.navigateTo({
			url: '/pages/detail/detail?iid=' + itemInfo.iid
		})
	}
</script>

<style>
	
</style>
