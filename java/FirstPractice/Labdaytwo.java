
import java.util.Scanner;
public class Labdaytwo{

    private static Scanner myObj = new Scanner(System.in);
    public static void main(String[] args){
        exercise1();
        exercise2();
        exercise3();
        exercise4();
        exercise5();
        exercise6();
        exercise7();
        exercise8();
    }
    public static void exercise1(){
        System.out.println(" Write a for loop that runs 10 times and print the value of the controlling variable all on the same line");
        String controllingvariable=myObj.nextLine();  
        for(int i=0; i<10; i++){
            System.out.print(controllingvariable);
        }
    }
    public static void exercise2(){
    System.out.println("Write a for loop that iterates between 1 and 10, but counts by 2. Inside the loop, print your name on different lines");
        for(int i=1; i<=10; i+=2){
            System.out.println("Jaroslaw Pogoda");
        }
    }
    public static void exercise3(){
        System.out.println(" Write a for loop to print asterisk (*) 15 times on the same line");
        for(int i=1; i<=15; i++){
            System.out.print("*");
        }
    }
    public static void exercise4(){
        System.out.println("Write a for loop for the given output:");
        System.out.println("         1, 3, 5, 7, 9");
        System.out.println("         2, 4, 6, 8, 10");
        String output="";
        for(int i=1; i<=10;i++){
            if(i%2==1){
                if(i==1){
                    System.out.print(i);
                }
                else{
                    System.out.print(", "+i);
                }
            }
            else{
                if(i==2){
                    output+=i;
                }
                else{
                    output+=", "+i;
                }
            }
        }
    }
    public static void exercise5(){
        System.out.println(" Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end");
        int i = 1;
        int end=20;
        int sum=0;
        while(i<=end){
            sum+=i++;
        }
        System.out.println("sum = " + sum);
    }
    public static void exercise6(){
        System.out.println(" Use a while loop to print out the even number from 1 to 20");
        int i = 1;
        int end=20;
        int sum=0;
        while(i<=end){
            if(i%2==0){
                if(i==2){
                    System.out.print(i);
                }
                else{
                    System.out.print(", "+i);
                }
            }
            i++;
        }
    }
    public static void exercise7(){
        System.out.println(" Write a for loop to display the following outputs: ");
        System.out.println("  1                                         11111");
        System.out.println("  22                                        2222");
        System.out.println("  333                                       333");
        System.out.println("  4444                                      44");
        System.out.println("  55555                                     5");
        for(int i=1; i<=5;i++){
            for(int j=1; j<=i;j++){
                System.out.print(i);
            }
            for(int t=0; t<=10-i; t++){
                System.out.print(" ");
            }
            for(int k=5; k>=i;k--){
                System.out.print(i);
            }
            System.out.println("");
        }
        
    }
    public static void exercise8(){
        System.out.println("Write a for loop that iterates from 1 - 20. Should print 'prime' for all prime numbers.");
        for(int i= 1 ;i<=20;i++ ){
            if(isPrime(i)){
                System.out.println(i);
            }
        }
    }
    public static boolean isPrime(long n) {
        if(n < 2) return false;
        if(n == 2 || n == 3) return true;
        if(n%2 == 0 || n%3 == 0) return false;
        long sqrtN = (long)Math.sqrt(n)+1;
        for(long i = 6L; i <= sqrtN; i += 6) {
            if(n%(i-1) == 0 || n%(i+1) == 0) return false;
        }
        return true;
    }

}