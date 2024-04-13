<script setup lang="ts">
import { useNotify } from '@/composables/useNotify';

const { messages, deleteMessage } = useNotify();
</script>

<template>
	<div class="notification_block">
		<div
			v-for="item in messages"
			:key="item.timeStamp"
			class="notification_message fade"
			:class="[item.class, item.top === '0' ? 'show' : '']"
			:style="`top: ${item.top}`"
		>
			<div>{{ item.text }}</div>
			<button
				type="button"
				@click="deleteMessage(item.timeStamp)"
			>
				<font-awesome-icon :icon="['fas', 'xmark']" />
			</button>
		</div>
	</div>
</template>

<style lang="scss">
.notification {
	&_block {
		position: fixed;
		right: 0;
		top: 0;
		padding: 90px 1.5rem 0 0;
	}

	&_message {
		background-color: rgba($color: $quaternary, $alpha: .9);
		color: #fff;
		font-size: .875rem;
		padding: .875rem;
		width: 180px;
		display: flex;
		border-radius: 5px;
		position: relative;
		margin-bottom: .5rem;
		top: -.5rem;

		>div {
			flex: 1;
		}

		button {
			background-color: transparent;
			border: none;
			color: #fff;
		}

		&.danger {
			background-color: $danger;
		}
	}
}
</style>
