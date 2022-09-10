<template>
    <div class="my-title">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'my-title'
}
</script>

<style scoped>
.my-title {
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #41456B;
}
@media(max-width: 650px) {
    .my-title {
        font-size: 30px;
    }
}
</style>
