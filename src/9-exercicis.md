# Ejercicios

## Ejercicios - Nivel básico

### Ejercicio 1

(a) Escribe una función que devuelva la suma de los valores de un vector de enteros.  
(b) Escribe una función que devuelva la media de los valores de un vector de enteros.  
(c) Escribe una función que devuelva el valor máximo de un vector de enteros.  
(d) Escribe un programa que cree un vector con N valores enteros (generados de forma aleatoria) y muestre la suma, la media y el máximo.  

### Ejercicio 2

(a) Escribe una función que devuelva cuántas vocales contiene una cadena de texto.  
(b) Escribe una función que devuelva cuántos espacios contiene una cadena de texto.  
(c) Escribe una función que devuelva cuántas consonantes contiene una cadena de texto.  
(d) Escribe un programa que lea una frase por teclado y muestre el número de vocales, el número de espacios y el número de consonantes.  

### Ejercicio 3

(a) Escribe una función que reciba una cadena y devuelva la cadena contraria (invertida).  
(b) Escribe una función que reciba dos cadenas y devuelva `true` o `false` en función de si son iguales o no.  
(c) Escribe un programa que solicite por teclado una palabra y muestre si es un palíndromo utilizando las funciones anteriores.  

## Ejercicios - Nivel medio

### Ejercicio 4

(a) Escribe una función que muestre un menú con las opciones: sumar, restar, multiplicar, dividir y finalizar el programa.  
(b) Escribe una función que devuelva la suma de dos números recibidos por parámetros.  
(c) Escribe una función que devuelva la resta de dos números recibidos por parámetros.  
(d) Escribe una función que devuelva la multiplicación de dos números recibidos por parámetros.  
(e) Escribe una función que devuelva la división de dos números recibidos por parámetros (teniendo en cuenta la división por cero).  
(f) Escribe un programa que solicite dos números, muestre el menú y permita elegir una opción. Lo hará hasta que el usuario seleccione la opción de salir del programa.  

### Ejercicio 5

Diseña un sistema que permita añadir un estudiante, marcar su asistencia y mostrar el estado de asistencia de todos los estudiantes. Cuando el usuario quiera añadir un estudiante, el programa solicitará el nombre y lo incorporará a la lista de personas matriculadas solo si todavía no está en ella, asignándole automáticamente el estado de no asistido. Si el nombre ya existe, no realizará ningún cambio. Cuando el usuario elija marcar la asistencia, el sistema solicitará el nombre del estudiante y, si lo encuentra en la lista, cambiará su estado al de asistido. Si no existe, informará de que no se puede marcar la asistencia de un estudiante desconocido. Cuando el usuario solicite ver los asistentes, el programa mostrará todos los nombres e indicará si han asistido o no. Finalmente, el usuario podrá finalizar la ejecución del programa cuando quiera.

<!--
(a) Escribe una función que muestre un menú con las opciones: añadir nombre, marcar asistencia, mostrar asistentes y salir del programa.  
(b) Escribe una función para añadir un nombre, solicitado por teclado, a la lista de estudiantes (si todavía no está). Marcará la asistencia como `false`.  
(c) Escribe una función que solicite un nombre y marque la asistencia como `true` si ya está en la lista. Mostrará un mensaje en caso de que no esté en la lista.  
(d) Escribe una función que muestre todos los estudiantes junto con su asistencia.  
(e) Escribe un programa que utilice las funciones anteriores para gestionar la asistencia de una clase.  
-->

### Ejercicio 6

Un sistema de gestión académica permite registrar alumnos con su nombre y las notas de las cinco asignaturas. A partir de este registro, cada vez que el usuario lo solicite, el programa mostrará el listado de alumnos con una media de notas superior a 9. También ofrece la posibilidad de determinar qué alumno presenta la mayor variabilidad de notas, es decir, la mayor diferencia entre su nota más alta y la más baja.

<!--
Una escuela debe gestionar las notas de un grupo de alumnos en diversas asignaturas. Quiere automatizar el cálculo de medias y la detección de alumnos destacados.

