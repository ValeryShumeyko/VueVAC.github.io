<template>
    <div>
        <title-page>Use our free calculator!</title-page>

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
import LetsFigure from "@/components/LetsFigure";
import CalculateInput from "@/components/CalculateInput";

export default {
    components: {
        LetsFigure,
        CalculateInput
    }

}
</script>

<style scoped>

.calculate-input__container {
    padding: 0px 0px 40px 0px;
}
</style>