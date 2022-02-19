package practiceArayLIst;

public class Dog {
	private static int num_legs=4;
	private static boolean tail=true;
	private static boolean fur=true;
	private static int num_eyes=2;
	private static int num_ears=2;

	private String barkingSound;
	private String name;
	private boolean physicallyInjured;
	
	public Dog(String barkingSound, String name, boolean physicallyInjured) {
		super();
		this.barkingSound = barkingSound;
		this.name = name;
		this.physicallyInjured = physicallyInjured;
	}
	@Override
	public String toString() {
		return "Dog [barkingSound=" + barkingSound + ", name=" + name + ", physicallyInjured=" + physicallyInjured
				+ "]";
	}
	public static String generalDogCharacteristics() {
		return "Number of legs expected "+ num_legs+" does it have a tail "+tail+"does it have a fur "+ fur + " number of ears "+ num_ears+ " number of eyes : "+ num_ears;  
	}
	public void bark() {
		System.out.println(barkingSound);
	}
	public String getBarkingSound() {
		return barkingSound;
	}
	public void setBarkingSound(String barkingSound) {
		this.barkingSound = barkingSound;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isPhysicallyInjured() {
		return physicallyInjured;
	}
	public void setPhysicallyInjured(boolean physicallyInjured) {
		this.physicallyInjured = physicallyInjured;
	}
	
}
