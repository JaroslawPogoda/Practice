package test1;

public class test2 {
	private static int size = 26;
	private static int [][] maped= new int[size][size];
	public static void main(String[] args) {
		createMap();
		getMap();

	}
	public static int getRandomNumber(int min, int max) {
	    return (int) ((Math.random() * (max - min)) + min);
	}
	//create topography 
	public static void createMap() {
		
		for(int i = 0 ; i<size; i++) {
			for(int j = 0 ; j<size;j++) {
				maped[i][j]=getRandomNumber(-1 , 6);
			}
		}
		
	}
	// print topograhy
	public static void getMap() {
		for(int i = 0 ; i<size; i++) {
			for(int j = 0 ; j<size;j++) {
				System.out.print(maped[i][j]);
			}
			System.out.println();
		}
	}

}
