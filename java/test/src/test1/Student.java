package test1;
//Create a class named Student that can hold the data for a single student from the following table. Write a parameterized constructor to get the values in instance variables while creating student objects. Write a method to display all the fields of each student and then write another method (getAverage) that returns the average of three subjects.

//Student ID 
// First Name 
//Last Name  
//Student Email
//Subject 1 
//Subject 2
//Subject 3
//0001
//Todd
//Hopkins
//Thop@gmail.org
//90.5
//80.0
//70.0
//0002
//Mario
//Wells/
//Wario@gmail.org
//80.3
//80.5
//100.0

public class Student {
//Create a class named Student that can hold the data for a single student from the following table. 
//Write a parameterized constructor to get the values in instance variables while creating student objects. 
//Write a method to display all the fields of each student and then write another method (getAverage) that returns the average of three subjects.
	private int id ;
	private String fName;
	private String lName;
	private String email;
	private double gradeSubject1;
	private double gradeSubject2;
	private double gradeSubject3;
	
	public Student() {}
	public Student(int id , String fName,String lName,String email,double gradeSubject1, double gradeSubject2,double gradeSubject3) {
		this.id =id;
		this.fName=fName;
		this.lName=lName;
		this.email=email;
		this.gradeSubject1=gradeSubject1;
		this.gradeSubject2=gradeSubject2;
		this.gradeSubject3=gradeSubject3;
		
	}
	private void displayStudent() {
		System.out.println("Student's id :"+this.id);
		System.out.println("Student's First Name :"+this.fName);
		System.out.println("Student's Last Name :"+this.lName);
		System.out.println("Student's Email :"+this.email);
		System.out.println("Student's Score from first subject  :"+this.gradeSubject1);
		System.out.println("Student's Score from second subject :"+this.gradeSubject2);
		System.out.println("Student's Score from third subject :"+this.gradeSubject3);
	}
	private double getAverage() {
		return (this.gradeSubject1+this.gradeSubject2+this.gradeSubject3)/3;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Student studentOne= new Student(0001,"Todd","Hopkins","Thop@gmail.org",90.5,80.0,70.0);
		Student studenttwo= new Student(0002,"Mario","Wells","Wario@gmail.org",80.3,80.5,100.0);
		studentOne.displayStudent();
		studenttwo.displayStudent();
		System.out.println("the average for student one is "+ studentOne.getAverage());
		System.out.println("the average for student two is "+ studenttwo.getAverage());
	}

}
