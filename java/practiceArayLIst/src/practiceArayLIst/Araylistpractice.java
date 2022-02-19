package practiceArayLIst;

import java.util.ArrayList;

public class Araylistpractice {
	public static void main(String[] args) {
		ArrayList <Dog> dogList = new ArrayList<Dog>() ;
		dogList.add(new Dog("wooth!","donny",true));
		dogList.add(new Dog("wosoth!","dadanny",true));
		dogList.get(0).bark();
		System.out.println(dogList.get(1).getName());
		try {
			dogList.get(2).bark();
		}
		catch(IndexOutOfBoundsException eoobe) {
			System.out.println("error occured \n Message: "+eoobe.getMessage());
		}
	}
}
