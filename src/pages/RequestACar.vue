<template>
    <div class="request">
        <div class="line">
            <span></span>
            <span :style="{width: pageNumber*width + '%'}"></span>
        </div>

        <div class="what-your-budget" v-if="budget">
            <div class="request__title">What's your budget?</div>
            <my-text>Find vehicle options that fit your budget.</my-text>
            <div class="request__buttons">
                <div class="request__buttons_item"
                    v-for="l in budgetArray"
                    :key="l.id"
                    :class="l.active ? 'active' : ''"
                    @click="chooseBudget(l)"
                >
                    {{l.name}}
                </div>
            </div>
            <div class="pagination-buttons">
                <button-blue class="button__continue" @click="afterBudget()">Сontinue</button-blue>
            </div>
        </div>
        
        <div class="employment-status" v-if="employmentStatus">
            <div class="request__title">What's your employment status?</div>
            <my-text>Your employment status will help determine the best vehicle and financing options for you.</my-text>
            <div class="request__buttons">
                <div 
                    class="request__buttons_item" 
                    v-for="item in employment" 
                    :key="item.id" 
                    @click="chooseEmployment(item)"
                    :class="item.active ? 'active' : ''">
                        {{item.name}}
                </div>
            </div>
            <div class="pagination-buttons">
                <button-blue class="button__continue" @click="afterEmployment()">Сontinue</button-blue>
                <div class="button__back" @click="backEmployment()">
                    <div class="arrow">
                    </div>
                    <p>back</p>
                </div>
            </div>
        </div>

        <div class="monthly-income" v-if="monthlyIncome">
            <div class="request__title">Enter your monthly income</div>
            <my-text>Your income details help us make sure your vehicle payments are easy and affordable. Before taxes and deductions.</my-text>
            <div class="request__input_container">
                <input type="text" placeholder="Monthly income" class="request__input request__input-monthly">
            </div>
            <div class="pagination-buttons">
                <button-blue class="button__continue" @click="afterMonthly()">Сontinue</button-blue>
                <div class="button__back" @click="backMontly()">
                    <div class="arrow">
                    </div>
                    <p>back</p>
                </div>
            </div>
        </div>

        <div class="currently-working" v-if="currentlyWorking">
            <div class="request__title">Are you currently working?</div>
            <my-text>Your employment status will help determing the best vehicle and financing options for you.</my-text>
            <div class="request__buttons">
                <div 
                    class="request__buttons_item" 
                    v-for="i in working" 
                    :key="i.id" 
                    @click="chooseWorking(i)"
                    :class="i.active ? 'active' : ''"
                    >
                        {{i.name}}
                </div>
            </div>
            <div class="pagination-buttons">
                <button-blue class="button__continue" @click="afterWorking()">Сontinue</button-blue>
                <div class="button__back" @click="backWorking()">
                    <div class="arrow">
                    </div>
                    <p>back</p>
                </div>
            </div>
        </div>

        <div class="how-earn-income" v-if="howEarnIncome">
            <div class="request__title">How do you earn income?</div>
            <my-text>Your employment status will help determine the best vehicle and financing options for you.</my-text>
            <div class="request__buttons">
                <div 
                    class="request__buttons_item" 
                    v-for="m in howEarnIncomeArray"
                    :key="m.id"
                    @click="chooseHowEarnIncome(m)"
                    :class="m.active ? 'active' : ''"
                >
                    {{m.name}}
                </div>
            </div>
            <div class="pagination-buttons">
                <button-blue class="button__continue" @click="afterHowEarnIncome()">Сontinue</button-blue>
                <div class="button__back" @click="backHowEarnIncome()">
                    <div class="arrow">
                    </div>
                    <p>back</p>
                </div>
            </div>
        </div>

        <div class="your-employment" v-if="tellUsEmployment">
            <div class="request__title">Tell us about your employment</div>
            <my-text>We won’t come visit but we need these details to confirm your employment status so you can get the best rates possible.</my-text>
            <div class="request__input_container">
                <input type="text" placeholder="Employer" class="request__input requst__input-tell-us">
                <input type="text" placeholder="Title" class="request__input requst__input-tell-us">
            </div>
            <div class="pagination-buttons">
                <button-blue class="button__continue" @click="afterTellUs()">Сontinue</button-blue>
                <div class="button__back" @click="backTellUs()">
                    <div class="arrow">
                    </div>
                    <p>back</p>
                </div>
            </div>
        </div>

        <div class="how-long-earning" v-if="howLongEarning">
            <div class="request__title">How long have you been earning this income?</div>
            <my-text>Your income details help us make sure your vehicle payments are easy and affordable.</my-text>
            <div class="request__input_container line">
                <input type="text" placeholder="Years" class="request__input request__input-how-long-earning">
                <input type="text" placeholder="Mounths" class="request__input request__input-how-long-earning">
            </div>
            <div class="pagination-buttons">
                <button-blue class="button__continue" @click="afterHowLongEarning()">Сontinue</button-blue>
                <div class="button__back" @click="backHowLongEarning()">
                    <div class="arrow">
                    </div>
                    <p>back</p>
                </div>
            </div>
        </div>

        <div class="how-long-receiving" v-if="howLongReceiving">
            <div class="request__title">How long receiving?</div>
            <my-text>Your income details help us make sure your vehicle payments are easy and affordable.</my-text>
            <div class="request__input_container">
                <input type="text" placeholder="Time" class="request__input">
            </div>
            <div class="pagination-buttons">
                <button-blue class="button__continue" @click="afterHowLongReceiving()">Сontinue</button-blue>
                <div class="button__back" @click="backHowLongReceiving()">
                    <div class="arrow">
                    </div>
                    <p>back</p>
                </div>
            </div>
        </div>

        <div class="where-do-you-live" v-if="whereLive">
            <div class="request__title">Where do you live?</div>
            <my-text>Providing your location helps find the best deals near you.</my-text>
            <div class="request__input_container">
                <input type="text" placeholder="Street address" class="request__input">
                <input type="text" placeholder="City" class="request__input">
            </div>
            <div class="request__input_container line n">
                <input type="text" placeholder="Province" class="request__input">
                <input type="text" placeholder="Postal code" class="request__input">
            </div>
            <div class="pagination-buttons">
                <button-blue class="button__continue" @click="afterWhereLive()">Сontinue</button-blue>
                <div class="button__back" @click="backWhereLive()">
                    <div class="arrow">
                    </div>
                    <p>back</p>
                </div>
            </div>
        </div>

        <div class="when-where-you-born" v-if="whenBorn">
            <div class="request__title">When were you born?</div>
            <div class="request__input_container line">
                <input type="text" placeholder="Year" class="request__input">
                <input type="text" placeholder="Month" class="request__input">
                <input type="text" placeholder="Day" class="request__input">
            </div>
            <div class="pagination-buttons">
                <button-blue class="button__continue" @click="afterWhenBorn()">Сontinue</button-blue>
                <div class="button__back" @click="backWhenBorn()">
                    <div class="arrow">
                    </div>
                    <p>back</p>
                </div>
            </div>
        </div>

        <div class="last-step" v-if="lastStep">
            <div class="request__title">Congratulations! Last step.</div>
            <my-text>Get access to your vehicle and financing options by creating your account. There is no obligation to continue with financing if you change your mind. </my-text>
            <div class="request__input_container line l">
                <input type="text" placeholder="First name" class="request__input">
                <input type="text" placeholder="Last name" class="request__input">
            </div>
            <div class="request__input_container">
                <input type="text" placeholder="Email" class="request__input">
                <input type="text" placeholder="Phone number" class="request__input">
            </div>
            <div class="pagination-buttons">
                <button-blue class="button__continue" @click="afterLastStep()"> Сontinue </button-blue>
                <div class="button__back" @click="backLastStep()">
                    <div class="arrow">
                    </div>
                    <p>back</p>
                </div>
            </div>
        </div>

        <div class="success" v-if="success">
            <img src="@/img/icons/Success.svg" alt="">
            <div class="success__title">Application Successful!</div>
            <my-text>Your response was successfully submitted. Thank you! Our team will reach out to you shortly.</my-text>
            <div class="confirmation-number">Confirmation number:</div>
            <div class="confirmation-input__container">
                <div class="confirmation-input">{{confirmationNumber}}</div>
            </div>
            <button-blue class="button__continue button__main-page" @click="$router.push('/')">Go to main page</button-blue>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            pageNumber: 1,
            width: 11.11,
            budget: true,
            employmentStatus: false,
            monthlyIncome: false,
            tellUsEmployment: false,
            howLongEarning: false,
            whereLive: false,
            whenBorn: false,
            lastStep: false,
            success: false,
            currentlyWorking: false,
            howEarnIncome: false,
            howLongReceiving: false,
            budgetName: '',
            employmentName: '',
            workingName: '',
            howEarnIncomeName: '',
            monthlyName: '',
            confirmationNumber: '',
            budgetArray: [
                {
                    id: 1,
                    name: 'Under $250/Month',
                    active: false
                },
                {
                    id: 2,
                    name: '$250-374/Month',
                    active: false
                },
                {
                    id: 3,
                    name: '$374-500/Month',
                    active: false
                },
                {
                    id: 4,
                    name: 'Over $500/Month',
                    active: false
                }
            ],
            employment: [
                {
                    id: 1,
                    name: 'Employed',
                    active: false
                },
                {
                    id: 2,
                    name: 'Self-Employed',
                    active: false
                },
                {
                    id: 3,
                    name: 'Student',
                    active: false
                },
                {
                    id: 4,
                    name: 'Retired/Pension',
                    active: false
                },
                {
                    id: 5,
                    name: 'Other',
                    active: false
                }
            ],
            working: [
                {
                    id: 1,
                    name: 'Yes',
                    active: false
                },
                {
                    id: 2,
                    name: 'No',
                    active: false
                }
            ],
            howEarnIncomeArray: [
                {
                    id: 1,
                    name: 'Long-term disability',
                    active: false
                },
                {
                    id: 2,
                    name: 'Spousal support / Alimony',
                    active: false
                },
                {
                    id: 3,
                    name: 'Child support',
                    active: false
                },
                {
                    id: 4,
                    name: 'Social assistance / Welfare',
                    active: false
                },
                {
                    id: 5,
                    name: 'Maternity leave',
                    active: false
                },
                {
                    id: 6,
                    name: 'Baby bonus / Child tax',
                    active: false
                },
                {
                    id: 7,
                    name: 'Unemployed / EI',
                    active: false
                },
                {
                    id: 8,
                    name: 'Other / Not listed',
                    active: false
                }
            ]
        }
    },
    methods: {
        chooseBudget(l) {
            this.budgetName=l.name;
            this.budgetArray.forEach(function(n) {
                n.active = false;
            })
            l.active = true;
        },
        afterBudget() {
            if(this.budgetName!='') {
                this.employmentStatus=true; 
                this.budget=false;
                this.pageNumber = 2;
            }
        },
        chooseEmployment(item) {
            console.log(item);
            this.employmentName=item.name;
            console.log(this.employmentName);
            this.employment.forEach(function(n) {
                n.active = false;
            })
            item.active = true;
        },
        afterEmployment() {
            if(this.employmentName === 'Employed' || this.employmentName === 'Self-Employed') {
                this.width = 11.11;
                this.monthlyIncome = true;
                this.employmentStatus = false;
                this.pageNumber = 3;
            } else if (this.employmentName === 'Retired/Pension') {
                this.monthlyIncome = true;
                this.employmentStatus = false;
                this.width=12.5;
                this.pageNumber = 3;
            } else if (this.employmentName === 'Student') {
                this.width = 11.11;
                this.currentlyWorking = true;
                this.employmentStatus = false;
                this.pageNumber = 3;
            } else if (this.employmentName === 'Other') {
                this.width = 11.11;
                this.howEarnIncome = true;
                this.employmentStatus = false;
                this.pageNumber = 3;
            }
        },
        backEmployment() {
            this.budget=true;
            this.employmentStatus=false;
            this.employmentName='';
            this.employment.forEach(function(n) {
                n.active = false;
            })
            this.pageNumber=1;
        },
        chooseHowEarnIncome(m) {
            this.howEarnIncomeName=m.name;
            this.howEarnIncomeArray.forEach(function(n) {
                n.active = false;
            })
            m.active = true;
        },
        afterHowEarnIncome() {
            if(this.howEarnIncomeName!='') {
                this.monthlyIncome=true; 
                this.howEarnIncome=false;
                this.pageNumber=4;
            }
        },
        backHowEarnIncome() {
            this.howEarnIncome=false; 
            this.employmentStatus=true;
            this.howEarnIncomeName='';
            this.howEarnIncomeArray.forEach(function(n) {
                n.active = false;
            })
            this.pageNumber=2;
        },
        afterMonthly() {
            if (this.employmentName === 'Employed' || this.employmentName === 'Self-Employed') {
                this.tellUsEmployment = true;
                this.monthlyIncome = false;
                this.pageNumber = 4;
            } else if (this.employmentName === 'Student') {
                this.howLongEarning = true;
                this.monthlyIncome = false;
                this.pageNumber=5;
            } else if (this.employmentName === 'Other') {
                this.howLongReceiving = true;
                this.monthlyIncome = false;
                this.pageNumber=5;
            } else if (this.employmentName === 'Retired/Pension') {
                this.howLongReceiving = true;
                this.monthlyIncome = false;
                this.pageNumber=4;
            }
        },
        backMontly() {
            if (this.employmentName === 'Student' && this.workingName === 'No') {
                this.currentlyWorking = true;
                this.monthlyIncome = false;
                this.pageNumber = 3;
            } else if(this.employmentName === 'Other') {
                this.howEarnIncome = true;
                this.monthlyIncome = false;
                this.pageNumber=3;
            } else {
                this.employmentStatus = true;
                this.monthlyIncome = false;
                this.pageNumber=2;
            }
        },
        chooseWorking(i) {
            this.workingName=i.name;
            this.working.forEach(function(n) {
                n.active = false;
            })
            i.active = true;
        },
        afterWorking() {
            if (this.workingName === 'Yes') {
                this.howLongReceiving = true;
                this.currentlyWorking = false;
                this.width = 10;
                this.pageNumber = 4;
            } else if (this.workingName === 'No'){
                this.monthlyIncome = true;
                this.currentlyWorking = false;
                this.width = 11.11;
                this.pageNumber = 4;
            }
        },
        backWorking() {
            this.currentlyWorking=false;
            this.employmentStatus=true;
            this.workingName='';
            this.working.forEach(function(n) {
                n.active = false;
            })
            this.pageNumber = 2;
        },
        afterTellUs() {
            this.howLongEarning=true; 
            this.tellUsEmployment=false; 
            if(this.workingName === 'Yes') {
                this.pageNumber = 6;
            } else {
                this.pageNumber=5;
            }
        },
        backTellUs() {
            if (this.employmentName === 'Student' && this.workingName === 'Yes') {
                this.howLongReceiving = true;
                this.tellUsEmployment = false;
                this.pageNumber = 4;
            } else {
                this.tellUsEmployment=false;
                this.monthlyIncome=true;
                this.pageNumber=3;
            }
        },
        afterHowLongEarning() {
            this.whereLive=true; 
            this.howLongEarning=false; 
            if(this.workingName === 'Yes') {
                this.pageNumber=7;
            } else {
                this.pageNumber = 6;
            }
        },
        backHowLongEarning() {
            if(this.employmentName==='Student' && this.workingName === 'No') {
                this.monthlyIncome = true;
                this.howLongEarning=false; 
                this.pageNumber=4;
            } else if(this.workingName === 'Yes') {
                this.tellUsEmployment=true; 
                this.howLongEarning=false; 
                this.pageNumber=5;
            } else {
                this.tellUsEmployment=true; 
                this.howLongEarning=false; 
                this.pageNumber=4;
            }
        },
        afterHowLongReceiving() {
            if (this.employmentName === 'Other') {
                this.whereLive = true;
                this.howLongReceiving = false;
                this.pageNumber=6;
            } else if (this.employmentName === 'Retired/Pension') {
                this.whereLive = true;
                this.howLongReceiving = false;
                this.pageNumber=5;
            } else {
                this.tellUsEmployment = true;
                this.howLongReceiving = false;
                this.pageNumber = 5;
            }
        },
        backHowLongReceiving() {
            if (this.employmentName === 'Other') {
                this.monthlyIncome = true;
                this.howLongReceiving = false;
                this.pageNumber=4;
            } else if (this.employmentName === 'Retired/Pension') {
                this.monthlyIncome = true;
                this.howLongReceiving = false;
                this.pageNumber=3;
            } else {
                this.currentlyWorking = true;
                this.howLongReceiving = false;
                this.pageNumber = 3;
            }
        },
        afterWhereLive() {
            this.whenBorn=true; 
            this.whereLive=false;
            if(this.employmentName==='Retired/Pension') {
                this.pageNumber = 6;
            } else if (this.workingName === 'Yes') {
                this.pageNumber=8;
            } else {
                this.pageNumber = 7;
            }
        },
        backWhereLive() {
            if (this.employmentName === 'Other') {
                this.howLongReceiving = true;
                this.whereLive = false;
                this.pageNumber=5;
            } else if (this.employmentName === 'Retired/Pension') {
                this.howLongReceiving = true;
                this.whereLive = false;
                this.pageNumber=4;
            } else if (this.workingName === 'Yes') {
                this.howLongEarning = true;
                this.whereLive = false;
                this.pageNumber=6;
            } else {
                this.howLongEarning = true;
                this.whereLive = false;
                this.pageNumber=5;
            }
        },
        afterWhenBorn() {
            this.lastStep=true; 
            this.whenBorn=false;
            if(this.employmentName==='Retired/Pension') {
                this.pageNumber = 7;
            } else if (this.workingName === 'Yes') {
                this.pageNumber=9;
            } else {
                this.pageNumber = 8;
            }
        },
        backWhenBorn() {
            this.whereLive=true; 
            this.whenBorn=false;
            if(this.employmentName==='Retired/Pension') {
                this.pageNumber = 5;
            } else if (this.workingName === 'Yes'){
                this.pageNumber=7;
            } else {
                this.pageNumber = 6;
            }
        },
        afterLastStep() {
            this.success=true; 
            this.lastStep=false;
            let random = Math.random().toString(36).substr(2,10);
            this.confirmationNumber = random;
            if(this.employmentName==='Retired/Pension') {
                this.pageNumber = 8;
            } else if(this.workingName === 'Yes') {
                this.pageNumber=10;
            } else {
                this.pageNumber = 9;
            }
        },
        backLastStep() {
            this.whenBorn=true; 
            this.lastStep=false;
            if(this.employmentName==='Retired/Pension') {
                this.pageNumber = 6;
            } else if (this.workingName === 'Yes'){
                this.pageNumber=8;
            } else {
                this.pageNumber = 7;
            }
        }
    },
}
</script>
    
