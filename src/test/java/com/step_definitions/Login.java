package com.step_definitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.driversetup.SetUpDriver;
import com.pagefactory.LoginPageFactory;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
	WebDriver driver;
	
	LoginPageFactory lpf;
	
	@Given("User is on the Home Page")
	public void user_is_on_the_Home_Page() {
		driver=SetUpDriver.chromeDriver();
		driver.navigate().to("https://www.asianpaints.com/");
		System.out.println("------ User in the Home Page ------");
	}
	
	@When("User click on the the profile icon")
	public void user_click_on_the_the_profile_icon() {
	   lpf = new LoginPageFactory(driver);
	   lpf=PageFactory.initElements(driver, LoginPageFactory.class);
	   lpf.loginIcon();
	   System.out.println("------ Log in Icon is clicked ------");
	}

	@When("User enter the mobile number")
	public void user_enter_the_mobile_number() {
		lpf.mobilenumber("7339433732");
		 System.out.println("------ Mobile Number Field ------");
	}

	@And("User click on submit button")
	public void user_click_on_submit_button() {
		lpf.submitButtonMobile();
		 System.out.println("------ Mobile Number is Submited ------");
	}

	@When("User enter the OTP")
	public void user_enter_the_OTP() {
		 System.out.println("------ OTP is Entered ------");
	}

	@And("User click on submit")
	public void user_click_on_submit() throws InterruptedException {
		lpf.submitButtonOtp();
		 System.out.println("------ OTP is Submitted ------");
	}

	@Then("Account is login successfully")
	public void account_is_login_successfully() {	
		 System.out.println("------ User is login successfully ------");
	}


	
}
