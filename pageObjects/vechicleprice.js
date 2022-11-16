const { functionsIn } = require("lodash");

module.exports = {
    elements: {
        deliveryOrPickUp: {
            locateStrategy:'xpath',
            selector: '//div[contains(text(),"Delivery or Pick Up")]'
        },
        addressInput:{
            selector: '#street_address'
        },
        saveButton:{
            selector: '.save-button'
        },
        saveButton1:{
            selector: '.warranty-options__save-and-confirm-btn'
        },
        selectWarrantyCard: {
            locateStrategy:'xpath',
            selector: '//div[contains(text(),"Select Warranty")]'
        },
        warrantySelectedOption:{
            selector: '.warranty-options__term'
        },
        downPayment:{
            selector: '.down-payment-input__input'
        }
    },
    commands: [{
        choosedelivery(selector,address){
            return this
                    .pause(1000)
                    .click('@deliveryOrPickUp')
                    .click(selector)
                    .pause(1000)
                    .sendKeys(selector,address)
                    .pause(1000)
                    .sendKeys(selector,browser.Keys.ENTER)
                    .pause(1000)
                    .click('@saveButton')
        },
        selectWarranty(selector,Warranty){
            return this 
                .click('@selectWarrantyCard')
                .click(selector)
                .pause(1000)
                .click('xpath','//div[contains(@class,"v-menu__content")]//div[contains(text(),"'+Warranty +' months")]')
                .pause(1000)
                .click('@saveButton1')
            },
        enterDownPayment(selector,payment){
            return this
                .pause(1000)
                .setValue(selector,payment)
        }
    }]
  };