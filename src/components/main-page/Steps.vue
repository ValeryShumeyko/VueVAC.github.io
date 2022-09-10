<template>
<section class="steps">
    <div class="steps__container">
        <my-title class="steps__title">Your perfect car in 5 easy steps</my-title>
        <div class="steps__content">
            <div class="steps__content_steps">
                <div class="steps__content_steps-items">
                    <my-step-item
                    v-for="product in products"
                    :key="product.number"
                    :product_data="product"
                    ></my-step-item>
                </div>
            </div>
            <div class="steps__content_image">
                <img src="@/img/phone.png" alt="phone" class="phone-desktop">
                <img src="@/img/phone_tablet.png" alt="phone" class="phone-tablet">
            </div>
        </div>
    </div>
</section>
</template>

<script>
import MyStepItem from "@/components/MyStepItem";

export default {
    name: 'steps',
    components: {
        MyStepItem
    },
    data() {
    return {
        products: [
            {
            number: '1',
            title: 'First Contact',
            text: 'Tell us what your dream vehicle is.'
            },
            {
            number: '2',
            title: 'Vehicle Selection',
            text: 'One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.'
            },
            {
            number: '3',
            title: 'Secure Financing',
            text: 'You work with a dedicated Qualified Agent to secure financing on your terms.'
            },
            {
            number: '4',
            title: 'Vehicle Delivery',
            text: 'We deliver your car to your home or office for you to test drive.'
            },
            {
            number: '5',
            title: 'Getting Vehicle',
            text: 'If you love the vehicle, you sign the paperwork and keep the car.'
            }
        ],
    }
    }
}
</script>

<style scoped>
.steps__container {
  padding: 0px 0px 210px 0px;
}
.steps__title {
  padding: 0px 0px 60px 0px;
  max-width: 600px;
}
.steps__content {
  display: flex;
}
.steps__content_steps {
    flex: 1 1 50%;
}
.steps__content_steps-items {
    display: flex;
    flex-direction: column;
}
.steps__content_image {
  padding: 0px 0px 0px 55px;
}
.steps__content_image img {
  max-width: 100%;
}
.phone-tablet {
  display: none;
}
@media(max-width: 1230px) {
  .steps__container {
    padding: 0px 0px 160px 0px;
  }
  .steps__title {
    max-width: none;
  }
  .phone-desktop {
    display: none;
  }
  .phone-tablet {
    display: block;
  }
}
@media(max-width: 650px) {
  .steps__container {
    padding: 0px 0px 90px 0px;
  }
  .steps__title {
    padding: 0px 0px 30px 0px;
  }
  .phone-desktop {
    display: block;
  }
  .phone-tablet {
    display: none;
  }
  .steps__content {
    flex-direction: column;
  }

}
</style>
