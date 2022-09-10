<template>
    <div class="slider-client-item">
        <div class="slider-client-item__container">
        <div class="slider-client-item__image">
            <img :src=" require('@/img/' + item_data.img)" alt="">
        </div>
        <div class="slider-client-item__content">
            <my-text class="slider-client-item__title">{{item_data.title}}</my-text>
            <div class="slider-client-item__text">{{item_data.text}}</div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'slider-client-item',
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style scoped>
.slider-client-item {

}
.slider-client-item__container {
    display: flex;
    width: 100%;
}
.slider-client-item__content {
    padding: 55px 60px 55px 40px;
    flex: 1 1 auto;
}
.slider-client-item__title {
    padding: 0px 0px 11px 0px;
}
.slider-client-item__text {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
    width: 640px;
}
@media(max-width: 1230px) {
    .slider-client-item__container {
        align-items: center;
    }
    .slider-client-item__text {
        width: calc(100vw - 600px);
    }
}
@media(max-width: 960px) {
    .slider-client-item__image img {
        object-fit: cover;
        width: 320px;
        height: 320px;
    }
    .slider-client-item__text {
        width: calc(100vw - 460px);
    }
}
@media(max-width: 750px) {
    .slider-client-item__container {
        flex-direction: column;
    }
    .slider-client-item__text {
        width: calc(100vw - 80px);
    }
    .slider-client-item__image img {
        max-width: 100%;
    }
    .slider-client-item__content {
        padding: 20px;
    }
}
</style>
