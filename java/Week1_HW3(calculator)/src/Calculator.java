import java.util.Scanner;

/**
 * @Objective : Write a program to create a calculator that can Add, Subtract, Multiply, and Divide 2 numbers entered by the user. Also, add an option to exit out from the program.
 * 
  *OPTIONS

*1. Add

2. Subtract

3. Multiply

4. Divide

5. Exit

 

1. Write different methods for each module (add, subtract, multiply, and divide).

2. Use switch/case to call the particular method.

3. Take input inside the methods to perform the related operation.

4. Return the answer and display it inside the main method.

5. Display a default message (ex. "Invalid Entry, Try Again") if any number other than 1-5 is entered by the user
 */

/**
 * @author jarek
 *
 */
public class Calculator {
	/**
	 * @private variables
	 */
	private static Scanner scan = new Scanner(System.in);
	/**
	 * @param args
	 */
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		double total=0;
		String userChoice= "";
		System.out.println(" hi hello wellcome to my calculator");
		while(true) {
			
			System.out.println("Type add for addition");
			System.out.println("Type subtract for Subraction");
			System.out.println("Type multiply for Multiplication");
			System.out.println("Type divide for Division");
			System.out.println("Type result for Results");
			System.out.println("Type exit to exit calculator");
			userChoice=scan.nextLine();
			switch(userChoice.toUpperCase()) {
			case "ADD":{
				total=add(total);
				break;
			}
			case "SUBTRACT":{
				total=subtract(total);
				break;
			}
			case "MULTIPLY":{
				total=multiply(total);
				break;
			}
			case "DIVIDE":{
				total=divide(total);
				break;
			}
			case"RESULT":{
				result(total);
				break;
			}
			case "EXIT":{
				result(total);
				System.out.println("thank you for using JP's awesome calculator"); 
					
				System.exit(0);
			}
			default:{
				System.out.println("Wrong input try again");
				break;
			}
			}
		}
	}
	private static double add(double total) {
		System.out.println("currently total is " +total);
		System.out.println("what number do you want to add");
		try {
		total+=scan.nextDouble();
		}
		catch(Exception e) {
			System.err.print("error error errror try entering numbers");
		}
		scan.nextLine();
		return total;
	}
	private static double subtract(double total) {
		System.out.println("currently total is " +total);
		System.out.println("what number do you want to add");
		try {
			total+=scan.nextDouble();
		}
		catch(Exception e) {
			System.err.print("error error errror try entering numbers");
		}
		scan.nextLine();
		return total;
	}
	private static double multiply(double total) {
		System.out.println("currently total is " +total);
		System.out.println("what number do you want to add");
		try {
			total+=scan.nextDouble();
		}
		catch(Exception e) {
			System.err.print("error error errror try entering numbers");
		}
		scan.nextLine();
		return total;
	}
	private static double divide(double total) {
		System.out.println("currently total is " +total);
		System.out.println("what number do you want to add");
		try {
			total+=scan.nextDouble();
		}
		catch(Exception e) {
			System.err.print("error error errror try entering numbers");
		}
		scan.nextLine();
		return total;
	}
	private static void result(double total) {
		System.out.println("currently total is " +total);
	}
	
}
