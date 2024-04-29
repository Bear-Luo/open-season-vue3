<script setup lang="ts">
const loading = defineModel('loading', { required: true, type: Boolean, default: false });
const light = defineModel('light', { type: Boolean, default: false });
const fullPage = defineModel('fullPage', { type: Boolean, default: false });
</script>

<template>
	<div
		v-if="loading"
		class="loading_mask"
		:class="{
			'light': light,
			'fullPage': fullPage,
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
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
		}
	}
}
</style>
