# 4. Ámbito de las variables

Una función solo puede utilizar sus **variables locales**, es decir, aquellas que se declaran dentro de la propia función: tanto los parámetros como las variables creadas en su interior. Estas variables se inicializan cada vez que se ejecuta la función y dejan de existir cuando finaliza.

Por todo ello, una función no puede acceder directamente a variables declaradas fuera de ella y, a la inversa, el código externo a la función tampoco puede acceder a sus variables locales. Esta propiedad se denomina encapsulación y es fundamental para mantener el código bien organizado, modular y más fácil de mantener en programas grandes y complejos.

Aunque técnicamente algunos lenguajes de programación permiten acceder a variables externas mediante mecanismos específicos (como las variables globales, las clausuras o los miembros de una clase), no es una práctica recomendada en general, especialmente si se busca escribir código robusto, reutilizable y fácil de depurar.