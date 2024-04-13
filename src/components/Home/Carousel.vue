<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

const images = [
	'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1912&q=80',
	'https://images.unsplash.com/photo-1497581175344-8a5f1a0142a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80',
	'https://images.unsplash.com/photo-1472555950005-7fa40ece7f6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2050&q=80',
];
</script>

<template>
	<div class="carousel_container">
		<Carousel :autoplay="4000" :wrap-around="true">
			<slide v-for="(item, i) in images" :key="i">
				<div
					:style="`background-image: url(${item})`"
					class="carousel_item"
				/>
			</slide>
		</Carousel>
		<div class="homeInfo_over_carousel">
			<img src="/src/assets/images/logo.svg">
			<router-link to="/product-list">
				<div v-html="$t('home.goShopping')" />
			</router-link>
		</div>
	</div>
</template>

<style lang="scss">
.carousel {
    &_container{
        margin-top: -106px;
        position: relative;

        &::before {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            display: block;
            content: "";
            background: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .2) 90%);
        }
    }

    &_item {
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
}

.homeInfo_over_carousel {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;

    img {
        height: 36vh;
    }

    a {
        color: #fff;
        font-size: 1.25rem;
        line-height: 60px;
        padding: 0 30px;
        border: 1px solid rgba($color: #fff, $alpha: .5);
        border-radius: 30px;
        margin-top: 5vh;

        span {
            transition: all .15s ease;
            position: relative;
            left: 0;
        }

        &:hover {
            background-color: rgba($color: #fff, $alpha: .2);

            span {
                left: 8px;
                transition: all .15s ease;
            }
        }
    }
}
</style>
