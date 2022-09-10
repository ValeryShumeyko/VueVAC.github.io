<template>
    <div class="arrow-next">
        <button class="arrow-next_item"></button>
    </div>
</template>

<script>
export default {
    name: 'arrow-next'
}
</script>

<style scoped>
.arrow-next {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.8;
    position: relative;
}
.arrow-next:hover {
    cursor: pointer;
}
.arrow-next_item {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 11px;
    height: 11px;
    border: none;
    background-color: transparent;
    border-top: 1px solid #7481FF;
    border-left: 1px solid #7481FF;
    transform: translate(-50%, -50%) rotate(135deg);
}
</style>