(a) Implementa una función que reciba un vector y devuelva la media de sus valores.
(b) Implementa una función que permita añadir alumnos a una estructura clave-valor, donde la clave será el nombre de un alumno y el valor será un vector de tamaño 5 para las notas. Por simplicidad, las notas pueden generarse de forma aleatoria.  
(c) Implementa una función que, dado el listado de alumnos, devuelva un listado con los nombres de los alumnos con una nota superior a 9.  
(d) Implementa una función que, dado un vector numérico cualquiera, devuelva la diferencia máxima entre su valor máximo y mínimo.  

```plaintext
Por ejemplo, dado [3, 1, 8] devolverá la distancia máxima: 8 - 1 = 7. Devolverá 7.
```

(e) Añade una función que devuelva el nombre del alumno con mayor variabilidad de notas (diferencia entre la máxima y la mínima).  
(f) Escribe una función que muestre las distintas opciones que tendrá el programa (no todos los métodos implementados anteriormente serán opciones).  
(g) Escribe un programa que integre todas las funciones anteriores.
-->

## Ejercicios - Recursividad

### Ejercicio R1

Una empresa de análisis de datos quiere saber cuántas veces se repite un código específico dentro de un informe numérico.

Para ello, desea implementar una función que recorra una lista de códigos y cuente cuántas veces aparece un valor concreto.

Diseña una **función recursiva** llamada `contarCodigo` que reciba:

- un array de enteros,

- un índice inicial,

- y un valor que buscar,

y **devuelva cuántas veces aparece ese valor en el array.**

> Ejemplo: 
> contarCodigo([3, 1, 3, 4, 3], 0, 3) → 3


### Ejercicio R2

Una universidad está diseñando un pequeño sistema para detectar si un trabajo ha sido generado con Inteligencia Artificial.

El sistema funciona así: se introduce el texto del alumno en el programa y se elige una palabra «trampa» incluida intencionadamente en el enunciado.

Si el texto contiene más de 5 veces esa palabra trampa, el trabajo se considera sospechoso de haber sido generado con IA.

Para empezar, el equipo necesita implementar una función recursiva que cuente cuántas veces aparece esa palabra en el texto.

1) Coge el texto y divídelo en un array de palabras.

2) Diseña una función recursiva llamada `contarPalabra`, que reciba:

- un array de String con todas las palabras del texto,

- un índice inicial,

- y una palabra que buscar,

y **devuelva cuántas veces aparece esa palabra en el array.**

> Ejemplo: contarPalabra(["este","es","un","texto","trampa","muy","trampa","porque","trampa","contiene","trampa","varias","trampa","veces"], 0, "trampa")
→ 6
>
>*En este caso, el sistema marcaría el texto como sospechoso.*


### Ejercicio R3

Una empresa de ciberseguridad está desarrollando una herramienta para enmascarar mensajes antes de almacenarlos en una base de datos.

Como parte del sistema, necesitan invertir el texto original para dificultar su lectura directa.

Implementa una función recursiva que reciba una cadena de texto y devuelva la misma cadena, pero invertida.

> invertir("hola") → "aloh"
>
> invertir("seguridad") → "dadiruges"


### Ejercicio R4

En una empresa de seguridad informática se está estudiando la calidad de las contraseñas utilizadas por los trabajadores.

Para ello, se necesita desarrollar una serie de funciones que analicen diferentes aspectos de una contraseña.

Uno de los primeros requisitos es crear una función capaz de analizar, mediante **recursividad**, si la contraseña contiene caracteres especiales.

Consideraremos **carácter especial** cualquier carácter que NO sea:

- una letra minúscula,

- una letra mayúscula

- o un dígito numérico.

Es decir, se contarán como caracteres especiales, por ejemplo:

>! , . ; : ? + - _ @ # $ % & / ( ) [ ] { } * etc.

La función deberá:

- recibir la contraseña (un String),

- analizar cada carácter,

- y devolver si contiene o no caracteres especiales.

