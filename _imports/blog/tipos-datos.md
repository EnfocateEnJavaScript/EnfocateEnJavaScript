## Tipos de datos

Todos los lenguajes de programación tienen estructuras de datos integradas, pero estas a menudo difieren de un lenguaje a otro. Este artículo intenta enumerar las estructuras de datos integradas disponibles en JavaScript y las propiedades que tienen. Estas se pueden utilizar para construir otras estructuras de datos. Siempre que es posible, se hacen comparaciones con otros lenguajes.

## Tipado dinámico

JavaScript es un lenguaje débilmente tipado y dinámico. Las variables en JavaScript no están asociadas directamente con ningún tipo de valor en particular, y a cualquier variable se le puede asignar (y reasignar) valores de todos los tipos:

```js
let foo = 42; // foo ahora es un número
foo = "bar"; // foo ahora es un string
foo = true; // foo ahora es un booleano
```

## Estructuras y tipos de datos

El último estándar ECMAScript define nueve tipos:

-   Seis **tipos de datos** primitivos, controlados por el operador typeof

    -   Undefined: `typeof instance === "undefined"`
    -   Boolean: `typeof instance === "boolean"`
    -   Number: `typeof instance === "number"`
    -   String: `typeof instance === "string"`
    -   BigInt: `typeof instance === "bigint"`
    -   Symbol: `typeof instance === "symbol"`

-   Null: `typeof instance === "object"`. Tipo primitivo especial que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra null

-   Object: `typeof instance === "object"`. Tipo estructural especial que no es de datos pero para cualquier instancia de objeto construido que también se utiliza como estructuras de datos: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date y casi todo lo hecho con la palabra clave new

-   Function: una estructura sin datos, aunque también responde al operador `typeof`: `typeof instance === "function"`. Esta simplemente es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor `Object`.
