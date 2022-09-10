<template>
    <div class="inventory">
        <div class="bg-grey" v-if="isVisibleFilterMenu"></div>
        <div class="inventory__menu" :class="isVisibleFilterMenu ? 'visible' : ''">
            <div class="close-filter-menu" :class="isVisibleFilterMenu ? 'visible' : ''" @click="isVisibleFilterMenu = false">
                <span></span>
                <span></span>
            </div>
            <div class="inventory__menu_title">
                <p>Detailed search</p>
                <p class="clear" @click="clearFilters()">Clear filters</p>
            </div>
        <section class="dropdown-wrapper">
            <div @click="isVisibleMakeModel = !isVisibleMakeModel" class="selected-item">
                <span>Make, Model</span>
                <span :class="isVisibleMakeModel ? 'dropdown' : ''" class="drop-down-icon"></span>
            </div>
            <div :class="isVisibleMakeModel ? 'visible' : ''" class="dropdown-popover">
                <div class="dropdown-popover__name">Make</div>
                <div class="input__container">
                    <input v-model="searchQueryMake" type="text" placeholder="Search Make...">
                    <img src="@/img/icons/Search.svg" alt="search" class="search-icon">
                </div>
                <span v-if="filteredMake.length === 0" class="nothing">Nothing found</span>
                <div class="options">
                    <ul>
                        <li @click="selectMake(make), selectCards()" v-for="(make, index) in filteredMake" :key="make.id">{{make.name}}</li>
                    </ul>
                </div>
            </div>
            <div :class="isVisibleMakeModel ? 'visible' : ''" class="dropdown-popover">
                <div class="dropdown-popover__name">Model</div>
                <div class="input__container">
                    <input v-model="searchQueryModel" type="text" placeholder="Search Model...">
                    <img src="@/img/icons/Search.svg" alt="search" class="search-icon">
                </div>
                <span v-if="filteredModel.length === 0" class="nothing">Nothing found</span>
                <div class="options">
                    <ul>
                        <li @click="selectModel(model), selectCards()" v-for="(model, index) in filteredModel" :key="model.id">{{model.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="selectedItems__container">
                <div class="selectedItems__item" v-if="selectedMake" v-for="(make, index) in sortedMake" @click="removeMake(make), selectCards()">{{make.name}}</div>
                <div class="selectedItems__item" v-if="selectedModel" v-for="(model, index) in sortedModel" @click="removeModel(model), selectCards()">{{model.name}}</div>
            </div>
        </section>
        <section class="dropdown-wrapper">
            <div @click="isVisibleBodyType = !isVisibleBodyType" class="selected-item">
                <span>Body type</span>
                <span :class="isVisibleBodyType ? 'dropdown' : ''" class="drop-down-icon"></span>
            </div>
            <div :class="isVisibleBodyType ? 'visible' : ''" class="dropdown-popover">
                <div class="options-body-type">
                    <ul>
                        <li>
                            <input type="checkbox" value="Truck" v-model="sortedBodyType" @change="selectCards">
                            <img src="@/img/icons/Trucks.svg" alt="icon">
                            <label>Truck</label>
                        </li>
                        <li>
                            <input type="checkbox" value="SUV" v-model="sortedBodyType" @change="selectCards">
                            <img src="@/img/icons/SUV.svg" alt="icon">
                            <label>SUV</label>
                        </li>
                        <li>
                            <input type="checkbox" value="Sedan" v-model="sortedBodyType" @change="selectCards">
                            <img src="@/img/icons/Sedan.svg" alt="icon">
                            <label>Sedan</label>
                        </li>
                        <li>
                            <input type="checkbox" value="Hatchback" v-model="sortedBodyType" @change="selectCards">
                            <img src="@/img/icons/Hatchback.svg" alt="icon">
                            <label>Hatchback</label>
                        </li>
                        <li>
                            <input type="checkbox" value="Coupe" v-model="sortedBodyType" @change="selectCards">
                            <img src="@/img/icons/Coupe.svg" alt="icon">
                            <label>Coupe</label>
                        </li>
                        <li>
                            <input type="checkbox" value="Convertible" v-model="sortedBodyType" @change="selectCards">
                            <img src="@/img/icons/Convertible.svg" alt="icon">
                            <label>Convertible</label>
                        </li>
                        <li>
                            <input type="checkbox" value="VAN" v-model="sortedBodyType" @change="selectCards">
                            <img src="@/img/icons/VAN.svg" alt="icon">
                            <label>VAN</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="selectedItems__container">
                <div class="selectedItems__item" v-for="bodyType in sortedBodyType" @click="removeBodyType(bodyType), selectCards()">{{bodyType}}</div>
            </div>
        </section>
        <section class="dropdown-wrapper">
            <div @click="isVisibleTransmission = !isVisibleTransmission" class="selected-item">
                <span>Transmission</span>
                <span :class="isVisibleTransmission ? 'dropdown' : ''" class="drop-down-icon"></span>
            </div>
            <div :class="isVisibleTransmission ? 'visible' : ''" class="dropdown-popover">
                <div class="options-body-type">
                    <ul>
                        <li>
                            <input type="checkbox" value="Automat" v-model="sortedTransmission" @change="selectCards">
                            <label>Automatic</label>
                        </li>
                        <li>
                            <input type="checkbox" value="Manual" v-model="sortedTransmission" @change="selectCards">
                            <label>Manual</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="selectedItems__container">
                <div class="selectedItems__item" v-for="transmission in sortedTransmission" @click="removeTransmission(transmission), selectCards()">{{transmission}}</div>
            </div>
        </section>
        <section class="dropdown-wrapper">
            <div @click="isVisiblePrice = !isVisiblePrice" class="selected-item">
                <span>Price</span>
                <span :class="isVisiblePrice ? 'dropdown' : ''" class="drop-down-icon"></span>
            </div>
            <div :class="isVisiblePrice ? 'visible' : ''" class="dropdown-popover price-wrapper">
            <div class="range-values">
                <p>{{minPrice}} $</p>
                <p>{{maxPrice}} $</p>
            </div>
                <div class="range-slider">
                    <input 
                        type="range" 
                        min="0" 
                        max="170000" 
                        step="500"
                        v-model.number="minPrice"
                        @change="setRangeSlider"
                    >
                    <input 
                        type="range" 
                        min="0" 
                        max="170000" 
                        step="500"
                        v-model.number="maxPrice"
                        @change="setRangeSlider"
                    >
                </div>
            </div>
            <div class="selectedItems__container">
                <div class="selectedItems__item" v-if="minPrice !== 0 || maxPrice !== 170000" @click="minPrice = 0, setRangeSlider()">$ {{minPrice}}</div>
                <div class="selectedItems__item" v-if="minPrice !== 0 || maxPrice !== 170000" @click="maxPrice = 170000, setRangeSlider()"> $ {{maxPrice}}</div>
            </div>
        </section>
        <section class="dropdown-wrapper">
            <div @click="isVisibleYear = !isVisibleYear" class="selected-item">
                <span>Year</span>
                <span :class="isVisibleYear ? 'dropdown' : ''" class="drop-down-icon"></span>
            </div>
            <div :class="isVisibleYear ? 'visible' : ''" class="dropdown-popover price-wrapper">
            <div class="range-values">
                <p>{{minYear}}</p>
                <p>{{maxYear}}</p>
            </div>
                <div class="range-slider">
                    <input 
                        type="range" 
                        min="2007" 
                        max="2014" 
                        step="1"
                        v-model.number="minYear"
                        @change="setRangeSlider"
                    >
                    <input 
                        type="range" 
                        min="2007" 
                        max="2014" 
                        step="1"
                        v-model.number="maxYear"
                        @change="setRangeSlider"
                    >
                </div>
            </div>
            <div class="selectedItems__container">
                <div class="selectedItems__item" v-if="minYear !== 2007 || maxYear !== 2014" @click="minYear = 2007, setRangeSlider()">{{minYear}}</div>
                <div class="selectedItems__item" v-if="minYear !== 2007 || maxYear !== 2014" @click="maxYear = 2014, setRangeSlider()">{{maxYear}}</div>
            </div>
        </section>
        <section class="dropdown-wrapper">
            <div @click="isVisibleKilometres = !isVisibleKilometres" class="selected-item">
                <span>Kilometres</span>
                <span :class="isVisibleKilometres ? 'dropdown' : ''" class="drop-down-icon"></span>
            </div>
            <div :class="isVisibleKilometres ? 'visible' : ''" class="dropdown-popover price-wrapper">
            <div class="range-values">
                <p>{{minKilometres}}</p>
                <p>{{maxKilometres}}</p>
            </div>
                <div class="range-slider">
                    <input 
                        type="range" 
                        min="0" 
                        max="200000" 
                        step="1000"
                        v-model.number="minKilometres"
                        @change="setRangeSlider"
                    >
                    <input 
                        type="range" 
                        min="0" 
                        max="200000" 
                        step="1000"
                        v-model.number="maxKilometres"
                        @change="setRangeSlider"
                    >
                </div>
            </div>
            <div class="selectedItems__container">
                <div class="selectedItems__item" v-if="minKilometres !== 0 || maxKilometres !== 200000" @click="minKilometres = 0, setRangeSlider()">{{minKilometres}}</div>
                <div class="selectedItems__item" v-if="minKilometres !== 0 || maxKilometres !== 200000" @click="maxKilometres = 200000, setRangeSlider()">{{maxKilometres}}</div>
            </div>
        </section>
        </div>
        <div class="inventory__content-wrapper">
            <div class="inventory__content_menu">
                <div class="inventory__content_menu-filter" @click="isVisibleFilterMenu = true">
                    <img src="@/img/icons/Filter.svg" alt="icon" height="22">
                    <p>Search Filter</p>
                </div>
                <div class="inventory__content_menu-search">
                    <div class="input__container">
                        <input v-model="searchQueryContent" type="text" placeholder="Find a dream car...">
                        <img src="@/img/icons/Search.svg" alt="search" class="search-icon">
                    </div>
                </div>
                <div class="inventory__content_menu-sorted">
                    <p>Sorted by</p>
                    <section class="dropdown-wrapper">
                        <div @click="isVisibleSorted = !isVisibleSorted" class="selected-item">
                            <span>{{sortParam}}</span>
                            <span :class="isVisibleSorted ? 'dropdown' : ''" class="drop-down-icon"></span>
                        </div>
                        <div :class="isVisibleSorted ? 'visible' : ''" class="dropdown-popover">
                            <div class="options-sorted">
                                <ul>
                                    <li v-for="option in sortedOptions" :key="option.value" @click="sortParam=option.name, isVisibleSorted=false">{{option.name}}</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="inventory__content" :class="sortedCards.length===1 || sortedCards.length === 2 || filteredCards.length === 1 || filteredCards.length === 2 ? 'one' : ''">
                <catalog-card-item
                    v-for="card in filteredCards"
                    :key="card.number"
                    :catalog_data="card"
                    class="inventory__content_card"
                    @click="$router.push('/inventory-card')">
                </catalog-card-item>
                <div v-if="sortedCards.length === 0 || filteredCards.length === 0" class='nothing-content'>
                    <img src="@/img/icons/Nothing-content.svg" alt="icon">
                    <div class="nothing-content__title">Unfortunately there are no matches for your query.</div>
                    <my-text>Try using other filter settings or request a car of your choice.</my-text>
                    <div class="nothing-content__button">Request a car</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CatalogCardItem from "@/components/catalog-page/CatalogCardItem";

export default {
    data() {
        return {
            searchQueryMake: '',
            searchQueryModel: '',
            searchQueryContent: '',
            sortParam: 'Recommendations',
            selectedMake: null,
            removedMake: null,
            selectedModel: null,
            removedModel: null,
            removedBodyType: null,
            removedTransmission: null,
            isVisibleMakeModel: false,
            isVisibleBodyType: false,
            isVisibleTransmission: false,
            isVisiblePrice: false,
            isVisibleYear: false,
            isVisibleKilometres: false,
            isVisibleSorted: false,
            isVisibleFilterMenu: false,
            makeArray: [
                {
                    id: 1,
                    name: 'Porshe'
                },
                {
                    id: 2,
                    name: 'Mercedes-Benz'
                },
                {
                    id: 3,
                    name: 'Mitsubishi'
                },
                {
                    id: 4,
                    name: 'Dodge'
                },
                {
                    id: 5,
                    name: 'Toyota'
                }
            ],
            modelArray: [
                {
                    id: 1,
                    name: 'Cayenne'
                },
                {
                    id: 2,
                    name: 'Challenger'
                },
                {
                    id: 3,
                    name: 'Corolla'
                },
                {
                    id: 4,
                    name: 'C117'
                },
                {
                    id: 5,
                    name: 'Eclipse'
                },
                {
                    id: 6,
                    name: 'Outlander'
                },
                {
                    id: 7,
                    name: 'Panamera'
                },
                {
                    id: 8,
                    name: 'RAM'
                },
                {
                    id: 9,
                    name: 'Solara'
                },
                {
                    id: 10,
                    name: 'Vans'
                },
                {
                    id: 11,
                    name: 'W124'
                }
            ],
            cards: [
                {
                    number: 1,
                    img: 'Porshe Panamera.jpg',
                    name: 'Porshe Panamera',
                    make: 'Porshe',
                    model: 'Panamera',
                    price: 150000,
                    year: 2012,
                    body_type: 'Sedan',
                    transmission: 'Automat',
                    kilometres: 200000
                },
                {
                    number: 2,
                    img: 'Mitsubishi Outlander.jpg',
                    name: 'Mitsubishi Outlander',
                    make: 'Mitsubishi',
                    model: 'Outlander',
                    price: 23500,
                    year: 2012,
                    body_type: 'SUV',
                    transmission: 'Manual',
                    kilometres: 80000
                },
                {
                    number: 3,
                    img: 'Mercedes-Benz C117.jpg',
                    name: 'Mercedes-Benz C117',
                    make: 'Mercedes-Benz',
                    model: 'C117',
                    price: 110000,
                    year: 2008,
                    body_type: 'Coupe',
                    transmission: 'Automat',
                    kilometres: 115000
                },
                {
                    number: 4,
                    img: 'Mercedes-Benz W124.jpg',
                    name: 'Mercedes-Benz W124',
                    make: 'Mercedes-Benz',
                    model: 'W124',
                    price: 120000,
                    year: 2007,
                    body_type: 'Sedan',
                    transmission: 'Manual',
                    kilometres: 45000
                },
                {
                    number: 5,
                    img: 'Dodge Challenger.jpg',
                    name: 'Dodge Challenger',
                    make: 'Dodge',
                    model: 'Challenger',
                    price: 50000,
                    year: 2013,
                    body_type: 'Coupe',
                    transmission: 'Automat',
                    kilometres: 20000
                },
                {
                    number: 6,
                    img: 'Toyota Solara.jpg',
                    name: 'Toyota Solara',
                    make: 'Toyota',
                    model: 'Solara',
                    price: 65000,
                    year: 2008,
                    body_type: 'Convertible',
                    transmission: 'Manual',
                    kilometres: 144000
                },
                {
                    number: 7,
                    img: 'Porsche Сayenne.jpg',
                    name: 'Porsche Сayenne',
                    make: 'Porshe',
                    model: 'Cayenne',
                    price: 95000,
                    year: 2010,
                    body_type: 'SUV',
                    transmission: 'Automat',
                    kilometres: 46000
                },
                {
                    number: 8,
                    img: 'Mercedes-Benz Vans.jpg',
                    name: 'Mercedes-Benz Vans',
                    make: 'Mercedes-Benz',
                    model: 'Vans',
                    price: 92000,
                    year: 2007,
                    body_type: 'VAN',
                    transmission: 'Manual',
                    kilometres: 192000
                },
                {
                    number: 9,
                    img: 'Porshe Panamera.jpg',
                    name: 'Porshe Panamera',
                    make: 'Porshe',
                    model: 'Panamera',
                    price: 45000,
                    year: 2008,
                    body_type: 'Sedan',
                    transmission: 'Automat',
                    kilometres: 150000
                },
                {
                    number: 10,
                    img: 'Mitsubishi Outlander.jpg',
                    name: 'Mitsubishi Outlander',
                    make: 'Mitsubishi',
                    model: 'Outlander',
                    price: 74000,
                    year: 2009,
                    body_type: 'SUV',
                    transmission: 'Manual',
                    kilometres: 30000
                },
                {
                    number: 11,
                    img: 'Mercedes-Benz C117.jpg',
                    name: 'Mercedes-Benz C117',
                    make: 'Mercedes-Benz',
                    model: 'C117',
                    price: 60000,
                    year: 2010,
                    body_type: 'Coupe',
                    transmission: 'Automat',
                    kilometres: 35000
                },
                {
                    number: 12,
                    img: 'Mercedes-Benz W124.jpg',
                    name: 'Mercedes-Benz W124',
                    make: 'Mercedes-Benz',
                    model: 'W124',
                    price: 90000,
                    year: 2011,
                    body_type: 'Sedan',
                    transmission: 'Manual',
                    kilometres: 145000
                },
                {
                    number: 13,
                    img: 'Dodge Challenger.jpg',
                    name: 'Dodge Challenger',
                    make: 'Dodge',
                    model: 'Challenger',
                    price: 21000,
                    year: 2011,
                    body_type: 'Coupe',
                    transmission: 'Automat',
                    kilometres: 43000
                },
                {
                    number: 14,
                    img: 'Toyota Solara.jpg',
                    name: 'Toyota Solara',
                    make: 'Toyota',
                    model: 'Solara',
                    price: 35000,
                    year: 2007,
                    body_type: 'Convertible',
                    transmission: 'Manual',
                    kilometres: 180000
                },
                {
                    number: 15,
                    img: 'Porsche Сayenne.jpg',
                    name: 'Porsche Сayenne',
                    make: 'Porshe',
                    model: 'Cayenne',
                    price: 136000,
                    year: 2013,
                    body_type: 'SUV',
                    transmission: 'Automat',
                    kilometres: 76000
                },
                {
                    number: 16,
                    img: 'Mercedes-Benz Vans.jpg',
                    name: 'Mercedes-Benz Vans',
                    make: 'Mercedes-Benz',
                    model: 'Vans',
                    price: 142000,
                    year: 2014,
                    body_type: 'VAN',
                    transmission: 'Manual',
                    kilometres: 63000
                },
                {
                    number: 17,
                    img: 'Mitsubishi Eclipse.jpg',
                    name: 'Mitsubishi Eclipse',
                    make: 'Mitsubishi',
                    model: 'Eclipse',
                    price: 22000,
                    year: 2008,
                    body_type: 'Coupe',
                    transmission: 'Automat',
                    kilometres: 10000
                },
                {
                    number: 18,
                    img: 'Toyota Corolla.jpg',
                    name: 'Toyota Corolla',
                    make: 'Toyota',
                    model: 'Corolla',
                    price: 102000,
                    year: 2014,
                    body_type: 'Hatchback',
                    transmission: 'Manual',
                    kilometres: 49000
                },
                {
                    number: 19,
                    img: 'Mitsubishi Eclipse.jpg',
                    name: 'Mitsubishi Eclipse',
                    make: 'Mitsubishi',
                    model: 'Eclipse',
                    price: 57000,
                    year: 2011,
                    body_type: 'Coupe',
                    transmission: 'Automat',
                    kilometres: 53500
                },
                {
                    number: 20,
                    img: 'Dodge RAM.jpg',
                    name: 'Dodge RAM',
                    make: 'Dodge',
                    model: 'RAM',
                    price: 86000,
                    year: 2013,
                    body_type: 'Truck',
                    transmission: 'Automat',
                    kilometres: 93500
                },
            ],
            sortedOptions: [
                {
                    name: 'Recommendations',
                    value: 1
                },
                {
                    name: 'Newest inventory',
                    value: 2
                },
                {
                    name: 'Lowest price',
                    value: 3
                },
                {
                    name: 'Highest prices',
                    value: 4
                }
            ],
            sortedBodyType: [],
            sortedTransmission: [],
            sortedMake: [],
            sortedModel: [],
            sortedCards: [],
            minPrice: 0,
            maxPrice: 170000,
            minYear: 2007,
            maxYear: 2014,
            minKilometres: 0,
            maxKilometres: 200000,
        }
    },
    computed: {
        filteredMake() {
            const queryMake = this.searchQueryMake.toLowerCase()
            if(this.searchQueryMake === '') {
                return this.makeArray;
            }
            return this.makeArray.filter((make) => {
                return Object.values(make).some((word) => 
                    String(word).toLowerCase().includes(queryMake)
                );
            });
        },
        filteredModel() {
            const queryModel = this.searchQueryModel.toLowerCase()
            if(this.searchQueryModel === '') {
                return this.modelArray;
            }
            return this.modelArray.filter((make) => {
                return Object.values(make).some((word) => 
                    String(word).toLowerCase().includes(queryModel)
                );
            });
        },
        filteredCards() {
            const queryContent = this.searchQueryContent.toLowerCase()
            if(this.sortedCards.length > 0) {
                switch(this.sortParam) {
                    case 'Recommendations': return this.sortedCards.sort(selectSortByRecommendations), 
                    this.sortedCards.filter((content) => {
                        return Object.values(content).some((word) => 
                        String(word).toLowerCase().includes(queryContent)
                    );
                });
                    case 'Newest inventory': return this.sortedCards.sort(selectSortByNewestInventory),
                    this.sortedCards.filter((content) => {
                        return Object.values(content).some((word) => 
                        String(word).toLowerCase().includes(queryContent)
                    );
                });
                    case 'Lowest price': return this.sortedCards.sort(selectSortByLowestPrice),
                    this.sortedCards.filter((content) => {
                        return Object.values(content).some((word) => 
                        String(word).toLowerCase().includes(queryContent)
                    );
                });
                    case 'Highest prices': return this.sortedCards.sort(selectSortByHighestPrices),
                    this.sortedCards.filter((content) => {
                        return Object.values(content).some((word) => 
                        String(word).toLowerCase().includes(queryContent)
                    );
                });
                    default: return this.sortedCards.filter((content) => {
                        return Object.values(content).some((word) => 
                        String(word).toLowerCase().includes(queryContent)
                    );
                })
            }
            
            } else if (this.sortedMake.length > 0 || this.sortedModel.length > 0 || this.minPrice !== 0 || this.maxPrice !== 170000 || this.minYear !== 2007 || this.maxYear !== 2014 || this.minKilometres !== 0 || this.maxKilometres !== 200000){
                return this.sortedCards;
            } else {
                this.sortedCards = this.cards.slice(0);
                switch(this.sortParam) {
                    case 'Recommendations': return this.sortedCards.sort(selectSortByRecommendations), 
                    this.sortedCards.filter((content) => {
                        return Object.values(content).some((word) => 
                        String(word).toLowerCase().includes(queryContent)
                    );
                });
                    case 'Newest inventory': return this.sortedCards.sort(selectSortByNewestInventory),
                    this.sortedCards.filter((content) => {
                        return Object.values(content).some((word) => 
                        String(word).toLowerCase().includes(queryContent)
                    );
                });
                    case 'Lowest price': return this.sortedCards.sort(selectSortByLowestPrice),
                    this.sortedCards.filter((content) => {
                        return Object.values(content).some((word) => 
                        String(word).toLowerCase().includes(queryContent)
                    );
                });
                    case 'Highest prices': return this.sortedCards.sort(selectSortByHighestPrices),
                    this.sortedCards.filter((content) => {
                        return Object.values(content).some((word) => 
                        String(word).toLowerCase().includes(queryContent)
                    );
                });
                    default: return this.sortedCards.filter((content) => {
                        return Object.values(content).some((word) => 
                        String(word).toLowerCase().includes(queryContent)
                    );
                })
            }
            };
            
        }
    },
    methods: {
        selectCards() {
            this.sortedCards = [];
            let vm = this;
            this.cards.forEach(function(item) {
                vm.sortedMake.forEach(function(imake) {
                    if (item.make === imake.name) {
                        if(vm.sortedModel.length > 0) {
                            vm.sortedModel.forEach(function(imodel) {
                                if (item.model === imodel.name) {
                                    vm.sortedCards.push(item);
                                }
                            })
                        } else {
                            vm.sortedCards.push(item);
                        }
                    } 
                });
            });
            this.sortByPrice();
            this.sortByYear();
            this.sortByKilometres();
            this.sortByBodyType();
            this.sortByTransmission();
        },
        selectMake(make) {
            this.selectedMake = make;
            if(this.sortedMake.includes(make)) {
                this.sortedMake;
            } else {
                this.sortedMake.push(make);
            };
        },
        removeMake(make) {
            this.removedMake = make;
            let makeIndex = this.sortedMake.indexOf(make, 0);
            this.sortedMake.splice(makeIndex, 1);
        },
        selectModel(model) {
            this.selectedModel = model;
            if(this.sortedModel.includes(model)) {
                this.sortedModel;
            } else {
                this.sortedModel.push(model);
            };
            let vm = this;
        },
        removeModel(model) {
            this.removedModel = model;
            let modelIndex = this.sortedModel.indexOf(model, 0);
            this.sortedModel.splice(modelIndex, 1);
        },
        setRangeSlider() {
            if (this.minPrice > this.maxPrice) {
                let tmp = this.maxPrice;
                this.maxPrice = this.minPrice;
                this.minPrice = tmp;
            }
            if(this.minYear > this.maxYear) {
                let tmd = this.maxYear;
                this.maxYear = this.minYear;
                this.minYear = tmd;
            }
            if(this.minKilometres > this.maxKilometres) {
                let tms = this.maxKilometres;
                this.maxKilometres = this.minKilometres;
                this.minKilometres = tms;
            }
            this.selectCards();
            this.sortByPrice();
            this.sortByYear();
            this.sortByKilometres();
            this.sortByBodyType();
            this.sortByTransmission();
        },
        sortByPrice() {
            let vm = this;
            if(this.sortedMake.length === 0 && this.sortedModel.length === 0) {
                this.sortedCards = this.cards.slice(0);
                this.sortedCards = this.sortedCards.filter(function (item) {
                    return item.price >= vm.minPrice && item.price <= vm.maxPrice;
                })
            } else {
                this.sortedCards = this.sortedCards.filter(function (item) {
                    return item.price >= vm.minPrice && item.price <= vm.maxPrice;
                })
            }
        },
        sortByYear() {
            let vm = this;
            /*if(this.sortedMake.length === 0 && this.sortedModel.length === 0) {
                this.sortedCards = this.cards.slice(0);
                this.sortedCards = this.sortedCards.filter(function (item) {
                    return item.year >= vm.minYear && item.year <= vm.maxYear;
                })
            } else {*/
                this.sortedCards = this.sortedCards.filter(function (item) {
                    return item.year >= vm.minYear && item.year <= vm.maxYear;
                })
            /*}*/
        },
        sortByKilometres() {
            let vm = this;
            /*if(this.sortedMake.length === 0 && this.sortedModel.length === 0) {
                this.sortedCards = this.cards.slice(0);
                this.sortedCards = this.sortedCards.filter(function (item) {
                    return item.kilometres >= vm.minKilometres && item.kilometres <= vm.maxKilometres;
                })
            } else {*/
                this.sortedCards = this.sortedCards.filter(function (item) {
                    return item.kilometres >= vm.minKilometres && item.kilometres <= vm.maxKilometres;
                })
            /*}*/
        },
        sortByBodyType() {
            let vm = this;
            if (this.sortedBodyType.length > 0) {
                this.sortedCards = this.sortedCards.filter(function (item) {
                    return (item.body_type === vm.sortedBodyType[0] || item.body_type === vm.sortedBodyType[1] || item.body_type === vm.sortedBodyType[2] || item.body_type === vm.sortedBodyType[3] || item.body_type === vm.sortedBodyType[4] || item.body_type === vm.sortedBodyType[5] || item.body_type === vm.sortedBodyType[6]);
                });
            }
        },
        removeBodyType(bodyType) {
            this.removedBodyType = bodyType;
            let bodyTypeIndex = this.sortedBodyType.indexOf(bodyType, 0);
            this.sortedBodyType.splice(bodyTypeIndex, 1);
        },
        sortByTransmission() {
            let vm = this;
            if (this.sortedTransmission.length > 0) {
                this.sortedCards = this.sortedCards.filter(function (item) {
                    return (item.transmission === vm.sortedTransmission[0] || item.transmission === vm.sortedTransmission[1]);
                });
            }
        },
        removeTransmission(transmission) {
            this.removedTransmission = transmission;
            let transmissionIndex = this.sortedTransmission.indexOf(transmission, 0);
            this.sortedTransmission.splice(transmissionIndex, 1);
        },
        clearFilters() {
            this.sortedMake = [];
            this.sortedModel = [];
            this.sortedBodyType = [];
            this.sortedTransmission = [];
            this.minPrice = 0;
            this.maxPrice = 170000;
            this.minYear = 2007;
            this.maxYear = 2014;
            this.minKilometres = 0;
            this.maxKilometres = 200000;
            this.selectCards();
        },
    },
    watch: {
        isVisibleFilterMenu: function(isVisibleFilterMenu) {
            var classBody = '_lock';
            if(isVisibleFilterMenu) {
                document.body.classList.add(classBody);
            } else {
                document.body.classList.remove(classBody);
            }
        }
    },
    components: {
        CatalogCardItem
    }
}

var selectSortByRecommendations = function (d1, d2) { return (d1.kilometres > d2.kilometres) ? 1 : -1;};
var selectSortByNewestInventory = function (d1, d2) { return (d1.year < d2.year) ? 1 : -1; };
var selectSortByLowestPrice = function (d1, d2) { return (d1.price > d2.price) ? 1 : -1; };
var selectSortByHighestPrices = function (d1, d2) { return (d1.price < d2.price) ? 1 : -1; };


</script>

<style scoped>
body._lock {
    overflow: hidden;
}
.inventory {
    padding: 130px 0px 70px 0px;
    display: flex;
}
.inventory__menu {
    flex: 1 0 300px;
    padding: 0px 25px 0px 0px;
}
.inventory__menu_title {
    display: flex;
    padding: 0px 0px 30px 0px;
}
.inventory__menu_title p {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
    padding: 0px 20px 0px 0px;
}
p.clear {
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
    color: #7481FF;
    padding: 0px;
    cursor: pointer;
}
.dropdown-wrapper {
    max-width: 300px;
    position: relative;
    border: 1px solid #D7D7D7;
    margin-bottom: 10px;
    cursor: pointer;
}
.selected-item {
    height: 45px;
    /*border: 1px solid #D7D7D7;*/
    border-radius: 2px;
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
}
.selected-item span {
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
    color: #41456B;
}
.drop-down-icon {
    width: 15px;
    height: 15px;
    border-top: 2px solid #41456B;
    border-left: 2px solid #41456B;
    transform: rotate(225deg) translate(0, 50%);
    transition: all .5s ease 0s;
}
.drop-down-icon.dropdown {
    transform: rotate(45deg);
}
.dropdown-popover {
    /*position: absolute;*/
    /*border: 1px solid #D7D7D7;
    border-top: none;*/
    border-radius: 2px;
    top: 45px;
    left: 0;
    right: 0;
    background-color: #fff;
    width: 100%;
    padding: 0px 20px;
    transition: all .5s linear 0s;
    visibility: hidden;
    max-height: 0px;
    overflow: hidden;

    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    color: #41456B;
}
.dropdown-popover.visible {
    visibility: visible;
    max-height: 450px;
}
.dropdown-popover__name {
    padding: 10px 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    color: #41456B;
}
.dropdown-popover input,
.inventory__content_menu-search input {
    width: 100%;
    height: 45px;
    border: 1px solid #D7D7D7;
    border-radius: 2px;
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
    color: #D7D7D7;
    padding-left: 20px;
    outline: none;
}
.input__container {
    position: relative;
    margin-bottom: 15px;
}
.search-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0px, -50%);
}
.nothing {
    padding: 0px 0px 0px 20px;
}
.inventory__content_menu-search .input__container {
    width: 350px;
}
.dropdown-popover .options,
.inventory__content_menu-search .options {
    width: 100%;
    padding-bottom: 15px;
}
.dropdown-popover .options ul,
.inventory__content_menu-search .options ul {
    list-style: none;
    max-height: 155px;
    overflow-y: scroll;

    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    color: #41456B;
}
.dropdown-popover .options ul li,
.inventory__content_menu-search .options ul li {
    width: 100%;
    padding: 5px 0px 5px 20px;
    cursor: pointer;
}
.dropdown-popover .options ul li:hover,
.inventory__content_menu-search .options ul li:hover {
    background: #f9f7f7;
    color: #000;
}
.selectedItems__item {
    padding: 10px 10px 10px 30px;
    margin: 0px 0px 10px 20px;
    display: inline-block;
    background: rgba(116, 129, 255, 0.2);
    border-radius: 2px;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #41456B;
    position: relative;
    cursor: pointer;
}
.selectedItems__item:hover {
    background: rgba(116, 130, 255, 0.408);
}
.selectedItems__item::before,
.selectedItems__item::after {
    content: '';
    width: 14px;
    height: 2px;
    position: absolute;
    top: 45%;
    left: 10px;
    background: #7481FF;
}
.selectedItems__item::before {
    transform: rotate(45deg);
}
.selectedItems__item::after {
    transform: rotate(-45deg);
}


