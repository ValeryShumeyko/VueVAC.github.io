<template>
<section class="happy-customers">
    <div class="happy-customers__container">
        <div class="happy-customers__content">
            <my-title class="happy-customers__title">Happy customers</my-title>
            <my-text class="happy-customers__text">Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes. </my-text>
            <h3 class="happy-customers__h3">What are you waiting? Get started right now!</h3>
            <button-blue class="happy-customers__button" @click="$router.push('/request-a-car')">Request a Car</button-blue>
        </div>
        <div class="happy-customers__numbers">
            <card-numbers></card-numbers>
        </div>
    </div>
</section>
</template>

<script>
import CardNumbers from "@/components/CardNumbers";

export default {
    name: 'blog-card',
    components: {
        CardNumbers
    }
}
</script>

<style scoped>
.happy-customers__container {
  display: flex;
  padding: 0px 0px 200px 0px;
}
.happy-customers__content {
  flex: 1 0 50%;
  padding: 0px 25px 0px 0px;
}
.happy-customers__title {
  padding: 0px 0px 20px 0px;
}
.happy-customers__text {
  padding: 0px 0px 40px 0px;
}
.happy-customers__h3 {
  padding: 0px 0px 40px 0px;
  font-weight: 700;
  font-size: 25px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #41456B;
  max-width: 300px;
}
.happy-customers__numbers {
  padding: 0px 0px 0px 25px;
}
@media(max-width: 1230px) {
  .happy-customers__container {
    flex-direction: column;
    padding: 0px 40px 160px 40px;
  }
  .happy-customers__content {
    padding: 0px 0px 40px 0px;
  }
  .happy-customers__numbers {
    padding: 0px;
  }
}
@media(max-width: 700px) {
  .happy-customers__container {
    padding: 0px 0px 80px 0px;
  }
  .happy-customers__content {
    padding: 0px 0px 20px 0px;
  }
  .happy-customers__text {
    padding: 0px 0px 20px 0px;
  }
  .happy-customers__h3 {
    padding: 0px 0px 20px 0px;
    max-width: none;
  }
  .happy-customers__button {
    width: 100%;
  }
}
</style>
