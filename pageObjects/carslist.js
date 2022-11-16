const { functionsIn } = require("lodash");

module.exports = {
    elements: {
        signInButton: {
            locateStrategy:'xpath',
            selector: '//span[contains(text(),"Sign In")]'
        },
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
        openSignInPopUp(){
            return this
                    .click('@signInButton')
        },
        selectProvince(selector,value){
            return this
                    .pause(10000)
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
                    .click('xpath','//span[contains(text(),"'+model+'")]')
        },
        selectSortByPriceLowToHigh(){
            return this
                    .click('@sortByDropdown')
                    .click('@priceLowToHighSortOption')
                    .pause(3000)
        },
        favouriteCars(count){
            for(i=1;i<=count;i++){
                this
                .click('xpath','(//div[@class="vehicle-card"]/button)['+i+']')
            }
        },
        selectCar(car_name){
            this
                .click('xpath','//div[@class="vehicle-card"]//div[contains(text(),"'+car_name+'")]')
        }
    }]
  };