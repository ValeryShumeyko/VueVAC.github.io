<template>
    <div class="social-icon">
        <div class="social-icon_img">
            <slot><img src="" alt="social icon"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'social-icon'
}
</script>

<style scoped>
.social-icon {
    position: relative;
    width: 30px;
    height: 30px;
    background-color: #7481FF;
    border-radius: 2px;
}
.social-icon:hover {
    background-color: #6270FF;
    cursor: pointer;
}
.social-icon_img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
