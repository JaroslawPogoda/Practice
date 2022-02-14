package test1;

public class Testclass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(add(3,5));
		System.out.println(add(32.52,131));
		System.out.println(add(4,5,6));
	}
	static int add(int a, int b) {
		return a+b;
		
	}
	static double add(double a, int b) {
		return a+b;
		
	}
	static int add(int a, int b, int c) {
		return a+b+c;
		
	}
}
