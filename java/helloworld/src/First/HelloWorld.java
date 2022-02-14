/**
 * 
 */
package First;

import java.util.Scanner;

/**
 * @author Jaroslaw Pogoda
 *
 */
public class HelloWorld {
	private static Scanner scan = new Scanner(System.in);
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Hello world");
		exercise1();
		exercise2();
		exercise3();
		exercise4();
		exercise5();
	}
	private static void exercise1() {
		System.out.println("please enter a sentence:");
		String sentence=scan.nextLine();
		System.out.println("the number of characters in the string is: "+sentence.replaceAll("\\s","").length());
		int i = 0 ; 
		while()
	}
	private static void exercise2() {
		String stringToIterate= "Hello World";
		for (int i = 0 ;  i < stringToIterate.length();i++) {
			System.out.println(stringToIterate.charAt(i));
		}
	}
	private static void exercise3() {
		//Take two strings form the user and compare if they're equal or not. Display a message saying the strings are equal or not equal
		System.out.println("Enter 1st String :");
		String firstString= scan.nextLine();
		System.out.println("Enter 2nd String :");
		String secoundString= scan.nextLine();
		if(firstString.equalsIgnoreCase(secoundString)) {
			System.out.println("Strings are equal");
		}
		else {
			System.out.println("Strings are not equal");
		}
	}
	private static void exercise4() {
		//Print a given string in reverse order without using the reverse( ) method
		String toreverse=scan.nextLine();
		System.out.println("Reverse of that string is :");
		for(int i =toreverse.length()-1  ; i>=0;i--) {
			System.out.print(toreverse.charAt(i));
			
	}
	}
	private static void exercise5() {
		//5. Print the total number of consonants and vowels in a given string 
		//a, e, i, o, u
		System.out.println("enter a string I will count vowels and consonants for you");
		String userInput= scan.nextLine();
		int numOfVowels=0;
		int numOfConsonants=0;
		for(int i = 0; i<userInput.length();i++) {
			if(userInput.charAt(i)=='a'||userInput.charAt(i)=='e'||userInput.charAt(i)=='i'||userInput.charAt(i)=='o'||userInput.charAt(i)=='u') {
				numOfVowels++;
			}
			else if(userInput.charAt(i)==' ') {
				
			}
			else {
				numOfConsonants++;
			}
		}
		System.out.println("Number of vowels in your string is "+ numOfVowels+", and number of consonants is " + numOfConsonants);
	}
}
