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
	</view>
</template>

<script setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { storeToRefs } from 'pinia'
	import { useHomeStore } from '@/store/home.js'
	import HomeBanner from './cpns/home-banner.vue'
	import HomeRecommend from './cpns/home-recommend.vue'
	import HomeProfile from './cpns/home-profile.vue'
	import TabControl from '@/components/tab-control/tab-control.vue'
	
	const homeStore = useHomeStore()
	const { banners, recommends } = storeToRefs(homeStore)
	onLoad(() => {
		homeStore.fetchHomeMultidata()
	})
	
	function handleBannerItemClick(link) {
		uni.navigateTo({
			url: '/pages/webview/webview?link=' + link
		})
	}
	
	function handleTabItemClick(index) {
		console.log(index);
	}
</script>

<style>
	
</style>
