package test1;

import java.util.Scanner;

public class ArraysLab {
	private static Scanner scan= new Scanner(System.in);
	public static void main(String[] args) {
		avrg();
		howManyOccurances();
		copyArray();
		checkOccuranceOfIntegerInArray();
	}
	//1) Display the average of a given integer array
	public static void avrg() {
		System.out.println("the problem is :\n 1) Display the average of a given integer array");
		System.out.println("Enter size of the array");
		int size=scan.nextInt();
		scan.nextLine();
		if(size<1) {
			System.err.println("error");
		}
		else {
			int numArray[]= new int[size];
			int sum =0;
			for ( int i = 0 ; i<size;i++) {
				System.out.println("enter a number");
				numArray[i]= scan.nextInt();

				sum+=numArray[i];
				scan.nextLine();
			}
			System.out.println("the average of the numbers you have given is " + (sum/size));	
		}
	}

	//2) Display the number of times a user entered string is found in the given string array. 
	public static void howManyOccurances() {
		System.out.println("The problem is :2) Display the number of times a user entered string is found in the given string array.");
		String someString= "If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.For writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears. There are a number of different ways a writer can use the random sentence for creativity. The most common way to use the sentence is to begin a story. Another option is to include it somewhere in the story. A much more difficult challenge is to use it to end a story. In any of these cases, it forces the writer to think creatively since they have no idea what sentence will appear from the tool. For those writers who have writers' block, this can be an excellent way to take a step to crumbling those walls. By taking the writer away from the subject matter that is causing the block, a random sentence may allow them to see the project they're working on in a different light and perspective. Sometimes all it takes is to get that first sentence down to help break the block. It can also be successfully used as a daily exercise to get writers to begin writing. Being shown a random sentence and using it to complete a paragraph each day can be an excellent way to begin any writing session. Random sentences can also spur creativity in other types of projects being done. If you are trying to come up with a new concept, a new idea or a new product, a random sentence may help you find unique qualities you may not have considered. Trying to incorporate the sentence into your project can help you look at it in different and unexpected ways than you would normally on your own. It can also be a fun way to surprise others. You might choose to share a random sentence on social media just to see what type of reaction it garners from others. It's an unexpected move that might create more conversation than a typical post or tweet. These are just a few ways that one might use the random sentence generator for their benefit. If you're not sure if it will help in the way you want, the best course of action is to try it and see. Have several random sentences generated and you'll soon be able to see if they can help with your project. Our goal is to make this tool as useful as possible. For anyone who uses this tool and comes up with a way we can improve it, we'd love to know your thoughts. Please contact us so we can consider adding your ideas to make the random sentence generator the best it can be.";
		System.out.println("the string you are working with is : "+ someString);
		System.out.println("enter string that you want to find occurance of");
		String some_string_to_be_found=scan.nextLine();
		int lastIndex= someString.lastIndexOf(some_string_to_be_found);
		int index = someString.indexOf(some_string_to_be_found);
		int count =0 ; 
		if(lastIndex==-1) {
			System.out.println("sorry the string was not found");
		}
		else if(lastIndex==index) {
			System.out.println("the string occured only one time");
		}
		else {
			while (index!=(lastIndex+some_string_to_be_found.length()-1)) {
				System.out.println(index);
				System.out.println(lastIndex);
				index=someString.indexOf(some_string_to_be_found,index)+(some_string_to_be_found.length()-1);
				if(index!=-1) {
					count++;
				}

			}
			System.out.println("the string has occured "+count+" times.");
		}

	}
//3) Copy one array into another (without any built-in method) and display the new array
	@SuppressWarnings("null")
	public static void  copyArray() {
		System.out.println("problem : 3) Copy one array into another (without any built-in method) and display the new array.");
		System.out.println("enter size of int array");
		int size = scan.nextInt();
		scan.nextLine();
		int numArray[]= new int[size];
		int copyArray[] = new int[numArray.length];
		for(int i = 0 ; i < size; i++) {
			numArray[i]= scan.nextInt();
			scan.nextLine();
		}
		System.out.println(" Copy of array is completed" );
		for (int i=0; i<size;i++) {
			copyArray[i]=numArray[i];
			System.out.print(copyArray[i]);
		}
		System.out.println("");
		
		
	}
	// in user entered array find user  entered numbeer and display all occurances and locations
	//4) In a given integer array, look for the user entered number and print in which array locations that number was found
	public static void checkOccuranceOfIntegerInArray() {
		System.out.println("problem :4) In a given integer array, look for the user entered number and print in which array locations that number was found");
		System.out.println("enter size of int array");
		int size = scan.nextInt();
		scan.nextLine();
		int numArray[]= new int[size];
		for(int i = 0 ; i < size; i++) {
			System.out.println("enter number");
			numArray[i]= scan.nextInt();
			scan.nextLine();
		}
		System.out.println("enter number you are looking for:");
		int findInt=scan.nextInt();
		scan.nextLine();
		int count =0;
		System.out.println("the integer "+findInt+" is located at");
		for(int i = 0 ; i < size; i++) {
			if(findInt==numArray[i]) {
				System.out.print(i+" ");
				count++;
			}
		}
		System.out.println(" it occured "+count+" times.");
	}
}
