# Ejemplos de recursividad

## Cálculo del factorial

El factorial de un número entero n, representado como n!, se define como el producto de todos los números enteros desde 1 hasta n. Por ejemplo: 5! = 1 x 2 x 3 x 4 x 5 = 120

:::: tabs
=== Java

::: tabs
== Versión iterativa

```java
public static int factorial(int n) {
    int factorial = 1;
    for(int i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial; 
}
```

== Versión recursiva

```java
public static int factorial(int n) {
    if (n == 1) {
        return 1; 
    } else {
        return n * factorial(n-1);
    }
}
```

:::
::::

**Solución iterativa:**

- Se utiliza un bucle `for` para iterar desde 1 hasta n, calculando el producto en cada paso.

**Solución recursiva:**

- Caso base: Si n es igual a 1, se devuelve 1 (el factorial de 1 es 1).
- Caso general: Se realiza una llamada recursiva calculando el factorial de n-1 y se multiplica ese resultado por n.

    Por ejemplo, para calcular 5! se tiene:
  1. factorial(4) llama a factorial(3)
  2. factorial(3) llama a factorial(2)
  3. factorial(2) llama a factorial(1) ---> devuelve 1
  4. factorial(2) devuelve 1 * 2 = 2
  5. factorial(3) devuelve 2 * 3 = 6
  6. factorial(4) devuelve 6 * 4 = 24
  7. factorial(5) devuelve 24 * 5 = 120

## Serie de Fibonacci

La serie de Fibonacci comienza con los números 0 y 1, y cada número siguiente es la suma de los dos números anteriores. Por ejemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21...

Formalmente, se define como:  
F(0) = 0  
F(1) = 1  
F(n) = F(n-1) + F(n-2)

:::: tabs
=== Java

::: tabs
== Versión iterativa

```java
public static int fibonacci(int n) {
    if (n <= 1)
        return n;
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        int tmp = b;
        b = a + b; 
        a = tmp;
    }
    return b;
}
```

== Versión recursiva

```java
// Versión recursiva
public static int fibonacci(int n) {
    if (n <= 1) 
        return n;
    return fibonacci(n-1) + fibonacci(n-2); 
}
```

:::
::::

**Solución iterativa:**

- Inicializa dos variables con los valores 0 y 1.
- Utiliza un bucle para ir calculando y desplazando los valores.

**Solución recursiva:**

- Casos base: `F(0) = 0` y `F(1) = 1`.
- Caso general: Suma los dos números anteriores llamando recursivamente a la función.

## Suma de dígitos

Dado un número entero n, debemos calcular la suma de sus dígitos individuales.

Por ejemplo: si n = 5324, la suma de sus dígitos es 5 + 3 + 2 + 4 = 14.

:::: tabs
=== Java

::: tabs
== Versión iterativa

```java
public static int sumaDigitos(int x) {
    int suma = 0;
    while (x > 0) {
        suma += x % 10;
        x /= 10;
    } 
    return suma;
}
```

== Versión recursiva

```java
// Versión recursiva
public static int sumaDigitos(int x) {
    if (x < 10)
        return x;
    return x % 10 + sumaDigitos(x / 10); 
}
```

:::
::::

**Solución iterativa:**

- Bucle `while` para ir extrayendo y sumando cada dígito en cada iteración.
- Se divide entre 10 en cada paso para eliminar el dígito ya procesado.

**Solución recursiva:**

- Caso base: Si n < 10, se devuelve n (un solo dígito).
- Caso general:
  1. Se extrae el dígito menos significativo mediante el módulo (`%`).
  2. Se divide entre 10 para eliminar ese dígito.
  3. Se suma el dígito extraído con una llamada recursiva al resto del número.

## Torres de Hanói

El problema consiste en mover n discos de un pilar de origen a un pilar de destino, pasando por un pilar auxiliar, sujeto a estas restricciones:

- Solo se puede mover un disco a la vez.
- Nunca se puede colocar un disco mayor sobre uno menor.

:::: tabs
=== Java

::: tabs
== Solución iterativa

No tiene una versión iterativa sencilla.

== Solución recursiva

```java
// Versión recursiva
public static void hanoi(int n, char origen, char aux, char destino) {
    if (n == 1) 
        mover(origen, destino); 
    else {
        hanoi(n-1, origen, destino, aux);
        mover(origen, destino); 
        hanoi(n-1, aux, origen, destino);
    }
}

```

:::
::::

**Solución recursiva:**

- Caso base: Si solo hay 1 disco, se mueve directamente.
- Caso general:
  1. Mover n-1 discos del origen al auxiliar (recursivamente).
  2. Mover el disco más grande al destino.
  3. Mover los n-1 discos sobre él, del auxiliar al destino (recursivamente).