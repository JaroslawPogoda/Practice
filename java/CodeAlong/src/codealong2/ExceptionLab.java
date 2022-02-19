package codealong2;

public class ExceptionLab {

	public ExceptionLab() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String [] args) {
//		StringIndexOutOfBoundsException
//		NullPointerException
//		ArrayIndexOutOfBoundsException
//		ArithmeticException
//		NumberFormatException
//		IllegalArgumentException
		String firstException="thajsfs  safann";
				try {
					if(firstException.charAt(firstException.length())=='a') {
						System.out.println("impossible");
					}
				}
				catch(StringIndexOutOfBoundsException sioobe) {
					System.out.println(" u are out of bounds of string try again. \n Message : "+sioobe.getMessage());
				}
	
		Object blah=null;
		try {
			blah.toString();
			
		}
		catch(NullPointerException npe) {
			System.out.println(" Object you are trying to access is null. \n Message : "+npe.getMessage());
		}
		int[] arr=new int[42];
		try {
			if(arr[arr.length]==131) {
				System.out.println("how did u do that?");
			}
			else {
				
			}
		}
		catch(ArrayIndexOutOfBoundsException aioobe) {
			System.out.println(" u are out of bounds of array try again. \n Message : "+aioobe.getMessage());
		}
		int a = 0;
		double b= 3.1;
		try {
			double division = a/b;
		}
		catch(ArithmeticException ae ) {
			System.out.println("are u trying to divide by 0. \n Message : " +ae.getMessage() );
		}
		String numString= "12312adasa";
		try {
			int numInt=Integer.parseInt(numString);
		}
		catch(NumberFormatException nfe) {
			System.out.println("check your string its not proper format. \n Message : "+nfe.getMessage());
		}
		try {
			throwingIllegalArgumentException(null);
		}
		catch(IllegalArgumentException iae) {
			System.out.println("check your argument its not proper format. \n Message : "+iae.getMessage());
		}
	}
	public static void throwingIllegalArgumentException(String s) {
		if(s==null) {
			throw new IllegalArgumentException("string should not be null");
		}
	}
}
