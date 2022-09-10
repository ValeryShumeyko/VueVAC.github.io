<template>
<section class="client-say">
    <div class="client-say__container">
        <my-title class="client-say__title">What our client say about us!</my-title>
        <slider-client :slider_data="sliderClientItems"></slider-client>
    </div>
    </section>
</template>

<script>
import SliderClient from "@/components/SliderClient";

export default {
    name: 'client-say',
    components: {
        SliderClient
    },
    data() {
    return {
        sliderClientItems: [
        {id: 1, name: 'img1', img: 'client1.jpg', title: 'Laura Chaisson', text: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.'},
        {id: 2, name: 'img2', img: 'client1.jpg', title: 'Laura Chaisson', text: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.'},
        {id: 3, name: 'img3', img: 'client1.jpg', title: 'Laura Chaisson', text: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.'},
        {id: 4, name: 'img4', img: 'client1.jpg', title: 'Laura Chaisson', text: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.'},
        ]
    }
    },
}
</script>

<style scoped>
.client-say__container {
  padding: 0px 0px 220px 0px;
}
.client-say__title {
  padding: 0px 0px 59px 0px;
}
@media(max-width: 1230px) {
  .client-say__container {
    padding: 0px 0px 160px 0px;
  }
}
@media(max-width: 650px) {
  .client-say__container {
    padding: 0px 0px 80px 0px;
  }
  .client-say__title {
    padding: 0px 0px 30px 0px;
  }
}

</style>
