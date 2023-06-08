package com.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		junit="--step-notifications",
		plugin = {"pretty","json:target/Cucumber.json",                            //JSON, XML and HTML reports
				"junit:target/Cucumber.xml",
				"html:target/Cucumber.html",
				"html:test-output"},
		features ="src\\test\\resources\\Features",                               //path of the feature file
		glue= {"com.step_definitions"},	                                          //package name of step definition file
		tags = {"@Colour_Catalogue,@Paint_Budget_Calculator, @Exterior_Paints"}   //tags want to run
		)

public class AsianPaintsTestRunner {	
	
}
