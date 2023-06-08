$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Colour Catalogue.feature");
formatter.feature({
  "name": "Colour Catalogue",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Colour_Catalogue"
    }
  ]
});
formatter.scenario({
  "name": "Display the Paints and colours",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Colour_Catalogue"
    },
    {
      "name": "@Display_the_list"
    }
  ]
});
formatter.step({
  "name": "User is on the Home Page of Asian Paints",
  "keyword": "Given "
});
formatter.match({
  "location": "Colour_Catalogue.user_is_on_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User hover the mouse on paints and colour",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_hover_the_mouse_on_paints_and_colour()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Paints and colours  list is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Colour_Catalogue.paints_and_colours_list_is_displayed()"
});
formatter.result({
  "status": "passed"
});
});