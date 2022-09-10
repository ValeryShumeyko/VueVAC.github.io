<template>
    <div class="my-text">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'my-text'
}
</script>

<style scoped>
.my-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
}
</style>
