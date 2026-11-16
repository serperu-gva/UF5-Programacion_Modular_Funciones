System.out.println("5. Finalizar");

        }

        System.out.print("Elige una opción: ");

    }



    public static double sumar(double a, double b) {

        return a + b;

    }



    public static double restar(double a, double b) {

        return a - b;

    }



    public static double multiplicar(double a, double b) {

        return a * b;

    }



    public static double dividir(double a, double b) {

        if (b == 0) {

            System.out.println("Error: no se puede dividir entre cero.");

            return 0;

        }

        return a / b;

    }



}

```

**## 🧠 Ejercicio 5**

Diseña un sistema que permita añadir un estudiante, marcar su asistencia y mostrar el estado de asistencia de todos los estudiantes. Cuando el usuario quiera añadir un estudiante, el programa solicitará su nombre y lo incorporará a la lista de personas matriculadas solo si todavía no está en ella, asignándole automáticamente el estado de no asistido; si el nombre ya existe, no realizará ningún cambio. Cuando el usuario elija marcar la asistencia, el sistema solicitará el nombre del estudiante y, si lo encuentra en la lista, cambiará su estado al de asistido. Si no existe, informará de que no se puede marcar la asistencia de un estudiante desconocido. Cuando el usuario solicite ver los asistentes, el programa mostrará todos los nombres e indicará si han asistido o no. Por último, el usuario podrá finalizar la ejecución del programa cuando quiera.

**### 🛠️ Solución propuesta**

**#### a) Añadir estudiante**

- Crear una estructura `HashMap<String, Boolean>` llamada `estudiantes`.
- Solicitar al usuario el nombre mediante `Scanner`.
- Convertir el nombre a minúsculas para evitar duplicados.
- Comprobar si la clave ya existe con `estudiantes.containsKey(nombre)`.
  - Si **ya existe**, mostrar un mensaje de aviso y no modificar nada.
  - Si **no existe**, añadirla al mapa con el valor `false` (no asistido).

---

**#### b) Marcar asistencia**

- Solicitar al usuario el nombre mediante `Scanner`.
- Convertir el nombre a minúsculas.
- Comprobar si la clave existe en `estudiantes`:
  - Si **existe** → cambiar el valor a `true` con `estudiantes.put(nombre,true)`.
  - Si **no existe** → mostrar un mensaje indicando que no se puede marcar la asistencia.

---

**#### c) Mostrar el estado de asistencia**

- Recorrer todas las claves del `HashMap` con `for(String nombre : estudiantes.keySet())`.
- Para cada estudiante:
  - Obtener el valor con `estudiantes.get(nombre)`.
  - Mostrar:
    - el nombre;
    - y el texto `"ASISTIDO"` o `"NO ASISTIDO"` según el valor booleano.

---

**#### d) Menú principal**

- Crear un bucle `do … while`.
- Mostrar el menú de opciones:

  1. Añadir estudiante
  2. Marcar asistencia
  3. Mostrar estado
  4. Salir

- Leer la opción con `Scanner`.
- Ejecutar la acción correspondiente mediante un `switch`.
- Repetir hasta que el usuario elija la opción **4**.

**### 📦 Código Java**

```java
import java.util.HashMap;
import java.util.Scanner;

public class App {
    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        HashMap<String, Boolean> estudiantes = new HashMap<>();

        int op;

