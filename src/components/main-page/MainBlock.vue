<template>
<section class="main-block">
    <div class="main-block__container">
        <div class="main-block__bg-image">
            <img src="@/img/Bg.jpg" alt="background">
        </div>
        <div class="main-block__text">
            <h1>The easiest way to buy a car in Canada</h1>
            <button-white @click="$router.push('/request-a-car')">Request a suv</button-white>
        </div>
        <div class="main-block__slider">
            <my-slider :slider_data="sliderItems"></my-slider>
        </div>
    </div>
</section>
</template>

<script>
import MySlider from "@/components/MySlider";

export default {
    name: 'main-block',
    components: {
        MySlider
    },
    data() {
        return {
            sliderItems: [
            {id: 1, name: 'img1', img: 'car1.png'},
            {id: 2, name: 'img2', img: 'car2.png'},
            {id: 3, name: 'img3', img: 'car3.png'},
            {id: 4, name: 'img4', img: 'car4.png'},
            ],
        }
    }
}
</script>

<style scoped>
.main-block__container {
    padding: 200px 0px 144px 0px;
    display: flex;
    align-items: center;
}
.main-block__bg-image {
  position: absolute;
  z-index: -1;
  top: 80px;
  left: 0;
  width: 100%;
  height: 600px;
}
.main-block__bg-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main-block__text {
  flex: 1 0 50%;
}
.main-block__text h1{
  max-width: 534px;
  font-weight: 800;
  font-size: 60px;
  line-height: 108%;
  letter-spacing: 0.02em;
  color: #fff;
  padding: 0px 0px 60px 0px;
}
@media(max-width: 1230px) {
  .main-block__container {
    padding: 140px 0px 90px 0px;
    flex-direction: column;
  }
  .main-block__bg-image {
    height: 725px;
  }
  .main-block__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 60px 0px;
  }
  .main-block__text h1{
    max-width: 600px;
    padding: 0px 0px 60px 0px;
    text-align: center;
  }
}
@media(max-width: 650px) {
  .main-block__container {
    padding: 125px 0px 55px 0px;
  }
  .main-block__bg-image {
    height: 505px;
  }
  .main-block__text h1 {
    font-size: 35px;
    padding: 0px 0px 40px 0px;
  }
}

</style>
