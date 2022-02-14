package homework;

//- Create a Computer class that has 3 variables. The first variable will have a name. The second variable will be the year of the computer. Last variable will be the cost of the computer.
//
//- All 3 variables should be private instance variables and must use getters to retrieve the data and setters to set the variables.
//
//- Create at least two POJOs and use their getters and setters in the main method of a Starter class
//
//- Add at least one static method to your Computer class and give it some logic (be as creative as you like)
public class Computer {
	String name;
	static String operating_system="windows10";
	String cpu;
	String gpu;
	int price; 
	String owner;
	public Computer() {
	}
	public Computer(String name,String cpu, String gpu, int price, String owner) {
		this.name=name;
		this.cpu=cpu;
		this.gpu=gpu;
		this.price=price;
		this.owner=owner;
		
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public static void updateOperatingSystems(String operatingSystem) {
		operating_system=operatingSystem;
	}
	public static void osVersion() {
		System.out.println("the version of the operating system is :"+ operating_system);
	}
	public String getCpu() {
		return cpu;
	}
	public void setCpu(String cpu) {
		this.cpu = cpu;
	}
	public String getGpu() {
		return gpu;
	}
	public void setGpu(String gpu) {
		this.gpu = gpu;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	
}
