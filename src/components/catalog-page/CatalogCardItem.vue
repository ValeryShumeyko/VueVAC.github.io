<template>
    <div class="catalog-card-item">
        <img :src=" require('@/img/catalog/' + catalog_data.img)" alt="photo">
        <div class="catalog-card__content">
            <div class="catalog-card__content_name">{{catalog_data.name}}</div>
            <div class="catalog-card__content_price"> $ {{catalog_data.price}}</div>
            <div class="catalog-card__content_properties">
                <div class="year">{{catalog_data.year}} year</div>
                <div class="body-type">{{catalog_data.body_type}}</div>
                <div class="transmission">{{catalog_data.transmission}}</div>
                <div class="kilometres">{{catalog_data.kilometres}} kilometres</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'catalog-card-item',
    props: {
        catalog_data: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.catalog-card-item {
    padding: 0px 20px 20px 0px;
    display: flex;
    flex-direction: column;
}
.catalog-card-item img {
    width: 100%;
}
.catalog-card__content {
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 5px 5px;
}
.catalog-card__content_name {
    padding: 0px 0px 10px 0px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
}
.catalog-card__content_price {
    padding: 0px 0px 20px 0px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #7481FF;
}
.catalog-card__content_properties {
    display: flex;
    flex-wrap: wrap;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #7e819f;
}
.year, 
.body-type,
.transmission {
    padding-right: 20px;
}
.year, 
.body-type {
    border-right: 1px solid #D7D7D7;
}
.body-type,
.transmission {
    padding-left: 20px;
}
.kilometres {
    padding: 5px 0px 0px 0px;
    flex-basis: 100%;
}
</style>
