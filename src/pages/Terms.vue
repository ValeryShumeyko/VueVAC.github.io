<template>
    <title-page>Terms & Conditions</title-page>
    <div class="terms">
        <section class="dropdown-wrapper" v-for="term in terms" :key="term.id">
            <div @click="open(term)" class="selected-item">
                <span>{{term.title}}</span>
                <span :class="term.isOpen ? 'dropdown' : ''" class="drop-down-icon"></span>
            </div>
            <div :class="term.isOpen ? 'visible' : ''" class="dropdown-popover">
                <p>{{term.text}}</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            terms: [
                {
                    id: 1,
                    title: 'Please read these terms and conditions of use carefully before using this web site',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 2,
                    title: 'Modifications of the terms and conditions',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 3,
                    title: 'How we work',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 4,
                    title: 'Authorization',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 5,
                    title: 'Links',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 6,
                    title: 'Minors',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 7,
                    title: 'Restricted access',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 8,
                    title: 'Governing law',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 9,
                    title: 'Privacy policy',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 10,
                    title: 'Personal information',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 11,
                    title: 'Collecting personal information',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 12,
                    title: 'Using and sharing personal information',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 13,
                    title: 'Sharing your personal information',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 14,
                    title: 'Retaining your personal information',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 15,
                    title: 'Contacting you',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 16,
                    title: 'Accessing your personal information stored by us',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
                {
                    id: 17,
                    title: 'Responding to privacy concerns or complaints',
                    text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ',
                    isOpen: false
                },
            ]
        }
    },
    methods: {
        open(term) {
            term.isOpen = !term.isOpen;
        }
    }

}
</script>

<style scoped>
.terms {
    padding: 40px 100px 30px 100px;
}
.dropdown-wrapper {
    max-width: 100%;
    position: relative;
    border: 1px solid #D7D7D7;
    margin-bottom: 10px;
    cursor: pointer;
}
.selected-item {
    border-radius: 2px;
    display: flex;
    padding: 20px 30px;
    justify-content: space-between;
    align-items: center;
}
.selected-item span {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
    padding: 0px 10px 0px 0px;
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
    padding: 0px 95px 0px 30px;
    visibility: hidden;
    max-height: 0px;
    opacity: 0;
    transition: all .8s ease 0s;

    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #606276;
}
.dropdown-popover p {
    padding: 0px 0px 33px 0px;
}
.dropdown-popover.visible {
    visibility: visible;
    max-height: 450px;
    opacity: 1;
    transition: all .8s ease 0s;
}
@media(max-width: 800px) {
    .terms {
        padding: 40px 0px 30px 0px;
    }
    .dropdown-popover {
        padding: 0px 30px;
    }
}
</style>
