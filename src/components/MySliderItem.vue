<template>
    <div class="my-slider-item">
        <img :src=" require('@/img/cars/' + item_data.img)" alt="">
    </div>
</template>

<script>
export default {
    name: 'my-slider-item',
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style scoped>
@media(max-width: 650px) {
    .my-slider-item img {
        width: 270px;
    }
}
</style>
