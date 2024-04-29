<script setup lang="ts">
import { ref, watchEffect } from 'vue';

import { useUtils } from '@/composables/useUtils';

const news = defineModel('news', { required: true, type: Object, default: {
	number: '',
	id: '',
	date: '',
	title: '',
	content: '',
	imgUrl: '',
} });
const visible = defineModel('visible', { required: true, type: Boolean, default: false });
const img = defineModel('img', { required: true, type: String, default: '' });

const emit = defineEmits<{
  close: [value: boolean]
}>();

const { setBodyLocked } = useUtils();
const cardVisible = ref(false);
const clickClose = (v: boolean) => {
	setBodyLocked(v);
	cardVisible.value = false;
	setTimeout(() => {
		emit('close', v);
	}, 300);
};
watchEffect(() => {
	if(visible.value) {
		setBodyLocked(visible.value);
		setTimeout(() => {
			cardVisible.value = true;
		}, 10);
	}
});
</script>

<template>
	<div
		v-if="visible"
		class="dialog_mask"
	>
		<Transition name="dialog">
			<div
				v-if="cardVisible"
				class="card"
			>
				<div class="dialog_top text-right">
					<button
						type="button"
						class="card_btnCrosses"
						@click="clickClose(false)"
					/>
				</div>
				<div class="dialog_main">
					<div class="dialog_title ">
						{{ news.title }}
					</div>
					<div class="badge-primary">
						{{ news.date }}
					</div>
					<div class="dialog_content">
						{{ news.content }}
					</div>
					<img :src="img">
				</div>
			</div>
		</Transition>
	</div>
</template>

<style lang="scss">
.dialog {
	&_mask {
		height: 100vh;
		width: 100%;
		padding: 1rem;
		background-color: rgba($color: $primary, $alpha: .5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 99;
		position: fixed;
		left: 0;
		top: 0;
		overflow: overlay;

		.card {
			max-width: 500px;
			margin: auto;
		}

		img {
			width: 100%;
			height: auto;
		}
	}
	
	&_title {
		color: $primary;
		font-size: 1.175rem;
		font-weight: 500;
		margin-bottom: 25px;

		&::after {
			display: block;
			content: "";
			width: 100%;
			height: 4px;
			border-radius: 2px;
			background-color: $tertiary;
			position: relative;
			bottom: -10px;
		}
	}

	&_content {
		padding: 1rem 0;
	}
	
	&_top {
		padding-bottom: 4px;
	}
}

.dialog-enter-active, .dialog-leave-active {
	position: relative;
	top: 0;
	transition: all 0.3s ease;
}
.dialog-enter-from, .dialog-leave-to {
	position: relative;
	top: 2rem;
	opacity: 0;
}
</style>
