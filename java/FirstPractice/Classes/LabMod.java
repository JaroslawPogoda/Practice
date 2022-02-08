

import java.util.Scanner;

public class LabMod{
    private static Scanner myObj = new Scanner(System.in);
    
    public static void main(String[] args){
        excercise1();
        excercise2();
        exercise3();
        exercise4();
        exercise5();
        exercise6();
        exercise7();
        exercise8();
    }
    public static void excercise1(){
        System.out.println("Enter 1st number");
        int number_1=Integer.parseInt(myObj.nextLine());
        System.out.println("Enter 2nd number");
        int number_2=Integer.parseInt(myObj.nextLine());
        int sum=number_1+number_2;
        int difference=number_1-number_2;
        int product=number_1*number_2;
        int quotient=number_1/number_2;
        int remainder=number_1%number_2;
        System.out.println("1. Add, subtract, multiply, and divide (quotient & remainder) two numbers and display the output");
        System.out.println("Sum of "+ number_1+" and "+ number_2+" is "+sum);
        System.out.println("Difference of "+ number_1+" and "+ number_2+" is "+difference);
        System.out.println("Product of "+ number_1+" and "+ number_2+" is "+product);
        System.out.println("Quotient of "+ number_1+" and "+ number_2+" is "+quotient);
        System.out.println("Remainder of "+ number_1+" and "+ number_2+" is" +remainder);

    }
    public static void excercise2(){
        System.out.println("2. Swap two numbers: Store two numbers in separate variables, display their initial values, swap them, and display them again.");
        System.out.println("Enter 1st number");
        int number_1=Integer.parseInt(myObj.nextLine());
        System.out.println("Enter 2nd number");
        int number_2=Integer.parseInt(myObj.nextLine());
        System.out.println("Numbers Entered"+ number_1+" and "+ number_2);
        int tempNumber=number_1;
        number_1=number_2;
        number_2=tempNumber;
        System.out.println(" After Swap numbers are :");
        System.out.println("Number 1="+number_1);
        System.out.println("Number 2="+number_2);
    }
    public static void exercise3(){
        System.out.println("3. Display the average of five numbers: Create five separate variables holding different numbers and find the average");
        System.out.println("Enter 1st number");
        int number_1=Integer.parseInt(myObj.nextLine());
        System.out.println("Enter 2nd number");
        int number_2=Integer.parseInt(myObj.nextLine());
        System.out.println("Enter 3rd number");
        int number_3=Integer.parseInt(myObj.nextLine());
        System.out.println("Enter 4th number");
        int number_4=Integer.parseInt(myObj.nextLine());
        System.out.println("Enter 5th number");
        int number_5=Integer.parseInt(myObj.nextLine());
        int average=(number_1+number_2+number_3+number_4+number_5)/5;
        System.out.println("Average of "+number_1+"+"+number_2+"+"+number_3+"+"+number_4+"+"+number_5+" is "+average);
    }
    public static void exercise4(){
        System.out.println("4. Write a Java program that display the larger of two integers. Store these numbers in variables.");
        System.out.println("Enter 1st number");
        int number_1=Integer.parseInt(myObj.nextLine());
        System.out.println("Enter 2nd number");
        int number_2=Integer.parseInt(myObj.nextLine());
        if(number_1>number_2){
            System.out.println("Number 1 is greater");
        }
        else if (number_1<number_2){
            System.out.println("Number 2 is greater");
        }
        else{
            System.out.println("Numbers are equal");
        }

    }
    public static void exercise5(){
        System.out.println("5. Display the largest of three numbers. ");
        System.out.println("Enter 1st number");
        int number_1=Integer.parseInt(myObj.nextLine());
        System.out.println("Enter 2nd number");
        int number_2=Integer.parseInt(myObj.nextLine());
        System.out.println("Enter 3rd number");
        int number_3=Integer.parseInt(myObj.nextLine());
        if(number_1>number_2&&number_2>=number_3){
            System.out.println("Number 1 is greatest, that number is "+number_1 );
        }
        else if(number_2>number_1&&number_1>=number_3){
            System.out.println("Number 2 is greatest, that number is "+number_2);
        }
        else if(number_3>number_2&&number_2>=number_1){
            System.out.println("Number 3 is greatest, that number is "+number_3);
        }
        else{
            System.out.println("Numbers are equal");
        }
    }
    public static void exercise6(){
        System.out.println("6. Determine if a number is negative, positive, or zero. ");
        System.out.println("Enter 1st number");
        int number_1=Integer.parseInt(myObj.nextLine());
        if (number_1>0){
            System.out.println("Number is positive");
        }
        else if (number_1<0){
            System.out.println("Number is negative");
        }
        else{
            System.out.println("Number is zero");
        }
    }
    public static void exercise7(){
        System.out.println("7. Determine if a number is even or odd. ");
        System.out.println("Enter 1st number");
        int number_1=Integer.parseInt(myObj.nextLine());
        if(number_1%2==0){
            System.out.println("Number is even");
        }
        else{
            System.out.println("Number is odd");
        }
    }
    public static void exercise8(){
        System.out.println("8. Store a value in a variable called age. Determine if a person with the given age is eligible to vote (18 years old)");
        System.out.println("Enter age");
        int age=Integer.parseInt(myObj.nextLine());
        if(age>=18){
            System.out.println("You are eligible to vote");
        }
        else{
            System.out.println("Sorry, you are not eligible to vote");
        }

    }
}