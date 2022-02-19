/**
 * 
 */
package CodeAlongSession1;

/**
 * @author jarek
 *
 */
public class Computer {
	private String gpu;
	private String cpu;
	private String brand;
	private int ramMem; 
	
	public Computer() {
		// TODO Auto-generated constructor stub
	}
	public Computer(String gpu, String cpu, String brand, int ramMem) {
		super();
		this.gpu = gpu;
		this.cpu = cpu;
		this.brand = brand;
		this.ramMem = ramMem;
	}
	/**
	 * 
	 */

	public String getGpu() {
		return gpu;
	}
	public void setGpu(String gpu) {
		this.gpu = gpu;
	}
	public String getCpu() {
		return cpu;
	}
	public void setCpu(String cpu) {
		this.cpu = cpu;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public int getRamMem() {
		return ramMem;
	}
	public void setRamMem(int ramMem) {
		this.ramMem = ramMem;
	}
	@Override
	public String toString() {
		return "Computer GPU" + getGpu() + ", CPU:" + getCpu() + ", Brand:" + getBrand()
				+ ", Ram Memory:" + getRamMem() + ".";
	}
	
	
}
