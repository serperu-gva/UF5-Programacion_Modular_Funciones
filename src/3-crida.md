# 3. Llamar a una función

Las funciones pueden ser invocadas desde cualquier otra función, incluida ella misma.

Sin embargo, para empezar, es recomendable llamar a las funciones únicamente desde la función principal `main`, ya que facilita el aprendizaje y la comprensión del flujo del programa.

Cuando se invoca una función, la ejecución del programa salta al cuerpo de dicha función (pasándole los parámetros, si los hay). Se ejecutan sus instrucciones y, al finalizar, la ejecución vuelve al punto desde el que había sido llamada para continuar con el programa.

Las funciones se invocan por su nombre, seguido de unos paréntesis que contienen la lista de parámetros. Si no hay ningún parámetro, igualmente hay que incluir los paréntesis. Si la función devuelve un valor, este puede asignarse a una variable o utilizarse directamente, por ejemplo, dentro de una expresión o como argumento de otra función.

Ejemplo utilizando las funciones del apartado anterior:

::: tabs
== Java

```java
public static void main(String[] args) {
  // No tiene parámetros ni devuelve ningún valor. Simplemente imprime "Hola mundo"
  imprimeHolaMundo();
  // Es habitual llamar a una función y guardar el valor devuelto en una variable
  int a = doble(10); // a = 20 (10*2)
  int b = multiplica(3, 5); // b = 15 (3*5)
  // Se pueden pasar variables como parámetros
  int c = doble(a); // c = 40 (20*2)
  int d = multiplica(a, b); // d = 300 (20*15)
  // Se pueden combinar funciones y expresiones
  int e = doble(4) + multiplica(2,10); // e = 8 + 20
  System.out.println("El doble de 35 es " + doble(35) ); // "El doble de 35 es 70"
  System.out.println("12 por 12 es " + multiplica(12,12) ); // "12 por 12 es 144"
}
```

:::

>***Ejemplo: Programa con una función que suma dos números.***
>
>::: tabs
>== Java
>
>```java
>import java.util.Scanner;
>
>public class Suma {
>
>    public static void main(String[] args) {
>        Scanner sc = new Scanner(System.in);
>        int num1, num2, suma;
>
>        System.out.print("Introduce un número: ");
>        num1 = sc.nextInt();
>
>        System.out.print("Introduce otro número: ");
>        num2 = sc.nextInt();
>
>        suma = suma(num1, num2);
>
>        System.out.println("La suma es: " + suma);
>    }
>
>    public static int suma(int n1, int n2) {
>        int suma;
>        suma = n1 + n2;
>        return suma;
>    }
>}
>```
>
>:::

>***Ejemplo: Programa con una función que determina si un número es par o impar.***
>
>::: tabs
>== Java
>
>```java
>import java.util.Scanner;
>
>public class ParImpar {
>
>    public static void main(String[] args) {
>        Scanner in = new Scanner(System.in);
>        int num;
>
>        System.out.print("Introduce un número: ");
>        num = in.nextInt();
>
>        if (par(num) == true)  // Llamada a la función desde la expresión
>            System.out.println(num + " es par.");
>        else
>            System.out.println(num + " es impar.");
>    }
>
>    public static boolean par(int numero) {
>        boolean par = false;
>
>        if (numero % 2 == 0)  // Si el resto es 0, es par ('true'); si no, 'false'
>            par = true;
>
>        return par;
>    }
>}
>```
>
>:::