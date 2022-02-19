package codealong2;

public class Employee extends Person implements PersonInterface{
  int emp_id;
  double emp_salary;
  
  
  Employee()
  {
	  
  }
  
  
  Employee(int id, String name,int age, char gender,double salary)
  {
	 
	 super(name,age,gender);
	 emp_id=id;
	 emp_salary=salary;
  }
  


public void display()
{
	//System.out.println(ORGINIZATION);
	System.out.println("-------------");
	System.out.println("Id : "+this.emp_id);
	super.display();
	System.out.println("Salary : "+this.emp_salary);
	System.out.println();
	
}



public double calculate(int bonus) {
	double  netsalary= bonus+ this.emp_salary;
	return netsalary;
}

public int compute(int num1, int num2)
{
	int time= num2-num1;
	return time;
}


void calculate(double n1, double n2)
{
	System.out.println(n1+n2);
}


@Override
public void talk(String msg) {
	// TODO Auto-generated method stub
	System.out.println("hello my name is "+pname+" I work here and I am "+page+". \n my message to you is "+msg);
}
  
}
