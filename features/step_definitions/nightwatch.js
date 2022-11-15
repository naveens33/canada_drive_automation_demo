const {Given, Then, When, Before} = require('@cucumber/cucumber');
const fs = require('fs');
const parse = require('csv-parse');
var data = null;
var rows = null;
Given(/^I open the canada drives site$/, function() {
    browser.navigateTo('https://shop.canadadrives.ca/cars/bc');
    var myMap = {};
    var fs = require("fs");
    data = fs.readFileSync("C:\\Users\\Naveen S\\canada_drive_automation_demo\\testdata\\data.csv").toLocaleString();
    rows = data.split("\n");
});


When('I select the province', function () {
  const page = browser.page.cars();
  page.selectProvince('@provinceDropdownSelectedValue',rows[1].split(",")[0]);
});


Then('the title is {string}', function (title) {
  const page = browser.page.cars();
  page.getPageTitle(function(title) {
    this.assert.equal(typeof title, 'string');
    this.assert.equal(title, title);
  });
});


When('I filter Make\\/Model', function () {
  const page = browser.page.cars();
  page.selectMakeAndModel('@makeAndModelFilter',rows[1].split(",")[1],rows[1].split(",")[2]);
});


When('I select sort by {string}', function (string) {
  const page = browser.page.cars();
  page.selectSortByPriceLowToHigh();
});


When('I favourite {int} {string} - {string}', function (int, string, string2) {
  //const page = browser.page.cars();
  //page.favouriteCars(int);
});
