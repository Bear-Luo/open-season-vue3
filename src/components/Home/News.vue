<script setup lang="ts">
import NewsDialog from './NewsDialog.vue';

import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Waterfall } from 'vue-waterfall-plugin-next';
import 'vue-waterfall-plugin-next/dist/style.css';

import news from '@/assets/json/news.json';

const { t } = useI18n();
const nowPage = ref(1);
const count = 7;
const newsList = computed(() => ([news.slice(0, 7), news.slice(7, 10)]));

const maxPage = computed(() => Math.ceil(news.length / count));
const paginationControl = computed(() => ({
	prev: {
		text: t('home.prev'),
		visible: maxPage.value !== 1 && nowPage.value > 1,
	},
	next: {
		text: t('home.next'),
		visible: maxPage.value !== 1 && nowPage.value !== maxPage.value,
	},
}));
const number = ref(['10', '09', '08', '07', '06', '05', '04', '03', '02', '01']);
const newImgsUrl = computed(() => (number.value.map(elm => new URL(`/src/assets/images/news/${ elm }.jpg`, import.meta.url).href)));

const clickPagination = (value: number) => {
	nowPage.value = nowPage.value + value;
};

const dialogVisible = ref(false);
const dialogNews = ref({});
const dialogImg = ref('');
const setDialogVisible = (v: boolean) => {
	dialogVisible.value = v;
};
const clickNews = (news: {[key: string]: string}) => {
	dialogNews.value = news;
	setDialogVisible(true);
	dialogImg.value = newImgsUrl.value[Number(news.number)];
};
</script>

<template>
	<div id="news" class="news_block">
		<div class="container">
			<Waterfall
				v-show="nowPage === 1"
				:list="newsList[0]"
				:gutter="20"
			>
				<template #item="{ item }">
					<div
						class="waterfall_card"
						@click="clickNews(item);dialogImg = newImgsUrl[item.number]"
					>
						<div class="news_title">{{ item.title }}</div>
						<div class="img_wrap">
							<img :src="newImgsUrl[item.number]">
						</div>
					</div>
				</template>
			</Waterfall>

			<Waterfall
				v-show="nowPage === 2"
				:list="newsList[1]"
				:gutter="20"
			>
				<template #item="{ item }">
					<div
						class="waterfall_card"
						@click="clickNews(item);"
					>
						<div class="news_title">{{ item.title }}</div>
						<div class="img_wrap">
							<img :src="newImgsUrl[item.number]">
						</div>
					</div>
				</template>
			</Waterfall>

			<div class="news_pagination">
				<button
					v-show="paginationControl.prev.visible"
					v-html="paginationControl.prev.text"
					type="button"
					@click="clickPagination(-1)"
				/>
				<button
					v-show="paginationControl.next.visible"
					v-html="paginationControl.next.text"
					type="button"
					@click="clickPagination(1)"
				/>
			</div>
		</div>
	</div>
	<NewsDialog
		:visible="dialogVisible"
		:news="dialogNews"
		:img="dialogImg"
		@close="setDialogVisible"
	/>
</template>

<style lang="scss">
.news {
	&_block {
		background-color: $info;
		padding: 3rem ;
		min-height: 100vh;

		@include rwd(s) {
			padding: 1rem;
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

	&_pagination {
		text-align: center;
		padding-top: 2.25rem;

		button {
			margin: 20px 10px 0 8px;
			padding: 0 15px;
			background-color: transparent;
			color: $primary;
			border: 1px solid $primary;
			font-size: 1.125rem;
			font-weight: 700;
			line-height: 46px;
			height: 46px;
			opacity: .7;
			transition: all .35s ease;

			span {
				position: relative;
				right: 0;
				transition: all .35s ease;
			}

			&:hover {
				background-color: rgba(57, 35, 33, .1);
				opacity: 1;
				transition: all .25s ease;

				span {
					right: -5px;
					transition: all .25s ease;
				}
			}
		}
	}
}

.waterfall {
	&-list {
		background-color: transparent !important;
		margin: -20px;
		margin: 0 auto;
	}

	&_card {
		border-radius: 5px;
		overflow: hidden;
		box-shadow: 0 2px 5px rgba(0,0,0,.5);
		background-color: #fff;
		padding: 20px;
		cursor: pointer;

		&:hover {
			box-shadow: 0 6px 16px rgba(0,0,0,.35);
			transition: box-shadow .25s ease;
		}
	}
}

.img_wrap {
	position: relative;
	img {
		width: 100%;
		height: auto;
	}
}
</style>