.options-body-type {
    width: 100%;
    padding: 10px 0px 15px 0px;
    display: flex;
}
.options-body-type input {
    width: 20px;
    height: 20px;
    margin: 0px 10px 0px 0px;
    cursor: pointer;
}
.options-body-type ul {
    list-style: none;
}
.options-body-type ul li {
    padding: 0px 0px 15px 0px;
}
.options-body-type ul li img {
    padding: 0px 5px 0px 0px;
}
.price-wrapper {
    height: 83px;
}
.range-slider {
    width: 100%;
    text-align: center;
}
.range-slider svg, .range-slider input[type=range] {
    position: absolute;
    width: 90%;
    left: 20px;
    bottom: 0;
    top: 80px;
}
input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
}
.range-values {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
}
.range-values p {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
}



.inventory__content-wrapper {
    width: 100%;
}
.inventory__content {
    display: flex;
    flex-wrap: wrap;
}
.nothing-content {
    width: 100%;
    padding: 60px;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 0px 0px 300px 0px;
}
.nothing-content__title {
    padding: 20px 0px 10px 0px;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
}
.nothing-content__button {
    padding: 20px 0px 0px 0px;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #7481FF;
}
.inventory__content_card {
    width: 100%;
    flex: 0 0 50%;
}
.one {
    margin: 0px 0px 300px 0px;
}
@media(max-width: 600px) {
    .one {
        margin: 0px 0px 100px 0px;
    }
}
.inventory__content_menu {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px 20px 0px 0px;
    max-height: 60px;
}
.inventory__content_menu-sorted {
    display: flex;
    align-items: flex-start;
}
.inventory__content_menu-sorted p {
    padding: 10px 20px 0px 0px;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #41456B;
}
.inventory__content_menu-sorted section {
    width: 240px;
    cursor: pointer;
}
.options-sorted {
    position: absolute;
    width: 100%;
    top: 45px;
    left: 0;
    border: 1px solid #D7D7D7;
    background-color: #fff;
    border-top: none;
}
.options-sorted ul {
    padding: 10px 0px 15px 0px;
    list-style: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
    color: #41456B;
}
.options-sorted ul li {
    padding: 2.5px 0px 2.5px 20px;
}
.options-sorted ul li:hover {
    cursor: pointer;
    background: #f9f7f7;
    color: #000;
}
.inventory__content_menu-filter {
    display: none;
}