<!--
Estás desarrollando un gestor de salud para mascotas. Cada animal tiene una ficha donde se indican, año tras año, las revisiones médicas anuales. Cada ficha, por tanto, se compone de dos valores: la edad del animal (irá desde 0 hasta la actual) y un entero que indica la cantidad de revisiones que se realizaron a esa edad.

(a) Implementa una funcionalidad que, a partir de una lista de revisiones del animal, permita contar cuántas revisiones se le han realizado en total. Hay que recorrer la lista de forma recursiva y devolver la suma de los valores.  
(b) Ahora se quiere saber si el animal tuvo alguna edad en la que recibió más de una revisión. Implementa una funcionalidad que, a partir de esa misma lista, recorra recursivamente las revisiones y devuelva un listado con todas las edades en las que se realizaron más de una revisión.  
(c) Determina la edad en la que el animal tuvo más revisiones. En caso de empate, puedes devolver la menor edad. El cálculo debe hacerse de forma recursiva, comparando las revisiones entre posiciones.  
(d) Comprueba si existe alguna edad en la que no se realizó ninguna revisión. Debes devolver un booleano (`true` si hay al menos una, `false` en caso contrario), realizando el recorrido de forma recursiva.  
(e) Genera una cadena de texto que muestre todas las edades y el número de revisiones realizadas en cada una, separadas por comas. El formato sería, por ejemplo: `"Edad 0: 1 revisión, Edad 1: 0 revisiones, Edad 2: 2 revisiones"`. El formato debe mantener el orden original y generarse de forma recursiva.  

### Ejercicio R2

Estás haciendo una aplicación para comprobar si una contraseña contiene algún carácter repetido. Las contraseñas son cadenas de letras y números (sin símbolos ni espacios).

(a) Haz una función que, a partir de una cadena de caracteres, devuelva una nueva cadena en la que cada letra aparezca una sola vez (eliminando duplicados), manteniendo el orden original. Hazlo de manera recursiva.  
(b) Haz otra función que, a partir de una contraseña, devuelva un listado con las letras repetidas.  
(c) Implementa una función que compruebe, de manera recursiva, si la contraseña contiene dos caracteres consecutivos iguales. Por ejemplo, en "aabb1c" encontraría "aa" y devolvería `true`. Si no hay ninguna repetición consecutiva, debe devolver `false`.  
(d) Haz una función recursiva que cuente cuántos dígitos contiene la contraseña. Por ejemplo, "c0ntr4senya12" contiene 4 dígitos (0, 4, 1, 2) y debería devolver 4.  
(e) Implementa una función recursiva que devuelva una versión encriptada de la contraseña invirtiendo el orden de los caracteres. Es decir, dada "abc123" devolvería "321cba".  

### Ejercicio R3

Una empresa tiene una estructura organizativa en la que cada empleado puede tener subordinados, y estos subordinados pueden tener a su vez más personas a su cargo.

Hay que crear un sistema que permita calcular cuántas personas están bajo la supervisión directa e indirecta de un gerente específico. Por ejemplo, si Juan es gerente de María y Pedro, y María supervisa a Ana y Carlos, entonces Juan supervisa indirectamente a un total de 4 personas.

::: tip NOTA
La estructura organizativa de los empleados se almacena en una estructura clave-valor, donde la clave es el nombre de un empleado y el valor es el listado de empleados a su cargo.
:::

### Ejercicio R4

Estás desarrollando un explorador de archivos para una aplicación de escritorio. Los usuarios pueden navegar por carpetas que contienen archivos y otras carpetas, que a su vez pueden contener más archivos y carpetas.

Implementa una funcionalidad que permita buscar un archivo específico por su nombre en todo el sistema de carpetas. El programa debe revisar la carpeta actual, después entrar en cada subcarpeta y buscar en ella, y así sucesivamente hasta encontrar el archivo o determinar que no existe.


### Ejercicio 

(a) Escribe una función que genere y devuelva un número entero aleatorio entre 1 y 100.  
(b) Escribe una función que solicite al usuario que introduzca un número y lo compare con el secreto. Devolverá una cadena u otra en función del resultado:  

