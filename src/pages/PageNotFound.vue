<template>
    <div class="page-not-found">
        <img src="@/img/icons/Nothing-content.svg" alt="icon">
        <my-title class="page-not-found__title">404 page</my-title>
        <my-text class="page-not-found__text">Page not found or such pages do not exist.</my-text>
        <button-blue @click="$router.push('/')">Go home</button-blue>
    </div>
</template>
<script>

</script>
<style scoped>
.page-not-found {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 1010;
    width: 100%;
    height: 110%;
    text-align: center;
    padding: 200px 0px 60px 0px;
}
.page-not-found__title {
    padding: 25px 0px 0px 0px;
}
.page-not-found__text {
    padding: 0px 0px 40px 0px;
}
</style>