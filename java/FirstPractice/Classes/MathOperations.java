package Practice.java.FirstPractice.Classes;
class MathOperations{
    public static void main(String args[]){
        int number_1=Integer.parseInt(args[0]);
        int number_2=Integer.parseInt(args[1]);
        char Char_1=args[2].charAt(0);
        int sum=number_1+number_2;
        int difference=number_1-number_2;
        int product=number_1*number_2;
        int quotient=number_1/number_2;
        int remainder=number_1%number_2;

    }
}