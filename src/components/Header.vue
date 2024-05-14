<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useWindowScroll } from '@vueuse/core';

import { useUtils } from '@/composables/useUtils';

const route = useRoute();
const nowFullPath = ref(route.fullPath);
const { isMobileWidth } = useUtils();
const navToggle = ref(false);
watchEffect(() => {
	if(!isMobileWidth.value || route.fullPath !== nowFullPath.value) navToggle.value = false;
});

const nav = [
	{
		text: 'header.about',
		to: '/#about',
	},
	{
		text: 'header.news',
		to: '/#news',
	},
	{
		text: 'header.productList',
		to: '/product-list',
	},
];

const { y } = useWindowScroll();
const headerStyleControl = computed(() => {
	const isScrolled = y.value > 0;
	const isHomePage = route.path === '/';
	let styleMode = 'header_text-dark';
	if(navToggle.value || isScrolled) {
		styleMode = 'header-dark';
	} else if(isHomePage) {
		styleMode = 'header_text-light';
	}
	const color = styleMode === 'header-dark' || styleMode === 'header_text-light' ? '' : '-brown';
	
	return {
		isScrolled,
		logoTextImgUrl: new URL(`/src/assets/images/logo-text${ color }.svg`, import.meta.url).href,
		styleMode,
	};
});
</script>

<template>
	<div
		class="header"
		:class="{
			'header--scroll': headerStyleControl.isScrolled,
			'header_text-dark': headerStyleControl.styleMode === 'header_text-dark',
			'header_text-light': headerStyleControl.styleMode === 'header_text-light',
			'header-dark': headerStyleControl.styleMode === 'header-dark',
			'expand': navToggle,
		}"
	>
		<router-link
			to="/"
			class="header_logoLink"
		>	
			<img
				v-show="headerStyleControl.isScrolled"
				src="/src/assets/images/logo.svg"
				class="header_logo"
			>
			<img
				:src="headerStyleControl.logoTextImgUrl"
				class="header_logo_text"
			>
		</router-link>

		<button
			type="button"
			class="header_nav_toggle"
			@click="navToggle = !navToggle"
		>
			<span />
		</button>
		
		<ul class="header_nav">
			<li
				v-for="(item, i) in nav"
				:key="i"
				@click="navToggle = false"
			>
				<router-link
					:to="item.to"
					:class="{ 'active': route.fullPath === item.to }"
				>
					{{ $t(item.text) }}
				</router-link>
			</li>
		</ul>
	</div>
</template>
