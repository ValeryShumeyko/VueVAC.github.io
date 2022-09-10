<template>
<section class="to-read">
    <div class="to-read__container">
        <div class="to-read__title">
            <my-title><slot></slot></my-title>
            <button-white class="to-read__button desktop" @click="$router.push('/blog')">all articles</button-white>
        </div>
        <div class="to-read__content desktop">
            <blog-card 
                v-for="blog in blogs"
                :key="blog.number"
                :blog_data="blog"
                class="to-read__content_card"
            ></blog-card>
        </div>
        <!--<div class="to-read__content slider-to-read">
            <slider-to-read :blog_data="blogs"></slider-to-read>
        </div>-->
        <div class="to-read__content tablet">
            <blog-card 
                v-for="blog in blogs_tablet"
                :key="blog.number"
                :blog_data="blog"
                class="to-read__content_card"
            ></blog-card>
        </div>
        <div class="to-read__content mobile">
            <blog-card 
                v-for="blog in blogs_mobile"
                :key="blog.number"
                :blog_data="blog"
                class="to-read__content_card"
            ></blog-card>
        </div>
        <button-white class="to-read__button mobile" @click="$router.push('/blog')">all articles</button-white>
    </div>
</section>
</template>

<script>
import BlogCard from "@/components/BlogCard";

export default {
    name: 'to-read',
    components: {
        BlogCard
    },
    data() {
    return {
        blogs: [
            {
            number: '1',
            img: '1.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '2',
            img: '2.jpg',
            date: '10 May, 2020',
            title: 'How fast can you order a car in Canada?'
            },
            {
            number: '3',
            img: '3.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
        ],
        blogs_tablet: [
            {
            number: '1',
            img: '1.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            },
            {
            number: '2',
            img: '2.jpg',
            date: '10 May, 2020',
            title: 'How fast can you order a car in Canada?'
            },
        ],
        blogs_mobile: [
            {
            number: '1',
            img: '1.jpg',
            date: '10 May, 2020',
            title: 'How to save on buying a car? Why is it better to buy from us'
            }
        ]
    }
    }
}
</script>

<style scoped>
.to-read__content.tablet {
    display: none;
}
.to-read__content.mobile {
    display: none;
}
.to-read__button.mobile {
    display: none;
}
.to-read__container {
  padding: 0px 0px 40px 0px;
}
.to-read__title {
  display: flex;
  padding: 0px 0px 60px 0px;
  justify-content: space-between;
}
.to-read__content {
  display: flex;
}
.to-read__content_card {
  flex: 1 1 33.33%;
  margin: 0px 20px 0px 0px;
}
@media(max-width: 830px) {
    .to-read__content.tablet {
        display: flex;
    }
    .to-read__content.desktop {
        display: none;
    }
    .to-read__content_card {
        flex: 1 1 50%;
        margin: 0px 20px 0px 0px;
    }
}
@media(max-width: 580px) {
    .to-read__content.tablet {
        display: none;
    }
    .to-read__content.mobile {
        display: flex;
    }
    .to-read__button.desktop {
        display: none;
    }
    .to-read__content_card {
        margin: 0px 0px 30px 0px;
    }
    .to-read__button.mobile {
        display: block;
        width: 100%;
    }
}
</style>
