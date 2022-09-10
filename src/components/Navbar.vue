<template>
  <div class="navbar">
    <div class="navbar__container">
    <div class="navbar__logo" @click="$router.push('/')">
      <img src="@/img/icons/logo-img.png" alt="logo" height="30">
      <div>VAC</div>
    </div>
    <div class="navbar__btns">
      <button-white class="navbar__btn-inventory" @click="$router.push('/inventory')">Inventory</button-white>
      <button-blue class="navbar__btn" @click="$router.push('/request-a-car')">Request a car</button-blue>
    </div>
    <nav class="navbar__menu menu">
      <div class="menu__icon icon-menu" @click="iconMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu__body">
        <ul class="menu__list">
          <li><a class="menu__link" @click="openContact()">Contact us</a></li>
          <li @click="$router.push('/about'), closeMenu()"><a class="menu__link">About VAC</a></li>
          <li @click="$router.push('/loan-rates'), closeMenu()"><a class="menu__link">Loan Rates</a></li>
          <li @click="$router.push('/video'), closeMenu()"><a class="menu__link">Video</a></li>
          <li @click="$router.push('/blog'), closeMenu()"><a class="menu__link">Blog</a></li>
          <li @click="$router.push('/calculate'), closeMenu()"><a class="menu__link">Calculate</a></li>
          <li @click="$router.push('/inventory'), closeMenu()"><a class="menu__link menu__link-inventory">Inventory</a></li>
        </ul>
        <div class="menu__social social-icons">
          <social-icon><img src="@/img/icons/inst.svg" alt="social icon"></social-icon>
          <social-icon><img src="@/img/icons/fb.svg" alt="social icon"></social-icon>
          <social-icon><img src="@/img/icons/youtube.svg" alt="social icon"></social-icon>
          <social-icon><img src="@/img/icons/mail.svg" alt="social icon"></social-icon>
        </div>
      </div>
      <div class="menu__body menu__body-contact" :class="contactUs ? 'visible' : ''">
        <div class="close-contact" @click="contactUs=false">
          <span></span>
          <span></span>
        </div>
        <div class="contact__title">We can't wait to hear from you!</div>
        <div class="contact__input">
          <div class="contact__input_container">
            <input type="text" class="contact__input_item" placeholder="Your Name">
            <img src="@/img/icons/Icon-name.svg" alt="">
          </div>
          <div class="contact__input_container">
            <input type="text" class="contact__input_item" placeholder="Phone Number">
            <img src="@/img/icons/Icon-phone.svg" alt="">
          </div>
          <div class="contact__input_container">
            <input type="text" class="contact__input_item" placeholder="Email Address">
            <img src="@/img/icons/Icon-mail.svg" alt="">
          </div>
        </div>
        <button-blue class="contact__button" @click="openSuccess()">contact me</button-blue>
        <div class="contact__p">You can contact us yourself</div>
        <div class="menu__social social-icons">
          <social-icon><img src="@/img/icons/inst.svg" alt="social icon"></social-icon>
          <social-icon><img src="@/img/icons/fb.svg" alt="social icon"></social-icon>
          <social-icon><img src="@/img/icons/youtube.svg" alt="social icon"></social-icon>
          <social-icon><img src="@/img/icons/mail.svg" alt="social icon"></social-icon>
        </div>
      </div>
      <div class="menu__body menu__body-contact menu__body-success" :class="success ? 'visible' : ''">
        <div class="close-contact" @click="contactUs=false, success=false">
          <span></span>
          <span></span>
        </div>
        <img src="@/img/icons/Success.svg" alt="">
        <div class="contact__title-success">Application Successful!</div>
        <my-text>Our manager will contact you in the nearest time.</my-text>
      </div>
    </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactUs: false,
      success: false,
    }
  },
    methods: {
        iconMenu() {
            const menuBody = document.querySelector(".menu__body");
            const iconMenu = document.querySelector(".menu__icon");
            document.body.classList.toggle("_lock");
            iconMenu.classList.toggle("active");
            menuBody.classList.toggle("active");
        },
        closeMenu() {
            const menuBody = document.querySelector(".menu__body");
            const iconMenu = document.querySelector(".menu__icon");
            document.body.classList.remove("_lock");
            iconMenu.classList.remove("active");
            menuBody.classList.remove("active");
        },
        openContact() {
          this.contactUs = true;
        },
        openSuccess() {
          this.success = true;
          document.querySelectorAll('.contact__input_item').forEach(function (item) {
            item.value = '';
          })
        }
    },
}

</script>

