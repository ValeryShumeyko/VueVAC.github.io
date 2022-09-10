<template>
    <div class="inventory-card">
        <my-title class="inventory-card__title">Porsche Panamera 4S</my-title>
        <p class="inventory-card__watching">Watching now 8 people</p>
        <div class="inventory-card__main">
            <div class="inventory-card__main_slider">
                <div class="inventory-card__main_slider-wrapper">
                    <inventory-card-slider :slider_data="sliderItems"></inventory-card-slider>
                </div>
            </div>
            <div class="inventory-card__main_content content">
                <div class="content__properties">
                    <div class="content__properties_price">
                        <div class="content__title">Price</div>
                        <p>34 000 $</p>
                    </div>
                    <div class="content__properties_body">
                        <div class="content__title">Body</div>
                        <p>Sedan</p>
                    </div>
                    <div class="content__properties_year">
                        <div class="content__title">Year</div>
                        <p>2018</p>
                    </div>
                    <div class="content__properties_transmission">
                        <div class="content__title">Transmission</div>
                        <p>Automatic</p>
                    </div>
                    <div class="content__properties_kilometres">
                        <div class="content__title">Kilometres</div>
                        <p>20 000</p>
                    </div>
                </div>
                <div class="content__detail">
                    <div class="content__title">Detail</div>
                    <div class="content__detail_list">
                        <p>Rear wheel drive</p>
                        <p>2500-4000 rpm</p>
                        <p>6 cylinders</p>
                        <p>0-100 in 2.7 s.</p>
                        <p>11 l. per 100 km.</p>
                        <p>Power steering</p>
                        <p>Rear wheel drive</p>
                        <p>2500-4000 rpm</p>
                    </div>
                </div>
                <div class="content__description">
                    <div class="content__title">Description</div>
                    <my-text class="content__description_text">
                        Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.<br>The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.
                    </my-text>
                    <button-blue class="content__description_button">Request more information</button-blue>
                </div>
            </div>
        </div>
        <div class="inventory-card__calculate">
            <my-title class="inventory-card__calculate_title">Calculate the installment plan for this car.</my-title>
            <calculate-input></calculate-input>
        </div>
    </div>
</template>

<script>
import CalculateInput from "@/components/CalculateInput";
import InventoryCardSlider from "@/components/inventory-card/InventoryCardSlider";

export default {
        data() {
        return {
            sliderItems: [
            {id: 1, name: 'img1', img: '1.jpg'},
            {id: 2, name: 'img2', img: '2.jpg'},
            {id: 3, name: 'img3', img: '3.jpg'},
            {id: 4, name: 'img4', img: '4.jpg'},
            {id: 5, name: 'img5', img: '5.jpg'},
            {id: 6, name: 'img6', img: '6.jpg'},
            {id: 7, name: 'img7', img: '7.jpg'},
            {id: 8, name: 'img8', img: '8.jpg'},
            {id: 9, name: 'img9', img: '9.jpg'},
            {id: 10, name: 'img10', img: '10.jpg'},
            ],
        }
    },
    components: {
        CalculateInput,
        InventoryCardSlider
    }
}

</script>

<style scoped>
.inventory-card {
    padding: 120px 0px 0px 0px;
}
.inventory-card__watching {
    padding: 0px 0px 20px 0px;
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
    color: #606276;
}
.inventory-card__main {
    display: flex;
}
.inventory-card__main_slider {
    flex: 1 1 50%;
}
.inventory-card__main_slider-wrapper {
    max-width: 100%;
}
.content {
    flex: 0 0 50%;
    width: 100%;
    padding: 0px 0px 0px 60px;
}
.content__properties {
    display: flex;
    flex-wrap: wrap;
    padding: 0px 0px 40px 0px;
    border-bottom: 1px solid #D7D7D7;
}
.content__properties_price {
    flex: 0 0 100%;
    padding: 0px 0px 20px 0px;

    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #7481FF;
}
.content__properties_body,
.content__properties_year,
.content__properties_transmission,
.content__properties_kilometres {
    flex: 0 0 50%;
    padding: 0px 0px 20px 0px;

    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456B;
}
.content__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
    color: #606276;
}

.content__detail {
    padding: 60px 0px;
    border-bottom: 1px solid #D7D7D7;
}
.content__detail_list {
    display: flex;
    flex-wrap: wrap;
}
.content__detail_list p {
    flex: 0 0 50%;
    padding: 20px 0px 0px 0px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
}

.content__description {
    padding: 60px 0px 220px 0px;
}
.content__description_text {
    padding: 20px 0px 40px 0px;
}

.inventory-card__calculate_title {
    padding: 0px 0px 60px 0px;
    max-width: 650px;
}
.inventory-card__calculate {
    padding: 0px 0px 40px 0px;
}

@media(max-width: 1205px) {
    .inventory-card {
        padding: 120px 84px 0px 84px;
    }
    .inventory-card__main {
        flex-direction: column;
    }
    .content {
        padding: 160px 0px 0px 0px;
    }
}
@media(max-width: 750px) {
    .inventory-card {
        padding: 100px 0px 0px 0px;
    }
    .content {
        padding: 80px 0px 0px 0px;
    }
    .content__description {
        padding: 40px 0px 80px 0px;
    }
}
@media(max-width: 470px) {
    .content__detail_list {
        flex-direction: column;
    }
}
</style>


