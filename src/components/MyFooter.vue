<template>
    <div class="my-footer">
        <div class="my-footer__container">
        <div class="footer__logo">
            <img src="@/img/icons/logo-img_white.svg" alt="logo" height="30">
            <div class="footer__logo_text">VAC</div>
        </div>
        <div class="footer__terms-privacy">
            <div class="footer__terms" @click="$router.push('/terms')">Terms</div>
            <div class="footer__privacy" @click="$router.push('/privacy')">Privacy</div>
        </div>
        <div class="footer__social-icons">
            <social-icon :style="socialIconBgWhite" class="footer__social-icons_item"><img src="@/img/icons/inst_blue.svg" alt="social icon"></social-icon>
            <social-icon :style="socialIconBgWhite" class="footer__social-icons_item"><img src="@/img/icons/fb_blue.svg" alt="social icon"></social-icon>
            <social-icon :style="socialIconBgWhite" class="footer__social-icons_item"><img src="@/img/icons/youtube_blue.svg" alt="social icon"></social-icon>
        </div>
        <div class="created-by">
            <div class="created-by_text">Created by</div> 
            <img src="@/img/icons/created.svg" alt="logo">
        </div>
        <div class="footer__copyright">©Copyright, 2020. Vehicle Approval</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'my-footer',
    computed: {
        socialIconBgWhite() {
            return {
                background: `#fff`
            }
        }
    }
}
</script>

<style scoped>
.my-footer {
    background-color: #7481FF;
}
.my-footer__container {
    max-width: 1240px;
    height: 133px;
    padding: 20px 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.footer__logo,
.footer__terms-privacy,
.created-by {
    display: flex;
    align-items: center;
    padding: 0px 60px 0px 0px;
}
.footer__logo_text {
    font-weight: 700;
    font-size: 28px;
    line-height: 108.5%;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    padding: 0px 0px 0px 5px;
}
.footer__terms,
.footer__privacy {
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    color: #FFFFFF;
    padding: 0px 20px 0px 0px;
}
.footer__social-icons {
    display: flex;
    padding: 0px 60px 0px 0px;
}
.footer__social-icons_item {
    margin: 0px 10px 0px 0px;
}
.created-by_text {
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    color: #FFFFFF;
    padding: 0px 6px 0px 0px;
}
.footer__terms:hover,
.footer__privacy:hover,
.created-by:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #fff;
}
.footer__copyright {
    font-weight: 400;
    font-size: 14px;
    line-height: 159%;
    color: #FFFFFF;
}
@media(max-width: 587px) {
.footer__logo,
.footer__terms-privacy,
.created-by,
.footer__social-icons {
    padding-bottom: 30px;
}
.my-footer__container {
    height: 176px;
}
}
@media(max-width: 408px) {
    .footer__terms-privacy,
    .created-by {
        padding-right: 0px;
    }
    .footer__logo {
        padding-right: 20px;
    }
}
</style>
