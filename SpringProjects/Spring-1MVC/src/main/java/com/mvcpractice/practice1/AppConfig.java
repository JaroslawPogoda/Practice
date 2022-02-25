package com.mvcpractice.practice1;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppConfig {

	public AppConfig() {
		// TODO Auto-generated constructor stub
	}
		@RequestMapping("/")
		public String home(){
			return "This is the home page";
		}
		
		
		@RequestMapping("/myfirst")
		public String first(){
			return "My first Web Applicication";
		}
			
			
	    @RequestMapping("/hello")
		public String hello(){
	    	return "Hello World!!";
		}
	@RequestMapping("/youssouf")
	public String msgYoussouf() {
		return "this is a message to a youssouf";
	}
}
