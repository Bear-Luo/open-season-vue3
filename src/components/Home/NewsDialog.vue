<script setup lang="ts">
import Dialog from '../Utils/Dialog.vue';

const news = defineModel('news', { required: true, type: Object, default: {
	number: '',
	id: '',
	date: '',
	title: '',
	content: '',
} });
const visible = defineModel('visible', { required: true, type: Boolean, default: false });
const img = defineModel('img', { required: true, type: String, default: '' });
</script>

<template>
	<Dialog
		v-model:visible="visible"
		v-model:title="news.title"
	>
		<div class="badge-primary">
			{{ news.date }}
		</div>
		<div class="dialog_content">
			{{ news.content }}
		</div>
		<img :src="img">
	</Dialog>
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
