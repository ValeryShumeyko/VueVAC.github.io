<template>
    <div class="calculate-input">
        <div class="calculate-input__content">
            <div class="calculate-input__input">
                <div class="calculate-input__input_class">
                    <button-white 
                        :class="calculate.poor ? 'active' : ''"
                        @click="calculate.currentAmount = 30000, 
                                calculate.currentDuration = 20,
                                calculate.poor = !calculate.poor,
                                calculate.average = false,
                                calculate.good = false"
                        class="calculate-input__input_class_button"
                        >poor</button-white>
                    <button-white 
                        :class="calculate.average ? 'active' : ''"
                        @click="calculate.currentAmount = 160000, 
                                calculate.currentDuration = 40,
                                calculate.average = !calculate.average,
                                calculate.poor = false,
                                calculate.good = false"
                        class="calculate-input__input_class_button"
                        >average</button-white>
                    <button-white 
                        :class="calculate.good ? 'active' : ''"
                        @click="calculate.currentAmount = 400000, 
                                calculate.currentDuration = 65,
                                calculate.good = !calculate.good,
                                calculate.average = false,
                                calculate.poor = false"
                        class="calculate-input__input_class_button"
                        >good</button-white>
                </div>
                <div class="calculate-input__input_amount">
                    <div class="loan-amount">Loan Amount</div>
                    <div class="loan-amount_number">$ {{calculate.currentAmount}}</div>
                    <input 
                        type="range" 
                        :value="calculate.currentAmount"
                        @input="calculate.currentAmount = $event.target.value"
                        :min="calculate.minAmount" 
                        :max="calculate.maxAmount" 
                        class="loan-amount_input">
                </div>
                <div class="calculate-input__input_duration">
                    <div class="loan-duration">Loan Duration</div>
                    <div class="loan-duration_number"><span>{{calculate.currentDuration}}</span>month</div>
                    <input 
                        type="range" 
                        :value="calculate.currentDuration"
                        @input="calculate.currentDuration = $event.target.value"
                        :min="calculate.minDuration" 
                        :max="calculate.maxDuration" 
                        class="loan-duration_input">
                </div>

            </div>
            <div class="calculate-input__numbers">
                <div class="calculate-input__numbers_container">
                    <div class="calculate-input__numbers_biweekly-container">
                        <my-text>Bi-Weekly Payment</my-text>
                        <div class="calculate-input__numbers_biweekly">$ {{`${this.calculate.biweekly()}`}}</div>
                    </div>

                    <div class="other-container">
                        <div class="calculate-input__numbers_monthly-container">
                            <my-text>Monthly Payment</my-text>
                            <div class="calculate-input__numbers_montly">$ {{`${this.calculate.monthly()}`}}</div>
                        </div>
                        <div class="calculate-input__numbers_weekly-container">
                            <my-text>Weekly Payment</my-text>
                            <div class="calculate-input__numbers_weekly">$ {{`${this.calculate.weekly()}`}}</div>
                        </div>
                    </div>
                </div>
                
                <button-blue class="calculate-input__numbers_button" @click="$router.push('/request-a-car')">Request a car</button-blue>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'calculate-input',
    data() {
        return {
            calculate: {
                maxAmount: 500000,
                maxDuration: 72,
                currentAmount: 500000,
                currentDuration: 72,
                poor: false,
                average: false,
                good: false,
                biweekly() {
                    return Math.round(this.currentAmount / this.currentDuration / 2)
                },
                weekly() {
                    return Math.round(this.currentAmount / this.currentDuration / 4)
                },
                monthly() {
                    return Math.round(this.currentAmount / this.currentDuration)
                }
            }
        }
    }
}
</script>

<style scoped>
.calculate-input__content {
    display: flex;
}
.calculate-input__numbers,
.calculate-input__input {
    padding: 60px;
    background: #FFFFFF;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
.calculate-input__input {
    margin: 0px 30px 0px 0px;
    flex: 1 1 auto;
}
.calculate-input__input_class {
    padding: 0px 0px 56px 0px;
    display: flex;
}
.calculate-input__input_class_button.active {
    background-color: #7481FF;
    color: #fff;
}
.calculate-input__input_amount,
.calculate-input__input_duration {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.calculate-input__input_amount {
    padding: 0px 0px 66px 0px;
}
.loan-amount,
.loan-duration {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #41456B;
    flex: 1 1 auto;
}
.loan-amount_number {
    font-size: 28px;
    font-weight: 700;
    line-height: 180%;
    letter-spacing: 0.02em;
    color: #41456B;
}
.loan-duration_number {
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #606276;
}
.loan-duration_number span {
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456B;
    padding: 0px 5px 0px 0px;
}
.loan-amount_input,
.loan-duration_input {
    flex: 1 1 100%;
    margin: 10px 0px 0px 0px;
}
.calculate-input__numbers_biweekly {
    padding: 0px 0px 30px 0px;
    font-weight: 700;
    font-size: 45px;
    line-height: 140.5%;
    color: #7481FF;
}
.calculate-input__numbers_montly,
.calculate-input__numbers_weekly {
    padding: 0px 0px 20px 0px;
    font-weight: 700;
    font-size: 25px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #41456B;
}
.calculate-input__numbers_weekly {
    padding: 0px 0px 40px 0px;
}
.calculate-input__numbers_button {
    width: 250px;
}

@media(max-width: 1230px) {
    .calculate-input__content {
        flex-direction: column;    
        box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 40px;
    }
    .calculate-input__numbers,
    .calculate-input__input {
        padding: 0px;
        margin: 0px;
        box-shadow: none;
        border-radius: none;
    }
    .calculate-input__numbers {
        padding: 45px 0px 0px 0px;
    }
    .calculate-input__numbers_container {
        display: flex;
    }
    .calculate-input__numbers_biweekly-container {
        flex: 1 1 auto;
    }
    .other-container {
        display: flex;
    }
    .calculate-input__numbers_monthly-container {
        padding: 0px 40px 0px 0px;
    }
}
@media(max-width: 650px) {
    .calculate-input__input_class {
        padding: 0px 0px 42px 0px;
    }
    .calculate-input__numbers_container {
        flex-direction: column;
    }
    .calculate-input__numbers_monthly-container {
        padding: 0px;
        flex: 1 1 auto;
    }
    .calculate-input__numbers_button {
        width: 100%;
    }
}
</style>