- "es mayor que" si el número elegido es más grande que el secreto.
- "es menor que" si el número elegido es más pequeño que el secreto.
- "es" si el usuario ha acertado.

(c) Escribe un programa que utilice las funciones anteriores para jugar hasta que se acierte el número secreto. Se irá informando del resultado:

```plaintext
13 es menor que el número secreto.
62 es mayor que el número secreto.
26 es el número secreto!
```
-->





<!--

## 1. Funciones

## 1.1. Funciones - Nivel A

::: warning ATENCIÓN
Ninguna función mostrará nada por pantalla salvo que se indique lo contrario.
:::

1. Escribe un programa que solicite dos números reales por teclado y muestre por pantalla el resultado de multiplicarlos. Implementa y utiliza la función:  

::: tabs
== Java

```java
// Devuelve la multiplicación de dos números.
double multiplica(double a, double b) 
```

:::

2. Escribe un programa que solicite la edad por teclado y muestre por pantalla si eres mayor de edad o no. Implementa y utiliza la función:

::: tabs
== Java

```java
// Devuelve true si a>=18, false en caso contrario
boolean esMayorEdad(int a) 
```

:::

3. Escribe un programa que solicite dos números enteros por teclado y muestre por pantalla cuál es el menor. Implementa y utiliza la función:

::: tabs
== Java

```java
// Devuelve el menor entre a y b
int minimo(int a, int b) 
```

:::

4. Escribe un programa que solicite un número entero por teclado y muestre por pantalla si es positivo, negativo o cero. Implementa y utiliza la función:

::: tabs
== Java

```java
// Devuelve -1 si es negativo, 0 si es igual a 0, 1 si es positivo
int dimeSigno(int a) 
```

:::

5. Escribe un programa que solicite un valor entero en millas y muestre su equivalente en kilómetros. Recuerda que una milla son 1,60934 kilómetros. Implementa y utiliza la función:

::: tabs
== Java

```java
// Devuelve la conversión de millas a kilómetros
double millas_a_kilometros(int millas)
```

:::

6. Escribe un programa que solicite cinco precios y muestre por pantalla el precio de venta de cada uno después de aplicarle un 21 % de IVA. Implementa y utiliza la función:

::: tabs
== Java

```java
// Devuelve el precio después de sumarle un 21 % de IVA
double precioConIVA(double precio) 
```

:::

7. Escribe un programa que solicite el ancho y el alto de un rectángulo y muestre por pantalla su área y su perímetro. Implementa y utiliza las funciones:

::: tabs
== Java

```java
// Devuelve el perímetro
double perimetroRectangulo(double ancho, double alto)

// Devuelve el área
double areaRectangulo(double ancho, double alto) 
```

:::

8. Escribe un programa que solicite un valor N entero y después muestre: el sumatorio desde 1 hasta N, el productorio de 1 a N y el valor intermedio entre 1 y N. Implementa y utiliza las funciones:

::: tabs
== Java

```java
// Devuelve la suma de enteros de 1 a n
int suma1aN(int n) 

// Devuelve el producto de enteros de 1 a n
int producto1aN(int n)

// Devuelve el valor intermedio entre 1 y n
double intermedio1aN(int n) 
```

:::

## 1.2. Funciones - Nivel B

9. Realiza un programa que solicite introducir tres valores enteros y nos diga cuál de ellos es el más elevado. Impleméntalo creando únicamente una función a la que le pasemos dos valores (no tres) y nos devuelva el máximo de los dos valores.
10. Realiza un programa que lea una fecha introduciendo el día, el mes y el año por separado y nos diga si la fecha es correcta o no. Supondremos que todos los meses tienen 30 días. Se debe crear una función a la que le pasemos los datos y devuelva si la fecha es correcta o no.
11. Realiza un programa que escriba la tabla de multiplicar de un número introducido por teclado. Para ello, implementa una función que reciba como parámetro un número entero y muestre por pantalla la tabla de multiplicar de ese número.
12. Realiza un programa que, dado un valor en kilómetros, lo traduzca a millas. El programa debe tener una función que reciba como parámetro una cantidad en kilómetros y la devuelva en millas.
13. Realiza un programa que calcule el porcentaje de descuento que nos han aplicado al comprar algo. Se debe solicitar la cantidad sin descuento y la cantidad con el descuento aplicado. Se debe crear una función a la que le pasemos ambos valores y nos devuelva el descuento.
14. Escribe una función que muestre por pantalla un triángulo como el del ejemplo. Deberá recibir dos parámetros: el carácter que se desea imprimir y el número de líneas del triángulo.  

