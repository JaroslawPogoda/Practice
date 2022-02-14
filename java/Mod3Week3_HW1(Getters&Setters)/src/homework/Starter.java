package homework;

public class Starter {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Computer c1= new Computer("viper3 ","ryzen5800","rtx3080",2000,"Jill Smith");
		Computer c2= new Computer("viper3 ","ryzen5800","rtx3080",2000,"Jill Smith");
		System.out.println("cpu of computer 1 "+c1.getCpu());		
		System.out.println("gpu of computer 1 "+c1.getGpu());		
		System.out.println("price of computer 1 "+c1.getPrice());		
		System.out.println("name of computer 1 "+c1.getName());		
		System.out.println("owner of computer 1 "+c1.getOwner());		
		System.out.println("cpu of computer 1 "+c2.getCpu());		
		System.out.println("gpu of computer 1 "+c2.getGpu());		
		System.out.println("price of computer 1 "+c2.getPrice());		
		System.out.println("name of computer 1 "+c2.getName());		
		System.out.println("owner of computer 1 "+c2.getOwner());
		System.out.println("current version of systems is :");
		Computer.osVersion();
		System.out.println("updating to windows 11");
		Computer.updateOperatingSystems("windows 11");
		System.out.println("current version of systems is :");
		Computer.osVersion();
	}

}
