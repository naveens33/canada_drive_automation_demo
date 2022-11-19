
Feature: Canada Drive Automation Demo Feature - Ontario Province
Background: Singin and Navigate to Ontario province site
  Given I open the canada drives site
  And I signin with "nadeem.mohammed0504@gmail.com" and "Nadeem01"
  When I select the province
  Then the title is "Used Cars for Sale in Ontario | Canada Drives"

Scenario: Canada Drive Automation Demo Scenario1
  When I filter Make/Model
  And I select sort by "Price: Low to High"
  And I favourite 3 "Dodge" - "Grand Caravan"
  And I select the car
  Then I navigated to selected car page
  When I click the Start Purchase
  Then I navigated to Payment calculation page
  When I set delivery address
  And I set warranty
  And I enter downpayment
  


