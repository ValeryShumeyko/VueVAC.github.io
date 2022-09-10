<template>
<section class="triangle">
    <div class="triangle__container">
        <my-title class="triangle__title">Advantages of working with us</my-title>
        <div class="triangle__content">
            <triangle-element></triangle-element>
        </div>
    </div>
</section>
</template>

<script>
import TriangleElement from "@/components/TriangleElement";

export default {
    name: 'triangle',
    components: {
        TriangleElement
    }
}
</script>

<style scoped>
.triangle__title {
  padding: 0px 0px 60px 0px;
}
@media(max-width: 1230px) {
  .triangle__title {
    text-align: center;
  }
}
@media (max-width: 650px) {
  .triangle__title {
    padding: 0px 0px 40px 0px;
  }
}
</style>
