<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const aboutInfo = [
	{
		name: 'address',
		icon: ['fas', 'location-dot'],
		text: t('home.aboutAddress'),
	},
	{
		name: 'tel',
		icon: ['fas', 'phone'],
		text: t('home.aboutTel'),
	},
	{
		name: 'time',
		icon: ['fas', 'clock'],
		text: t('home.aboutTime'),
	},
];
</script>

<template>
	<div
		id="about"
		class="container about_block"
	>
		<div class="about_img" />
		<div class="about_info">
			<div class="about_title">{{ $t('home.about') }}</div>
			<div v-html="$t('home.aboutText')" />
			<ul>
				<li v-for="(item, i) in aboutInfo" :key="i">
					<font-awesome-icon :icon="item.icon" />
					<span>{{ item.text }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss">
.about {
	&_block {
		display: flex;
		min-height: calc(100vh - 72px);
		padding: 3rem 1rem;
        @include rwd(m) {
            flex-direction: column;
		}

		>div {
			flex: 1 1 50%;
			@include rwd(m) {
				flex: 1 1 auto;
			}
		}
	}

	&_img {
		background: url('https://images.unsplash.com/photo-1515864335-3bafcca4d9f5?auto=format&fit=crop&ixid=eyJhcHBfaWQiOjEyMDd9&ixlib=rb-1.2.1&q=80&w=1950') no-repeat;
		background-size: cover;
		background-position: 50%;
		width: 100%;
		height: calc(100vh - 6rem - 62px);

		@include rwd(m) {
			height: 300px;
		}
	}

	&_title {
		font-size: 3rem;
		font-weight: 700;
		color: $primary;
		margin: 0 0 40px 20%;
		padding: 10px 20px;
		border: 2px solid;
		display: inline-block;
        @include rwd(m) {
			margin: 0 0 40px 0;
		}

		+div {
			font-size: 1.5rem;
			padding-left: 28%;
			line-height: 2;
			@include rwd(m) {
				font-size: 1.125rem;
				padding-left: 0;
			}
		}
	}

	&_info {
		padding: 60px 1rem 55px;

		ul {
			margin: 50px 0 0 28%;
			position: relative;
			padding-left: 6px;
			@include rwd(m) {
				margin: 50px 0 0 0;
			}

			li {
				font-size: 1.125rem;
				line-height: 2.6;
				
				.svg-inline--fa {
					color: $primary;
					height: 1.125rem;
					width: 30px;
					position: relative;
					left: -10px;
					@include rwd(m) {
						left: 0;
					}
				}
				
				a {
					color: $primary;
				}
			}

			&::before {
				display: block;
				content: "";
				height: 100%;
				width: 1px;
				background-color: $primary;
				position: absolute;
				top: 0;
				left: -18px;
				@include rwd(m) {
					left: 0;
				}
			}
		}
	}
}
</style>
