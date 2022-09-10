<template>
    <div class="triangle-element">
        <div class="triangle-item">
            <img src="@/img/bg-triangle-top.png" class="triangle-item__bg" alt="icon">
            <div class="triangle-item__content">
                <img src="@/img/icons/map.svg" class="triangle-item__icon" alt="icon">
                <h2 class="triangle-item__title">Vehicle Delivery</h2>
                <my-text class="triangle-item__text">We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.</my-text>
            </div>
        </div>
        <div class="triangle-item">
            <img src="@/img/bg-triangle-bottom.png" class="triangle-item__bg triangle-item__bg-desktop" alt="icon">
            <img src="@/img/bg-triangle-top.png" class="triangle-item__bg triangle-item__bg-tablet" alt="icon">
            <div class="triangle-item__content">
                <img src="@/img/icons/card.svg" class="triangle-item__icon" alt="icon">
                <h2 class="triangle-item__title">Auto Financing</h2>
                <my-text class="triangle-item__text">We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%</my-text>
            </div>
        </div>
        <div class="triangle-item">
            <img src="@/img/bg-triangle-top.png" class="triangle-item__bg" alt="icon">
            <div class="triangle-item__content">
                <img src="@/img/icons/car.svg" class="triangle-item__icon" alt="icon">
                <h2 class="triangle-item__title">Huge Inventory</h2>
                <my-text class="triangle-item__text">We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you</my-text>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'triangle-element',
}
</script>

<style scoped>
.triangle-element {
    display: flex;
    padding: 0px 0px 200px 0px;
}

.triangle-item {
    position: relative;
    text-align: center;
    flex-basis: 32.3%;
}

.triangle-item__bg {
    width: 125%;
    height: 100%;
    margin: 0px 0px 0px -45px;
}
.triangle-item__bg-tablet {
    display: none;
}
.triangle-item__content {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%, 0);
}
.triangle-item__icon {
    padding: 0px 0px 18px 0px;
}
.triangle-item__title {
    padding: 0px 0px 5px 0px;
}
.triangle-item__text {
    max-width: 320px;
}
.triangle-item__text:nth-child(2) {
    max-width: 204px;
}
@media(max-width: 1230px) {
    .triangle-element {
        flex-direction: column;
        padding: 0px 0px 160px 0px;
    }
    .triangle-item__bg {
        width: 520px;
        height: 430px;
        margin: 0px;
    }
    .triangle-item__bg-desktop {
        display: none;
    }
    .triangle-item__bg-tablet {
        display: block;
        margin: 0 auto;
    }
    .triangle-item__content {
        top: 100px;
    }
}
@media(max-width: 650px) {
    .triangle-item__bg {
        display: none;
    }
    .triangle-item__content {
        position: static;
        transform: translate(0, 0);
    }
    .triangle-item__text {
        max-width: none;
    }
    .triangle-item {
        padding: 0px 0px 30px 0px;
    }
    .triangle-element {
        padding: 0px 0px 80px 0px;
    }
}
</style>
