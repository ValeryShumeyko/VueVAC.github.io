<template>
    <div class="container">
        <arrow-prev @click="prevSlide" class="button-prev"></arrow-prev>
        <div class="wrapper">
            <div class="my-slider" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%'}">
                <my-slider-item 
                    v-for="item in slider_data" 
                    :key="item.id"
                    :item_data="item"
                    ></my-slider-item>
            </div>
        </div>
        <arrow-next @click="nextSlide" class="button-next"></arrow-next>
    </div>
</template>

<script>
import MySliderItem from './MySliderItem'

export default {
    name: 'my-slider',
    props: {
        slider_data: {
            type: Array,
            default: () => []
        }
    },
    components: {
        MySliderItem
    },
    data() {
        return {
            currentSlideIndex: 0
        }
    },
    methods: {
        prevSlide() {
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--
            }
        },
        nextSlide() {
            if (this.currentSlideIndex >= this.slider_data.length - 1) {
                this.currentSlideIndex = 0
            } else {
                this.currentSlideIndex++
            }
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
}
.wrapper {
    max-width: 490px;
    overflow: hidden;
}
.button-prev{
}
.button-next{
    position: relative;
    z-index: 1;
}
.my-slider {
    display: flex;
    transition: all ease .5s;
}
@media(max-width: 650px) {
    .wrapper {
        max-width: 270px;
    }
    .button-prev,
    .button-next{
        width: 45px;
        height: 45px;
    }
}
</style>