![Triángulo a](/uf6/triangle_a.jpg)

15. Escribe un programa que cree un vector de tamaño 100 con los primeros 100 números naturales. Después muestra la suma total y la media. Implementa una función que calcule la suma de un vector y otra que calcule la media de un vector.
16. Escribe un programa que cree un vector del tamaño indicado por teclado y después lo rellene con valores aleatorios (utiliza Math.random()). Implementa la función que rellena un vector con valores aleatorios.

## 1.3. Funciones - Nivel C

17. Realiza un programa que nos solicite números enteros hasta que se introduzca el 0, indicándonos, para cada número introducido, si es primo o no. Hay que recordar que un número es primo si es divisible por sí mismo y por 1. El 1 no es primo por convenio. Se debe crear una función que, pasándole un número entero, devuelva si es primo o no.
18. El NIF (o letra asociada a un DNI) se obtiene de la siguiente manera: Se divide el número de DNI entre 23 y el resto se codifica con una letra según la siguiente equivalencia:  
0: "T", 1: "R", 2: "W", 3: "A", 4: "G", 5: "M", 6: "I", 7: "F", 8: "P", 9: "D", 10:"X", 11: "B", 12: "N", 13: "J", 14: "Z", 15: "S", 16: "Q", 17: "V", 18: "H", 19: "L", 20: "C", 21: "K", 22: "E .."  
Escribe un programa que solicite el DNI y muestre por pantalla la letra asociada. Para ello se deberá crear una función a la que se le pase el número y devuelva la letra.

Ejemplo: para el DNI 56321122 el NIF es ‘X'.

19. Realiza un programa que permita comprobar si una terna de valores enteros (3 valores) se ajusta a la ecuación de Pitágoras: x ² + y ² = z ². El programa solicita al usuario los valores x, y, z. Se deberá crear una función a la que se le pasen x, y, z y devuelva si son iguales o no.

Por ejemplo: 3 ² + 4 ² = 5 ².

20. Escribe un programa que imprima las tablas de multiplicar del 1 al 10. Implementa una función que reciba un número entero como parámetro e imprima su tabla de multiplicar.
21. Escribe un programa que muestre un menú con 2 opciones: "1.Circunferencia" y "2.Área".  
En ambas se le pedirá al usuario que introduzca un radio y después se le mostrará el cálculo correspondiente. Implementa las funciones:

::: tabs
== Java

```java
int menu() // Muestra el menú y devuelve el número elegido
double pideRadio() // Solicita que se introduzca el radio y lo devuelve
double circunferencia(double r) // Calcula la circunferencia y la devuelve
double area(double r) // Calcula el área y la devuelve
```

:::

Modifica el programa añadiendo otra opción llamada "Volumen", permitiendo que el usuario también pueda solicitar el cálculo del volumen. Añade la función:

::: tabs
== Java

```java
double volumen(double r) // Calcula el volumen y lo devuelve
```

:::

Modifica el programa añadiendo otra opción llamada "Todas", en la que se solicite el radio una sola vez y se muestren los tres cálculos posibles (circunferencia, área y volumen).

Modifica el programa anterior de manera que el proceso se repita una y otra vez (mostrar menú → realizar el cálculo → volver a mostrar menú). Añade una opción más llamada "Salir" que finalizará el programa si es elegida.

## 2. Recursividad

## 2.1. Recursividad - Nivel A

