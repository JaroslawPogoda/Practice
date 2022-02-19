/**
 * 
 */
package CodeAlongSession1;

/**
 * @author jarek
 *
 */
public class Car {
	private static int minAge=18;
	private String make;
	private String model;
	private int year;
	// access modifiers : protected default private public 
	/**
	 * 
	 */
	public Car() {
		// TODO Auto-generated constructor stub
	}
	public String getMake() {
		return make;
	}
	public void setMake(String make) {
		this.make = make;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	@Override
	public String toString() {
		return "Car make=" + make + ", model=" + model + ", year=" + year + "";
	}
	public static int minAge() {
		System.out.println("minimum age to drive "+ minAge);
		return minAge;
	}

}
