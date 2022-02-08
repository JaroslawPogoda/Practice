import java.util.Scanner;
public class modthreedaythreepractice {
/*
 Take a number of rows from the user. Write a for loop for each output below (for this example, the user wanted five rows): 
 1                                             54321
 12                                           4321
 123                                         321
 1234                                       21
 12345                                     1
Take a number from the user and print the first 10 multiples of that number.
*/
    private static Scanner myObj = new Scanner(System.in);
    public static void main(String[] args){
        System.out.println("Enter number of rows");
        int num_rows = myObj.nextInt();
        exercise7(num_rows);
        System.out.println("Enter number I will print first 10 multiples");
        int number = myObj.nextInt();
        exercise1(number);
    }
    public static void exercise1(int number) {
        for (int i = 1; i <=10; i++) {
            System.out.println(number + " x " + i+" = " +(number * i));
        }
    }
    public static void exercise2(){}
    public static void exercise7(int rows){
       
        for(int i=1; i<=rows;i++){
            for(int j=1; j<=i;j++){
                System.out.print(i);
            }
            for(int t=0; t<=rows-i; t++){
                System.out.print(" ");
            }
            for(int k=rows; k>=i;k--){
                System.out.print(i);
            }
            System.out.println("");
        }
        
    }
}
