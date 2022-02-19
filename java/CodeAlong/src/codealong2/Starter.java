package codealong2;

public class Starter {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Employee emp1=new Employee(1231, "juan",21 , 'M',1231231.31);
		Employee emp2=new Employee(131, "jack",31 , 'M',91231.11);
		Student stu1=new Student(911789,"kiki",13,'F',91,99,88);
		Student stu2=new Student(911989,"dodo",15,'M',96,97,98);
		Teacher ta1=new Teacher(234567,"Math", 987654321, "lola", 41, 'F');
		Teacher ta2=new Teacher(123456,"physics", 987654322, "nano", 56, 'M');
		emp1.display();
		emp2.display();
		stu1.display();
		stu2.display();
		ta1.display();
		ta2.display();
		ta1.talk("today in class we will learn about "+ta1.getSubject()+"\n take your sit.");
		stu2.talk("I would like to ask question ");
		emp1.talk("I do not think so");
	}

}
