const { functionsIn } = require("lodash");

module.exports = {
    elements: {
        startPurchase: {
            locateStrategy:'xpath',
            selector: '//div[@class="main-content"]//span[contains(text(),"Start Purchase")]'
        }
    },
    commands: [{
        clickStartPurchase(selector){
            return this
                .pause(5000)
                .click(selector)
                .pause(10000)
        }
    }]
  };