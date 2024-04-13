<script setup lang="ts">
import { type Loading } from '@/composables/types';

const props = withDefaults(defineProps<Loading>(), {
	loading: false,
	light: false,
	fullPage: false,
});
</script>

<template>
	<div
		v-if="props.loading"
		class="loading_mask"
		:class="{
			'light': props.light,
			'fullPage': props.fullPage,
		}"
	>
		<font-awesome-icon :icon="['fas', 'spinner']" spin-pulse />
	</div>
</template>

<style lang="scss">
.loading {
	&_mask {
		width: 100%;
		height: 100%;
		min-height: 100px;
		background-color: rgba($color: $primary, $alpha: .5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 999;

		.svg-inline--fa {
			color: #fff;
			height: 2rem;
		}

		&.light {
			background-color: rgba($color: #fff, $alpha: .2);

			.svg-inline--fa {
				color: $tertiary;
			}
		}

		&.fullPage {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
		}
	}
}
</style>
