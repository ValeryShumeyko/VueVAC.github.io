<template>
    <div class="card-numbers">
        <card-numbers-item
            v-for="card in cards"
            :key="card.number"
            :card_data="card"
        ></card-numbers-item>
    </div>
</template>

<script>
import CardNumbersItem from "@/components/CardNumbersItem";

export default {
    name: 'card-numbers',
    props: {

    },
    components: {
        CardNumbersItem
    },
    data() {
        return {
            cards: [
                {
                    number: '1',
                    title: '7,988+',
                    text: 'Sold Cars'
                },
                {
                    number: '2',
                    title: '16,974+',
                    text: 'Vehicles To Choose From'
                },
                {
                    number: '3',
                    title: '123',
                    text: 'Experts Across Canada'
                }
            ]
        }
    }
}
</script>

<style scoped>
.card-numbers {
    display: flex;
    flex-wrap: wrap;
}
</style>
