package test1;

import java.util.Scanner;

public class Rectangle {
	private double base;
	private double height;
	private static Scanner scan = new Scanner(System.in);
	public Rectangle(double base, double height) {
		this.base=base;
		this.height=height;
	}
	private double getArea() {
		return this.base*this.height;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("enter dimentions for a frist rectangle");
		Rectangle rectangle1= createRectangle();
		System.out.println("enter dimentions for a secound rectangle");
		Rectangle rectangle2= createRectangle();
		System.out.println("the area of the first rectangle is "+ rectangle1.getArea());
		System.out.println("the area of the secound rectangle is "+ rectangle2.getArea());
		
	}
	private static Rectangle createRectangle() {
		System.out.println("enter base");
		double base=scan.nextDouble();
		scan.nextLine();
		System.out.println("enter height");
		double height=scan.nextDouble();
		scan.nextLine();
		return new Rectangle(base, height);
	}

}