        do {
            menu();
            op = Integer.parseInt(sc.nextLine());

            switch (op) {

                case 1:
                    anadirEstudiante(estudiantes);
                    break;
                case 2:
                    marcarAsistencia(estudiantes);
                    break;
                case 3:
                    mostrarEstados(estudiantes);
                    break;
                case 4:
                    System.out.println("¡Adiós!");
                    break;
                default:
                    System.out.println("¡Opción incorrecta!");
            }

            System.out.println();

        } while (op != 4);
    }

    public static void menu() {
        System.out.println("----- MENÚ -----");
        System.out.println("1. Añadir estudiante");
        System.out.println("2. Marcar asistencia");
        System.out.println("3. Mostrar estado de asistencia");
        System.out.println("4. Salir");
        System.out.print("Opción: ");
    }

    public static void anadirEstudiante(HashMap<String, Boolean> mapa) {
        System.out.print("Nombre del estudiante: ");
        String nombre = sc.nextLine();

        if (mapa.containsKey(nombre.toLowerCase())) {
            System.out.println("ERROR: El estudiante ya existe.");
        } else {
            mapa.put(nombre.toLowerCase(), false); // false = no asistido
            System.out.println("Estudiante añadido como NO ASISTIDO.");
        }
    }

    public static void marcarAsistencia(HashMap<String, Boolean> mapa) {
        System.out.print("Nombre del estudiante para marcar la asistencia: ");
        String nombre = sc.nextLine().toLowerCase();

        if (mapa.containsKey(nombre)) {
            mapa.put(nombre, true);
            System.out.println("¡Asistencia marcada!");
        } else {
            System.out.println("ERROR: estudiante NO encontrado.");
        }
    }

    public static void mostrarEstados(HashMap<String, Boolean> mapa) {
        if (mapa.isEmpty()) {
            System.out.println("No hay estudiantes registrados.");
            return;
        }

        System.out.println("----- LISTA -----");
        for (String nombre : mapa.keySet()) {
            boolean estado = mapa.get(nombre);
            System.out.println(nombre + " -> " + (estado ? "ASISTIDO" : "NO ASISTIDO"));
        }
    }

}
```

**## 🧠 Ejercicio 6**

Un sistema de gestión académica permite registrar alumnos con su nombre y las notas de las cinco asignaturas. A partir de este registro, cada vez que el usuario lo solicite, el programa mostrará el listado de alumnos con una media de notas superior a 9. También ofrece la posibilidad de determinar qué alumno presenta la mayor variabilidad de notas, es decir, aquel cuya diferencia entre su nota más alta y la más baja sea mayor.

**### 🛠️ Solución propuesta**

**#### a) Registrar alumnos**

- Crear un `HashMap<String, double[]>` para guardar:
  - clave → nombre del alumno;
  - valor → array con las cinco notas.
- Cuando el usuario seleccione la opción de registrar:
  - Solicitar el nombre.
  - Crear un array `double[5]`.
  - Solicitar las 5 notas.
  - Guardarlas en el mapa con `mapa.put(nombre, notas)`.

---

**#### b) Mostrar alumnos con una media superior a 9**

- Recorrer todas las entradas del mapa con `for (Entry<String,double[]> ...)`.
- Calcular la suma de las notas y después la media (*suma / 5*).
- Si la media es > 9, mostrar el nombre y la media.
- Si ningún alumno cumple la condición, mostrar un mensaje indicándolo.

---

**#### c) Determinar el alumno con mayor variabilidad**

- Recorrer todas las entradas del mapa.
- Para cada alumno:
  - Buscar su nota mínima.
  - Buscar su nota máxima.
  - Calcular `max - min`.
- Guardar el nombre del alumno con la diferencia más grande.
- Mostrarlo como resultado final.

---

**#### d) Menú principal**

- Mostrar las opciones:

  1. Registrar alumno
  2. Mostrar alumnos con media > 9
  3. Alumno con mayor variabilidad
  4. Salir

- Leer la opción con `Scanner`.
- Ejecutar el método correspondiente mediante `switch`.
- Repetir hasta que la opción sea **4**.

**### 📦 Código Java**

```java
import java.util.HashMap;
import java.util.Scanner;

public class App {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        HashMap<String, double[]> alumnos = new HashMap<>();

        int op;

