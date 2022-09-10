<template>
<section class="choose-dream">
    <div class="choose-dream__container">
        <div class="choose-dream__image">
            <img src="@/img/cars/Cars.png" alt="cars">
        </div>
        <div class="choose-dream__content">
            <my-title class="choose-dream__title">Сhoose your dream vehicle in our catalog</my-title>
            <div class="choose-dream__content_text-button">
                <my-text class="choose-dream__text">In our catalogue there are many models of vehicles. Choose your car to your liking.</my-text>
                <button-blue class="choose-dream__button" @click="$router.push('/inventory')">Inventory</button-blue>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'choose-dream',
}
</script>

<style scoped>
.choose-dream__container {
  display: flex;
  padding: 0px 0px 240px 0px;
}
.choose-dream__image {
  flex-basis: 50%;
  padding: 0px 50px 0px 0px;
}
.choose-dream__content {
  padding: 0px 0px 0px 50px;
}
.choose-dream__title {
  padding-bottom: 20px;
}
.choose-dream__text {
  padding-bottom: 40px;
}
@media(max-width: 1230px) {
  .choose-dream__container {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0px 0px 160px 0px;
  }
  .choose-dream__image {
    flex-basis: 100%;
    padding: 60px 0px 0px 0px;
  }
  .choose-dream__content {
    display: flex;
    padding: 0px 44px;
  }
  .choose-dream__title {
    padding: 0px 30px 0px 0px;
  }
  .choose-dream__content_text-button {
    padding: 0px 0px 0px 30px;
  }
}
@media (max-width: 650px) {
  .choose-dream__container {
    padding: 0px 0px 80px 0px;
  }
  .choose-dream__image img{
    max-width: 100%;
  }
  .choose-dream__content {
    flex-direction: column;
    padding: 0px;
  }
  .choose-dream__title {
    padding: 0px 0px 10px 0px;
  }
  .choose-dream__content_text-button {
    padding: 0px 0px 30px 0px;
  }
  .choose-dream__button {
    width: 100%;
  }
  .choose-dream__image {
    padding: 0px;
  }
}
</style>
