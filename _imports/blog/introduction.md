## Introducción

JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional)

## Isomorfismo

Hoy JavaScript, es el único lenguaje capaz de ejecutarse en las 3 capas de una aplicación:

-   Frontend (con JavaScript).
-   Backend (con Node.js).
-   Persistencia de Datos (con MongoDB, Couch DB, Firebase, etc).
-   Frontend (con JavaScript).

Con JavaScript puede:

-   Diseño y Desarrollo Web.
-   Hacer Videojuegos.
-   Experiencias 3D, Realidad Aumentada, Realidad Virtual.
-   Controlar Hardware (drones, robots, electrodomésticos, wearables, etc).
-   Aplicaciones Híbridas y Móviles.
-   Aprendizaje Automático.
-   Etc.

## JavaScript No es JAVA

-   JavaScript tiene un tipado débil, mientras que Java presenta un tipado fuerte.
-   Java es un lenguaje que compilado mientras que JavaScript es un lenguaje interpretado.
-   Java es un lenguaje orientado a objetos y JavaScript un lenguaje funcional.

## Escritura de código

Los **identificadores** deben comenzar con:

-   Una letra o
-   Un signo de dolar $ o
-   Un guión bajo \_
-   Nunca con números o caracteres especiales.

Usa **snake_case** en:

-   Nombre de archivos:

```js
mi_archivo_javascript.js;
```

Usa **UPPER_CASE** en:

-   Constantes

```js
const UNA_CONSTANTE = "Soy una constante";
PI = 3.141592653589793;
```

Usa **UpperCamelCase** en:

-   Clases

```js
class SerHumano {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    miNombreEs() {
        return `Mi nombre es ${this.nombre}`;
    }
}
```

Usa **lowerCamelCase** en:

-   Objetos

```js
const unObjeto = {
    nombre: "Juan",
    email: "JuanPerez@gmail.com",
};
```

-   Primitivos

```js
let unaCadena = "Hola Mundo",
    unNumero = 19,
    unBoolean = true;
```

-   Funciones

```js
function holaMundo(nombre) {
    alert(`Hola mundo ${nombre}`);
}
holaMundo("Juan");
```

-   Instancias

```js
const ajax = new XMLHttpRequest(),
    jon = new SerHumano("Juan", "Hombre");
```

## Palabras reservadas

```js
A: abstract;
B: boolean, break, byte;
C: case, catch, char, class, const, continue;
D: debugger, default, delete, do, double;
E: else, enum, export, extends;
F: false, final, finally, float, for, function;
G: goto;
I: if, implements, import, in, instanceof, int, interface;
L: let, long;
N: native, new, null;
P: package, private, protected, public;
R: return;
S: short, static, super, switch, synchronized;
T: this, throw, throws, transient, true, try, typeof;
V: var, volatile, void;
W: while, with;
```
