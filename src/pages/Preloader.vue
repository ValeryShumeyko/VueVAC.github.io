<template>
    <div class="preloader" :class="show ? 'visible' : ''">
        <img src="@/img/icons/logo-img.png" alt="logo" height="60">
        <div class="preloader__loading">
            <my-text>Loading</my-text>
            <div class="circles">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'preloader',
    data() {
        return {
            show: true
        }
    },
    mounted() {
        this.showToggle()
    },
    methods: {
        showToggle() {
            setTimeout(() => {
                this.show = false;
                var classBody = '_lock';
                document.body.classList.add(classBody);
            }, 2500)
        }
    },
    watch: {
        show: function(show) {
            var classBody = '_lock';
            if(show) {
                document.body.classList.add(classBody);
            } else {
                document.body.classList.remove(classBody);
            }
        }
    },
}
</script>

<style>
.preloader {
    display: flex;
    font-size: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 1010;
    opacity: 0;
    visibility: hidden;
    transition: all .5s ease 0s;
}
.preloader.visible {
    opacity: 1;
    visibility: visible;
}
.preloader img {
    padding: 0px 0px 20px 0px;
}
.preloader__loading {
    display: flex;
}
.circles {
    display: flex;
    padding: 0px 10px 10px 5px;
    align-items: flex-end;
}
.circle {
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #000;
    margin: 0px 3px 0px 0px;
    opacity: 0.5;
    animation: scaleOut 2s linear;
}
.circle:nth-child(1) {
    animation-delay: 0s;
}
.circle:nth-child(2) {
    animation-delay: .5s;
}
.circle:nth-child(3) {
    animation-delay: 1s;
}

@keyframes scaleOut {
    0% {
        transform: scale(0);
    }
    99% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
    }
}
</style>