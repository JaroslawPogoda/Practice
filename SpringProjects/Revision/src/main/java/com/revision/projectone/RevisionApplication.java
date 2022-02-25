package com.revision.projectone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class RevisionApplication {

	public static void main(String[] args) {
		//ConfigurableApplicationContext context = 
		ConfigurableApplicationContext context = SpringApplication.run(RevisionApplication.class, args);
		Student s1= context.getBean(Student.class);
		//Student s2= context.getBean(Student.class);
		Teacher t1= context.getBean(Teacher.class);
		School school1= context.getBean(School.class);
		School school2= context.getBean(School.class);
		school1.setDistrictnum(13);
		school1.setSlocation("Brooklyn");
		school1.setSname("Liberty High School");
		school2.setDistrictnum(15);
		school2.setSlocation("Brooklyn");
		school2.setSname("Liberty High School");
		s1.setSchool(school1);
		t1.setSchool(school2);
		s1.getSchool().display();
		t1.schoolinfo();
		
	}

}
