<template>
  <div class="about-page">
    <title-page>About VAC</title-page>

    <our-mission></our-mission>

    <get-dream></get-dream>

    <convenience></convenience>

    <best-prices></best-prices>

    <our-agents></our-agents>

    <client-say></client-say>

    <dynamic-team></dynamic-team>

    <main-features></main-features>

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
  </div>
</template>

<script>
import OurMission from "@/components/about-page/OurMission";
import GetDream from "@/components/about-page/GetDream";
import Convenience from "@/components/about-page/Convenience";
import BestPrices from "@/components/about-page/BestPrices";
import OurAgents from "@/components/about-page/OurAgents";
import ClientSay from "@/components/ClientSay";
import DynamicTeam from "@/components/about-page/DynamicTeam";
import MainFeatures from "@/components/about-page/MainFeatures";
import LetsFigure from "@/components/LetsFigure";
import CalculateInput from "@/components/CalculateInput";

export default {
  components: {
    OurMission,
    GetDream,
    Convenience,
    BestPrices,
    OurAgents,
    ClientSay,
    DynamicTeam,
    MainFeatures,
    LetsFigure,
    CalculateInput
  }

}
</script>

<style scoped>
.calculate-input__container {
    padding: 0px 0px 40px 0px;
}

</style>
