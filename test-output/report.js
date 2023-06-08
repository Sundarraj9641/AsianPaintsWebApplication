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
  "name": "Paints and colours list is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Colour_Catalogue.paints_and_colours_list_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add the Paint Product to the Wishlist",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Colour_Catalogue"
    },
    {
      "name": "@Add_product_to_wishlist"
    }
  ]
});
formatter.step({
  "name": "User is on the paints and colours List",
  "keyword": "Given "
});
formatter.match({
  "location": "Colour_Catalogue.user_is_on_the_paints_and_colours_List()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the colour catalogue",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_click_on_the_colour_catalogue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on colour",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_click_on_colour()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on wishlist icon",
  "keyword": "And "
});
formatter.match({
  "location": "Colour_Catalogue.click_on_wishlist_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Paint catalogue is added to the wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "Colour_Catalogue.paint_catalogue_is_added_to_the_wishlist()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Log Out of the Application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Colour_Catalogue"
    },
    {
      "name": "@Log_Out"
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
  "name": "User click on the profile icon",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_click_on_the_profile_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on sign out",
  "keyword": "And "
});
formatter.match({
  "location": "Colour_Catalogue.click_on_sign_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account is Log Out Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Colour_Catalogue.account_is_Log_Out_Successfuly()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buy the paint product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Colour_Catalogue"
    },
    {
      "name": "@Buy_Now"
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
  "name": "User login to the application",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_login_to_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Wishlist icon",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.click_on_Wishlist_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the product",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_click_on_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the pincode",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_enter_the()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on buy now button",
  "keyword": "And "
});
formatter.match({
  "location": "Colour_Catalogue.click_on_buy_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the delivery address page",
  "keyword": "Then "
});
formatter.match({
  "location": "Colour_Catalogue.user_able_to_see_the_delivery_address_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter the products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Colour_Catalogue"
    },
    {
      "name": "@Filter_the_Products"
    }
  ]
});
formatter.step({
  "name": "User is on the Colours Catalogue page",
  "keyword": "Given "
});
formatter.match({
  "location": "Colour_Catalogue.user_is_on_the_Colours_Catalogue_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User apply the filters",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_apply_the_filters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the filtered products",
  "keyword": "Then "
});
formatter.match({
  "location": "Colour_Catalogue.user_able_to_see_the_filtered_products()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Enquire the Product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Enquiry_Now"
    }
  ]
});
formatter.step({
  "name": "User is on the Home Page of Asian Paints",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enters the Name \u003cName\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Email \u003cEmail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Mobile Number \u003cMobile_Number\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Pincode \u003cPincode\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Enquire Now button",
  "keyword": "And "
});
formatter.step({
  "name": "Successful Completion message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name",
        "Email",
        "Mobile_Number",
        "Pincode"
      ]
    },
    {
      "cells": [
        "Sundar",
        "sundarraj1234@gmail.com",
        "9876543212",
        "639001"
      ]
    },
    {
      "cells": [
        "Raj",
        "rajsundar4321@gmail.com",
        "8976543213",
        "534305"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Enquire the Product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Colour_Catalogue"
    },
    {
      "name": "@Enquiry_Now"
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
  "name": "User Enters the Name Sundar",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_Enters_the_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Email sundarraj1234@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_Enter_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Mobile Number 9876543212",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_Enter_Mobile_Number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Pincode 639001",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_Enter_Pincode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Enquire Now button",
  "keyword": "And "
});
formatter.match({
  "location": "Colour_Catalogue.click_on_Enquire_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Successful Completion message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Colour_Catalogue.successful_Completion_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Enquire the Product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Colour_Catalogue"
    },
    {
      "name": "@Enquiry_Now"
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
  "name": "User Enters the Name Raj",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_Enters_the_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Email rajsundar4321@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_Enter_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Mobile Number 8976543213",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_Enter_Mobile_Number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Pincode 534305",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_Enter_Pincode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Enquire Now button",
  "keyword": "And "
});
formatter.match({
  "location": "Colour_Catalogue.click_on_Enquire_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Successful Completion message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Colour_Catalogue.successful_Completion_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Enquire the Product with Invalid details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Enquiry_Now_Unsuccessful"
    }
  ]
});
formatter.step({
  "name": "User is on the Home Page of Asian Paints",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enters the Name \u003cName\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Email \u003cEmail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Mobile Number \u003cMobile_Number\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Pincode \u003cPincode\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Enquire Now button",
  "keyword": "And "
});
formatter.step({
  "name": "Error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name",
        "Email",
        "Mobile_Number",
        "Pincode"
      ]
    },
    {
      "cells": [
        "Sundarraj",
        "sundarraj3243@gmail.com",
        "7796543212",
        "639"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Enquire the Product with Invalid details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Colour_Catalogue"
    },
    {
      "name": "@Enquiry_Now_Unsuccessful"
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
  "name": "User Enters the Name Sundarraj",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_Enters_the_Name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Email sundarraj3243@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_Enter_Email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Mobile Number 7796543212",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_Enter_Mobile_Number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Pincode 639",
  "keyword": "When "
});
formatter.match({
  "location": "Colour_Catalogue.user_Enter_Pincode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Enquire Now button",
  "keyword": "And "
});
formatter.match({
  "location": "Colour_Catalogue.click_on_Enquire_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Colour_Catalogue.error_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Exterior Paints.feature");
formatter.feature({
  "name": "Exterior Paints",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Exterior_Paints"
    }
  ]
});
formatter.scenario({
  "name": "View Details of One Exterior Paint",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Exterior_Paints"
    },
    {
      "name": "@Select_Exterior_paint"
    }
  ]
});
formatter.step({
  "name": "User is on the Exterior paints page",
  "keyword": "Given "
});
formatter.match({
  "location": "ExteriorPaints.user_is_on_the_Exterior_paints_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Wall textures category",
  "keyword": "When "
});
formatter.match({
  "location": "ExteriorPaints.user_click_on_Wall_textures_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on View Catalogue of product",
  "keyword": "When "
});
formatter.match({
  "location": "ExteriorPaints.user_click_on_View_Catalogue_of_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select the colour",
  "keyword": "And "
});
formatter.match({
  "location": "ExteriorPaints.user_select_the_colour()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the description of the product",
  "keyword": "Then "
});
formatter.match({
  "location": "ExteriorPaints.user_able_to_see_the_description_of_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search the Products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search_the_Products"
    }
  ]
});
formatter.step({
  "name": "User is in the Home Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on search box",
  "keyword": "When "
});
formatter.step({
  "name": "User enter the product name \u003cproduct_name\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "User able to see the searched product",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product_name"
      ]
    },
    {
      "cells": [
        "Ultima floor guard"
      ]
    },
    {
      "cells": [
        "Apex floor guard"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search the Products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Exterior_Paints"
    },
    {
      "name": "@Search_the_Products"
    }
  ]
});
formatter.step({
  "name": "User is in the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ExteriorPaints.user_is_in_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on search box",
  "keyword": "When "
});
formatter.match({
  "location": "ExteriorPaints.user_click_on_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the product name Ultima floor guard",
  "keyword": "When "
});
formatter.match({
  "location": "ExteriorPaints.user_enter_the_Ultima_floor_guard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "ExteriorPaints.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the searched product",
  "keyword": "Then "
});
formatter.match({
  "location": "ExteriorPaints.user_able_to_see_the_searched_product()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the Products",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Exterior_Paints"
    },
    {
      "name": "@Search_the_Products"
    }
  ]
});
formatter.step({
  "name": "User is in the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ExteriorPaints.user_is_in_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on search box",
  "keyword": "When "
});
formatter.match({
  "location": "ExteriorPaints.user_click_on_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the product name Apex floor guard",
  "keyword": "When "
});
formatter.match({
  "location": "ExteriorPaints.user_enter_the_Ultima_floor_guard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "ExteriorPaints.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the searched product",
  "keyword": "Then "
});
formatter.match({
  "location": "ExteriorPaints.user_able_to_see_the_searched_product()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search the Products using invalid product name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search_the_Invalid_Products"
    }
  ]
});
formatter.step({
  "name": "User is in the Home Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on search box",
  "keyword": "When "
});
formatter.step({
  "name": "User enter the product name \u003cproduct_name\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "User able to see the error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product_name"
      ]
    },
    {
      "cells": [
        "1122334455"
      ]
    },
    {
      "cells": [
        "Capgemini"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search the Products using invalid product name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Exterior_Paints"
    },
    {
      "name": "@Search_the_Invalid_Products"
    }
  ]
});
formatter.step({
  "name": "User is in the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ExteriorPaints.user_is_in_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on search box",
  "keyword": "When "
});
formatter.match({
  "location": "ExteriorPaints.user_click_on_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the product name 1122334455",
  "keyword": "When "
});
formatter.match({
  "location": "ExteriorPaints.user_enter_the_Ultima_floor_guard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "ExteriorPaints.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "ExteriorPaints.user_able_to_see_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search the Products using invalid product name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Exterior_Paints"
    },
    {
      "name": "@Search_the_Invalid_Products"
    }
  ]
});
formatter.step({
  "name": "User is in the Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ExteriorPaints.user_is_in_the_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on search box",
  "keyword": "When "
});
formatter.match({
  "location": "ExteriorPaints.user_click_on_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the product name Capgemini",
  "keyword": "When "
});
formatter.match({
  "location": "ExteriorPaints.user_enter_the_Ultima_floor_guard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "ExteriorPaints.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "ExteriorPaints.user_able_to_see_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Paint Budget Calculator.feature");
formatter.feature({
  "name": "Paint Budget Calculator",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Paint_Budget_Calculator"
    }
  ]
});
formatter.background({
  "name": "Navigate to the Calculator page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user in the Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "PaintBudgetCalculator.user_in_the_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User hover the mouse on Paints and Colours",
  "keyword": "When "
});
formatter.match({
  "location": "PaintBudgetCalculator.user_hover_the_mouse_on_Paints_and_Colours()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Paint Budget Calculator",
  "keyword": "And "
});
formatter.match({
  "location": "PaintBudgetCalculator.click_on_Panit_Budget_Calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calculator page is Visible",
  "keyword": "Then "
});
formatter.match({
  "location": "PaintBudgetCalculator.calculator_page_is_Visible()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Quick Calculator",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Paint_Budget_Calculator"
    },
    {
      "name": "@Quick_Calculator"
    }
  ]
});
formatter.step({
  "name": "User select the Specification of Home",
  "keyword": "When "
});
formatter.match({
  "location": "PaintBudgetCalculator.user_select_the_Specification_of_Home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the Carpet Area",
  "keyword": "When "
});
formatter.match({
  "location": "PaintBudgetCalculator.user_enter_the_Carpet_Area()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Calculate Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "PaintBudgetCalculator.click_on_Calculate_Now_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see litres of Paint and Price of Paint",
  "keyword": "Then "
});
formatter.match({
  "location": "PaintBudgetCalculator.user_able_to_see_litres_of_Paint_and_Price_of_Paint()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Navigate to the Calculator page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user in the Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "PaintBudgetCalculator.user_in_the_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User hover the mouse on Paints and Colours",
  "keyword": "When "
});
formatter.match({
  "location": "PaintBudgetCalculator.user_hover_the_mouse_on_Paints_and_Colours()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Paint Budget Calculator",
  "keyword": "And "
});
formatter.match({
  "location": "PaintBudgetCalculator.click_on_Panit_Budget_Calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Calculator page is Visible",
  "keyword": "Then "
});
formatter.match({
  "location": "PaintBudgetCalculator.calculator_page_is_Visible()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Advanced Calculator",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Paint_Budget_Calculator"
    },
    {
      "name": "@Advanced_Calculator"
    }
  ]
});
formatter.step({
  "name": "User Select the advanced calculator",
  "keyword": "When "
});
formatter.match({
  "location": "PaintBudgetCalculator.user_Select_the_advanced_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the measurements of the home",
  "keyword": "When "
});
formatter.match({
  "location": "PaintBudgetCalculator.user_enter_the_measurements_of_the_home()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Calculate Button",
  "keyword": "And "
});
formatter.match({
  "location": "PaintBudgetCalculator.click_on_Calculate_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the total price to paint their home",
  "keyword": "Then "
});
formatter.match({
  "location": "PaintBudgetCalculator.user_able_to_see_the_total_price_to_paint_their_home()"
});
formatter.result({
  "status": "passed"
});
});