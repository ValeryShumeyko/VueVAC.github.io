<template>
    <div class="image">
        <img :src="require('../../img/inventory-card/' + '1.jpg')" v-show="selectedImage === '1.jpg'" alt="car">
        <img :src="require('../../img/inventory-card/' + '2.jpg')" v-show="selectedImage === '2.jpg'" alt="car">
        <img :src="require('../../img/inventory-card/' + '3.jpg')" v-show="selectedImage === '3.jpg'" alt="car">
        <img :src="require('../../img/inventory-card/' + '4.jpg')" v-show="selectedImage === '4.jpg'" alt="car">
        <img :src="require('../../img/inventory-card/' + '5.jpg')" v-show="selectedImage === '5.jpg'" alt="car">
        <img :src="require('../../img/inventory-card/' + '6.jpg')" v-show="selectedImage === '6.jpg'" alt="car">
        <img :src="require('../../img/inventory-card/' + '7.jpg')" v-show="selectedImage === '7.jpg'" alt="car">
        <img :src="require('../../img/inventory-card/' + '8.jpg')" v-show="selectedImage === '8.jpg'" alt="car">
        <img :src="require('../../img/inventory-card/' + '9.jpg')" v-show="selectedImage === '9.jpg'" alt="car">
        <img :src="require('../../img/inventory-card/' + '10.jpg')" v-show="selectedImage === '10.jpg'" alt="car">
        <div class="image__button">
            <div class="image__button_item image__button_item1 active" @click="exterior()">Exterior</div>
            <div class="image__button_item image__button_item2" @click="interior()">Interior</div>
        </div>
    </div>
    <div class="container">
        <div @click="prevSlide" class="button-prev">
            <button class="button-prev_item"></button>
        </div>        
        <div class="wrapper">
            <div class="my-slider" :style="{ 'margin-left': '-' + (190 * currentSlideIndex) + 'px'}">
                <inventory-card-slider-item 
                    v-for="item in slider_data" 
                    :key="item.id"
                    :item_data="item"

                    :selected="selected"
                    @click="selectItem(item)"

                    ></inventory-card-slider-item>
            </div>
        </div>
        <div @click="nextSlide" class="button-next">
            <button class="button-next_item"></button>
        </div>
    </div>
</template>

<script>
import InventoryCardSliderItem from './InventoryCardSliderItem'

export default {
    name: 'inventory-card-slider',
    props: {
        slider_data: {
            type: Array,
            default: () => []
        },
        selected: ''
    },

    components: {
        InventoryCardSliderItem
    },
    data() {
        return {
            currentSlideIndex: 0,
            selectedImage: '1.jpg',
        }
    },
    methods: {
        prevSlide() {
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--
            }
        },
        nextSlide() {
            let width = document.querySelector('.container').offsetWidth;
            let n = Math.floor((1900 - width) / 190);
            console.log(n);
            if (this.currentSlideIndex >= n) {
                this.currentSlideIndex = 0
            } else {
                this.currentSlideIndex++
            }
            console.log(this.currentSlideIndex)
        },
        selectItem(item) {
            this.selectedImage=item.img;
            console.log(this.selectedImage);
            if(this.selectedImage === '1.jpg' || this.selectedImage === '2.jpg' || this.selectedImage === '3.jpg' || this.selectedImage === '4.jpg' || this.selectedImage === '5.jpg') {
                document.querySelector('.image__button_item2').classList.remove('active');
                document.querySelector('.image__button_item1').classList.add('active');
            } else {
                document.querySelector('.image__button_item1').classList.remove('active');
                document.querySelector('.image__button_item2').classList.add('active');
            }
        },
        exterior() {
            this.selectedImage = '1.jpg';
            this.currentSlideIndex = 0;
            document.querySelector('.image__button_item2').classList.remove('active');
            document.querySelector('.image__button_item1').classList.add('active');
        },
        interior() {
            this.selectedImage = '6.jpg';
            this.currentSlideIndex = 5;
            document.querySelector('.image__button_item1').classList.remove('active');
            document.querySelector('.image__button_item2').classList.add('active');
        }
    },
}
</script>

<style scoped>
.image {
    width: 100%;
    margin: 0px 0px 15px 0px;
    position: relative;
}
.image img {
    width: 100%;
    height: 320px;
    object-fit: cover;
}
.image__button {
    position: absolute;
    bottom: 25px;
    left: 25px;
    display: flex;
}
.image__button_item {
    padding: 10px 20px;
    margin: 0px 7px 0px 0px;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    background: rgba(215, 215, 215, 0.2);
    border-radius: 2px;
    cursor: pointer;
}
.image__button_item:hover {
    background: rgba(215, 215, 215, 0.1);
}
.image__button_item1.active,
.image__button_item2.active {
    background: #fff;
    color: #41456B;
}
.image__button_item.active:hover {
    background: rgba(255, 255, 255, 0.8);
}
.container {
    display: flex;
    align-items: center;
    position: relative;
}
.wrapper {
    max-width: 600px;
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
    z-index:2;
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
    width: 15px;
    height: 15px;
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
.my-slider {
    display: flex;
    transition: all ease .5s;
}
@media(max-width: 1205px) {
    .image img {
        height: 340px;
    }
    .wrapper {
        max-width: 100%;
    }
}
@media(max-width: 650px) {
    .button-prev,
    .button-next{
        width: 45px;
        height: 45px;
    }
    .image img {
        height: 180px;
    }
}
</style>
