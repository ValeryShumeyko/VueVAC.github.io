<template>
    <div class="benefits">
        <div class="benefits__content">
            <my-title class="benefits__content_title">Benefits of getting an auto loan with VAC</my-title>
            <my-text class="benefits__content_text">For many people getting a reasonable auto loan is the best way for them to get a new car. However, the benefits of getting the right loan go beyond just being able to drive a nice vehicle.</my-text>
            <p class="benefits__content_p">When you work with VAC, there are never any hidden costs or fees! We lay out all the terms and conditions so that you know exactly what details of the loan are before you sign anything.</p>
            <button-blue class="benefits__content_button" @click="$router.push('/request-a-car')">Request a Car</button-blue>
        </div>
        <div class="benefits__image">
            <img src="@/img/cars/car10.png" alt="car">
        </div>
    </div>
</template>

<script>

export default {
    name: 'benefits',
}
</script>

<style scoped>
.benefits {
    display: flex;
    padding-bottom: 220px;
}
.benefits__content {
    flex: 1 1 50%;
    padding: 0px 25px 0px 0px;
}
.benefits__content_title,
.benefits__content_text {
    padding-bottom: 20px;
}
.benefits__content_p {
    padding-bottom: 40px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
}
.benefits__image {
    flex: 1 1 50%;
    padding: 0px 0px 0px 25px;
    align-self: flex-end;
}
.benefits__image img {
    max-width: 100%;
}
@media(max-width: 1000px) {
    .benefits {
        padding-bottom: 160px;
        flex-direction: column;
    }
    .benefits__content {
        padding: 0px 0px 40px 0px;
    }
    .benefits__image {
        padding: 0px;
        align-self: center;
    }
}
@media(max-width: 650px) {
    .benefits__content_button {
        width: 100%;
    }
}
</style>
