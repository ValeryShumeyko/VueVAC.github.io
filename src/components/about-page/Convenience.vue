<template>
    <div class="convenience">
        <div class="convenience__image">
            <img src="@/img/cars/car8.png" alt="car">
        </div>
        <div class="convenience__content">
            <my-title class="convenience__content_title">VAC is convenience and transparency</my-title>
            <my-text class="convenience__content_text">We want to make simple for you to find the car you want. We also want to make sure you are 100% comfortable with the terms of the conditions of your auto loan.</my-text>
            <my-text>Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.</my-text>
        </div>
    </div>
</template>

<script>


export default {
    name: 'convenience',
    components: {

    }

}
</script>

<style scoped>
.convenience {
    display: flex;
    padding-bottom: 220px;
}
.convenience__image {
    padding: 0px 40px 0px 0px;
}
.convenience__image img {
    max-width: 100%;
}
.convenience__content {
    flex: 1 1 50%;
    padding: 0px 0px 0px 40px;
}
.convenience__content_title,
.convenience__content_text {
    padding-bottom: 20px;
}
@media(max-width: 1000px) {
    .convenience {
        padding: 0px 60px 160px 60px;
        flex-direction: column-reverse;
    }
    .convenience__image {
        padding: 0px;
        align-self: center;
    }
    .convenience__content {
        padding: 0px 0px 40px 0px;
    }
}
@media(max-width: 650px) {
    .convenience {
        padding: 0px 0px 80px 0px;
    }
}
</style>
