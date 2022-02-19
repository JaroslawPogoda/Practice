package codealong2;

public class Person {
   static int  count=0;
	
   String pname;
   int page;
   char pgender;
    
    
    public Person()
    {
    	//count++;
    	this("Peter",34,'M');
    }
    
    
    public Person(String name, int age, char gender)
    {
    	pname=name;
    	page=age;
    	pgender=gender;
    	count++;
    }   
    
    public void Hello()
    {
    	System.out.println("Hello there!!");
    }
    
    
    public void display()
    {
    	System.out.println("Name : "+this.pname);
    	System.out.println("Gender : "+this.pgender);
    	System.out.println("Age : "+this.page);
    	    	
    }
    public boolean travelingStatus(boolean traveling) {
    	if (traveling) {
    		System.out.println("traveling");
    	}
    	else {
    		System.out.println("remote");
    	}
		return traveling;
    }
    
    
    
//   public void display(Person obj)
//    {
//  	System.out.println("within parameterized display...");
//  	System.out.println("Name : "+obj.pname);
//
//    }
    
   double calculate(int num)
    {
    	System.out.println("calculate inside parent class");
    	return 121.33;
    }
    
    public  static  void totalPerson()
    {
    	System.out.println("total person objects are:"+ count);
    }
    
    


}
