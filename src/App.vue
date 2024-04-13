<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer/Index.vue';
import Notification from '@/components/Notification.vue';

import { RouterView } from 'vue-router';
</script>

<template>
	<Header />
	<div>
		<RouterView />
	</div>
	<Footer />
	<Notification />
</template>

<style lang="scss">
@import url(./assets/css/app.scss);
</style>
