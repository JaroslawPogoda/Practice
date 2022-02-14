package test1;

import java.util.Scanner;

public class SortingSingleDimentionalArray {
	private static int[] userArray;
	private static Scanner scan = new Scanner(System.in);
	public static void main(String[] args) {
		getArray();
		sortArray();
		printArray();
		
	}
	private static void getArray() {
		System.out.println("enter size:");
		int size= scan.nextInt();
		scan.nextLine();
		int[] arr= new int[size];
		for(int i =0 ; i<size;i++) {
			arr[i]=scan.nextInt();
			scan.nextLine();
		}
	}
	private static void sortArray() {
	for (int i = 0; i < userArray.length; i++) {
        int min = userArray[i];
        int minId = i;
        for (int j = i+1; j < userArray.length; j++) {
            if (userArray[j] < min) {
                min = userArray[j];
                minId = j;
            }
        }
        // swapping
        int temp = userArray[i];
        userArray[i] = min;
        userArray[minId] = temp;
    }
	}
	private static void printArray() {
		for(int i = 0 ; i<userArray.length; i++) {
			System.out.println(userArray[i]);
		}
	}
}
