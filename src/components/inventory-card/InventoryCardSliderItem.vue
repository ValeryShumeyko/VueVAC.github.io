<template>
    <div class="inventory-card-slider-item">
        <img                     
            :src=" require('@/img/inventory-card/' + item_data.img)" 
            alt="">
    </div>
</template>

<script>
export default {
    name: 'inventory-card-slider-item',
    props: {
        item_data: {
            type: Object,
            default: () => {}
        },
        selected: {
            type: String,
            default: ''
        }
    },
}
</script>

<style scoped>
.inventory-card-slider-item img {
    width: 180px;
    height: 90px;
    object-fit: cover;
    padding: 0px 10px 0px 0px;
}
.inventory-card-slider-item img:hover {
    cursor: pointer;
    opacity: 0.9;

}
</style>
