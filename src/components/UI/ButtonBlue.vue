<template>
    <button class="button-blue">
    <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'button-blue'
}
</script>

<style scoped>
.button-blue {
    padding: 16px 17px;
    background: #7481FF;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    border: 1px solid #7481FF;
}
.button-blue:hover {
    background: #6270FF;
    border: 1px solid #6270FF;
    cursor: pointer;
}
</style>
