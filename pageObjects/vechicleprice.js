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
        },
        addressSelected:{
            selector:'p.app-cpost-result__address >span'
        },
        deliveryCost:{
            selector: 'div.delivery__cost h2'
        }
    },
    commands: [{
        choosedelivery(selector,address){
            return this
                    .pause(1000)
                    .click('@deliveryOrPickUp')
                    .pause(1000)
                    .click(selector)
                    .pause(1000)
                    .sendKeys(selector,address)
                    .pause(1000)
                    .sendKeys(selector," ")
                    .pause(1000)
                    .sendKeys(selector,browser.Keys.ENTER)
                    .pause(1000)
                    .click('@saveButton')
        },
        getPageTitle(){
            return this.getTitle();
        },
        selectWarranty(selector,Warranty){
            return this 
                .click('@selectWarrantyCard')
                .pause(1000)
                .click(selector)
                .pause(1000)
                .click('xpath','//div[contains(@class,"v-menu__content")]//div[contains(text(),"'+Warranty +' months")]')
                .pause(2000)
                .click('@saveButton1')
            },
        enterDownPayment(selector,payment){
            return this
                .pause(1000)
                .setValue(selector,payment)
        },
        getSelectedAddress(selector){
            return this
            .getText(selector)
        },
        getDeliveryCost(selector){
            return this
            .getText(selector)
        }
    }]
  };