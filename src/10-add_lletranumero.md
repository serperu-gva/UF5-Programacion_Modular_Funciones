# Convertir letras en números

<div style="display: flex;">

<div style="flex: 1; padding: 10px;">

![Tabla ASCII](/uf6/Tabla_ASCII.jpg)

</div>

<div style="flex: 1; padding: 10px;">

**Todos los caracteres tienen un valor ASCII**. Cuando asignamos un carácter a una variable numérica, lo que Java interpreta es que estamos asignando su valor ASCII.

::: tabs
== Java

```java
char letra = 'A';
int numero = letra;
```

:::

La variable `numero` contiene el valor 65.

¿Cuál será el valor de la variable `numero` en esta expresión?

::: tabs
== Java

```java
numero = 'C' – 'A';
```

:::

</div>
</div>