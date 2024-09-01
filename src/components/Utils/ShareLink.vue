<script setup lang="ts">
import Dialog from './Dialog.vue';

import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useClipboard } from '@vueuse/core';
import { useQRCode } from '@vueuse/integrations/useQRCode';

import { useNotify } from '@/composables/useNotify';

const props = defineProps({
	classStyle: { type: String, default: '' },
	url: { required: true, type: String, default: '' },
});

const visible = ref(false);

const { t } = useI18n();
const title = t('common.shareLink');

const { copy } = useClipboard();

const shareLink = () => {
	visible.value = true;
};

const { setMessage } = useNotify();
const copyLink = () => {
	copy(props.url);
	setMessage({ text: t('common.copySuccess') });
};

const qrcode = useQRCode(props.url, { 
	color: {
		dark: '#ffffff',
		light: '#97736f',
	},
	margin: 1,
});
</script>

<template>
	<button
		:class="props.classStyle"
		type="button"
		@click="shareLink"
	>
		<font-awesome-icon :icon="['fas', 'up-right-from-square']" />
	</button>
	<Dialog
		v-model:visible="visible"
		v-model:title="title"
	>
		<div class="card text-center">
			<div class="qrcode">
				<img :src="qrcode" />
			</div>
			<div class="form_group form_group--inline">
				<div class="url">{{ url }}</div>
				<button
					type="button"
					class="btn btn-quaternary"
					@click.stop="copyLink"
				>
					<font-awesome-icon :icon="['far', 'copy']" />
				</button>
			</div>
		</div>
	</Dialog>
</template>

<style lang="scss" scoped>
.qrcode {
	width: 160px;
	margin: 0 auto .875rem;
	border-radius: 4px;
	overflow: hidden;

	img {
		display: block;
	}
}
.url {
	border: 1px solid #ced4da;
	border-right: 0;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	font-size: .875rem;
	padding: 2px .875rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