1. Crea un programa que determine si una frase introducida por el usuario es un palíndromo utilizando la recursividad. Por ejemplo, "Mulla la llum" es un palíndromo.
2. Desarrolla un programa que utilice la recursividad para calcular el MCD de dos números enteros. Por ejemplo, el MCD de 15 y 25 es 5.
![Salida ejercicio 2 recursividad](/uf6/eixida_recur_2.jpg)

## 2.2. Recursividad - Nivel B

3. Implementa un programa que utilice la recursividad para generar todas las combinaciones posibles de N elementos. Por ejemplo, con los elementos [A, B, C], las combinaciones serían [A, B], [A, C], [B, C], etc.
![Salida ejercicio 2 recursividad](/uf6/eixida_recur_3.jpg)

Aquí tienes una descripción paso a paso de la ejecución:  
**Primera llamada (índice 0):**

1. Caso SIN A
   - Recursión con índice = 1, combinación = {}
2. Caso CON A
   - Añade A a la combinación = {A}
   - Recursión con índice = 1 y combinación = {A}

**Segunda llamada (índice 1):**

```
1. De la rama SIN A
   - Caso SIN B
     - Recursión con índice = 2, combinación = {}
   - Caso CON B
     - Añade B, combinación = {B}
     - Recursión con índice = 2, combinación = {B}
2. De la rama CON A
   - Caso SIN B
     - Recursión con índice = 2, combinación = {A}
   - Caso CON B
     - Añade B, combinación = {A, B}
     - Recursión con índice = 2, combinación = {A, B}
```

**Tercera llamada (índice 2):**

```
1. De la rama SIN A → SIN B
   - Imprime {}
   - Añade C → Imprime {C}
2. De la rama SIN A → CON B
   - Imprime {B}
   - Añade C → Imprime {B, C}
3. De la rama CON A → SIN B
   - Imprime {A}
   - Añade C → Imprime {A, C}
4. De la rama CON A → CON B
   - Imprime {A, B}
   - Añade C → Imprime {A, B, C}.
```

Y así sucesivamente...

4. Implementa un programa que utilice la recursividad para generar todas las permutaciones de un conjunto de N elementos. Por ejemplo, con los elementos [A, B, C], las permutaciones serían [A, B, C], [A, C, B], [B, A, C], etc.
![Salida ejercicio 2 recursividad](/uf6/eixida_recur_4.jpg)

Aquí tienes una descripción paso a paso de la ejecución:

**Primera llamada (índice 0):**

```
1. Intercambia A con A (no cambia)
   - Recursión con índice = 1 sobre {A, B, C}
2. Intercambia A con B
   - elementos = {B, A, C}
   - Recursión con índice = 1 sobre este vector
3. Intercambia A con C
   - elementos = {C, B, A}
   - Recursión con índice = 1 sobre este vector
```

**Segunda llamada (índice 1):**

```
1. Del vector {A, B, C}:
   - Intercambia B con B (no cambia)
     - Imprime {A, B, C}
2. Del vector {B, A, C}:
   - Intercambia B con A (no cambia)
     - Recursión con índice = 2 sobre {B, A, C}
   - Intercambia B con C
     - elementos = {B, C, A}
     - Recursión con índice = 2 sobre este vector
3. Del vector {C, B, A}:
   - Intercambia B con C (no cambia)
     - Recursión con índice = 2 sobre {C, B, A}
```

Y así sucesivamente...

5. Crea un programa que utilice la recursividad para calcular de cuántas maneras diferentes puedes llegar a una suma dada utilizando combinaciones de números dados. Por ejemplo, con los números [2, 3, 4] y una suma de 7, las formas podrían ser [2, 2, 3], [3, 4], etc.

![Salida ejercicio 2 recursividad](/uf6/eixida_recur_5.jpg)

Aquí tienes una descripción paso a paso de la ejecución:

**Primera llamada (índice 0):**

```
1. Caso incluyendo el 1:
   - Recursión con sumaDeseada = 49, indice = 0
2. Caso sin incluir el 1:
   - Recursión con sumaDeseada = 50, indice = 1
```

