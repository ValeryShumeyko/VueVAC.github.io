<template>
    <div class="get-dream">
        <div class="get-dream__content">
            <my-title class="get-dream__content_title">Get your dream car</my-title>
            <my-text class="get-dream__content_text">We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.</my-text>
            <my-text>We also hated how choosing a car and figuring out the financing for the vehicle were treated as totally separate processes! Instead of dealing with a salesperson, then being handed off to a closer, and then shuffled over to a finance manager, we wanted to create a way for people to buy a car and only deal with a single person for the entire process.</my-text>
        </div>
        <div class="get-dream__steps">
            <my-step-item
                v-for="product in products"
                :key="product.number"
                :product_data="product"
                class="get-dream__steps_item"
            ></my-step-item>
        </div>
    </div>
</template>

<script>
import MyStepItem from "@/components/MyStepItem";

export default {
    name: 'get-dream',
    components: {
        MyStepItem
    },
    data() {
    return {
        products: [
            {
            number: '1',
            title: 'Quickly',
            text: 'You do not spend a lot of your time going to car dealerships'
            },
            {
            number: '2',
            title: 'Simply',
            text: 'You can order your dream car just by talking to our specialist by phone'
            },
            {
            number: '3',
            title: 'Conveniently',
            text: 'We will deliver the car directly to the doorstep of your home or office'
            }
        ],
    }
    }

}
</script>

<style scoped>
.get-dream {
    padding-bottom: 220px;
    display: flex;
}
.get-dream__content {
    flex: 1 1 50%;
    padding: 0px 40px 0px 0px;
}
.get-dream__content_title,
.get-dream__content_text {
    padding-bottom: 20px;
}
.get-dream__steps {
    padding: 15px 0px 0px 40px;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
}
@media(max-width: 1000px) {
    .get-dream {
        padding: 0px 60px 150px 60px;
        flex-direction: column;
    }
    .get-dream__content {
        padding: 0px 0px 40px 0px;
    }
    .get-dream__steps {
        padding: 0px;
        align-self: flex-start;
    }
}
@media(max-width: 650px) {
    .get-dream {
        padding: 0px 0px 80px 0px;
    }
}
</style>
