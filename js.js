package EstructurasCondicionales_3_4;
import java.util.Scanner;
public class carasello {
    public static void main(String[] args) throws Exception {
        Scanner entrada=new Scanner(System.in);

        int a = (int) (Math.random() * 5 + 1);
        System.out.println(a);
            
        int moneda;

        System.out.println("eliga \n 1. para sello \n 2. para cara");
        moneda=entrada.nextInt();
        
        if(a==1 && moneda==1){
            System.out.println("Usted escogio sello por lo tanto gano");
        }
        else if(a!=1 && moneda==1){
            System.out.println("Usted escogio sello por lo tanto perdio");
        }
        else if(a==1 && moneda==2){
            System.out.println("Usted escogio  cara por lo tanto gano");
        }
        else if(a!=1 && moneda==2){
            System.out.println("Usted escogio cara por lo tanto perdio");
        }
        else{
            System.out.println("opcion incorrecta");
        }   
        entrada.close();
}
}
