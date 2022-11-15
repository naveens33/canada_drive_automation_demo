
Feature: Canada Drive Automation Demo Feature - Ontario Province
Background: Navigate to Ontario province site
  Given I open the canada drives site
  When I select the province
  Then the title is "Used Cars for Sale in Ontario | Canada Drives"

Scenario: Canada Drive Automation Demo Scenario1
  When I filter Make/Model
  And I select sort by "Price: Low to High"
  And I favourite 3 "Dodge" - "Grand Caravan"
