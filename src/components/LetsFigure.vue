<template>
    <div class="lets-figure">
        <my-title class="lets-figure__title">Let’s figure out how much you can afford</my-title>
        <my-text class="lets-figure__text">Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.</my-text>
    </div>
</template>

<script>

export default {
    name: 'lets-figure',
}
</script>

<style scoped>
.lets-figure {
    display: flex;
    align-items: center;
    padding: 0px 0px 60px 0px;
}
.lets-figure__title {
    max-width: 550px;
    padding: 0px 100px 0px 0px;
}
@media(max-width: 1230px) {
    .lets-figure__title {
        padding: 0px 60px 0px 0px;
    }
}
@media(max-width: 1000px) {
    .lets-figure__title {
        min-width: 360px;
    }
}
@media(max-width: 650px) {
    .lets-figure {
        flex-direction: column;
        align-items: start;
        padding: 0px 0px 30px 0px;
    }
    .lets-figure__title {
        padding: 0px 0px 10px 0px;
        min-width: 100px;
    }
}
</style>
