<template>
    <my-title class="rates-terms__title">Interest rates and loan terms</my-title>
    <div class="rates-terms">
        <div class="rates-terms__card1">
            <card class="rates-terms__card_item">
                <div class="rates-terms__card_title">
                    <img src="@/img/icons/procent.svg" alt="icon">
                    <p>What are my interest rate options?</p>
                </div>
                <my-text>We work to secure customized auto loans from Canada’s largest lenders. Your interest rate is critical for determining the total cost of your auto financing. Interest rates are based on many factors including the loan amount, your credit score, and your budget. We help you find the lowest interest rates available for your auto loan.</my-text>
            </card>
        </div>
        <div class="rates-terms__card2">
            <card class="rates-terms__card_item">
                <div class="rates-terms__card_title">
                    <img src="@/img/icons/clock.svg" alt="icon">
                    <p>How long will my loan term be?</p>
                </div>
                <my-text>Our goal is to find the right car and the right loan for you. Because we have relationships with so many different lenders, we can help you find the right term length for your budget. The longer the loan is, often the lower the monthly payments will be—but the more expensive the loan will be overall. Most of the loans we secure for our clients are between 36 and 72 months.</my-text>
            </card>
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card";

export default {
    name: 'rates-terms',
    components: {
        Card
    }

}
</script>

<style scoped>
.rates-terms__title {
    padding-bottom: 60px;
}
.rates-terms {
    padding-bottom: 220px;
    display: flex;
}
.rates-terms__card1 {
    flex: 1 1 50%;
    padding: 0px 20px 0px 0px;
}
.rates-terms__card2 {
    flex: 1 1 50%;
    padding: 0px 0px 0px 20px;
}
.rates-terms__card_item {
    text-align: left;
    height: 100%;
}
.rates-terms__card_title {
    display: flex;
    padding-bottom: 20px;
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456B;
}
.rates-terms__card_title img {
    padding: 0px 20px 0px 0px;
}
@media(max-width: 1000px) {
    .rates-terms {
        padding-bottom: 160px;
        flex-direction: column;
    }
    .rates-terms__card1 {
        padding: 0px 0px 20px 0px;
    }
    .rates-terms__card2 {
        padding: 0px;
    }
}
</style>
