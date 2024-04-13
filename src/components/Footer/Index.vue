<script setup lang="ts">
import FixLinks from './FixLinks.vue';

const links = [
	{
		to: '',
		icon: ['fab', 'facebook-f'],
	},
	{
		to: '',
		icon: ['fab', 'instagram'],
	},
];
</script>

<template>
	<FixLinks />
	<div class="footer">
		<router-link
			v-for="(item, i) in links"
			:key="i"
			:to="item.to"
			class="btn-circle btn-info btn-outline"
		>
			<font-awesome-icon :icon="item.icon" />
		</router-link>
		<div v-html="$t('footer.text')" />
	</div>
</template>

<style lang="scss">
.footer {
	background-color: $primary;
	display: flex;
	padding: 1.5rem 1rem;
	justify-content: center;
	align-items: center;

	>a {
		margin-right: 10px;
	}
	
	>div {
		font-size: .75rem;
		color: #fff;
		line-height: 1.5;
	}
}
</style>
