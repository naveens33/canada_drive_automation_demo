const {Given, Then, When, Before} = require('@cucumber/cucumber');
const fs = require('fs');
const parse = require('csv-parse');
var data = null;
var rows = null;
Given(/^I open the canada drives site$/, function() {
    browser.navigateTo('https://shop.canadadrives.ca/cars/bc');
    var myMap = {};
    var fs = require("fs");
    data = fs.readFileSync("testdata\\data.csv").toLocaleString();
    rows = data.split("\n");
});


Given('I signin with {string} and {string}', function (string, string2) {
  const page = browser.page.carslist();
  page.openSignInPopUp();
  const signin = browser.page.signin();
  signin.dologin(string, string2);
});


When('I select the province', function () {
  const page = browser.page.carslist();
  page.selectProvince('@provinceDropdownSelectedValue',rows[1].split(",")[0]);
});


Then('the title is {string}', function (title) {
  const page = browser.page.carslist();
  return browser.assert.titleEquals(title);
});


When('I filter Make\\/Model', function () {
  const page = browser.page.carslist();
  page.selectMakeAndModel('@makeAndModelFilter',rows[1].split(",")[1],rows[1].split(",")[2]);
});


When('I select sort by {string}', function (string) {
  const page = browser.page.carslist();
  page.selectSortByPriceLowToHigh();
});


When('I favourite {int} {string} - {string}', function (int, string, string2) {
  const page = browser.page.carslist();
  page.favouriteCars(int);
});


When('I select the car', function () {
  const page = browser.page.carslist();
  page.selectCar(rows[1].split(",")[4])
});

When('I click the Start Purchase', function () {
  const page = browser.page.cardetailview();
  page.clickStartPurchase('@startPurchase')
});

When('I set delivery address', function () {
  const page = browser.page.vechicleprice();
  page.choosedelivery('@addressInput',rows[1].split(",")[5])
});

When('I set warranty', function () {
  const page = browser.page.vechicleprice();
  page.selectWarranty('@warrantySelectedOption',rows[1].split(",")[6])
});

When('I enter downpayment', function () {
  const page = browser.page.vechicleprice();
  page.enterDownPayment('@downPayment',rows[1].split(",")[7])
});

Then('I navigated to selected car page', function () {
  const page = browser.page.cardetailview();
  return browser.assert.titleEquals(rows[1].split(",")[4]+" "+rows[1].split(",")[2]);
});

Then('I navigated to Payment calculation page', function () {
  const page = browser.page.carslist();
  return browser.assert.titleEquals("Bought Online, Delivered to Your Door - Canada Drives");
});

Then('Address selected and delivery fee is ${int}', function (int) {
  const page = browser.page.vechicleprice();
  browser.pause(2000);
  browser.assert.textContains(page.getSelectedAddress('@addressSelected'),rows[1].split(",")[5]);
  browser.pause(2000)
  browser.assert.textEquals(page.getDeliveryCost('@deliveryCost'),"$0");
  });