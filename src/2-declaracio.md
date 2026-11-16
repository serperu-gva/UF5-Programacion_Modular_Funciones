# 2. Declaración de una función

**Declarar una función simplemente significa crearla para que después pueda ser llamada (utilizada) desde otro lugar del código de nuestro programa.**

Una función se estructura en **cabecera** y **cuerpo**.

La cabecera es la línea que define la signatura de la función. Normalmente contiene:

- **Modificadores** (si el lenguaje los utiliza): En algunos lenguajes como Java pueden aparecer palabras como `public`, `private`, `static`, etc. Su uso puede variar según el contexto y el lenguaje.
- **Tipo de retorno**: Indica el tipo de dato que la función devolverá cuando finalice su ejecución. Puede ser `int`, `double`, `boolean`, `string` o cualquier otro tipo definido por el lenguaje. Si no devuelve ningún valor, se indica con palabras como `void`, `None` o equivalentes.
- **Nombre de la función**: Es un identificador único que se utilizará para llamar a la función.
- **Lista de parámetros**: Opcionalmente, se pueden definir datos de entrada que la función recibirá para operar con ellos. Se declara entre paréntesis, separando los parámetros por comas e indicando su nombre y, si es necesario, su tipo.

El cuerpo de la función es un bloque de código que se encuentra entre llaves (`{}`) o indentaciones, según el lenguaje. Contiene las instrucciones que se ejecutarán cada vez que la función sea llamada.

::: tabs
== Java

```java
[Modificador_de_función] Tipo_devuelto nombre_de_función (lista_de_parámetros)
{
  ...
}
```

:::

Ejemplos de funciones:

::: tabs
== Java

```java
public static void imprimeHolaMundo() { 
  System.out.println("Hola mundo");
}
```

:::

Este es un ejemplo muy sencillo de una función llamada `imprimeHolaMundo`, que no tiene parámetros de entrada (no hay nada entre los paréntesis) y no devuelve ningún valor (indicado por `void`). Cuando la llamemos, lo único que hará será escribir por pantalla el mensaje "Hola mundo".

::: tabs
== Java

```java
public static void imprimeHolaNombre(String nombre) { 
  System.out.println("Hola " + nombre);
}
```

:::

Esta función se llama `imprimeHolaNombre`, tiene como parámetro de entrada una cadena llamada `nombre` y no devuelve nada. Cuando la llamemos, imprimirá por pantalla el texto "Hola" seguido del nombre que le pasaremos como parámetro.

::: tabs
== Java

```java
public static int doble(int a) { 
  int resultado = a * 2; 
  return resultado;
}
```

:::

Esta función se llama `doble`, tiene como parámetro de entrada un dato entero llamado `a` y devuelve un dato también entero. Cuando la llamemos, calculará el doble de `a` y lo devolverá.

::: tabs
== Java

```java
public static int multiplica(int a, int b) { 
int resultado = a * b;
return resultado;
}
```

:::

Esta función se llama `multiplica`, tiene dos parámetros de entrada enteros llamados `a` y `b` y devuelve un dato también entero. Cuando la llamemos, calculará `a*b` y lo devolverá.

::: tabs
== Java

```java
public static double maximo(double valor1, double valor2) { 
  double max;
  if (valor1 > valor2)
    max = valor1;
  else
    max = valor2;
  return max;
}
```

:::

Esta función se llama `maximo`, tiene dos parámetros de entrada reales llamados `valor1` y `valor2` y devuelve un dato también real. Cuando la llamemos, calculará el máximo entre `valor1` y `valor2` y lo devolverá.

::: tabs
== Java

```java
public static int sumaVector(int v[]) { 
  int suma = 0;
  for (int i = 0; i < v.length; i++) 
    suma += v[i];
  return suma;
}
```

:::

Esta función se llama `sumaVector`, tiene como parámetro de entrada un vector de enteros llamado `v` y devuelve un dato entero. Cuando la llamemos, recorrerá el vector `v`, calculará la suma de todos sus elementos y devolverá el resultado.

Es importante saber que **las funciones se declaran fuera de la función principal**, pero dentro del bloque o ámbito correspondiente (como una clase, módulo o archivo, según el lenguaje).

::: tabs
== Java

```java
public class programadeprueba {

    public static void imprimeHolaMundo() {
        System.out.println("Hola mundo");
    }

    public static int doble(int a) {
        int resultado = a * 2;
        return resultado;
    }

    public static int multiplica(int a, int b) {
        int resultado = a * b;
        return resultado;
    }

    public static void main(String[] args) {
        // Un programa siempre comienza ejecutándose por la función main.
        // Aquí va el código principal de nuestro programa.
    }
}
```

En este programa tenemos 4 funciones: `imprimeHolaMundo`, `doble`, `multiplica` y `main`. Sí, el `main` en el que siempre has programado hasta ahora es, en efecto, una función, pero un poco especial: `main` es la función principal, el punto de inicio de un programa.

Es obligatorio que todo programa Java tenga una función `main`. Si te fijas, es una función que recibe como parámetro un `String[]` (vector de `String`) y no devuelve nada (aunque podría devolver un `int`). El porqué de esto lo veremos más adelante.

Las 3 funciones que hemos declarado encima de `main` no hacen nada por sí mismas; simplemente están ahí esperando a que sean llamadas (utilizadas), normalmente desde el propio `main`.

:::