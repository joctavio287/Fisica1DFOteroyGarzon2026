# Física 1 (DF, Otero y Garzón) — Guía 2, Problemas 6 y 7

En este repositorio hay material complementario para los **problemas 6 y 7 de la Guía 2**:

1. Una **animación interactiva** en un archivo `.html` que se abre en el navegador.
2. Un **link a una notebook de Google Colab** donde los mismos dos problemas se resuelven
   numéricamente con el **método de Euler**.

Ninguna de las dos cosas reemplaza la resolución analítica de la guía: son para *ver* qué
hace el sistema y para tener una forma independiente de chequear los resultados.

**Links rápidos:**

- Animación online: <https://joctavio287.github.io/Fisica1DFOteroyGarzon2026/problemas_67.html>
- Repositorio (código fuente y descarga): <https://github.com/joctavio287/Fisica1DFOteroyGarzon2026>
- Notebook de Colab: [método de Euler](https://colab.research.google.com/drive/1biXkntN14Zl5Me_uEdYg4BMtR0pWWV00#scrollTo=DIYD7bdbPrwl)

---

## 1. La animación: `problemas_67.html`

**▶ Abrir la animación directamente en el navegador:**
<https://joctavio287.github.io/Fisica1DFOteroyGarzon2026/problemas_67.html>

Con ese link no hace falta descargar ni instalar nada: se abre como cualquier página web,
también desde el celular. Más abajo está explicado qué es ese archivo y cómo abrirlo en la
propia computadora, para quien prefiera tenerlo guardado.

**Archivo en el repositorio:** [problemas_67.html](problemas_67.html)

Muestra dos simulaciones, una abajo de la otra:

- **Problema 6(c):** una bolita engarzada en un riel semicircular sin fricción, que arranca
  casi en reposo arriba de todo (θ(0) = 0.01 rad, θ̇(0) = 0). Se ve la bolita moviéndose
  sobre el riel, el gráfico de θ(t) y el tiempo que tarda en llegar a θ = π/2.
- **Problema 7(d):** una partícula en el extremo de una varilla rígida, que arranca desde
  el punto más bajo con velocidad v₀. Se ve la varilla girando (u oscilando, según v₀) y el
  gráfico de θ(t).

En ambos casos se pueden mover los parámetros (R, L, g, v₀) con las barras deslizantes y
apretar **▶ Reproducir** o **⟲ Reiniciar**. Es interesante, por ejemplo, subir y bajar v₀
en el problema 7 hasta encontrar el valor a partir del cual la varilla da la vuelta completa
en lugar de oscilar.

### ¿Qué es un archivo HTML y cómo se abre?

**HTML** son las siglas de *HyperText Markup Language* (lenguaje de marcado de hipertexto).
Es, simplemente, **el formato en el que están escritas todas las páginas web**. Al entrar a
cualquier sitio de internet, lo que el navegador recibe y dibuja en la pantalla es un
archivo HTML.

Un `.html` es un archivo de **texto común**: adentro no hay nada más que letras. Lo que pasa
es que el navegador sabe interpretar esas letras y convertirlas en títulos, botones, dibujos
y animaciones. La gran ventaja que tienen estos tipos de archivos es que se puede embeber
código JavaScript, lo cual permite resolver el problema numéricamente para después hacer la
animación. No es un programa que se instale, no hace falta tener internet para abrirlo
(este funciona offline) y no puede romper nada de la computadora.

**Para abrirlo:**

1. Descargar el archivo `problemas_67.html` a la computadora. Si se está mirando el
   repositorio en GitHub: entrar al archivo, buscar el botón **Download raw file** (o hacer
   clic derecho sobre "Raw" → *Guardar enlace como…*) y guardarlo, por ejemplo, en la carpeta
   de Descargas.
2. Buscar el archivo en la carpeta de Descargas y **hacer doble clic**. Se debería abrir solo
   en el navegador (Chrome, Firefox, Edge, Safari…).
3. Si al hacer doble clic se abre otro programa (por ejemplo un editor de texto donde se ve
   un montón de símbolos raros), hacer **clic derecho → Abrir con → Google Chrome** (o el
   navegador que se use habitualmente).

También funciona en el celular, aunque se ve mucho mejor en una pantalla grande.

> **Nota:** el archivo tiene que estar guardado en la computadora. Al hacer clic sobre el
> archivo directamente en GitHub se ve el *código* en vez de la animación, porque GitHub
> muestra el contenido del archivo en lugar de ejecutarlo.

---

## 2. La resolución numérica en Colab (método de Euler)

**Link a la notebook:**
[Problemas 6 y 7 con el método de Euler](https://colab.research.google.com/drive/1biXkntN14Zl5Me_uEdYg4BMtR0pWWV00#scrollTo=DIYD7bdbPrwl)

### ¿Qué es Google Colab?

**Colab** es una página de Google donde se puede escribir y ejecutar código de **Python**
directamente en el navegador, sin instalar absolutamente nada. El código no corre en la
computadora propia sino en una máquina de Google: solo hace falta una cuenta de Google y
conexión a internet.

Una notebook de Colab está dividida en **celdas**. Hay celdas de texto (explicaciones, como
esta) y celdas de código. Para ejecutar una celda de código hay que hacer clic sobre ella y
apretar el botón ▶ que aparece a la izquierda, o `Ctrl + Enter`. El resultado (números,
gráficos) aparece justo debajo de la celda.

**Cómo usarla:**

1. Abrir el link de arriba (va a pedir iniciar sesión con una cuenta de Google).
2. Ir a **Archivo → Guardar una copia en Drive**. Eso crea una copia propia, que se puede
   modificar libremente sin tocar la original. Sin hacer la copia igual se puede ejecutar el
   código, pero no se pueden guardar los cambios.
3. Ejecutar las celdas **en orden, de arriba hacia abajo** (o usar *Entorno de ejecución →
   Ejecutar todas*). El orden importa: cada celda usa variables definidas en las anteriores.
4. Una vez que corrió todo, conviene cambiar los valores de los parámetros y volver a
   ejecutar para ver cómo cambian los resultados. Romper cosas y volver a arreglarlas es
   parte del ejercicio; si algo queda inservible, se cierra sin guardar y se abre de nuevo el
   link original.

### ¿Qué es el método de Euler?

Las ecuaciones de movimiento de estos dos problemas son **ecuaciones diferenciales**: dicen
cuánto vale la derivada de θ, pero no dan θ(t) de forma explícita. En los casos de la guía la
solución exacta no se escribe con funciones elementales, así que se la resuelve
**numéricamente**.

La idea del **método de Euler** es la más simple posible: conociendo la posición y la
velocidad en un instante t, y con un paso de tiempo Δt chico, se puede aproximar

```
θ(t + Δt) ≈ θ(t) + d (θ(t))/dt · Δt
```

y lo mismo para la velocidad angular, cuya derivada θ̈ sale de la ecuación de movimiento (o
sea, de la dinámica del problema). Repitiendo
este paso miles de veces se construye la trayectoria completa punto por punto. Es,
literalmente, "avanzar de a pasitos chiquitos suponiendo que en cada pasito la velocidad no
cambia".

Cuanto más chico el Δt, mejor la aproximación (y más cuentas). Es un método con error
relativamente grande comparado con otros más sofisticados, pero es el más fácil de entender
y de programar, y alcanza perfectamente para estos problemas. En la notebook está
implementado paso a paso.

Más detalle en Wikipedia: <https://en.wikipedia.org/wiki/Euler_method>

---

## Dudas

Si algo de esto no se entiende —el HTML, Colab, Python, el método de Euler o la física de
los problemas— **pueden venir a consultarme en la práctica**. No hace falta saber programar
para cursar la materia: esto es material extra para que se vea qué está pasando, y cualquier
pregunta al respecto es bienvenida.
