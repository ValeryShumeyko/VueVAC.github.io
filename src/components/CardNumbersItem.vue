<template>
    <div class="card-numbers-item">
        <my-title>{{card_data.title}}</my-title>
        <my-text>{{card_data.text}}</my-text>
    </div>
</template>

<script>

export default {
    name: 'card-numbers-item',
    props: {
        card_data: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.card-numbers-item {
    padding: 25px 21px 21px 35px;
    width: 250px;
    margin: 0px 35px 40px 0px;
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
@media(max-width: 700px) {
    .card-numbers-item {
        width: 100%;
        margin: 0px 0px 10px 0px;
    }
}

</style>
