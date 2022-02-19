package CodeAlongSession1;

import java.util.Date;

public class Players {
	static String country="USA";
	String name;
	String sport;
	int keynum;
	String rank;
	boolean active;
	char gender;
	int age;
	Date date = new Date();
	Computer comp;
	Address addr;
	Car car;
	
	
	 //empty constructor
	public Players() {
		addr = new Address();
		comp = new Computer();
		car = new Car();
	}
	
	
	// defining object methods
	public void display(Players p)
	{
	   System.out.println("player name :"+p.name);
	   System.out.println("player rank :"+p.rank);
	   System.out.println("Is the player active :"+p.active);
	   System.out.println("Joining date :"+p.date);
	   System.out.println("Address street :"+p.addr.getStreet());
	   System.out.println("Address city :"+addr.getCity());
	   System.out.println(comp);
	   System.out.println(addr.toString());
	   if(Car.minAge()>=p.age) {
		   System.out.println(car);
	   }
	   else
       {
		   System.out.println("is not eligible");
       }
	   System.out.println();
	     
	}
	
	
	
	public void display()
	{
		   System.out.println("player name :"+name);
		   System.out.println("player rank :"+rank);
		   System.out.println("Is the player active :"+active);
		   System.out.println("Joining date :"+date);
		   System.out.println("Address street :"+addr.getStreet());
		   System.out.println("Address city :"+addr.getCity());
		   System.out.println(comp);
		   System.out.println(addr.toString());
		   System.out.println(car);
		   System.out.println();
		   
	}
	
	
	 public static void country()
	 {
		 System.out.println("Displaying  all the players from :"+ country);
		 System.out.println();
		 
	 }
	
	
	public static void main(String[] args) {
		 
		Players p1 = new Players();
		Players p2 = new Players();
		
		
		
		p1.name = "Jack";
		p1.sport ="Football";
		p1.keynum = 99;
		p1.rank = "Ex team leader";
		p1.active = false;
		p1.gender = 'M';
		p1.age=16;
		p1.addr.setStreet("123 some street");
		p1.addr.setCity("Robbinsville");
		p1.comp.setCpu("Intel i9 12900k");
		p1.comp.setGpu("Nvidia RTX 3090ti");
		p1.comp.setBrand("Dell");
		p1.comp.setRamMem(256);
		p1.car.setMake("Batmobile");
		p1.car.setYear(1966);
		p1.car.setModel("Model1");
		
		
		p2.name = "Sophie";
		p2.sport ="Soccer";
		p2.keynum = 99;
		p2.age=19;
		p2.rank = "Attacker";
		p2.active = true;
		p2.gender = 'F';
		p2.addr.setStreet("232 nice street");
        p2.addr.setCity("NYC");
        p2.comp.setCpu("Ryzen 5900x");
        p2.comp.setGpu("AMD Radeon 6900XT");
        p2.comp.setBrand("HP");
        p2.comp.setRamMem(2048);
        p2.car.setMake("Joker Mobile");
		p2.car.setYear(1976);
		p2.car.setModel("Model2");
		
        country();
		Car.minAge();
       p1.display(p1);
       p2.display(p2);
       
       System.out.println();
       System.out.println("testing the display method");
       System.out.println();
       
       p1.display();
       p2.display();
     
		
	}
	
	

}
