# 7. Recursividad

La recursividad es la capacidad de una función o método para llamarse a sí mismo. Esto permite dividir un problema grande en problemas más pequeños similares y resolverlos de manera directa.

## 7.1. Elementos de la recursividad

- **Caso base**: Caso más sencillo que se puede resolver directamente y que permite detener las llamadas recursivas.
- **Casos recursivos**: Llamadas a la misma función para reducir el problema a una instancia más pequeña y sencilla.

## 7.2. Tipos de recursividad

- **Recursividad directa**: Una función se llama directamente a sí misma.
- **Recursividad indirecta**: Una función llama a otra que, a su vez, llama a la primera. Se produce un ciclo de llamadas recursivas entre ambas.
- **Recursividad lineal**: Cada llamada recursiva se realiza sobre un subproblema diferente. Por ejemplo, al recorrer un árbol binario.
- **Recursividad de cola**: La llamada recursiva es la última instrucción de la función. Esto permite optimizar el uso de la pila.

## 7.3. Ventajas

- Simplicidad conceptual y legibilidad en algunos casos.
- Permite resolver problemas que se dividen fácilmente en subproblemas.

## 7.4. Desventajas

- Mayor uso de memoria debido a la acumulación de llamadas.
- Riesgo de desbordamiento de pila (`StackOverflowError`).

## 7.5. Recursividad vs. iteración

La recursividad y la iteración (utilizando bucles como `while` o `for`) son dos formas diferentes de resolver un mismo problema.

### 7.5.1. Ejemplo: Suma de los números del 1 al n

:::: tabs
=== Java

::: tabs
== Solución iterativa

```java
public static int suma(int n) {
  int suma = 0;
  for (int i = 1; i <= n; i++) 
    suma += i;

  return suma; 
}
```

== Solución recursiva

```java
public static int suma(int n) {
  if (n == 1) {
    return 1;
  } else {
    return n + suma(n-1);
  }
}
```

:::
::::

**Análisis de las diferencias:**

- La versión iterativa utiliza un bucle y una variable acumuladora (`suma`) para ir guardando el resultado parcial.
- La versión recursiva se basa en la descomposición del problema en problemas más pequeños, hasta llegar a un caso base sencillo de resolver (cuando `n` es 1).
- La recursividad puede ser más elegante y fácil de entender, pero consume más recursos, ya que se van acumulando llamadas en la pila.
- La iteración suele ser más eficiente en cuanto al uso de memoria y la velocidad de ejecución.