        do {
            menu();
            op = Integer.parseInt(sc.nextLine());

            switch (op) {

                case 1: registrar(alumnos, sc); break;

                case 2: mostrarMedia(alumnos); break;

                case 3: alumnoMaxVariabilidad(alumnos); break;

                case 4: System.out.println("¡Adiós!"); break;

                default: System.out.println("Opción incorrecta.");
            }

        } while (op != 4);
    }

    public static void menu() {
        System.out.println("\n--- MENÚ ---");
        System.out.println("1. Registrar alumno");
        System.out.println("2. Mostrar alumnos con media > 9");
        System.out.println("3. Mostrar alumno con mayor variabilidad");
        System.out.println("4. Salir");
        System.out.print("Opción: ");
    }

    public static void registrar(HashMap<String, double[]> mapa, Scanner sc) {
        System.out.print("Nombre del alumno: ");
        String nombre = sc.nextLine().toLowerCase();

        double[] notas = new double[5];

        for (int i = 0; i < 5; i++) {
            System.out.print("Nota " + (i + 1) + ": ");
            notas[i] = sc.nextDouble();
        }
        sc.nextLine();

        mapa.put(nombre, notas);

        System.out.println("Alumno registrado correctamente.");
    }

    public static void mostrarMedia(HashMap<String, double[]> mapa) {

        boolean encontrado = false;
        for (HashMap.Entry<String, double[]> registro : mapa.entrySet()) {
            String nombre = registro.getKey();
            double[] notas = registro.getValue();

            double suma = 0;

            for (double x : notas)
                suma += x;

            double media = suma / 5;

            if (media > 9) {
                System.out.println(nombre + " -> " + media);
                encontrado = true;
            }
        }

        if (!encontrado)
            System.out.println("No hay alumnos con media > 9.");
    }

    public static void alumnoMaxVariabilidad(HashMap<String, double[]> mapa) {

        String mejor = "";
        double maxDif = -1;

        for (HashMap.Entry<String, double[]> registro : mapa.entrySet()) {
            String nombre = registro.getKey();
            double[] notas = registro.getValue();

            double min = 10;
            double max = 0;

            for (double x : notas) {
                if (x < min)
                    min = x;
                if (x > max)
                    max = x;
            }

            double dif = max - min;

            if (dif > maxDif) {
                maxDif = dif;
                mejor = nombre;
            }
        }

        System.out.println("Mayor variabilidad: " + mejor + " (" + maxDif + ")");
    }

}
```

**#### Ejercicios - Recursividad**

**## 🧠🧠 Ejercicio R1**

Una empresa de análisis de datos quiere saber cuántas veces se repite un código específico dentro de un informe numérico. Para ello, desea implementar una función que recorra una lista de códigos y cuente cuántas veces aparece un valor concreto.

Diseña una función recursiva llamada `contarCodigo` que reciba:

- un array de enteros;
- un índice inicial;
- y un valor que buscar;

y devuelva cuántas veces aparece ese valor en el array.

**### 🛠️ Solución propuesta**

**#### Caso base**

- Si `indice` llega al final del array (`indice == array.length`):
  - Se han revisado todos los elementos.
  - Devolver **0** porque no hay más coincidencias posibles.

---

**#### Caso recursivo**

Para cada posición:

- Si `array[indice] == objetivo`:
  - Suma **1** porque hemos encontrado una coincidencia.
  - Realiza una llamada recursiva a `contarCodigo(array, indice + 1, objetivo)` para continuar buscando.

- Si no coincide:
  - Realiza la llamada recursiva sin sumar nada.

**### 📦 Código Java**

```java
public class App {
    public static void main(String[] args) {
        int[] datos = { 3, 1, 3, 4, 3 };

        System.out.println(contarCodigo(datos, 0, 3)); // → 3
    }

    public static int contarCodigo(int[] array, int indice, int objetivo) {
        // Caso base: si llegamos al final del array
        if (indice == array.length) {
            return 0;
        }

        // Caso recursivo

        if (array[indice] == objetivo)
            return 1 + contarCodigo(array, indice + 1, objetivo);
        else
            return contarCodigo(array, indice + 1, objetivo);

    }
}
```

**## 🧠🧠 Ejercicio R2**

Una universidad está diseñando un pequeño sistema para detectar si un trabajo ha sido generado con Inteligencia Artificial.

El sistema funciona así: se introduce el texto del alumno dividido en palabras en un array y se elige una palabra «trampa» incluida intencionadamente en el enunciado. Si el texto contiene esa palabra trampa más de 5 veces, el trabajo se considera sospechoso de haber sido generado con IA.

Para empezar, el equipo necesita implementar una función recursiva que cuente cuántas veces aparece esa palabra en el texto.

Diseña una función recursiva llamada `contarPalabra`, que reciba:

- un array de String con todas las palabras del texto;
- un índice inicial;
- y una palabra que buscar;

y devuelva cuántas veces aparece esa palabra en el array.

**### 🛠️ Solución propuesta**

**#### Conversión del texto en palabras**

- El método `contarPalabra(String texto, String palabra)`:
  - Utiliza `texto.split(" ")` para separar el texto en un array de palabras.
  - Llama al método recursivo pasando el array y comenzando desde el índice `0`.

---

**#### Caso base**

- Si `indice == array.length`:
  - Se han analizado todas las palabras.
  - Devuelve **0**, porque ya no hay más coincidencias posibles.

---

**#### Caso recursivo**

Para cada posición del array:

- Si `array[indice].equals(palabra)`:
  - Suma **1** porque se ha encontrado una coincidencia.
  - Continúa la recursión con `indice + 1`.

- Si no coincide:
  - Simplemente continúa la recursión sin sumar nada.

**### 📦 Código Java**

```java
public class App {

