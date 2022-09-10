<template>
    <div class="my-step-item">
        <div class="step-item__number">
            <img src="@/img/icons/border-step.svg" alt="border">
            <p>{{product_data.number}}</p>
        </div>
        <div class="step-item__text">
            <h2>{{product_data.title}}</h2>
            <my-text>{{product_data.text}}</my-text>
        </div>
    </div>
</template>

<script>

export default {
    name: 'my-step-item',
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.my-step-item {
    display: flex;
    align-items: center;
    padding: 0px 0px 40px 0px;
}
.step-item__number {
    position: relative;
    z-index: 0;
    margin: 0px 20px 0px 0px;
    align-self: flex-start;
}
.step-item__number p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456B;
}
.step-item__text h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
    padding: 0px 0px 5px 0px;
}
</style>
