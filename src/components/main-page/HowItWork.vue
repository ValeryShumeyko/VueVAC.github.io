<template>
<section class="how-it-work">
    <div class="how-it-work__container">
        <img class="how-it-work__image how-it-work__image1" src="@/img/cars/car6.png" alt="car">
        <card class="how-it-work__card">
            <my-title>How does it work?</my-title>
            <p>From your Phone to your Home</p>
            <my-text>We make it easy for you to buy your dream car from your phone without ever having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign anything.</my-text>
        </card>
        <img class="how-it-work__image how-it-work__image2" src="@/img/cars/car5.png" alt="car">
    </div>
</section>
</template>

<script>
import Card from "@/components/Card";


export default {
    name: 'how-it-work',
    components: {
        Card
    }
}
</script>

<style scoped>
.how-it-work__container {
  /*margin: 0px calc((1225px - 100vw) / 2);
  position: relative;*/
  z-index: -1;
  padding: 0px 0px 290px 0px;
}
.how-it-work__container img {
  width: 34%;
}
.how-it-work__card {
  max-width: 605px;
  margin: 0 auto;
}
.how-it-work__card p {
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  color: #7481FF;
  padding: 0px 0px 20px 0px;
}
.how-it-work__image1 {
  position: absolute;
  top: 870px;
  left: 0px;
}
.how-it-work__image2 {
  position: absolute;
  top: 666px;
  right: 0px;
}
@media(max-width: 1430px) {
  .how-it-work__image1 {
    top: 980px;
  }
  .how-it-work__image2 {
    top: 806px;
  }
}
@media(max-width: 1230px) {
  .how-it-work__image1 {
    top: 1100px;
  }
  .how-it-work__image2 {
    top: 999px;
  }
}
@media(max-width: 650px) {
  .how-it-work__container {
    padding: 0px 0px 265px 0px;
  }
  .how-it-work__card p {
    font-size: 24px;
    padding: 0px 0px 10px 0px;
  }
  .how-it-work__container img {
    width: 50%;
  }
  .how-it-work__image1 {
    top: 850px;
  }
  .how-it-work__image2 {
    top: 750px;
  }
}
@media(max-width: 450px) {
  .how-it-work__image1 {
    top: 950px;
  }
  .how-it-work__image2 {
    top: 850px;
  }
}

</style>
