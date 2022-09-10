<template>
    <div class="blog-card">
        <img :src=" require('@/img/blog/' + blog_data.img)" alt="photo">
        <div class="blog-card__content">
            <my-text>{{blog_data.date}}</my-text>
            <div class="blog-card__title">{{blog_data.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'blog-card',
    props: {
        blog_data: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.blog-card {
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
.blog-card__content {
    padding: 20px 30px 30px 30px;
}
.blog-card__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
}
.blog-card img {
    width: 100%;
    object-fit: cover;
}
</style>
