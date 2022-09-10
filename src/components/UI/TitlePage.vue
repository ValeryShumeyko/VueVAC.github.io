<template>
    <div class="title-page">
        <img src="@/img/Bg-title-page.png" alt="background">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'title-page',
}
</script>

<style scoped>
.title-page {
    padding: 120px 0px 40px 0px;
    margin: 0px 0px 40px -0px;
    font-weight: 800;
    font-size: 60px;
    line-height: 108.5%;
    letter-spacing: 0.02em;
    color: #FFFFFF;
}
.title-page img {
    position: absolute;
    z-index: -1;
    top: 80px;
    left: 0;
    width: 100%;
    height: 145px;
}
@media(max-width: 700px) {
    .title-page img{
        height: 200px;
    }
}
@media(max-width: 650px) {
    .title-page {
        font-size: 35px;
    }
    .title-page img {
        height: 110px;
    }
}
@media(max-width: 577px) {
    .title-page {
        padding: 110px 0px 20px 0px;
    }
}
</style>
