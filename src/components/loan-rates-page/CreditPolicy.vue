<template>
    <div class="credit-policy">
        <div class="credit-policy__card">
            <card class="credit-policy__card_item">
                <my-title class="credit-policy__card_title">Our credit policy</my-title>
                <my-text class="credit-policy__card_text">You want to secure a loan that works for your budget. Here at VAC we work with Canada’s largest lenders to help you find the best interest rates and terms for your auto loan.</my-text>
                <button-blue class="credit-policy__card_button" @click="$router.push('/request-a-car')">Request a Car</button-blue>
            </card>
        </div>
        <div class="credit-policy__image">
            <img src="@/img/cars/car9.png" alt="car">
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card";

export default {
    name: 'credit-policy',
    components: {
        Card
    }

}
</script>

<style scoped>
.credit-policy {
    padding-bottom: 220px;
    display: flex;
}
.credit-policy__card {
    flex: 1 1 50%;
    padding: 0px 33px 0px 0px;
}
.credit-policy__card_item {
    text-align: left;
}
.credit-policy__card_title {
    padding-bottom: 20px;
}
.credit-policy__card_text {
    padding-bottom: 40px;
}
.credit-policy__image {
    flex: 1 1 50%;
    align-self: flex-end;
    padding: 0px 0px 0px 33px;
}
.credit-policy__image img {
    max-width: 100%;
}
@media(max-width:1000px) {
    .credit-policy {
        padding-bottom: 160px;
        flex-direction: column;
    }
    .credit-policy__card {
        padding: 0px 0px 40px 0px;
    }
    .credit-policy__image {
        padding: 0px;
        align-self: center;
    }
}
@media(max-width: 650px) {
    .credit-policy__card_button {
        width: 100%;
    }
}
</style>