<style scoped>
._lock {
  overflow: hidden;
}
.navbar {
  background-color: #fff;
  width: 100%;
  position: fixed;
  z-index: 1000;
}
.navbar__container {
  max-width: 1240px;
  height: 80px;
  padding: 0px 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.navbar__btns {
  margin-left: auto;
}
.navbar__btn {
  margin-left: 20px;
}
.navbar__logo {
  display: flex;
  align-items: center;
    font-weight: 700;
    font-size: 28px;
    line-height: 108.5%;
    letter-spacing: 0.02em;
    color: #7380FF;
    padding: 0px 5px;
}
.navbar__logo:hover {
  cursor: pointer;
}
.navbar__logo img {
  margin-right: 10px;
}

.menu {
  position: relative;
  margin: 0px 0px 0px 60px;
}
.menu__list {
  display: flex;
  flex-direction: column;
  font-size: 0;
}
.menu__list li {
  padding: 20px 0px;
}
.menu__link {
  font-weight: 600;
  font-size: 25px;
  line-height: 140%;
  letter-spacing: 0.02em;
  color: #41456B;
  cursor: pointer;
}
.menu__link:hover {
  color: #000;
}
.menu__body {
  position: fixed;
  z-index: 4;
  width: 570px;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.12);
  padding: 130px 0px 0px 60px;
  overflow: auto;
  transform: translate(100%, 0px);
  transition: all 0.7s ease 0s;
}
.menu__body.active {
  transform: translate(0px, 0px);
}
.icon-menu {
  display: block;
  width: 40px;
  height: 30px;
  cursor: pointer;
  position: relative;
  z-index: 5;
}
.icon-menu span {
  transition: all 0.3s ease 0s;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #41456B;
  border-radius: 7px;
}
.icon-menu span:nth-child(1) {
  top: 0px;
}
.icon-menu span:nth-child(2) {
  top: 50%;
  transform: translate(0px, -50%);
}
.icon-menu span:nth-child(3) {
  top: auto;
  bottom: 0px;
}
.icon-menu.active span:nth-child(1) {
  top: 50%;
  transform: translate(0px, -50%);
  transform: rotate(45deg) translate(0px, 50%);
}
.icon-menu.active span:nth-child(2) {
  transform: rotate(-45deg) translate(0px, -50%);
}
.icon-menu.active span:nth-child(3) {
  display: none;
}
.social-icons {
  display: flex;
  margin: 70px 0px 100px 0px;
}
.social-icons div{
  margin: 0px 10px 0px 0px;
}
.menu__link-inventory {
  display: none;
}
@media(max-width: 768px) {
  .menu__body {
    max-width: 504px;
  }
}
@media(max-width: 577px) {
  .menu__body {
    max-width: 100%;
  }
  .navbar__container {
    height: 75px;
  }
  .navbar__btn-inventory{
    display: none;
  }
  .menu__link-inventory {
    display: block;
  }
  .navbar__logo {
    font-size: 20px;
  }
  .navbar__logo img {
    margin-right: 3px;
    width: 30px;
    height: 22px;
  }
  .navbar__btn {
    margin: 0px 0px 0px 10px;
  }
  .menu {
    margin: 0px 0px 0px 20px;
  }
}


.menu__body-contact {
  z-index: 5;
  transform: translate(100%, 0px);
  padding: 40px 120px 30px 60px;
}
.menu__body-contact.visible {
  transform: translate(0px, 0px);
}
.contact__title {
  padding: 0px 0px 60px 0px;
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  color: #41456B;
}
.contact__input {
  padding: 0px 0px 30px 0px;
}
.contact__input_container {
  position: relative;
}
.contact__input_container img {
  position: absolute;
  top:12px;
  left: 16px;
}
.contact__input_item {
  margin: 0px 0px 10px 0px;
  padding: 10px 10px 10px 44px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 159%;
  border: 1px solid #D7D7D7;
  border-radius: 2px;
  outline: none;
}
.contact__button {
  width: 100%;
  margin: 0px 0px 60px 0px;
}
.contact__p {
  margin: 0px 0px -40px 0px;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #41456B;
}
.close-contact {
  position: relative;
  cursor: pointer;
  margin: 0px 0px 40px 0px;
  width: 22px;
  height: 22px;
}
.close-contact span:first-child {
  position: absolute;
  width: 100%;
  height: 1px;
  transform: rotate(45deg);
  background-color: #41456B;
}
.close-contact span:last-child {
  position: absolute;
  width: 100%;
  height: 1px;
  transform: rotate(-45deg);
  background-color: #41456B;
}

.menu__body-success {
  z-index: 7;
  transform: translate(0px, 0px);
  opacity: 0;
  visibility: hidden;
}
.menu__body-success.visible {
  visibility: visible;
  opacity: 1;
}
.menu__body-success img {
  padding: 0px 0px 40px 0px;
}
.contact__title-success {
  padding: 0px 0px 15px 0px;
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  color: #41456B;
}

@media(max-width: 768px) {
  .menu__body-contact {
    padding: 40px 54px 30px 60px;
  }
}
@media(max-width: 576px) {
  .menu__body-contact {
    padding: 30px 22px 30px 22px;
  }
  .contact__title {
    padding: 0px 0px 20px 0px;
  }
  .menu__body-success img{
    padding: 100px 0px 10px 0px;
    width: 50px;
  }
}
</style>


