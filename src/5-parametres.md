# 5. Parámetros: paso por valor y por referencia

En la mayoría de los lenguajes de programación existen dos modos generales de enviar información a una función mediante parámetros: el paso por valor y el paso por referencia. Es fundamental entender la diferencia entre ambos porque condiciona cómo se comportan las variables cuando se modifican dentro de la función.

- **Paso por valor**: Cuando un parámetro se envía por valor, el lenguaje crea una copia del valor original y la asigna a la variable local que recibe la función. De esta manera, si dentro de la función se modifica esta variable local, no se alterará la variable externa con la que se realizó la llamada. Normalmente, se utiliza en los tipos simples (primitivos), como `int`, `double`, `boolean`, `char`, etc.

  :::: tabs
  === Java

  ::: tabs
  == Código

  ```java
  public static void main(String[] args) { 
    int a = 10;
    System.out.println("Valor inicial de a: " + a); // a vale 10 
    imprime_doble(a); // Se le pasa el 10 a la función 
    System.out.println("Valor final de a: " + a); // a continúa valiendo 10
  }

  // El parámetro ‘a' es independiente de la ‘a' del main. ¡Son variables diferentes!
  public static void imprime_doble(int a) {
    // Se copia el valor 10 a esta nueva ‘a'
    a = 2 * a; // Se duplica el valor de la ‘a' de esta función, no afecta al exterior
    System.out.println("Valor de a en la función: " + a); // ‘a' vale 20
  }
  ```

  == Salida

  ```plaintext
  Valor inicial de a: 10
  Valor de a en la función: 20
  Valor final de a: 10
  ```

  :::
  ::::

- **Paso por referencia**: Cuando se pasan estructuras como listas, vectores, objetos u otras entidades complejas a una función, lo que realmente se está pasando es una referencia al elemento original (no una copia). Esto significa que, si se modifica este parámetro dentro de la función, también se modifica fuera, ya que ambos hacen referencia a la misma ubicación de memoria.

  :::: tabs
  === Java

  ::: tabs
  == Código

  ```java
  // Suma x a todos los elementos del vector v
  public static void suma_x_al_vector(int v[], int x) { 
    for (int i = 0; i< v.length; i++)
    v[i] = v[i] + x;
  }

  public static void main(String[] args) { 
    int v[] = {0, 1, 2, 3};
    System.out.println("Vector antes: " + Arrays.toString(v)); 
    suma_x_al_vector(v, 10);
    System.out.println("Vector después: " + Arrays.toString(v));
  }
  ```

  == Salida

  ```plaintext
  Vector antes: [0, 1, 2, 3]
  Vector después: [10, 11, 12, 13]
  ```

  :::
  ::::

::: tip IMPORTANTE

Como un parámetro de tipo objeto es una referencia al objeto `String` o `Array` que está fuera de la función, si se le asigna otro objeto, se pierde la referencia y ya no se puede acceder al objeto original desde la función. Aunque Java permite hacerlo, no se aconseja.

::: tabs
== Java

```java
// Asignamos a x un nuevo vector, por lo que x dejará de apuntar al vector original.
// ¡El vector original no cambia! Simplemente ya no podemos acceder a él desde x
// porque se ha perdido la referencia a ese objeto.
public static void funcion1(int x[]) {
  x = new int[10]; // x apuntará a un nuevo vector, el original queda intacto
  // Lo que hagamos aquí con x no afectará al vector original
}
// Lo mismo sucede en este ejemplo, perdemos la referencia al String original
public static void funcion2(String x) {
  x = "Hola"; // x apuntará a un nuevo String, el original queda intacto
  // Lo que hagamos aquí con x no afectará al String original
}
```

:::