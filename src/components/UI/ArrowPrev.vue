<template>
    <div class="arrow-prev">
        <button class="arrow-prev_item"></button>
    </div>
</template>

<script>
export default {
    name: 'arrow-prev'
}
</script>

<style scoped>
.arrow-prev {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.8;
    position: relative;
}
.arrow-prev:hover {
    cursor: pointer;
}
.arrow-prev_item {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 11px;
    height: 11px;
    border: none;
    background-color: transparent;
    border-top: 1px solid #7481FF;
    border-left: 1px solid #7481FF;
    transform: translate(-50%, -50%) rotate(-45deg);
}
</style>
