<template>
    <div class="dynamic-team">
        <div class="dynamic-team__content">
            <my-title class="dynamic-team__content_title">We're dynamic team of creative people with innovative mind</my-title>
            <div class="dynamic-team__content_h4">Our History</div>
            <my-text class="dynamic-team__content_text">We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.</my-text>
            <div class="dynamic-team__content_h4">Our Goal</div>
            <my-text>Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours. </my-text>
        </div>
        <div class="dynamic-team__image">
            <img src="@/img/team.jpg" alt="team">
        </div>

    </div>
</template>

<script>
export default {
    name: 'dynamic-team'
}
</script>

<style scoped>
.dynamic-team {
    display: flex;
    padding-bottom: 220px;
}
.dynamic-team__content {
    flex: 1 1 50%;
    padding: 0px 40px 0px 0px;
}
.dynamic-team__content_title,
.dynamic-team__content_text {
    padding-bottom: 20px;
}
.dynamic-team__content_h4 {
    padding-bottom: 5px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
}
.dynamic-team__image {
    flex: 1 1 50%;
    padding: 0px 0px 0px 40px;
}
.dynamic-team__image img {
    max-width: 100%;
}
@media(max-width: 1000px) {
    .dynamic-team {
        flex-direction: column;
        padding: 0px 60px 160px 60px;
    }
    .dynamic-team__content {
        padding: 0px 0px 40px 0px;
    }
    .dynamic-team__image {
        padding: 0px;
        align-self: center;
    }
}
@media(max-width: 650px) {
    .dynamic-team {
        padding: 0px 0px 80px 0px;
    }
}
</style>