**Segunda llamada (índice 1):**

```
1. De la rama SIN 1:
   - Caso incluyendo el 4:
     - Recursión con sumaDeseada = 46, indice = 1
   - Caso sin incluir el 4:
     - Recursión con sumaDeseada = 50, indice = 2
2. De la rama CON 1:
   - Caso incluyendo el 4:
     - Recursión con sumaDeseada = 45, indice = 1
   - Caso sin incluir el 4:
     - Recursión con sumaDeseada = 49, indice = 2
```

**Tercera llamada (índice 2):**

```
1. De la rama SIN 1 → SIN 4:
   - Caso incluyendo el 3:
     - Recursión con sumaDeseada = 47, indice = 2
   - Caso sin incluir el 3:
     - Recursión con sumaDeseada = 50, indice = 3
```

Y así sucesivamente...

## 3. Ejercicio de ampliación

**Creación de bibliotecas de rutinas mediante paquetes**

Si se quiere utilizar un conjunto de funciones en varios programas, se pueden agrupar para crear un paquete (`package`) que después se importará desde el programa que necesite esas funciones. Podemos crear paquetes específicos para introducir las diferentes funciones, o bien incluirlas en distintos archivos dentro de un mismo paquete.

A continuación vamos a describir un ejercicio para aprender cómo hacerlo, creando un paquete con dos archivos diferentes de funciones y, en otro paquete, incluiremos el programa principal que hará uso de estas funciones.

En estos momentos, para la UF06 tenemos creado el proyecto UF06Exercicis que contiene dos paquetes: **curs.uf06exemples** y **cursuf06exercicis**.

- Dentro del proyecto **UF06Exercicis** crearemos un nuevo paquete que llamaremos **curs.uf06matematiques**.

![Crear paquete matemáticas](/uf6/paquet_mates.jpg)

- Dentro del nuevo paquete crearéis dos archivos (o clases Java): **UF06Diverses.java** y **UF06Geometria.java**, cuyo contenido describimos a continuación.

- En el archivo **UF06Diverses** crearéis dos funciones de propósito general, como son la comprobación de si un número es primo y el número de dígitos que contiene un número entero. Es importante que se incluyan los comentarios con las etiquetas que comienzan por @ para completar otros aspectos del ejercicio que veremos más adelante. Este es el código que se debe incluir:

::: tabs
== Java

```java
/**
 * Funciones matemáticas de propósito general
*/
public class UF06Diversas {

  /**
   * FUNCIÓN: Comprueba si un número entero positivo es primo o no.
   * @param x un número entero positivo
   * @return <code>true</code> si el número es primo
   * @return <code>false</code> en caso contrario
   */

  public static boolean esPrimo(int x) {
    boolean nPrimo=true;

    for (int i = 2; i < x && nPrimo; i++) {
      if ((x % i) == 0) {
        nPrimo=false;
      }
    }
    return nPrimo;
  }
  /**
   * FUNCIÓN: Devuelve el número de dígitos que contiene un número entero
   * @param x un número entero
   * @return la cantidad de dígitos que contiene el número
  */
  public static int digitos(int x) {
    int n=0;

    if (x == 0) n=1;
    else {
      while (x > 0) {
        x = x / 10;
        n++;
      }
    }
    return n;
  }
}
```

:::

- Para el archivo **UF06Geometria** crearemos también otras dos funciones. Este es el código que tendréis que incluir:

::: tabs
== Java

```java
/**
 * Funciones geométricas
*/
public class UF06Geometria {
  /**
   * FUNCIÓN: Calcula el volumen de un cilindro.
   * @param r radio del cilindro
   * @param h altura del cilindro
   * @return volumen del cilindro
  */
  public static double volumenCilindro(double r, double h) {
    return Math.PI * r * r * h;
  }

  /**
   * FUNCIÓN: Calcula la longitud de una circunferencia a partir del radio.
   * @param r radio de la circunferencia
   * @return longitud de la circunferencia
  */
  public static double longitudCircunferencia(double r) {
    return 2 * Math.PI * r;
  }
}
```

