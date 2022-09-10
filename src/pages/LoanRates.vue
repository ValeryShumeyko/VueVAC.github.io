<template>
    <div class="loan-rates">

    <title-page>Loan Rates</title-page>

    <credit-policy></credit-policy>

    <rates-terms></rates-terms>

    <benefits></benefits>

    <section class="lets-figure">
        <div class="lets-figure__container">
            <lets-figure></lets-figure>
        </div>
    </section>

    <section class="calculate-input">
        <div class="calculate-input__container">
            <calculate-input></calculate-input>
        </div>
    </section>
    </div>
</template>

<script>
import CreditPolicy from "@/components/loan-rates-page/CreditPolicy";
import RatesTerms from "@/components/loan-rates-page/RatesTerms";
import Benefits from "@/components/loan-rates-page/Benefits";
import LetsFigure from "@/components/LetsFigure";
import CalculateInput from "@/components/CalculateInput";

export default {
    components: {
        CreditPolicy,
        RatesTerms,
        Benefits,
        LetsFigure,
        CalculateInput
    }

}
</script>

<style scoped>
.calculate-input__container {
    padding: 0px 0px 40px 0px;
}
@media(max-width: 1000px) {
    .loan-rates {
        padding: 0px 60px;
    }
}
@media(max-width: 650px) {
    .loan-rates {
        padding: 0px;
    }
}
</style>