<style scoped>
input {
    outline: none;
}
.request {
    max-width: 474px;
    margin: 0 auto;
    padding: 120px 0px 30px 0px;
}
.request .line {
    max-width: 454px;
    position: relative;
    padding: 0px 0px 60px 0px;
}
.request .line span:first-child {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 8px;
    background: #F1F1F1;
    border-radius: 2px;
}
.request .line span:last-child {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 25%;
    height: 8px;
    background: #7380FF;
    border-radius: 2px;
}



.request__title {
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456B;
    padding: 0px 0px 5px 0px;
}
.request__buttons {
    padding: 40px 0px;
    display: flex;
    flex-wrap: wrap;
}
.request__buttons_item {
    width: 222px;
    padding: 15px 0px;
    margin: 0px 10px 10px 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    color: #7C7A84;
    border: 1px solid #F1F1F1;
    border-radius: 2px;
    text-align: center;
}
.request__buttons_item:hover {
    cursor: pointer;
    opacity: 0.8;
}
.pagination-buttons {
    display: flex;
    align-items: center;
}
.button__continue {
    width: 222px;
    margin: 0px 80px 0px 0px;
}
.button__back {
    position: relative;
    display: flex;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #606276;
    cursor: pointer;
}
.button__back:hover {
    opacity: 0.8;
}
.button__back .arrow {
    margin: 0px 15px 0px 0px;
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translate(0, -50%) rotate(-45deg);
    width: 8px;
    height: 8px;
    border: none;
    background-color: transparent;
    border-top: 2px solid #606276;
    border-left: 2px solid #606276;
}
.request__input_container {
    margin: 40px 0px 30px 0px;
    width: 454px;
}
.request__input_container.line {
    display: flex;
    margin: 40px 0px 0px 0px;
}
.request__input_container.line.n {
    margin: -30px 0px 0px 0px;
}
.request__input_container.line.l {
    margin: 40px 0px -100px 0px;
}
.request__input {
    padding: 10px 20px;
    width: 100%;
    border: 1px solid #D7D7D7;
    border-radius: 2px;
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
    color: #D7D7D7;
    margin: 0px 10px 10px 0px;
}
.request__input_container.line .request__input:last-child{
    margin: 0px 0px 10px 0px;
}