:::

- Ahora ya podéis empezar a crear el código del programa principal, pero en esta ocasión lo haréis poco a poco para realizar unas comprobaciones que nos permitirán responder algunas cuestiones.

Vais a crear el programa (archivo o clase) **UF06Ejercicio22.java** dentro del paquete `curs.uf06exercicis` (o donde tengáis almacenados el resto de ejercicios del tema).

Lo primero que tendréis que hacer es importar estas clases para poder utilizar las funciones matemáticas creadas anteriormente.

::: warning CUIDADO
Uno de los estándares que recomienda Java es organizar las importaciones por orden alfabético.**
:::

Entonces, debéis escribir vosotros las dos importaciones de las clases que acabáis de crear, pero recordad que se debe indicar el paquete en el que están, un punto y el nombre de la clase. Si no lo hacéis correctamente, empezarán a aparecer errores cuando incluyáis las llamadas a las funciones.

::: tabs
== Java

```java
import ... ;
import ... ;
```

:::

Finalmente, importaremos la clase Scanner:

::: tabs
== Java

```java
import java.util.Scanner;
```

:::

Ahora vamos a copiar una parte del código del programa principal. Lo que nos interesa para este ejercicio es llegar a la línea que tendréis que escribir poco a poco en lugar de copiar.

::: tabs
== Java

```java
/**
 * Prueba algunas funciones
*/
public class UF06Ejercicio22 {
  public static void main(String[] args) {
    int n;
    Scanner entrada = new Scanner (System.in);
    // Prueba esPrimo()
    System.out.print("Introduce un número entero positivo: ");
    n = entrada.nextInt();
```

:::

A continuación vais a escribir la siguiente instrucción (no copiarla) y, al mismo tiempo, tendréis que responder a las cuestiones que se plantean:

(a) ¿Qué ocurre cuando escribimos `if (curs.uf06matematiques.` al llegar al punto?

(b) ¿A qué crees que se debe?

(c) ¿Qué ocurre cuando continuamos escribiendo `if (curs.uf06matematiques.UF06Diversas.` al llegar al siguiente punto?

(d) ¿Qué hemos hecho en nuestras funciones para que ocurra esto?

Completad la línea (primera línea del siguiente código) y copiad el resto del código.

Podéis hacer la misma prueba con el resto de métodos o funciones, borrando caracteres y volviéndolos a escribir hasta llegar a cada punto.

::: tabs
== Java

```java
    if (curs.uf06matematiques.UF06Diversas.esPrimo(n)) {
      System.out.println("El " + n + " es primo.");
    } else {
      System.out.println("El " + n + " no es primo.");
    }

    // Prueba digitos()
    System.out.print("Introduce un número entero positivo: ");
    n = entrada.nextInt();
    System.out.println(n + " tiene " + 
    curs.uf06matematiques.UF06Diversas.digitos(n) + " dígitos.");

    // Prueba volumenCilindro()
    double r, h;
    System.out.println("Cálculo del volumen de un cilindro");
    System.out.print("Introduce el radio en metros: ");
    r = entrada.nextDouble();
    System.out.print("Introduce la altura en metros: ");
    h = entrada.nextDouble();
    System.out.println("El volumen del cilindro es " + 
    curs.uf06matematiques.UF06Geometria.volumenCilindro(r, h) + " m3");
  }
}
```

:::

(e) Ve ahora a la clase **UF06Diversas** y elimina la palabra **public** en la declaración de la función **esPrimo**. A continuación, ejecuta el programa **UF06Ejercicio22.java**. ¿Qué error aparece? ¿Qué significa?

(f) Restaura la palabra public en la función esPrimo y elimina ahora la palabra **static**. A continuación, ejecuta el programa **UF06Ejercicio22.java**. ¿Qué error aparece? ¿Qué significa?

(g) Genera la documentación del programa **UF06Ejercicio22.java**. Esto se hace desde el menú **Run/Generate Javadoc**.


-->