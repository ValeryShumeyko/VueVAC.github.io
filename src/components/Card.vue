<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'card',
}
</script>

<style scoped>
.card {
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 60px;
    text-align: center;
}
@media(max-width: 650px) {
    .card {
        padding: 20px;
    }
}
</style>
