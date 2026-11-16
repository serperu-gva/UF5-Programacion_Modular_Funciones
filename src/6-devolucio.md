# 6. Devolución de un valor

Las funciones pueden devolver valores de diferentes tipos, tanto valores simples (como números enteros, decimales, booleanos, caracteres, etc.) como estructuras o entidades más complejas (como listas, vectores, cadenas de texto, objetos, etc.).

En todos los casos, se utiliza una instrucción específica (denominada habitualmente `return`) para indicar qué valor debe devolver la función. En el caso de los valores complejos, la función suele devolver una referencia al dato original, no una copia, por lo que cualquier modificación posterior podría afectar al elemento devuelto, dependiendo del lenguaje y del contexto.

Ejemplos de funciones que devuelven valores y referencias:

::: tabs
== Java

```java
public class EjemploDevolucion {

    // Función que devuelve un entero (tipo primitivo)
    public static int obtenerNumero() {
        int resultado = 42;
        return resultado;
    }

    // Función que devuelve una cadena (objeto)
    public static String obtenerSaludo() {
        return "¡Hola mundo!";
    }

    // Función que devuelve un vector de enteros (también un objeto)
    public static int[] crearVector() {
        int[] vector = {1, 2, 3, 4, 5};
        return vector;
    }

    public static void main(String[] args) {
        int valor = obtenerNumero();
        System.out.println("Valor devuelto: " + valor);

        String saludo = obtenerSaludo();
        System.out.println("Saludo: " + saludo);

        int[] vector = crearVector();
        System.out.print("Vector: ");
        for (int x : vector) {
            System.out.print(x + " ");
        }
    }
}
```

:::