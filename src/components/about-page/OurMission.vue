<template>
    <div class="our-mission">
        <div class="our-mission__card">
            <card class="our-mission__card_item">
                <my-title class="our-mission__card_title">Our mission</my-title>
                <my-text class="our-mission__card_text">Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto loan. We make buying a car simple. You can complete the entire process from home—we’ll even deliver the car to you!</my-text>
                <button-blue class="our-mission__card_button" @click="$router.push('/request-a-car')">Request a Car</button-blue>
            </card>
        </div>
        <div class="our-mission__image">
            <img src="@/img/cars/car7.png" alt="car">
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card";

export default {
    name: 'our-mission',
    components: {
        Card
    }

}
</script>

<style scoped>
.our-mission {
    display: flex;
    padding-bottom: 220px;
}
.our-mission__card {
    padding: 0px 33px 0px 0px;
    flex: 1 1 50%;
}
.our-mission__card_item {
    text-align: left;
}
.our-mission__card_title {
    padding-bottom: 20px;
}
.our-mission__card_text {
    padding-bottom: 40px;
}
.our-mission__image {
    align-self: flex-end;
    padding: 0px 0px 0px 33px;
}
.our-mission__image img {
    max-width: 100%;
}
@media(max-width: 1000px) {
    .our-mission {
        flex-direction: column;
        padding: 0px 60px 160px 60px;
    }
    .our-mission__card {
        padding: 0px 0px 40px 0px;
    }
    .our-mission__image {
        align-self: center;
        padding: 0px;
    }
}
@media(max-width: 650px) {
    .our-mission {
        padding: 0px 0px 80px 0px;
    }
    .our-mission__card_button {
        width: 100%;
    }
}
</style>
