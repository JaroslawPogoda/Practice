/**
 * 
 */
package codealong2;

/**
 * @author jarek
 *
 */
public class Teacher extends Person implements PersonInterface {
	private double tSalary;
	private String tSubject;
	private int tId;
	/**
	 * 
	 */
	public Teacher(double salary,String subject, int id, String name, int age, char gender) {
		// TODO Auto-generated constructor stub
		super(name,age,gender);
		tSalary=salary;
		tSubject=subject;
		tId=id;
	}

	public void display()
	{
		//System.out.println(ORGINIZATION);
		System.out.println("-------------");
		System.out.println("Id : "+this.tId);
		super.display();
		System.out.println("Salary : "+this.tSalary);
		System.out.println("Subject : "+this.tSubject);
		System.out.println();
		
	}

	@Override
	public double calculate(int bonus) {
		// TODO Auto-generated method stub
		return tSalary+bonus;
	}

	@Override
	public int compute(int n1, int n2) {
		//calcualte  grade
		return n1+n2;
	}

	public double gettSalary() {
		return tSalary;
	}

	public void settSalary(double tSalary) {
		this.tSalary = tSalary;
	}

	public String getSubject() {
		return tSubject;
	}

	public void settSubject(String tSubject) {
		this.tSubject = tSubject;
	}

	public int gettId() {
		return tId;
	}

	public void settId(int tId) {
		this.tId = tId;
	}

	@Override
	public void talk(String msg) {
		// TODO Auto-generated method stub
		System.out.println("My name is "+pname+" and I am "+page+". I am a teacher "+tSubject+". \n Message: "+msg);
	}
}