    public static void main(String[] args) {
        int numRepeticiones = contarPalabra(
                "este es un texto trampa muy trampa porque trampa contiene trampa varias trampa veces", "trampa");
        if (numRepeticiones >= 5)
            System.out.println("Texto generado con IA");
        else System.out.println("Texto propio");

    }

    public static int contarPalabra(String texto, String palabra) {
        String[] palabras = texto.split(" ");
        return contarPalabra(palabras, 0, palabra);
    }

    public static int contarPalabra(String[] array, int indice, String palabra) {

        if (indice == array.length)
            return 0;

        if (array[indice].equals(palabra))
            return 1 + contarPalabra(array, indice + 1, palabra);
        else
            return contarPalabra(array, indice + 1, palabra);

    }

}
```

**## 🧠🧠 Ejercicio R3**

Una empresa de ciberseguridad está desarrollando una herramienta para enmascarar mensajes antes de almacenarlos en una base de datos. Como parte del sistema, necesitan invertir el texto original para dificultar su lectura directa.

Implementa una función recursiva que reciba una cadena de texto y devuelva la misma cadena, pero invertida.

**### 🛠️ Solución propuesta**

**#### Caso base**

- Si la longitud del texto es `<= 1`:
  - No se puede invertir más.
  - Se devuelve el mismo texto.

---

**#### Caso recursivo**

Para invertir la cadena:

1. Obtener **el último carácter**.
2. Obtener **el resto del texto** sin el último carácter.
3. Construir el resultado como:
   - El último carácter + el texto invertido del resto.

**### 📦 Código Java**

```java
public class App {

    public static void main(String[] args) {

        String mensaje = "codigo_confidencial";

        String invertido = invertirMensaje(mensaje);

        System.out.println("Entrada:   " + mensaje);
        System.out.println("Salida:    " + invertido);
    }

    // Devuelve el texto invertido para un almacenamiento ofuscado
    public static String invertirMensaje(String texto) {

        // Base de la recursión
        if (texto.length() <= 1) {
            return texto;
        }

        // Último carácter
        char c = texto.charAt(texto.length() - 1);

        // Resto
        String resto = texto.substring(0, texto.length() - 1);

        // Último + recursión
        return c + invertirMensaje(resto);
    }

}
```

**## 🧠🧠 Ejercicio R4**

En una empresa de seguridad informática se está estudiando la calidad de las contraseñas utilizadas por los trabajadores. Para ello, se necesita desarrollar una serie de funciones que analicen diferentes aspectos de una contraseña.

Uno de los primeros requisitos es crear una función capaz de analizar, mediante recursividad, cuántos caracteres especiales contiene una contraseña.

Consideraremos carácter especial cualquier carácter que NO sea:

- una letra minúscula;
- una letra mayúscula;
- o un dígito numérico.

Es decir, se contarán como caracteres especiales, por ejemplo: ! , . ; : ? + - _ @ # $ % & / ( ) [ ] { } * etc.

La función deberá:

- recibir la contraseña (un String);
- analizar cada carácter;
- y devolver el número total de caracteres especiales que contiene.

**### 🛠️ Solución propuesta**

**#### Caso base**

- Si la cadena `s` está vacía (`s.equals("")`):
  - No hay ningún carácter que analizar.
  - Devuelve **false**.

---

**#### Caso recursivo**

En cada llamada:

1. Se obtiene el **primer carácter** de la cadena.
2. Si el carácter **no es una letra** y **no es un dígito**:
   - Es un carácter especial → devuelve **true**.
3. Si es un carácter normal:
   - Continúa analizando el resto de la cadena.

**### 📦 Código Java**

```java
public class App {
    public static void main(String[] args) {
        System.out.println(
                contieneEspeciales("Hola,2024")
                        ? "Contiene caracteres especiales"
                        : "No contiene caracteres especiales");
        System.out.println(
                contieneEspeciales("Hola2024")
                        ? "Contiene caracteres especiales"
                        : "No contiene caracteres especiales");

    }

    private static boolean contieneEspeciales(String s) {

        if (s.equals(""))
            return false;
        char c = s.charAt(0);
        if (!Character.isLetter(c) && !Character.isDigit(c))
            return true;

        return contieneEspeciales(s.substring(1));
    }
}
```