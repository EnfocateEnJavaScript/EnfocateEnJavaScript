## Estructuras de control

Las estructuras de control en javascript y en la mayoría de los lenguajes de programación se utilizan en los  para definir el flujo de instrucciones que se van ejecutando. Si no fuera por las estructuras de control lo único que podríamos hacer es ejecutar una instrucción tras otra y no tendriamos forma de aplicar unas funciones u otras en según las condiciones que nosotros queramos establecer.

## Tipos de estructuras de control

En javascript disponemos de 2 tipos de estructuras de control:

-   Estructuras condicionales. Este tipo de estructura de control tiene como objetivo realizar una bifurcación del flujo de instrucciones. Cuando el programa llega a un punto, nosotros establecemos una condición en en función de la misma el programa seguirá ejecutando unas instrucciones u otras; tal y como hemos visto en el anterior ejemplo cuando veíamos un caso de control de acceso sencillo. 

-   Estructuras de repetición. Este tipo de estructuras de control también conocidas como bucles se utilizan para realizar de forma repetida varias acciones.

-   Estructuras de control de errores. Estas estructuras son clave en el mundo de la seguridad informática. Son aquellas que permiten controlar los errores que el usuario final comete de forma fortuita o intencionada y poder seguir trabando de forma normal. Los errores más típicos a tener en cuenta se producen cuando pedimos al usuario que introduzca un número pero el usuario nos introduce una letra. Esto producirá un error en nuestro programá y hará que se comporte de forma inadecuada si no hemos controlado mediante una estructura de control de errores este caso.

## Estructura de control (IF ELSE)

Las estructuras condicionales en javascript nos sirven para tomar decisiones en función de una condición que nosotros establecemos. Su sintáxis es así:

```js
if (condicion)
{
    instrucciones que se ejecutarán si se cumple la condición
}
else
{
    instrucciones que se ejecutarán si NO se cumple la condición
}
```

## Estructura de control (SWITCH)

No en todos los casos nos es suficiente una estructura de control que nos permita realizar una acción si se cumple una condición u otra acción si no se cumple. A veces nos ocurrirá que debemos hacer unas acciones si una variables tiene un valor, otras si tiene un valor distinto y otras si tiene otro valor distinto al anterior. Es el caso típico de los menús de elección de opciones. En función de la opción elegida por el usuario nosotros debemos hacer lo que nos pide. Para estos casos entre otros  muchos se crearon las estructuras de control SWITCH; cuya sintáxis es así:

```js
switch (expresion){
    case valor1: 
        sentencia1;
        break;
    case valor2: 
        sentencia2;
        break;
    case valorN: 
        sentenciaN;
        break;
    default: 
        sentenciaFinal;
        break;
}
```

## Estructura de control WHILE

Pasamos a ver la primera estructura de repetición en javascript; el bucle WHILE. La idea principal con la que se han creado estos bucles es: MIENTRAS se cumpla la condición REALIZAR estas acciones. Cuando la condición deje de cumplirse salimos del bucle y continúa el flujo del programa. Su sintáxis es:

```js
while (expresionBooleana) {
    sentencia;
}
```

## Estructura de control DO WHILE

Este bucle es exactamente igual que el anterior pero con la diferencia de que la condición se comprueba al final. Este tipo de bucles son muy utilizados cuando creamos un menú de opciones; mientras el usuario no elija la opción de salir del programa seguiremos trabajando con el. Por ello necesitamos comprobar la opción que el usuario a elegido al final del programa, ya que al principio aún no sabemos la opción que ha escogido. Vamos a ver un ejemplo de cómo podemos calcular el factorial de un número con el uso de este bucle:

```js 
var resultado = 1;
var numero = 5;
 
do {
  resultado = resultado * numero;
  numero–;
} while(numero > 0);
 
alert(resultado);
```

## Estructura de control FOR

En los bucles vistos hasta ahora nosotros no conociamos el número de iteraciones que se darían en el bucle, ya que continuar dentro del bucle o salir es algo que depende de una condición (elegir una opción de un menú, introducir una contraseña válida….). Pero a veces nosotros sabemos exactamente el número de iteraciones que queremos hacer; no dependen de una condición. Para estos casos existe el bucle «FOR» cuya sintáxis es así:

```js
for (inicio; test; incremento)
{
    sentencia;
}
```

## Estructura de control de errores TRY CATCH

Estas sentencias se utilizan para ejecutar código de forma segura, ya que en el caso de que existan excepciones, podremos capturarlas y seguir ejecutando normalmente el código, Una excepción es un error que se produce por algún motivo determinado durante la ejecución de un script, ese error comúnmente es mostrado al usuario, en este caso será lanzado para «afuera», en donde la siguiente sentencia (match) lo capturará, impidiéndole salir de la manera nativa al usuario, permitiéndonos trabajar con el error o bien mostrar un mensaje más amigable y claro a los ojos del mismo. Veamos un ejemplo de uso de esta estructura de control:

```js
try
{
    document.write(10/variable1) ; //Variable insegura del usuario (puede introducir un 0)
}catch(e)
{
    alert(e.message); // Mensaje en caso de error
}
```