@media(max-width:1045px) {
    .bg-grey {
        position: fixed;
        top:80px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        opacity: 0.9;
    }

    .inventory__menu {
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        z-index: 10;
        background-color: #fff;
        padding: 35px 0px 35px 0px;
        visibility: hidden;
        transform: translate(-100%, 0px);
        transition: all .7s ease 0s;

    }
    .inventory__menu.visible {
        visibility: visible;
        transform: translate(0px, 0px);
        height: 100%;
        overflow: scroll;
    }
    .inventory__menu_title {
        max-width: 250px;
        margin: 0 auto;
    }
    .dropdown-wrapper {
        max-width: 500px;
        margin: 0px auto 10px auto;
    }
    .dropdown-wrapper:last-child {
        margin: 0px auto 100px auto;
    }
    .inventory__content_menu-filter {
        display: flex;
        padding: 10px 20px 0px 0px;
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        letter-spacing: 0.02em;
        color: #41456B;
    }
    .inventory__content_menu-filter p {
        padding: 0px 0px 0px 10px;
    }
    .close-filter-menu {
        visibility: hidden;
    }
    .close-filter-menu.visible {
        visibility: visible;
        position: relative;
        z-index: 10;
        top: 30px;
        left: 25px;
        width: 22px;
        height: 22px;
    }
    .close-filter-menu.visible span:first-child {
        position: absolute;
        width: 100%;
        height: 1px;
        transform: rotate(45deg);
        background-color: #41456B;
    }
    .close-filter-menu.visible span:last-child {
        position: absolute;
        width: 100%;
        height: 1px;
        transform: rotate(-45deg);
        background-color: #41456B;
    }
}
@media(max-width: 910px) {
    .inventory__content_menu-search .input__container {
        width: 240px;
    }
    .inventory__content_menu-sorted p {
        display: none;
    }
}
@media(max-width: 700px) {
    .inventory__content_menu-filter p {
        display: none;
    }
}
@media(max-width: 600px) {
    .inventory__content_menu {
        flex-wrap: wrap;
        max-height: 120px;
        padding: 0px;
    }
    .inventory__content_menu-sorted {
        flex: 1 1 80%;
        margin: 0px -20px;
    }
    .inventory__content_menu-sorted section {
        width: 100%;
    }
    .inventory__content_menu-search {
        flex: 0 0 80%;
    }
    .inventory__content_menu-search .input__container {
        width: 100%;
    }
    .dropdown-wrapper {
        max-width: 100%;
        margin: 0px 24px 10px 24px;
    }
    .dropdown-wrapper:last-child {
        max-width: 100%;
        margin: 0px 24px 100px 24px;
    }
    .inventory__content_card {
        flex: 0 0 100%;
        padding: 0px 0px 20px 0px;
    }
    .nothing-content {
        padding: 30px;
    }
}

</style>
