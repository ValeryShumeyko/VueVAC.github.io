<template>
    <div class="main-features">
        <div class="main-features__image">
            <img src="@/img/features.jpg" alt="photo">
        </div>
        <div class="main-features__content">
            <my-title class="main-features__content_title">Main features</my-title>
            <my-text class="main-features__content_text">We are your one stop shop. We believe that vehicle shopping should be a fun and painless process and with years of experience, we make it just that.</my-text>
            <card-numbers></card-numbers>
        </div>

    </div>
</template>

<script>
import CardNumbers from "@/components/CardNumbers";

export default {
    components: {
        CardNumbers
    }

}
</script>

<style scoped>
.main-features {
    display: flex;
    padding-bottom: 220px;
}
.main-features__image {
    flex: 1 1 50%;
}
.main-features__image img {
    max-width: 100%;
}
.main-features__content {
    flex: 1 1 50%;
    padding: 0px 0px 0px 30px
}
.main-features__content_title {
    padding-bottom: 20px;
}
.main-features__content_text {
    padding-bottom: 40px;
}
@media(max-width: 1000px) {
    .main-features {
        flex-direction: column-reverse;
        padding: 0px 60px 160px 60px;
    }
    .main-features__content {
        padding: 0px 0px 40px 0px;
    }
    .main-features__image {
        padding: 0px;
        align-self: center;
    }
}
@media(max-width: 650px) {
    .main-features {
        padding: 0px 0px 80px 0px;
    }
}
</style>
