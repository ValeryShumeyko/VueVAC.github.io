<template>
    <div class="video">
        <title-page>Venicle videos</title-page>
        <div class="video__content">
            <div
                v-for="video in paginatedData"
                :key="video.number"
                @click="openVideo(video)"
                class="video__content_card"
            >
                <div class="img_container">
                    <img class="img" :src="require('@/img/video/' + video.img)" alt="">
                    <img class="play" src="@/img/icons/play.svg" alt="">
                </div>
                <p class="video__content_card-text">{{video.text}}</p>
                <div v-if="videoNumber === 1" @click="closeVideo()" class="youtube-video__container">
                    <iframe v-if="videoNumber === 1" class="youtube-video" src='https://www.youtube.com/embed/O7Cc2o4vs58' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div v-if="videoNumber === 2" @click="closeVideo()" class="youtube-video__container">
                    <iframe v-if="videoNumber === 2" class="youtube-video" src='https://www.youtube.com/embed/G2v2-H7r6vg' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div v-if="videoNumber === 3" @click="closeVideo()" class="youtube-video__container">
                    <iframe v-if="videoNumber === 3" class="youtube-video" src='https://www.youtube.com/embed/orCQI0OubrE' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div v-if="videoNumber === 4" @click="closeVideo()" class="youtube-video__container">
                    <iframe v-if="videoNumber === 4" class="youtube-video" src='https://www.youtube.com/embed/exK5wYv0Hzs' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="blog__pagination">
            <span @click="pageNumber = 0, scroll()" :class="pageNumber === 0 ? 'active' : ''"></span>
            <span @click="pageNumber = 1, scroll()" :class="pageNumber === 1 ? 'active' : ''"></span>
            <span @click="pageNumber = 2, scroll()" :class="pageNumber === 2 ? 'active' : ''"></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            videos: [
            {
            number: '1',
            img: '1.jpg',
            text: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
            src: 'https://www.youtube.com/embed/O7Cc2o4vs58',
            isVisibleVideo: false
            },
            {
            number: '2',
            img: '2.jpg',
            text: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
            src: 'https://www.youtube.com/embed/G2v2-H7r6vg',
            isVisibleVideo: false
            },
            {
            number: '3',
            img: '3.jpg',
            text: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
            src: 'https://www.youtube.com/embed/orCQI0OubrE',
            isVisibleVideo: false
            },
            {
            number: '4',
            img: '4.jpg',
            text: 'Some Vehicles VAC Offers!',
            src: '',
            isVisibleVideo: false
            },
            {
            number: '5',
            img: '5.jpg',
            text: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
            src: 'https://www.youtube.com/embed/O7Cc2o4vs58',
            isVisibleVideo: false
            },
            {
            number: '6',
            img: '6.jpg',
            text: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
            src: 'https://www.youtube.com/embed/G2v2-H7r6vg',
            isVisibleVideo: false
            },
            {
            number: '7',
            img: '7.jpg',
            text: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
            src: 'https://www.youtube.com/embed/orCQI0OubrE',
            isVisibleVideo: false
            },
            {
            number: '8',
            img: '8.jpg',
            text: 'Some Vehicles VAC Offers!',
            src: '',
            isVisibleVideo: false
            },
            {
            number: '9',
            img: '9.jpg',
            text: 'VAC\'s Vehicle Shoot #10: 2018 Chevy Cruze Hatchback',
            src: 'https://www.youtube.com/embed/O7Cc2o4vs58',
            isVisibleVideo: false
            },
            {
            number: '10',
            img: '10.jpg',
            text: 'VAC\'s Vehicle Shoot #11: Toyota Highlander',
            src: 'https://www.youtube.com/embed/G2v2-H7r6vg',
            isVisibleVideo: false
            },
            {
            number: '11',
            img: '11.jpg',
            text: 'VAC\'s Vehicle Shoot #09: 2019 Mazda CX-5',
            src: 'https://www.youtube.com/embed/orCQI0OubrE',
            isVisibleVideo: false
            },
            {
            number: '12',
            img: '12.jpg',
            text: 'Some Vehicles VAC Offers!',
            src: '',
            isVisibleVideo: false
            },
            ],
            pageNumber: 0,
            size: 4,
            isVisibleVideo: false,
            videoNumber: 0,
            videoSrc: ''
        }
    },
    methods: {
        scroll() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            console.log(window.innerWidth);
        },
        openVideo(video) {
            this.isVisibleVideo = true;
            if(video.number === '1' || video.number === '5' || video.number === '9') {
                this.videoNumber = 1;
                this.videoSrc = 'https://www.youtube.com/embed/O7Cc2o4vs58';
            } else if(video.number === '2' || video.number === '6' || video.number === '10') {
                this.videoNumber = 2;
                this.videoSrc = 'https://www.youtube.com/embed/G2v2-H7r6vg';
            } else if(video.number === '3' || video.number === '7' || video.number === '11') {
                this.videoNumber = 3;
                this.videoSrc = 'https://www.youtube.com/embed/orCQI0OubrE';
            } else if(video.number === '4' || video.number === '8' || video.number === '12') {
                this.videoNumber;
                this.videoSrc = 'https://www.youtube.com/embed/exK5wYv0Hzs';
            } 
        },
        closeVideo() {
            this.isVisibleVideo = false;
            this.videoNumber = 0;
            this.videoSrc = '';
        }
    },
    computed: {
        paginatedData() {
            const start = this.pageNumber * this.size;
            const end = start + this.size;
            return this.videos.slice(start, end);
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 708) {
                this.size = 4;
            } else if (window.innerWidth >= 709 && window.innerWidth < 1194) {
                this.size = 4;
            } else {
                this.size = 4;
            }
        })
    },
    watch: {
        videoNumber: function(videoNumber) {
            var classBody = '_lock';
                if(videoNumber!==0) {
                    document.body.classList.add(classBody);
                } else {
                    document.body.classList.remove(classBody);
            }
        }
    },
}
</script>

<style scoped>
.video__content {
    display: flex;
    flex-wrap: wrap;
}
.video__content_card {
    flex: 0 0 46%;
    margin: 0px 20px 40px 20px;
    cursor: pointer;
}
/*.video__content_card:hover {
    opacity: 0.9;
}*/
.video__content_card-text {
    padding: 20px 0px 0px 0px;
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456B;
}
.img_container {
    position: relative;
}
.img_container .img {
    width: 100%;
}
.img_container .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.blog__pagination {
    margin: 20px auto 40px auto;
    display: flex;
    max-width: 100px;
}
.blog__pagination span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #606276;
    opacity: 0.3;
    margin: 0px 5px;
    cursor: pointer;
}
.blog__pagination span:hover {
    background: #606276;
    opacity: 0.7;
}
.blog__pagination span.active {
    background: #606276;
    opacity: 1;
}
.youtube-video__container {
    position: fixed;
    z-index: 1001;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
}
.youtube-video {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 650px; 
    height: 365px;
}
@media(max-width: 1040px) {
    .video__content_card {
        flex: 0 0 44%;
    }
    .youtube-video {
        width: 550px; 
        height: 350px;
    }
}
@media(max-width: 710px) {
    .video__content_card {
        flex: 0 0 95%;
        margin: 0px 10px 20px 10px;
    }
}
@media(max-width: 700px) {
    .video {
        padding: 35px 0px 0px 0px;
    }
}
@media(max-width: 650px) {
    .video {
        padding: 0px;
    }
    .youtube-video {
        padding: 24px;
        width: 100%; 
        min-height: 150px;
    }
}
</style>
