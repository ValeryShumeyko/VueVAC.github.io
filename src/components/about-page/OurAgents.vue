<template>
    <div class="our-agents">
        <div class="our-agents__card">
            <card class="our-agents__card_item">
                <div class="our-agents__card_h3">
                    Contact us today and speak with one of our qualified agents
                </div>
                <button-blue>Contact Us Now</button-blue>
            </card>
        </div>
        <div class="our-agents__content">
            <my-title class="our-agents__content_title">Our qualified agents</my-title>
            <my-text class="our-agents__content_text">The true secret to success of VAC isn’t our streamlined purchasing and financing processes. The real reason VAC is the easiest and best way to buy a car in Canada is because of our outstanding Qualified Agents.</my-text>
            <my-text>Our team provides you with the best customer experience in the automotive industry. You work with a dedicated representative throughout the process. They are able to answer any questions you have about any of our vehicles or the financing. Are you interested in seeing pictures or videos of a car? Your qualified agent will send them to you.</my-text>
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card";


export default {
    name: 'our-agents',
    components: {
        Card
    }

}
</script>

<style scoped>
.our-agents {
    padding-bottom: 220px;
    display: flex;
}
.our-agents__card {
    padding: 0px 35px 0px 0px;
    flex-basis: 50%;
}
.our-agents__card_item {
    text-align: left;
}
.our-agents__card_h3 {
    padding-bottom: 40px;
    font-weight: 700;
    font-size: 30px;
    line-height: 140%;
    color: #41456B;
}
.our-agents__content {
    padding: 0px 0px 0px 35px;
    flex-basis: 50%;
}
.our-agents__content_title,
.our-agents__content_text {
    padding-bottom: 20px;
}
@media(max-width: 1000px) {
    .our-agents {
        flex-direction: column;
        padding: 0px 60px 160px 60px;
    }
    .our-agents__card {
        padding: 0px 0px 40px 0px;
    }
    .our-agents__content {
        padding: 0px;
    }
}
@media(max-width: 768px) {
    .our-agents {
        display: none;
    }
}
</style>
