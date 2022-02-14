package test1;

public class Player {
	static String country="USA";
	String name;
	String sport;
	int keynum;
	String rank;
	boolean active;
	char gender;
	int age;
	
	 
	public Player() {}
	public Player(String name,String sport,int keynum,String rank,boolean active,char gender,int age) {
		this.name=name;
		this.sport=sport;
		this.keynum=keynum;
		this.rank=rank;
		this.active=active;
		this.gender=gender;
		this.age=age;
	}
	
	// defining object methods
	public void display(Player p)
	{
	   System.out.println("player name :"+p.name);
	   System.out.println("player rank :"+p.rank);
	   System.out.println("Is the player active :"+p.active);
	   System.out.println();
	  // System.out.println("player country :"+ country); 
	   
	}
	public void display() {
		System.out.println("player name :"+this.name);
		   System.out.println("player rank :"+this.rank);
		   System.out.println("Is the player active :"+this.active);
		   System.out.println();
	}
	
	 public static void country()
	 {
		 System.out.println("Displaying  all the players from :"+ country);
		 System.out.println();
		 
	 }
	
	public int getAge() {
		return this.age;
	}
	public void setAge(int age) {
		this.age=age;
	}
	public static void main(String[] args) {
		 
		Player p1 = new Player("Jack","Football",99,"Ex team leader",false,'M',21);
		Player p2 = new Player();
		Player p3 = new Player("JP","E-sport:fifa",1,"Player",true,'M',29);
		
		p2.name = "Sophie";
		p2.sport ="Soccer";
		p2.keynum = 99;
		p2.rank = "Attacker";
		p2.active = true;
		p2.gender = 'F';
		p2.age=26;
		
		country();
		
       p1.display(p1);
       p2.display(p2);
       p3.display();
       p3.setAge(31);
       System.out.println(p3.getAge());
		
	}
	
	

}
