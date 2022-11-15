const { functionsIn } = require("lodash");

module.exports = {
    elements: {
        provinceDropdownSelectedValue: {
        selector: '.province-dropdown'
      },
        makeAndModelFilter: {
            locateStrategy:'xpath',
            selector: '//span[text()="Make & Model"]'
        },
        sortByDropdown: {
            selector: '.sort-by'
        },
        priceLowToHighSortOption: {
            locateStrategy:'xpath',
            selector: '//div[text()="Price: Low to High"]'
        },
        favouriteIcons: {
            selector: 'div.vehicle-card button.fav-icon'
        }
    },
    commands: [{
        selectProvince(selector,value){
            return this
                    .click(selector)
                    .click('xpath','//ul[@class="province-dropdown__list"]/li[contains(text(),"'+value+'")]')
                    .pause(1000)
        },
        getPageTitle(){
            return this.getTitle();
        },
        selectMakeAndModel(selector,make,model){
            return this
                    .click(selector)
                    .pause(2000)
                    .click('xpath','//*[contains(@class,"v-expansion-panel-content ")]//span[text()="'+make+'"]')
                    .pause(2000)
                    //.waitForElementPresent('body', 2000, "Be sure that the page is loaded")
                    //.waitForElementPresent('xpath','//span[text()="'+model+'"]')
                    //.getLocationInView('xpath','//span[contains(text(),"'+model+'")]', function(result) {
                        //The x value will be: result.value.x
                        //The y value will be: result.value.y
                    //})
                    .click('xpath','//span[contains(text(),"'+model+'")]')
        },
        selectSortByPriceLowToHigh(){
            return this
                    .click('@sortByDropdown')
                    .click('@priceLowToHighSortOption')
        },
        favouriteCars(count){
            for(i=1;i<=count;i++){
                this.click('xpath','(//div[@class="vehicle-card"]/button)['+i+']')
            }
        }
    }]
  };