.success img {
    padding: 0px 0px 40px 0px;
}
.success__title {
    padding: 0px 0px 15px 0px;
    font-weight: 700;
    font-size: 30px;
    line-height: 140%;
    color: #41456B;
}
.success .confirmation-number {
    font-weight: 600;
    font-size: 20px;
    line-height: 34px;
    color: #41456B;
    padding: 33px 0px 5px 0px;
}
.success .confirmation-input__container {
    width: 100%;
}
.success .confirmation-input {
    width: 222px;
    padding: 10px 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 159%;
    color: #41456B;
    margin: 0px 0px 40px 0px;
    border: 1px solid #D7D7D7;
    border-radius: 2px;
}
.active {
    color: #727171;
    border: 1px solid #919090;
    border-radius: 2px;
}
@media(max-width: 510px) {
    .request {
        padding: 120px 0px 200px 0px;
    }
    .menu__body-success img{
        padding: 100px 0px 10px 0px;
        width: 50px;
    }
    .request__buttons_item {
        width: 100%;
    }
    .pagination-buttons {
        max-width: 500px;
        margin: 0 auto;
    }
    .button__continue {
        width: 50%;
    }
    .request__input_container {
        width: 100%;
    }
    .button__main-page {
        width: 100%;
    }
}
</style>
    