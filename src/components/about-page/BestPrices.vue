<template>
    <div class="best-prices">
        <div class="best-prices__title-content">
            <my-title class="best-prices__title-content_title">Get a car at the best prices and conditions</my-title>
            <my-text class="best-prices__title-content_text">Not only is buying a car with VAC easy, it’s also the best way to save money. We have partnerships with Canada’s largest lenders. That allows us to help you secure loans at the best interest rates available.</my-text>
            <my-text>Because convenience and transparency are our founding principles, we take the time to answer all of your questions about the vehicle and the auto loan. We will send you pictures and videos of any part of the car you like before you request a test drive.</my-text>
        </div>
        <div class="best-prices__content">
            <div class="best-prices__content_h3">
                We think that VAC is the best way to buy a car in Canada. Try it for yourself and see how much time and money you can save.
            </div>
            <my-text class="best-prices__content_text">There are never any hidden fees or costs. We never ask you to sign anything until we have explained it clearly and you have had a chance to read it.</my-text>
            <button-blue @click="$router.push('/request-a-car')">Request a Car</button-blue>
        </div>
    </div>
</template>

<script>
export default {
    name: 'best-prices'
}
</script>

<style scoped>
.best-prices {
    display: flex;
    padding-bottom: 190px;
}
.best-prices__title-content {
    padding: 0px 50px 0px 0px;
    flex: 1 1 50%;
}
.best-prices__title-content_title,
.best-prices__title-content_text {
    padding-bottom: 20px;
}
.best-prices__content {
    flex: 1 1 50%;
    padding: 0px 0px 0px 50px;
}
.best-prices__content_h3 {
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456B;
    padding-bottom: 20px;
}
.best-prices__content_text {
    padding-bottom: 40px;
}
@media(max-width: 1000px) {
    .best-prices {
        flex-direction: column;
        padding: 0px 60px 160px 60px;
    }
    .best-prices__title-content {
        padding: 0px 0px 40px 0px;
    }
    .best-prices__content {
        padding: 0px;
    }
}
@media(max-width: 650px) {
    .best-prices {
        padding: 0px 0px 80px 0px;
    }
}
</style>
