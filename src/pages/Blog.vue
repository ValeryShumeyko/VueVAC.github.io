<template>
    <div class="blog">
        <title-page>Our blog</title-page>
        <div class="blog__content">
            <blog-card 
                v-for="blog in paginatedData"
                :key="blog.number"
                :blog_data="blog"
                class="blog__content_card"
                @click="$router.push('/one-blog')"
            ></blog-card>
        </div>
        <div class="blog__pagination">
            <span @click="pageNumber = 0, scroll()" :class="pageNumber === 0 ? 'active' : ''"></span>
            <span @click="pageNumber = 1, scroll()" :class="pageNumber === 1 ? 'active' : ''"></span>
            <span @click="pageNumber = 2, scroll()" :class="pageNumber === 2 ? 'active' : ''"></span>
        </div>
    </div>
</template>

<script>
import BlogCard from "@/components/BlogCard";

export default {
    components: {
        BlogCard
    },
    data() {
        return {
            blogs: [
            {
            number: '1',
            img: '3.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '2',
            img: '1.jpg',
            date: '10 May, 2020',
            title: 'How fast can you order a car in Canada?'
            },
            {
            number: '3',
            img: '2.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '4',
            img: '4.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '5',
            img: '5.jpg',
            date: '10 May, 2020',
            title: 'How fast can you order a car in Canada?'
            },
            {
            number: '6',
            img: '6.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '7',
            img: '7.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '8',
            img: '8.jpg',
            date: '10 May, 2020',
            title: 'How fast can you order a car in Canada?'
            },
            {
            number: '9',
            img: '9.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '10',
            img: '5.jpg',
            date: '10 May, 2020',
            title: 'How fast can you order a car in Canada?'
            },
            {
            number: '11',
            img: '6.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '12',
            img: '7.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '13',
            img: '8.jpg',
            date: '10 May, 2020',
            title: 'How fast can you order a car in Canada?'
            },
            {
            number: '14',
            img: '9.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '15',
            img: '1.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '16',
            img: '2.jpg',
            date: '10 May, 2020',
            title: 'How fast can you order a car in Canada?'
            },
            {
            number: '17',
            img: '3.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '18',
            img: '4.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '19',
            img: '1.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '20',
            img: '2.jpg',
            date: '10 May, 2020',
            title: 'How fast can you order a car in Canada?'
            },
            {
            number: '21',
            img: '3.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '22',
            img: '4.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '23',
            img: '1.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '24',
            img: '2.jpg',
            date: '10 May, 2020',
            title: 'How fast can you order a car in Canada?'
            },
            {
            number: '25',
            img: '3.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '26',
            img: '4.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '27',
            img: '2.jpg',
            date: '10 May, 2020',
            title: 'How fast can you order a car in Canada?'
            },
            ],
            pageNumber: 0,
            size: 9,
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
    },
    computed: {
        paginatedData() {
            const start = this.pageNumber * this.size;
            const end = start + this.size;
            return this.blogs.slice(start, end);
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 708) {
                this.size = 6;
            } else if (window.innerWidth >= 709 && window.innerWidth < 1194) {
                this.size = 8;
            } else {
                this.size = 9;
            }
        })
    }
}
</script>

<style scoped>
.blog__content {
    display: flex;
    flex-wrap: wrap;
}
.blog__content_card {
    flex: 0 1 31.6%;
    margin: 0px 10px 20px 10px;
    cursor: pointer;
}
.blog__content_card:hover {
    opacity: 0.9;
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
@media(max-width: 1193px) {
    .blog__content_card {
        flex: 0 0 47.9%;
    }
}
@media(max-width: 993px) {
    .blog__content_card {
        flex: 0 0 47%;
    }
}
@media(max-width: 707px) {
    .blog__content_card {
        flex: 0 0 100%;
        margin: 0px 20px 20px 0px;
    }
}
@media(max-width:700px) {
    .blog__content {
        padding: 40px 0px 0px 0px;
    }
}
@media(max-width: 650px) {
    .blog__content {
        padding: 0px;
    }
}
</style>
