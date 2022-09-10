<template>
  <div>
    <preloader></preloader>

    <main-block></main-block>

    <how-it-work></how-it-work>

    <steps></steps>

    <triangle></triangle>

    <choose-dream></choose-dream>

    <happy-customers></happy-customers>

    <client-say></client-say>

    <section class="lets-figure">
      <div class="lets-figure__container">
        <lets-figure></lets-figure>
      </div>
    </section>

    <section class="calculate-input">
      <div class="calculate-input__container">
        <calculate-input></calculate-input>
      </div>
    </section>

    <to-read>Interesting to read</to-read>

  </div>
</template>

<script>
import MainBlock from "@/components/main-page/MainBlock";
import HowItWork from "@/components/main-page/HowItWork";
import Steps from "@/components/main-page/Steps";
import Triangle from "@/components/main-page/Triangle";
import ChooseDream from "@/components/main-page/ChooseDream";
import HappyCustomers from "@/components/main-page/HappyCustomers";
import ClientSay from "@/components/ClientSay";
import LetsFigure from "@/components/LetsFigure";
import CalculateInput from "@/components/CalculateInput";
import ToRead from "@/components/main-page/ToRead";
import Preloader from "@/pages/Preloader";

export default {
  components: {
    MainBlock,
    HowItWork,
    Steps,
    Triangle,
    ChooseDream,
    HappyCustomers,
    ClientSay,
    LetsFigure,
    CalculateInput,
    ToRead,
    Preloader
  }

}
</script>

<style scoped>
.calculate-input__container {
  padding: 0px 0px 220px 0px;
}
@media(max-width: 1230px) {
  .calculate-input__container {
      padding: 0px 0px 160px 0px;
    }
}
@media(max-width: 650px) {
  .calculate-input__container {
    padding: 0px 0px 70px 0px;
  }
}

</style>
