<template>
    <div class="container">
        <div @click="prevSlide" class="button-prev">
            <button class="button-prev_item"></button>
        </div>
        <div class="wrapper">
            <div class="slider-client" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%'}">
                <slider-client-item 
                    v-for="item in slider_data" 
                    :key="item.id"
                    :item_data="item"
                    ></slider-client-item>
            </div>
        </div>
        <div @click="nextSlide" class="button-next">
            <button class="button-next_item"></button>
        </div>
    </div>
</template>

<script>
import SliderClientItem from './SliderClientItem'

export default {
    name: 'slider-client',
    props: {
        slider_data: {
            type: Array,
            default: () => []
        }
    },
    components: {
        SliderClientItem
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
    /*display: flex;*/
    align-items: center;
    position: relative;
}
.wrapper {
    max-width: 1200px;
    overflow: hidden;
}
.button-prev,
.button-next{
    width: 53px;
    height: 53px;
    border-radius: 50%;
    position: relative;
    background: #7481FF;
    opacity: 0.8;
    cursor: pointer;
}
.button-prev {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 0;
}
.button-next {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
}
.button-prev_item,
.button-next_item {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 11px;
    height: 11px;
    border: none;
    background-color: transparent;
    border-top: 2px solid #FFF;
    border-left: 2px solid #FFF;
    cursor: pointer;
}
.button-prev_item {
    transform: translate(-50%, -50%) rotate(-45deg);
}
.button-next_item {
    transform: translate(-50%, -50%) rotate(135deg);
}

.slider-client {
    display: flex;
    transition: all ease .5s;
}
@media(max-width: 750px) {
    .button-prev,
    .button-next {
        top: 25%; 
    }
}
</style>
